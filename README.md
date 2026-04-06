[//]: #@corifeus-header

  [![NPM](https://img.shields.io/npm/v/p3x-redis-ui.svg)](https://www.npmjs.com/package/p3x-redis-ui)  [![Donate for PatrikX3 / P3X](https://img.shields.io/badge/Donate-PatrikX3-003087.svg)](https://paypal.me/patrikx3) [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Corifeus @ Facebook](https://img.shields.io/badge/Facebook-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)  [![Uptime ratio (90 days)](https://network.corifeus.com/public/api/uptime-shield/31ad7a5c194347c33e5445dbaf8.svg)](https://network.corifeus.com/status/31ad7a5c194347c33e5445dbaf8)





# 📡 P3X Redis UI: A highly functional and convenient database GUI that fits in your pocket, accessible on both responsive web and desktop applications v2026.4.639


  
🌌 **Bugs are evident™ - MATRIX️**  
🚧 **This project is under active development!**  
📢 **We welcome your feedback and contributions.**  
    



### NodeJS LTS is supported

### 🛠️ Built on NodeJs version

```txt
v24.14.1
```





# 📝 Description

                        
[//]: #@corifeus-header:end

**p3x-redis-ui** is a versatile Redis GUI that works as a web-based server application or a standalone desktop app. It excels at managing JSON data through an integrated CodeMirror editor with GitHub dark/light themes, supports uploading and downloading binary data, and handles SSH, cluster, and sentinel configurations.

### Minimum Node.js Version

```txt
v22.0.0
```

## 30-Second Docker Quick Start

```bash
mkdir -p ./p3x-redis-ui-settings
docker run -d \
  --name p3x-redis-ui \
  -p 7843:7843 \
  -v $PWD/p3x-redis-ui-settings:/settings \
  patrikx3/p3x-redis-ui
```

Open: `http://localhost:7843`

> **Kubernetes / Docker:** Always use the `latest` tag (`patrikx3/p3x-redis-ui:latest`) with `imagePullPolicy: Always`. Version-specific tags are available but `latest` is the recommended and supported tag.

### Supported Languages

Switch language in `Settings` — **54 languages** covering 88+ countries:

Arabic (`ar`), Azerbaijani (`az`), Belarusian (`be`), Bengali (`bn`), Bosnian (`bs`), Bulgarian (`bg`), Chinese (`zn`), Chinese - Hong Kong (`zh-HK`), Chinese - Taiwan (`zh-TW`), Croatian (`hr`), Czech (`cs`), Danish (`da`), Dutch (`nl`), English (`en`), Estonian (`et`), Filipino (`fil`), Finnish (`fi`), French (`fr`), Georgian (`ka`), German (`de`), Greek (`el`), Hebrew (`he`), Hungarian (`hu`), Armenian (`hy`), Indonesian (`id`), Italian (`it`), Japanese (`ja`), Kazakh (`kk`), Khmer (`km`), Korean (`ko`), Kyrgyz (`ky`), Lithuanian (`lt`), Macedonian (`mk`), Malay (`ms`), Nepali (`ne`), Norwegian (`no`), Polish (`pl`), Portuguese (`pt-PT`), Portuguese - Brazil (`pt-BR`), Romanian (`ro`), Russian (`ru`), Serbian (`sr`), Sinhala (`si`), Slovak (`sk`), Slovenian (`sl`), Spanish (`es`), Swahili (`sw`), Swedish (`sv`), Tajik (`tg`), Tamil (`ta`), Thai (`th`), Turkish (`tr`), Ukrainian (`uk`), Vietnamese (`vi`)

## Screenshots

[View screenshots](artifacts/readme/screenshots.md)

## Features

### Dual GUI: Angular + React

P3X Redis UI was originally built with AngularJS and has been fully migrated to two modern frontends — **Angular** and **React/MUI**. You can switch between them live in **Settings → GUI**.

- **Angular** is served at `/ng/`
- **React** is served at `/react/`
- `/` auto-redirects to your last used frontend
- Switch anytime from the GUI toggle in Settings — your preference is remembered
- Both frontends share the same backend, Socket.IO protocol, translation system, themes, and all features
- Works in the Electron desktop app, Docker, and standalone server

### AI-Powered Redis Query Translation
- **Natural language queries:** type plain English (or any language) in the console — if Redis doesn't recognize the command, AI translates it to a valid Redis command and replaces the console input; the command is **not executed automatically** — you review, edit if needed, and press Enter to run it
- **Multi-command AI:** AI can generate multiple commands or multi-line EVAL scripts — they are placed in the textarea for review, then executed with Enter
- **Input replacement:** after AI translation, the console input is replaced with the generated Redis command so you can see exactly what will be executed before running it
- **Multilingual:** understands 50+ languages, explanations are returned in the language you type in
- **Context-aware:** sends Redis version, loaded modules, and available RediSearch indexes to the AI for accurate command generation
- **Bring your own key:** optionally set your own free Groq API key in Settings for better performance (get one at [console.groq.com](https://console.groq.com))
- **`ai:` prefix:** explicitly trigger AI translation by starting your input with `ai:` — works when AI is enabled in Settings
- **AI toggle in console:** when AI is globally enabled in Settings, a slide toggle appears in the console toolbar to control auto-detect behavior:
  - **AI ON** (default): unrecognized commands automatically try AI translation
  - **AI OFF**: only the explicit `ai:` prefix triggers AI — console errors are instant with no Groq round-trip delay
  - When AI is disabled in Settings, the toggle is hidden and all AI features are off

  | Settings AI | Console Toggle | `ai:` prefix | Auto-detect on errors |
  |---|---|---|---|
  | Disabled | Hidden | Off | Off |
  | Enabled | ON (default) | Works | Works |
  | Enabled | OFF | Works | Off (instant errors) |

## AI Configuration

The AI query translation feature works out of the box — natural language queries are automatically translated to Redis commands via the Groq API.

### How It Works

By default, AI queries are routed through `network.corifeus.com`, which handles the Groq API call. No configuration needed.

If you set your own Groq API key, you can choose to:
- **Keep routing via `network.corifeus.com`** (default) — your key is used but queries still go through the proxy for analytics
- **Route directly to Groq** — toggle "Route via network.corifeus.com" OFF in AI Settings to bypass the proxy entirely

### Free Tier Limitations

The default proxy uses the Groq free tier, which has strict rate limits for the `openai/gpt-oss-120b` model:

| Limit | Value |
|-------|-------|
| Requests/minute | 30 |
| Requests/day | 1,000 |
| Tokens/minute | 8,000 |
| Tokens/day | 200,000 |

These limits are **shared across all users** of the default proxy. For complex queries (e.g. bulk key generation with EVAL/Lua scripts), the shared quota can be exhausted quickly.

**Recommended:** Get your own free Groq API key at [console.groq.com](https://console.groq.com) — this gives you a dedicated quota and better reliability for AI-powered queries.

### AI Settings in the UI

The **Settings** page has an **AI Settings** panel with:
- **AI Enabled** — toggle AI on/off (enabled by default)
- **Route via network.corifeus.com** — toggle routing (only visible with a valid Groq API key)
- **Groq API Key** — set via the Edit button (validated against Groq before saving)

### Configuration Options

**Recommended:** Configure AI settings via the GUI first (Settings > AI Settings). Once configured, you can optionally add `groqApiKeyReadonly: true` to `p3xrs.json` or `--groq-api-key-readonly` CLI flag to lock the settings.

All settings can also be configured via `p3xrs.json` or CLI options.

Config (`p3xrs.json`):

```json
{
  "p3xrs": {
    "groqApiKey": "gsk_your_key_here",
    "aiEnabled": true,
    "aiUseOwnKey": false
  }
}
```

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `groqApiKey` | string | `""` | Your Groq API key (get free at [console.groq.com](https://console.groq.com)) |
| `aiEnabled` | boolean | `true` | Enable/disable AI auto-detect on unrecognized commands; `ai:` prefix always works regardless |
| `aiUseOwnKey` | boolean | `false` | `true` = route directly to Groq, `false` = route via network.corifeus.com |
| `groqApiKeyReadonly` | boolean | `false` | Lock all AI settings (toggles disabled, Edit hidden) |

CLI options:

```bash
p3xrs --groq-api-key gsk_your_key_here
p3xrs --groq-api-key-readonly
```

### Readonly Mode

To prevent users from changing AI settings (e.g. on a public instance):

Config (`p3xrs.json`):

```json
{
  "p3xrs": {
    "groqApiKey": "gsk_your_key_here",
    "groqApiKeyReadonly": true
  }
}
```

CLI:

```bash
p3xrs --groq-api-key gsk_your_key_here --groq-api-key-readonly
```

Or combine with readonly connections (`-r`) which also disables AI settings:

```bash
p3xrs -r --groq-api-key gsk_your_key_here
```

Example systemd service (public instance):

```ini
[Unit]
Description=p3x-redis-ui
After=network.target

[Service]
Type=simple
User=user
WorkingDirectory=/home/user/p3x-redis-ui
ExecStart=/var/p3x-redis-ui-server/bin/p3xrs.mjs -r --groq-api-key-readonly --config /home/user/p3x-redis-ui/p3xrs.json
Restart=on-abort

[Install]
WantedBy=multi-user.target
```

### Connection Resilience
- **Auto-reconnect** — when the server disconnects, a spinner overlay appears and Socket.IO automatically retries the connection
- **Seamless recovery** — when the server comes back, the page reloads and reconnects to the same Redis instance automatically

### Compatibility
- **Redis 6+ with TLS** — see [Configuring Redis TLS](https://spin.atomicobject.com/2021/08/05/configuring-redis-tls/) for setup details
- **Pika compatible** (not fully optimized)
- **SSH tunneling** for single instances, cluster, and sentinel
- **Environment variables:** customize server port and home directory via `P3XRS_PORT` and `P3XRS_DOCKER_HOME`

### Data Handling
- **Auto data decompression** — automatically detects and decompresses compressed values stored in Redis. Supports GZIP, ZIP (PKZip), zlib/deflate, Zstandard (zstd), LZ4, Snappy, and Brotli. Shows a compression badge with the algorithm name and space savings ratio. Only decompresses when the result is valid text — binary uploads (e.g., gzipped images) are left untouched. Works for string, list, hash, set, and sorted set values.
- **Value format toggle** — switch between Raw, JSON, Hex, and Base64 display for all key types (string, hash, list, set, zset, stream); display-only — copy and edit always use the raw original value
- **Hex dump viewer** — proper hex editor layout with address column, hex bytes (16 per line), and ASCII representation
- **JSON pretty-print** — auto-formats valid JSON values with indentation
- **Base64 encoding** — encodes values including Unicode and binary data via TextEncoder
- **Binary data:** use the download button for binary content; direct text editing is not supported for binary values
- **Large values (>256 kB):** shown as `[object ArrayBuffer]`; use binary upload/download
- **Clipboard:** text can be copied directly; binary data requires the download button

### Key Export / Import
- **Export:** download keys as a JSON file — supports string, list, set, zset, hash, stream, and JSON types with binary data encoded as base64 and TTL preservation
- **Search-aware:** when a search is active, export only the matching results; otherwise export all keys in the current database
- **Import:** upload a previously exported JSON file with a preview dialog showing all keys with their translated types, virtual scrolling for large key sets, and conflict handling (overwrite or skip existing keys)
- **Hamburger menu:** export and import actions are accessible from the `⋮` menu in the tree controls toolbar; the menu label dynamically shows the key count and whether it's exporting all keys or search results
- **Bulk delete:** delete all keys matching the current search pattern directly from the hamburger menu; when no search is active, deletes all keys using `FLUSHDB` for efficiency

### Real-Time Monitoring (Pulse / Profiler / PubSub)

Three dedicated tabs accessible from the monitoring page:

#### Pulse — Live Dashboard
- **Live metrics:** memory usage (used, RSS, peak, fragmentation), ops/sec, connected/blocked clients, hit rate, network I/O, expired/evicted keys — updating every 2 seconds
- **uPlot charts:** four lightweight canvas charts (~35 KB) for memory, ops/sec, clients, and network I/O with theme-aware colors
- **Slow log viewer:** recent slow queries with execution duration
- **Client list:** all connected Redis clients with address, name, database, current command, idle time, and kill button
- **Memory top keys:** top 20 biggest keys by memory usage with byte sizes
- **Auto-refresh:** toggle auto-polling for client list and memory top keys
- **Pause/resume:** pause live updates without leaving the page
- **Export:** download overview data, charts (PNG), slow log, client list, and top keys as text files
- **Theme + language reactive:** charts reinitialize on theme or language change

#### Profiler — Real-Time Command Stream
- **Redis MONITOR:** streams every command executed on the server in real time via a dedicated Redis connection
- **Command display:** timestamp (ms precision), database number, source IP, and full command with arguments
- **Performance:** renders max 66 DOM entries for smooth scrolling, stores up to 10,000 entries in memory
- **Persistence:** last 100 entries saved to localStorage
- **Export:** download all entries as a text file

#### PubSub — Channel Message Monitoring
- **Pattern subscription:** subscribe with configurable glob patterns (default `*` for all channels) via `PSUBSCRIBE`
- **Message display:** timestamp, channel name, and full message content in real time
- **Restart:** re-subscribe with a new pattern without leaving the page
- **Performance:** same 66 DOM / 10,000 memory / 100 localStorage limits as Profiler
- **Export:** download all entries as a text file

#### Analysis — Memory Analysis Dashboard
- **One-click snapshot:** capture the full state of your Redis server at a point in time — type distribution, memory allocation per namespace, key expiration stats, and INFO memory breakdown
- **Type distribution chart:** canvas bar chart showing how many keys and how much memory each data type (string, hash, list, set, zset, stream) uses
- **Memory by prefix:** groups keys by their first `:` segment and ranks prefixes by total memory — quickly find which namespace is consuming the most resources
- **Key expiration overview:** shows the count of keys with TTL vs persistent keys, plus the average TTL across all expiring keys (formatted with `humanize-duration`)
- **Memory breakdown:** total, RSS, peak, overhead, dataset, Lua, fragmentation ratio, and allocator — all from `INFO memory`
- **Server info header:** Redis version, mode (standalone/cluster/sentinel), and uptime displayed in the accordion header
- **Configurable scan:** adjust "Top N" and "Max Scan Keys" to control scan depth; the UI shows how many keys were sampled out of the total database size
- **Export All (ZIP):** download a complete analysis bundle as a ZIP file (`{connection}-analysis.zip`) containing the full text report and all chart images (PNG) — useful for sharing with your team or attaching to incident reports when investigating server issues
- **Chart export:** each chart accordion has its own Export button to download individual charts as PNG
- **Theme-aware:** bar charts use CSS custom property colors and automatically redraw on theme or window resize

### User Interface
- **Responsive design:** works on phones, tablets, and desktops
- **7 themes:** Light, Enterprise, Redis (light) + Dark, Dark Neu, Darko Bluo, Matrix (dark) — with **auto-switch** that follows your system's dark/light preference in real time
- **Theme auto-switch:** defaults to system preference on first visit; manually selecting a theme overrides auto mode
- **Info page:** dedicated page with keyboard shortcuts reference, about section (version, Redis info, links), and supported languages list
- **Command palette:** VS Code-style quick command palette (`Ctrl+K` in Electron) with search and keyboard navigation
- **Desktop shortcuts:** press ALT to access menus in the desktop version
- **Tree view:** adjustable key count (100–100,000) with virtual scrolling for performance

### Keyboard Shortcuts (Electron Desktop)
| Shortcut | Action |
|----------|--------|
| `Ctrl+R` / `F5` | Refresh current view |
| `Ctrl+F` | Focus search input |
| `Ctrl+N` | New key dialog |
| `Ctrl+K` | Command palette |
| `Ctrl+D` | Disconnect |

### Connection Management
- **Connection groups:** organize connections into named groups with collapsible headers in Settings
- **Drag-and-drop:** reorder connections within a group and reorder groups themselves by dragging headers
- **Group toggle:** enable/disable grouped view with a single click — persisted in localStorage
- **Group field:** optional group name in the connection dialog with autocomplete from existing groups

### Console and Search
- **Multi-line input:** the console uses a textarea that supports multi-line commands
  - **Shift+Enter** inserts a new line, **Enter** executes
  - Multiple commands (one per line) are executed sequentially
  - Multi-line `EVAL`/`EVALSHA` scripts are sent as a single command — Lua newlines are preserved
  - The textarea auto-grows up to 3 lines when focused, with a scrollbar for longer content
  - On blur the textarea collapses to a single line to keep the output visible
- **Command history:** **Shift+ArrowUp/Down** navigates history (plain arrows scroll the textarea)
- **AI multi-line:** AI-generated commands can be multiple lines — they are placed in the textarea for review before execution
- **Channel monitoring:** toggle monitoring for all channel messages via a checkbox; the last 20 entries are stored in local storage
- **Database selection:** choose databases via the console or dropdown (shows empty/filled status)
- **Search modes:** client-side for small key sets, server-side for large key sets; search by prefix or substring

### Networking
- **Sub-directory support:** use Nginx/Ingress path rewriting — see [Issue #43](https://github.com/patrikx3/redis-ui/issues/43)
- **Cluster support:** continuously improving, with significant contributions by [@devthejo](https://github.com/devthejo)

### Modern Dual Frontend Architecture
The UI has been fully migrated from AngularJS (1.x) to two modern frontends — **Angular** and **React/MUI** — both at full feature parity:

**Angular frontend** (`/ng/`):
- **AOT compilation** — faster startup and smaller runtime footprint via `@ngtools/webpack`
- **CDK virtual scrolling** — tree view renders only visible rows for O(visible) DOM performance
- **Standalone components** — Angular signals, Angular Material, and lazy-loaded routes

**React frontend** (`/react/`):
- **Zustand state management** — lightweight stores replacing Angular services
- **@tanstack/react-virtual** — virtual scrolling for tree view and large lists
- **MUI (Material UI)** — React component library matching Angular Material's look and feel
- **Vite** — instant dev server startup and fast production builds

**Shared across both:**
- **Web Worker tree building** — key sorting and tree construction run off the main thread, keeping the UI responsive with large key sets
- **Same Socket.IO protocol** — both frontends use the identical backend API
- **Same translation system** — 54 languages shared from a single source
- **Same 7 themes** — 4 dark + 3 light, with auto system preference detection
- **E2E tested** — Playwright tests run against both frontends in parallel

### RediSearch Full-Text Search
- **Search page:** full-text search UI with index selector, query input, and paginated results — only visible when RediSearch module is detected
- **Index management:** create indexes with schema builder (TEXT, NUMERIC, TAG, GEO, VECTOR fields), drop indexes with confirmation
- **Index info:** view index metadata and statistics after running a search
- **Module-aware:** header button automatically appears when the `search` module is loaded (Redis 8+ or Redis Stack)

### RedisTimeSeries Visualization
- **Module auto-detection** — TimeSeries UI automatically appears when the `timeseries` module is loaded (Redis Stack or Redis 8+)
- **Interactive line chart** — uPlot canvas chart with theme-aware colors (dark/light), responsive resizing, and locale-aware time formatting via native `Intl`
- **Live auto-refresh** — toggle auto-polling (10-second interval) to watch incoming data in real time
- **Reactive inputs** — chart auto-reloads on any input change (from/to, aggregation, overlay, label filter) with debounced updates
- **Time range & aggregation** — filter by from/to timestamps, apply aggregation functions (avg, min, max, sum, count, first, last, range, std.p, std.s, var.p, var.s) with configurable time buckets
- **Data point management** — add, edit, and delete individual data points with confirmation dialogs; inline add form directly below the chart
- **Bulk edit** — edit all data points at once via the Edit button in the chart header; monospace textarea with `timestamp value` per line; `*` timestamps are auto-spread by a configurable interval (1s to 24h)
- **Bulk generate on create** — toggle "Bulk generate" in the Add Key dialog to create a new timeseries key with multiple data points at once using the formula generator
- **Formula generator** — generate test data with mathematical formulas (sin, cos, linear, random, sawtooth) with configurable point count, amplitude, and offset
- **TS.INFO panel** — view retention, total samples, memory usage, chunk info, duplicate policy, labels, and compaction rules in a settings-style mat-list
- **Labels editor** — edit retention, duplicate policy, and labels on existing keys via `TS.ALTER`; labels are also editable from the Edit dialog
- **Default labels** — keys created from the GUI automatically get a `key=<keyname>` label for discoverability; keys without labels get the default label assigned on first view
- **Multiple series overlay** — overlay additional timeseries keys on the same chart by entering comma-separated key names
- **TS.MRANGE label filter** — query across multiple keys by label filter (e.g. `sensor=temp`) and overlay all matching series on the chart with different colors
- **Export chart as PNG** — download the chart as a PNG image with proper background (dark/light aware), title, and color legend
- **Key creation** — create new timeseries keys with configurable retention, duplicate policy (`LAST`, `FIRST`, `MIN`, `MAX`, `SUM`, `BLOCK`), and labels
- **Tree integration** — timeseries keys show with a chart-area icon and display the data point count (totalSamples) in the tree view
- **Theme + language reactive** — charts reinitialize on theme or language change
- **No external date library** — all date formatting uses native `Intl.DateTimeFormat`, no dayjs dependency for the timeseries component

### Redis 8 Module Support (ReJSON)
- **ReJSON (JSON data type)** — view, create, edit, format, copy, and download JSON documents stored with `JSON.SET`
- **Module auto-detection** — available modules are detected on connection via `MODULE LIST`
- **JSON keys** appear in the tree with a `</>` icon; JSON type is available in the "Add Key" dialog when the module is detected
- **Inline JSON tree** — JSON keys display as an expandable/collapsible tree with syntax coloring
- **CodeMirror editor** — edit JSON documents with syntax highlighting, GitHub dark/light themes, line wrapping toggle, and code folding

### ES Modules Backend
The server codebase has been fully migrated from CommonJS to **ES Modules** (`.mjs`), enabling native Node.js ESM support and better tree-shaking.

### Security
- **Secure configuration:** passwords and sensitive data are protected with unique identifiers for both main and node configurations

<!--
👷 **The first full complete version was created in 20 days in September of 2018.**
-->


## Important Notice

Do not manually create the configuration `JSON` file with a text editor. Use the GUI to generate it instead — the resulting file can then be deployed to systems like Kubernetes.

## Optional HTTP Basic Authentication

Protect both HTTP routes and Socket.IO with HTTP Basic authentication.

Config (`p3xrs.json`):

```json
{
  "p3xrs": {
    "httpAuth": {
      "enabled": true,
      "username": "admin",
      "passwordHash": "$2b$10$..."
    }
  }
}
```

Generate a BCrypt password hash:

```bash
node ./node_modules/p3x-redis-ui-server/bin/bcrypt-password.js -p myplainpass
```

Environment variables:

- `HTTP_USER`
- `HTTP_PASSWORD`
- `HTTP_PASSWORD_HASH`
- `HTTP_PASSWORD_HASH_FILE`
- `HTTP_AUTH_ENABLED` (`true|false`)

CLI options:

- `--http-auth-enable`
- `--http-auth-disable`
- `--http-auth-username`
- `--http-auth-password`
- `--http-auth-password-hash`
- `--http-auth-password-hash-file`

Notes:

- `passwordHash` is preferred over plain `password`.
- Use HTTPS or a reverse proxy with TLS when HTTP auth is enabled.

## All Features Are Free

All features including SSH tunneling, Cluster/Sentinel, ReJSON, binary upload/download, and readonly connections are available for free. No license required.


<!--
## License Integration

The app validates licenses through `network.corifeus.com` for product `p3x-redis-ui`.

- Validation endpoint: `GET https://network.corifeus.com/public/license/check/:licenseKey`
- Returned data is shown in `Settings -> License`:
  - tier, validity and status, reason
  - starts/expires/check timestamps, days left
  - enabled features
- License key is displayed only in masked form on the client.
- License state refreshes every 60 minutes (server + client refresh flow).
- License validation requires internet access.

### Tier Feature Policy

- `free`
  - Core Redis UI only; no SSH tunneling, no Readonly connection mode, no Cluster/Sentinel, no Edit JSON/Upload binary/Download binary, no ReJSON.
  - Price: `0 HUF/month (€0/month)`.
- `pro`
  - SSH tunneling, Readonly connection mode (including `--readonly-connections`/`-r`), Edit JSON, Upload binary, Download binary, ReJSON (JSON data type).
  - Base price: `400 HUF/month (€1/month)` or `4,000 HUF/year (€10/year)`.
  - Total with `27%` VAT: `500 HUF/month (€1.27/month)` or `5,100 HUF/year (€12.70/year)`.
- `enterprise`
  - SSH tunneling, Cluster and Sentinel, Edit JSON, Upload binary, Download binary, ReJSON (JSON data type); `--readonly-connections`/`-r` also works.
  - Base price: `1,200 HUF/month (€3/month)` or `12,000 HUF/year (€30/year)`.
  - Total with `27%` VAT: `1,500 HUF/month (€3.81/month)` or `15,200 HUF/year (€38.10/year)`.
- Yearly price is `10x` the monthly price.
- Default license includes `5 seats`; for more seats, contact [`support@corifeus.com`](mailto:support@corifeus.com).
- Enterprise trial: `10 days` free with a valid email address.
- Billing info required: `Name, Billing e-mail, Country code, Postal code, City, Address, VAT ID (optional)`.
- PayPal payment accepted only in `HUF` (Hungarian forint).
- VAT (`27%` in Hungary) is added to paid plan prices.
- Invoice/license communication is in English; invoice currency is HUF.
- Contact: [`support@corifeus.com`](mailto:support@corifeus.com).

Enforcement:
- Backend enforces tier rules on connection save/connect/test paths
- Backend enforces Pro+ for binary value writes (`key-set`, `key-new-or-set`)
- Backend enforces Pro+ for ReJSON (JSON data type) operations (`key-get`, `key-new-or-set`, `key-json-set`)
- Frontend mirrors the rules in UI controls (hide/disable + localized messages)
- `--readonly-connections` (`-r`) requires `pro` or `enterprise` tier

### License Editing Policy (`p3xrs.json`)

License editability is controlled by server config:

- `p3xrs.licenseEditable` (recommended)
- Legacy fallback: `p3xrs.editableActive`
- Legacy fallback: `p3xrs.disabled` (inverted)

If license editing is disabled:

- the `Edit` button is disabled in the UI
- the UI shows a terminal-only notice (EN/ZH/RU)
- the server blocks license updates (`license_readonly`), preventing bypass from browser/API

Example:

```json
{
  "p3xrs": {
    "licenseEditable": false
  }
}
```

Restart the server after changing `p3xrs.json`.
-->

## Live Demo

Try the latest version at [p3x.redis.patrikx3.com](https://p3x.redis.patrikx3.com).

- **Daily data reset:** the Redis database restores certain datasets every morning (CET)
- **Brief downtime:** occasional ~1 second interruptions may occur due to automatic updates from Git changes
- **Version differences:** the live instance may differ from the GitHub or NPM release; updates are typically published monthly

## Installation

### Releases / Downloads

https://github.com/patrikx3/redis-ui/releases

### CLI (Node.js / NPM)

Start the server via Node.js/NPM and access it in a browser.

```bash
npm install -g p3x-redis-ui
p3xrs
```

Open: `http://localhost:7843`

#### CLI Options

```text
Usage: p3xrs [options]

Options:
  -V, --version                           output the version number
  -c, --config [config]                   Set the p3xr.json p3x-redis-ui-server configuration, see more help in p3x-redis-ui-server
  -r, --readonly-connections              Set the connections to be readonly, no adding, saving or delete a connection
  -n, --connections-file-name [filename]  Set the connections file name, overrides default .p3xrs-conns.json
  --http-auth-enable                      Enable HTTP Basic auth
  --http-auth-disable                     Disable HTTP Basic auth
  --http-auth-username [username]         HTTP Basic auth username
  --http-auth-password [password]         HTTP Basic auth plain password
  --http-auth-password-hash [hash]        HTTP Basic auth bcrypt password hash
  --http-auth-password-hash-file [file]   Read HTTP Basic auth bcrypt password hash from file
  --groq-api-key [key]                    Groq API key for AI-powered Redis query translation (get a free key at console.groq.com)
  --groq-api-key-readonly                 Prevent users from changing the Groq API key via the UI
  -h, --help                              display help for command
```

[Server startup guide](artifacts/readme/start-up-server.md)

[Config file reference](p3xrs.json)

[Connection config reference](.p3xrs-conns.json)

[Example connection config](.p3xrs-conns-example.json)

### Docker

https://hub.docker.com/r/patrikx3/p3x-redis-ui

#### Compose

https://github.com/patrikx3/redis-ui/blob/master/docker-compose.yml

```bash
wget https://raw.githubusercontent.com/patrikx3/redis-ui/master/docker-compose.yml
# Adjust the settings folder path in docker-compose.yml as needed.
docker-compose up
```

#### Standalone

```bash
mkdir -p ./p3x-redis-ui-settings
docker run -v $PWD/p3x-redis-ui-settings:/settings -h docker-p3x-redis-ui -p 7843:7843 -t -i patrikx3/p3x-redis-ui
```

The GUI will be at http://localhost:7843

#### Health Check

The Docker image includes a built-in `HEALTHCHECK` that polls `/health` every 30 seconds. Container orchestrators (Docker Compose, Swarm, etc.) will automatically mark the container as unhealthy if the server stops responding.

#### Graceful Shutdown

The server handles `SIGTERM` and `SIGINT` signals gracefully — it closes Socket.IO connections, disconnects all Redis clients, and shuts down the HTTP server before exiting.

### Kubernetes

#### Raw Manifests

https://github.com/patrikx3/redis-ui/blob/master/k8s/manifests

```bash
kubectl apply -f namespace.yaml
# Edit redis host and password in configmap.yaml first
kubectl apply -f configmap.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f ingress.yaml
```

The manifests and Helm chart include **liveness** and **readiness** probes — both use `GET /health` to verify the server is responding.

#### Helm Chart

https://github.com/patrikx3/redis-ui/blob/master/k8s/chart

```bash
helm template -f values.yaml release --namespace namespace . > generated.yaml
kubectl apply -f generated.yaml
```

### Desktop Applications

#### macOS

Supports both Intel and Apple Silicon builds. If you download the `zip` for the `arm64` version, remove the quarantine attribute:

```bash
sudo xattr -rd com.apple.quarantine P3X-Redis-UI.app
```

#### Snap

Available for **x64** and **arm64** architectures.

```bash
sudo snap install p3x-redis-ui
```

[![LINK](https://cdn.corifeus.com/assets/svg/snap-store-black.svg)](https://snapcraft.io/p3x-redis-ui#cory-non-external)

#### Flatpak

Download from the releases page and install:

```sh
wget https://github.com/patrikx3/redis-ui/releases/download/v${VERSION}/P3X-Redis-UI-${VERSION}-x86_64.flatpak
flatpak install ./P3X-Redis-UI-${VERSION}-x86_64.flatpak
flatpak run com.patrikx3.redis_ui
```

The application menu is automatically integrated.

#### AppImage, deb, rpm

These packages support automatic updates.

<!--
#### To integrate into the menu using AppImage
Execute:
```bash
sudo add-apt-repository ppa:appimagelauncher-team/stable
sudo apt-get update
sudo apt-get install appimagelauncher
```
-->

After downloading the AppImage, make it executable:

```bash
mkdir -p $HOME/opt
mv ~/Downloads/p3x-redis-ui-a.b.c-x86_64.AppImage $HOME/opt/
chmod +x $HOME/opt/p3x-redis-ui-a.b.c-x86_64.AppImage
$HOME/opt/p3x-redis-ui-a.b.c-x86_64.AppImage &
```

<!--
It then actually integrates itself into the menus and it will auto update itself.
-->

#### ElectronJs

The app is listed on [ElectronJs Apps](https://electronjs.org/apps) — search for `P3X`.

## Architecture

This application uses Socket.IO instead of REST for client-server communication. While unconventional, Socket.IO provides better responsiveness by avoiding HTTP protocol overhead, resulting in a smoother interaction experience.

[REST vs WebSocket benchmarks](https://www.google.com/search?q=rest+vs+websocket+comparison+benchmarks)


### Communication Flow

```
Browser / Electron App / VS Code Extension
        ↓
redis-ui-material
  ├── Angular frontend (/ng/)  — Angular + Angular Material + Webpack
  └── React frontend (/react/) — React + MUI + Vite + Zustand
        ↓ Socket.IO + HTTP
redis-ui-server (Express + ioredis)
        ↓
Redis Instance (standalone / cluster / sentinel, optional SSH tunnel)
```

### Related Repositories

| Repository | Description |
|------------|-------------|
| [p3x-redis-ui](https://github.com/patrikx3/redis-ui) | Electron desktop app + CLI (this repo) |
| [p3x-redis-ui-server](https://github.com/patrikx3/redis-ui-server) | HTTP + Socket.IO server backend |
| [p3x-redis-ui-material](https://github.com/patrikx3/redis-ui-material) | Angular + React frontends |
| [p3x-redis-ui-vscode](https://github.com/patrikx3/redis-ui-vscode) | VS Code extension |

## Adoption Notes

`redis-commander` has more Docker pulls due to its longer history and presence in tutorials/CI pipelines. `p3x-redis-ui` adoption continues to grow steadily.

[Detailed analysis and action plan](artifacts/readme/adoption-growth.md)

## Change Log

[View change log](change-log.md)

## Contributors

[View contributors](contributors.md)

## Links

[P3X Redis UI playground](https://www.patrikx3.com/en/front/playground/19/p3x-reds-ui#PG19)
[Corifeus P3X Redis UI](https://corifeus.com/redis-ui/)
[AlternativeTo](https://alternativeto.net/software/p3x-redis-ui/)
[NPM](https://www.npmjs.com/package/p3x-redis-ui)
[Snap Store](https://snapcraft.io/p3x-redis-ui)
[GitHub Pages](https://patrikx3.github.io/redis-ui/)
[Web development](https://corifeus.eu/)
[Webfejlesztés](https://corifeus.hu/)
  

[//]: #@corifeus-footer

---

## 🚀 Quick and Affordable Web Development Services

If you want to quickly and affordably develop your next digital project, visit [corifeus.eu](https://corifeus.eu) for expert solutions tailored to your needs.

---

## 🌐 Powerful Online Networking Tool  

Discover the powerful and free online networking tool at [network.corifeus.com](https://network.corifeus.com).  

**🆓 Free**  
Designed for professionals and enthusiasts, this tool provides essential features for network analysis, troubleshooting, and management.  
Additionally, it offers tools for:  
- 📡 Monitoring TCP, HTTP, and Ping to ensure optimal network performance and reliability.  
- 📊 Status page management to track uptime, performance, and incidents in real time with customizable dashboards.  

All these features are completely free to use.  

---

## ❤️ Support Our Open-Source Project  
If you appreciate our work, consider ⭐ starring this repository or 💰 making a donation to support server maintenance and ongoing development. Your support means the world to us—thank you!  

---

### 🌍 About My Domains  
All my domains, including [patrikx3.com](https://patrikx3.com), [corifeus.eu](https://corifeus.eu), and [corifeus.com](https://corifeus.com), are developed in my spare time. While you may encounter minor errors, the sites are generally stable and fully functional.  

---

### 📈 Versioning Policy  
**Version Structure:** We follow a **Major.Minor.Patch** versioning scheme:  
- **Major:** 📅 Corresponds to the current year.  
- **Minor:** 🌓 Set as 4 for releases from January to June, and 10 for July to December.  
- **Patch:** 🔧 Incremental, updated with each build.  

**🚨 Important Changes:** Any breaking changes are prominently noted in the readme to keep you informed.

---


[**P3X-REDIS-UI**](https://corifeus.com/redis-ui) Build v2026.4.639

 [![NPM](https://img.shields.io/npm/v/p3x-redis-ui.svg)](https://www.npmjs.com/package/p3x-redis-ui)  [![Donate for PatrikX3 / P3X](https://img.shields.io/badge/Donate-PatrikX3-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)





[//]: #@corifeus-footer:end
