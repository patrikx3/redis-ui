[//]: #@corifeus-header

# 📡 P3X Redis UI: A highly functional and convenient database GUI that fits in your pocket, accessible on both responsive web and desktop applications

                        
[//]: #@corifeus-header:end
# P3X Redis UI Features

## Triple GUI: Angular + React + Vue

Originally built with AngularJS, fully migrated to three modern frontends — **Angular**, **React/MUI**, and **Vue/Vuetify** — all at full feature parity. Switch live in **Settings → GUI**.

- **Angular** (`/ng/`) — Angular CLI with esbuild, CDK virtual scrolling, standalone components with signals
- **React** (`/react/`) — Zustand, @tanstack/react-virtual, MUI, Vite
- **Vue** (`/vue/`) — Pinia, Vue 3 Composition API, Vuetify, Vite
- `/` auto-redirects to your last used frontend
- **Shared:** same Socket.IO protocol, same translations, same 7 themes (4 dark + 3 light), Web Worker tree building, Playwright E2E tests
- Works in the Electron desktop app, Docker, and standalone server

## AI-Powered Redis Query Translation

Type plain language in the console — AI translates to Redis commands, you review and run.

- **Multi-command + EVAL scripts** placed in textarea for review before execution
- **Context-aware** — Redis version, modules, RediSearch indexes, current page, connection, database
- **Agentic tool-use** for investigation prompts ("why is memory high?") — AI calls safe read-only Redis tools (INFO, MEMORY STATS, SLOWLOG, SCAN, ACL WHOAMI) and surfaces every call in console scrollback
- **AI Cheatsheet** — categorized prompts grouped by feature (diagnostics, keys, types, RedisJSON, RediSearch, TimeSeries, Bloom, VectorSet, scripting, cluster, ACL); module- and version-aware
- **Stop button** to cancel running AI queries instantly
- **Bring your own key** — free Groq key at [console.groq.com](https://console.groq.com)
- **`ai:` prefix** explicitly triggers AI translation

| Settings AI | Console Toggle | `ai:` prefix | Auto-detect on errors |
|---|---|---|---|
| Disabled | Hidden | Off | Off |
| Enabled | ON (default) | Works | Works |
| Enabled | OFF | Works | Off (instant errors) |

See [AI Configuration](ai.md) for setup, readonly mode, and CLI flags.

## Connection Resilience

- **Auto-reconnect** — server disconnect shows a spinner overlay, Socket.IO retries
- **Seamless recovery** — page reloads and reconnects to the same Redis instance when server returns

## Compatibility

- **Redis 6+ with TLS** — see [Configuring Redis TLS](https://spin.atomicobject.com/2021/08/05/configuring-redis-tls/)
- **Pika compatible** (not fully optimized)
- **SSH tunneling** for single instances, cluster, and sentinel
- **Env vars:** `P3XRS_PORT`, `P3XRS_DOCKER_HOME`

## Data Handling

- **Auto data decompression** — detects and decompresses GZIP, ZIP, zlib/deflate, Zstandard, LZ4, Snappy, Brotli. Shows a compression badge with algorithm + ratio. Only decompresses valid text — binary uploads stay untouched. Works for string, list, hash, set, sorted set
- **Value format toggle** — Raw, JSON, Hex, Base64 display for all key types (display-only)
- **Hex dump viewer** — proper hex editor layout (address, 16 bytes/line, ASCII)
- **JSON pretty-print** — auto-formats valid JSON
- **Base64** — Unicode + binary via TextEncoder
- **Binary data** — download button for binary content; large values (>256 kB) shown as `[object ArrayBuffer]`

## Editing Safety

- **Diff view before save** — optional inline/side-by-side comparison before commit (string, hash, list, JSON; toggle in Redis Settings, default off)
- **Undo after save** — toast with Undo button after saving string/JSON keys, restores previous value

## Key Export / Import

- **Export** — keys as JSON file, all types, base64 binary, TTL preserved
- **Search-aware** — exports only matching results when search is active
- **Import** — preview dialog with translated types, virtual scrolling, conflict handling (overwrite/skip)
- **Hamburger menu** — `⋮` in tree controls toolbar; menu label shows count + scope
- **Bulk delete** — delete all keys matching current search; `FLUSHDB` when no search

## Real-Time Monitoring (Pulse / Profiler / PubSub)

### Pulse — Live Dashboard

- **Live metrics** every 2s — memory (used, RSS, peak, fragmentation), ops/sec, connected/blocked clients, hit rate, network I/O, expired/evicted keys
- **Info cards** — server (OS, port, PID, config, CPU), persistence (RDB, AOF), replication (role, replicas, master), keyspace per-db, loaded modules + versions
- **uPlot charts** (~35 KB canvas) for memory, ops/sec, clients, network I/O — theme-aware
- **Slow log** + **client list** (kill button, idle time, current command) + **memory top keys** (top 20 by bytes)
- **Auto-refresh** + **pause/resume** without leaving the page
- **Export** — overview, dashboard info, charts (PNG), slow log, client list, top keys; Export All bundles to ZIP (TXT + PNG + PDF)

### Profiler — Real-Time Command Stream

- **Redis MONITOR** via dedicated connection — every command in real time
- Timestamp (ms), database, source IP, full command + args
- Max 66 DOM entries (smooth scrolling), 10,000 in memory, last 100 in localStorage
- Export all entries as text

### PubSub — Channel Message Monitoring

- **Pattern subscription** via `PSUBSCRIBE` (default `*`)
- Same 66 DOM / 10,000 memory / 100 localStorage limits as Profiler
- Restart with new pattern without leaving page

### Analysis — Memory Analysis Dashboard

- **One-click snapshot** — type distribution, memory per namespace, expiration stats, INFO memory breakdown
- **Type distribution chart** — keys + memory per data type
- **Memory by prefix** — group keys by first `:` segment, ranked by memory
- **Key expiration** — count with TTL vs persistent + average TTL (humanize-duration)
- **Memory breakdown** — total, RSS, peak, overhead, dataset, Lua, fragmentation, allocator
- **Configurable scan** — Top N + Max Scan Keys
- **Export All** — `{connection}-analysis.zip` with full report + chart PNGs
- Theme-aware bar charts redraw on theme/resize

## User Interface

- **Responsive** — phones, tablets, desktops
- **7 themes** — Light, Enterprise, Redis (light) + Dark, Dark Neu, Darko Bluo, Matrix (dark) — auto-switch follows system preference in real time
- **Info page** — keyboard shortcuts, about, supported languages
- **Command palette** — VS Code-style (`Ctrl+K` in Electron) with search + keyboard nav
- **Tree view** — adjustable key count (100–100,000), virtual scrolling
- **Smart tree memory** — expanded/collapsed state saved per connection + database in session storage

### Keyboard Shortcuts (Electron Desktop)

| Shortcut | Action |
|----------|--------|
| `Ctrl+R` / `F5` | Refresh current view |
| `Ctrl+F` | Focus search input |
| `Ctrl+N` | New key dialog |
| `Ctrl+K` | Command palette |
| `Ctrl+D` | Disconnect |

## Connection Management

- **Connection groups** — named, collapsible, in Settings
- **Drag-and-drop** reorder
- **Group toggle** — persisted in localStorage
- **Group field** with autocomplete from existing groups

## Console and Search

- **Global console drawer** — bottom slide-up, accessible from any page (footer button or **Ctrl+`**); preference persists per-connection
- **Multi-line input** — Shift+Enter newline, Enter executes; sequential lines = sequential commands; multi-line `EVAL`/`EVALSHA` sent as single command (Lua newlines preserved); auto-grow up to 3 lines
- **Command history** — Shift+ArrowUp/Down
- **AI multi-line** — generated commands placed in textarea for review
- **Channel monitoring** toggle — last 20 entries in localStorage
- **Search modes** — client-side for small key sets, server-side for large; prefix or substring

## Networking

- **Sub-directory support** — Nginx/Ingress path rewriting ([Issue #43](https://github.com/patrikx3/redis-ui/issues/43))
- **Cluster** — continuously improving, contributions by [@devthejo](https://github.com/devthejo)

## RediSearch Full-Text Search

- **Search page** — full-text UI with index selector, query input, paginated results
- **Index management** — schema builder (TEXT, NUMERIC, TAG, GEO, VECTOR), drop with confirm
- **Index info** — metadata + statistics
- **Module-aware** — appears when `search` module is loaded (Redis 8+ or Redis Stack)

## RedisTimeSeries Visualization

- **Auto-detection** — UI appears when `timeseries` module loads
- **Interactive uPlot chart** — theme-aware, responsive, locale-aware time formatting via `Intl`
- **Live auto-refresh** (10s interval)
- **Time range + aggregation** — avg, min, max, sum, count, first, last, range, std.p, std.s, var.p, var.s with configurable time buckets
- **Data point management** — add/edit/delete with confirm; inline add form below chart
- **Bulk edit** — monospace textarea, `timestamp value` per line, `*` auto-spread by interval (1s–24h)
- **Bulk generate on create** — formula generator (sin, cos, linear, random, sawtooth) with point count, amplitude, offset
- **TS.INFO panel** — retention, samples, memory, chunks, duplicate policy, labels, compaction
- **Labels editor** — `TS.ALTER` for retention, duplicate policy, labels
- **Default labels** — auto `key=<keyname>` for discoverability
- **Multiple series overlay** — comma-separated keys
- **TS.MRANGE label filter** — query by label (e.g. `sensor=temp`), overlay matching series with different colors
- **Export chart as PNG** — proper background, title, color legend
- **Tree integration** — chart-area icon, totalSamples count

## Redis 8 Module Support (ReJSON)

- **View, create, edit, format, copy, download** JSON documents (`JSON.SET`)
- **Module auto-detection** via `MODULE LIST`
- **Inline JSON tree** — expandable, syntax-colored
- **CodeMirror editor** — syntax highlighting, GitHub dark/light, line wrapping toggle, code folding

## RedisBloom Probabilistic Data Structures

- **5 types** — Bloom filter, Cuckoo filter, Top-K, Count-Min Sketch, T-Digest
- **Module auto-detection** (`bf`)
- **Info display** — capacity, size, error rate, items inserted, etc.
- **Inline actions** — add items, check membership, query counts/quantiles, list top items
- **Smart defaults** on creation — error rate, capacity, K, width, depth, decay, compression
- **Console hints** — autocomplete for BF.*, CF.*, TOPK.*, CMS.*, TDIGEST.*

## Redis 8 VectorSet Support

- **Native vector type** — Redis 8 built-in (no module required)
- **VINFO** — dimensions, element count, quantization, projection
- **Element browser** — paginated, search, attribute inspection, delete
- **Similarity search** — by element name or raw vector with COUNT; results show similarity scores
- **Add elements** — `VADD` inline form (name, vector, optional attributes)
- **Console hints** — VADD, VSIM, VCARD, VDIM, VGETATTR, VSETATTR, VREM, VINFO, VLINKS
- **VSIM IN filter** (Redis 8.2+) — narrow results by attribute values

## Redis 8.x Advanced Features

- **Per-field hash TTL** (8.0+) — `HEXPIRE`; live countdown with color stages (green >1h, yellow <1h, red <5min, pulsing <30s)
- **String digest** (8.4+) — `DIGEST` button on string keys
- **Hybrid search** (8.4+) — `FT.HYBRID` toggle on search page; combine text + vector via Reciprocal Rank Fusion
- **Cluster slot stats** (8.2+) — top slots by keys / CPU / memory via `CLUSTER SLOT-STATS`
- **Console autocomplete** for HGETEX, HSETEX, HGETDEL, HTTL, HEXPIRE, HPERSIST, MSETEX, XDELEX, XCFGSET, DIGEST, FT.HYBRID, CLUSTER SLOT-STATS, CLUSTER MIGRATION
- **Version-gated UI** — features auto-show/hide based on Redis server version

## ES Modules Backend

Server fully migrated from CommonJS to **ES Modules** (`.mjs`) — native Node.js ESM, better tree-shaking.

## ACL Management (Redis 6.0+)

- **User list** — status, current user indicator, rules summary
- **Create / Edit / Delete** via dialog with chip-based rule editing
- **Chip inputs** — commands, key patterns, pub/sub channels with placeholder hints
- **Deny highlighting** — commands starting with `-` shown in warning color
- **Default user warning** — inline alert when editing the `default` user
- **Save confirmation** — themed confirm dialog
- Identical chip styling, layout, behavior across Angular, React, Vue

## Security

Passwords and sensitive data protected with unique identifiers for both main and node configurations.

[//]: #@corifeus-footer

---

# 🌐 Meet Assistant SaaS — meeting.corifeus.com

Don't want to install anything? Try the **hosted version** at **[meeting.corifeus.com](https://meeting.corifeus.com)** — full meeting workflow built for European businesses, no setup, no API key, no command line.

What the hosted version offers:

- **21-language live translation** during the meeting
- **AI summaries, action items, decisions, attendees, key quotes** auto-generated after every meeting
- **Custom vocabulary** — your client / company / industry terms corrected automatically (Pro+ tier)
- **Searchable meeting library** — find any decision or promise across all your past meetings
- **Shareable read-only links** — send a clean meeting summary to a client or teammate, no signup needed on their end
- **One-click email summary** after each meeting
- **Premium engine on every plan** — no downgraded model, ever
- **EU billing** — Stripe Tax + VAT-compliant + EUR-priced (Solo €19.99 / Pro €39.99 / Business €99.99 per month, no lock-in)
- **GDPR-compliant by default** — browser-language auto-detection, no tracking cookies, your meetings stored encrypted

Try the live demo (1 minute free, no signup) or browse the **public sample meeting** at [meeting.corifeus.com/sample](https://meeting.corifeus.com/sample).

---

# Corifeus Network

AI-powered network & email toolkit — free, no signup.

**Web** · [network.corifeus.com](https://network.corifeus.com)  **MCP** · [`npm i -g p3x-network-mcp`](https://www.npmjs.com/package/p3x-network-mcp)

- **AI Network Assistant** — ask in plain language, get a full domain health report
- **Network Audit** — DNS, SSL, security headers, DNSBL, BGP, IPv6, geolocation in one call
- **Diagnostics** — DNS lookup & global propagation, WHOIS, reverse DNS, HTTP check, my-IP
- **Mail Tester** — live SPF/DKIM/DMARC + spam score + AI fix suggestions, results emailed (localized)
- **Monitoring** — TCP / HTTP / Ping with alerts and public status pages
- **MCP server** — 17 tools exposed to Claude Code, Codex, Cursor, any MCP client
- **Install** — `claude mcp add p3x-network -- npx p3x-network-mcp`
- **Try** — *"audit example.com"*, *"why do my emails land in spam? test me@example.com"*
- **Source** — [patrikx3/network](https://github.com/patrikx3/network) · [patrikx3/network-mcp](https://github.com/patrikx3/network-mcp)
- **Contact** — [patrikx3.com](https://www.patrikx3.com/en/front/contact) · [donate](https://paypal.me/patrikx3)

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


[**P3X-REDIS-UI**](https://corifeus.com/redis-ui) Build v2026.4.3001

 [![NPM](https://img.shields.io/npm/v/p3x-redis-ui.svg)](https://www.npmjs.com/package/p3x-redis-ui)  [![Donate for PatrikX3 / P3X](https://img.shields.io/badge/Donate-PatrikX3-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)





[//]: #@corifeus-footer:end