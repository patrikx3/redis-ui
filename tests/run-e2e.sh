#!/bin/bash
# Self-contained E2E test runner
# Starts Redis (Docker), redis-ui-server, webpack-dev-server, runs tests, cleans up.
# Usage: bash tests/run-e2e.sh [--gui]

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
MATERIAL_DIR="$(dirname "$SCRIPT_DIR")"
WORKSPACE_DIR="$(dirname "$MATERIAL_DIR")"
SERVER_DIR="$WORKSPACE_DIR/redis-ui-server"

REDIS_PORT=${P3XR_TEST_REDIS_PORT:-26379}
REDIS_CONTAINER="p3xr-test-redis"
SERVER_PORT=${P3XR_TEST_SERVER_PORT:-27843}
FRONTEND_PORT=${P3XR_TEST_FRONTEND_PORT:-28080}
GUI_MODE=""

if [[ "$1" == "--gui" ]]; then
    GUI_MODE="--headed"
    export P3XR_HEADLESS=false
fi

# Kill any existing processes on test ports
for PORT in $SERVER_PORT $FRONTEND_PORT; do
    PID=$(lsof -ti:$PORT 2>/dev/null || true)
    if [ -n "$PID" ]; then
        echo "Killing existing process on port $PORT (PID $PID)"
        kill $PID 2>/dev/null || true
        sleep 1
    fi
done

cleanup() {
    echo ""
    echo "=== Cleanup ==="
    # Kill background processes
    [ -n "$SERVER_PID" ] && kill $SERVER_PID 2>/dev/null && echo "Stopped redis-ui-server (PID $SERVER_PID)"
    [ -n "$WEBPACK_PID" ] && kill $WEBPACK_PID 2>/dev/null && echo "Stopped webpack-dev-server (PID $WEBPACK_PID)"
    # Remove test Redis container
    docker rm -f $REDIS_CONTAINER 2>/dev/null && echo "Removed Redis container"
    echo "Done."
}
trap cleanup EXIT

echo "=== Starting test Redis on port $REDIS_PORT ==="
docker rm -f $REDIS_CONTAINER 2>/dev/null || true
docker run -d --name $REDIS_CONTAINER -p $REDIS_PORT:6379 redis:latest
echo "Waiting for Redis..."
sleep 2

# Verify Redis
if ! docker exec $REDIS_CONTAINER redis-cli ping | grep -q PONG; then
    echo "ERROR: Redis not responding"
    exit 1
fi
echo "Redis ready on port $REDIS_PORT"

# Seed test data
docker exec $REDIS_CONTAINER redis-cli SET test:string "hello world"
docker exec $REDIS_CONTAINER redis-cli HSET test:hash name Alice age 30
docker exec $REDIS_CONTAINER redis-cli RPUSH test:list item1 item2 item3
docker exec $REDIS_CONTAINER redis-cli SADD test:set red green blue
docker exec $REDIS_CONTAINER redis-cli ZADD test:zset 1 alpha 2 beta 3 gamma
echo "Test data seeded"

# Create test connections config
TEST_HOME=$(mktemp -d)
# Config and connections for test
mkdir -p "$TEST_HOME/static"
cat > "$TEST_HOME/p3xrs.json" <<EOF
{
    "p3xrs": {
        "http": {
            "port": $SERVER_PORT,
            "bind": "0.0.0.0"
        },
        "connections": {
            "home-dir": "$TEST_HOME"
        },
        "static": "$TEST_HOME/static",
        "aiEnabled": true
    }
}
EOF
cat > "$TEST_HOME/.p3xrs-conns.json" <<EOF
{
    "list": [
        {
            "name": "localhost",
            "host": "127.0.0.1",
            "port": $REDIS_PORT,
            "id": "test-connection-1"
        }
    ]
}
EOF

echo ""
echo "=== Starting redis-ui-server on port $SERVER_PORT ==="
cd "$SERVER_DIR"
NODE_ENV=development P3XRS_PORT=$SERVER_PORT node bin/p3xrs.mjs -c "$TEST_HOME/p3xrs.json" &
SERVER_PID=$!
sleep 3

# Verify server
if ! curl -s http://localhost:$SERVER_PORT/health | grep -q "ok"; then
    echo "ERROR: redis-ui-server not responding"
    exit 1
fi
echo "Server ready on port $SERVER_PORT"

echo ""
echo "=== Starting webpack-dev-server on port $FRONTEND_PORT ==="
cd "$MATERIAL_DIR"
P3XR_API_PORT=$SERVER_PORT npx webpack serve --config ./src/builder/webpack.config.js --port $FRONTEND_PORT 2>&1 &
WEBPACK_PID=$!

echo "Waiting for webpack build..."
for i in $(seq 1 30); do
    if curl -s -o /dev/null -w "%{http_code}" http://localhost:$FRONTEND_PORT 2>/dev/null | grep -q 200; then
        break
    fi
    sleep 2
done

if ! curl -s -o /dev/null http://localhost:$FRONTEND_PORT; then
    echo "ERROR: webpack-dev-server not responding after 60s"
    exit 1
fi
echo "Frontend ready on port $FRONTEND_PORT"

echo ""
echo "=== Running Playwright tests ==="
cd "$MATERIAL_DIR"
export P3XR_URL="http://localhost:$FRONTEND_PORT"
npx playwright test $GUI_MODE
TEST_EXIT=$?

echo ""
if [ $TEST_EXIT -eq 0 ]; then
    echo "ALL TESTS PASSED"
else
    echo "SOME TESTS FAILED (exit code $TEST_EXIT)"
fi

# Cleanup handled by trap
exit $TEST_EXIT
