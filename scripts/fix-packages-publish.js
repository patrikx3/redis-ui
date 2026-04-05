#!/usr/bin/env node

const asyncStart = async () => {

    const mode = process.argv[2]
    const fs = require('fs').promises
    const path = require('path')

    const pkgFile = path.resolve(__dirname, '..', 'package.json')
    const pkg = JSON.parse((await fs.readFile(pkgFile)).toString())

    switch(mode) {
        case 'flathub-before':
            delete pkg.build.afterAllArtifactBuild
            break;

        case 'snap-description':
            const description = generateSnapDescription(pkg.version)
            if (!pkg.build) pkg.build = {}
            if (!pkg.build.snap) pkg.build.snap = {}
            pkg.build.snap.description = description
            console.log(`Injected snap description (${description.length} / 4096 chars) into package.json`)
            break;

        default:
            throw new Error(`Unknown mode ${mode}`)
    }

    await fs.writeFile(pkgFile, JSON.stringify(pkg, null, 4) + '\n')
}

function generateSnapDescription(version) {
    const MAX_CHARS = 4090

    const parts = [
        `P3X Redis UI v${version}`,
        '',
        'A versatile Redis management GUI \u2014 works as a web server, Docker container, or desktop app (Electron). Manages JSON data with CodeMirror editor, supports SSH tunneling, cluster, and sentinel configurations.',
        '',
        'QUICK START (Docker):',
        '  docker run -d --name p3x-redis-ui -p 7843:7843 patrikx3/p3x-redis-ui',
        '  Open: http://localhost:7843',
        '',
        'FEATURES:',
        '- Dual GUI: Angular + React/MUI (switch live in Settings)',
        '- AI-powered Redis query translation (natural language to Redis commands)',
        '- 8 Redis data types: string, hash, list, set, zset, stream, JSON (ReJSON), TimeSeries',
        '- Auto data decompression (GZIP, ZIP, zlib, Zstandard, LZ4, Snappy, Brotli)',
        '- Value format toggle: Raw, JSON, Hex, Base64',
        '- Binary data upload/download',
        '- Key export/import with conflict handling',
        '- CodeMirror JSON editor with GitHub dark/light themes',
        '- 54 languages covering 88+ countries',
        '- 7 themes (4 dark, 3 light) with auto system preference detection',
        '- Responsive design (phone, tablet, desktop)',
        '',
        'MONITORING:',
        '- Pulse: live memory, ops/sec, clients, hit rate charts (uPlot)',
        '- Profiler: real-time MONITOR command stream',
        '- PubSub: PSUBSCRIBE channel message monitoring',
        '- Memory Analysis: type distribution, prefix memory, expiration stats',
        '- Export All as ZIP (text + PNG charts + PDF)',
        '',
        'CONSOLE:',
        '- Command autocomplete with syntax hints',
        '- Multi-line input (Shift+Enter for newline)',
        '- Command history (Shift+Arrow Up/Down)',
        '- AI auto-detect: unrecognized commands trigger AI translation',
        '',
        'CONNECTIONS:',
        '- SSH tunneling (single, cluster, sentinel)',
        '- TLS/SSL with certificate support',
        '- Cluster and Sentinel modes with multi-node config',
        '- Connection groups with drag-and-drop reorder',
        '- askAuth: prompt for credentials on connect',
        '- Readonly mode',
        '',
        'SEARCH:',
        '- RediSearch integration: full-text query, index management',
        '- Client-side or server-side key search',
        '- Tree view with virtual scrolling (up to 100,000 keys)',
        '',
        'DESKTOP (Electron):',
        '- Keyboard shortcuts: Ctrl+R/F5 (refresh), Ctrl+F (search), Ctrl+N (new key), Ctrl+K (command palette), Ctrl+D (disconnect)',
        '- Available as AppImage (x64/arm64), Snap (x64/arm64), Flatpak, Windows installer, macOS DMG',
        '',
        'DEPLOYMENT:',
        '- Docker: patrikx3/p3x-redis-ui (x64 + arm64)',
        '- NPM: npm install -g p3x-redis-ui && p3xrs',
        '- Snap: sudo snap install p3x-redis-ui',
        '- Kubernetes/Helm compatible',
        '',
        'Homepage: https://corifeus.com/redis-ui',
        'GitHub: https://github.com/patrikx3/redis-ui',
        'Snap Store: https://snapcraft.io/p3x-redis-ui',
    ]

    let description = parts.join('\n')
    if (description.length > MAX_CHARS) {
        description = description.substring(0, MAX_CHARS - 3) + '...'
    }
    return description
}

asyncStart()
