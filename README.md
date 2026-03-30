[//]: #@corifeus-header

  [![NPM](https://img.shields.io/npm/v/p3x-redis-ui.svg)](https://www.npmjs.com/package/p3x-redis-ui)  [![Donate for PatrikX3 / P3X](https://img.shields.io/badge/Donate-PatrikX3-003087.svg)](https://paypal.me/patrikx3) [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Corifeus @ Facebook](https://img.shields.io/badge/Facebook-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)  [![Uptime ratio (90 days)](https://network.corifeus.com/public/api/uptime-shield/31ad7a5c194347c33e5445dbaf8.svg)](https://network.corifeus.com/status/31ad7a5c194347c33e5445dbaf8)





# 📡 P3X Redis UI: A highly functional and convenient database GUI that fits in your pocket, accessible on both responsive web and desktop applications v2026.4.323


  
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

### Supported Languages

Switch language in `Settings` — **54 languages** covering 88+ countries:

Arabic (`ar`), Azerbaijani (`az`), Belarusian (`be`), Bengali (`bn`), Bosnian (`bs`), Bulgarian (`bg`), Chinese (`zn`), Chinese - Hong Kong (`zh-HK`), Chinese - Taiwan (`zh-TW`), Croatian (`hr`), Czech (`cs`), Danish (`da`), Dutch (`nl`), English (`en`), Estonian (`et`), Filipino (`fil`), Finnish (`fi`), French (`fr`), Georgian (`ka`), German (`de`), Greek (`el`), Hebrew (`he`), Hungarian (`hu`), Armenian (`hy`), Indonesian (`id`), Italian (`it`), Japanese (`ja`), Kazakh (`kk`), Khmer (`km`), Korean (`ko`), Kyrgyz (`ky`), Lithuanian (`lt`), Macedonian (`mk`), Malay (`ms`), Nepali (`ne`), Norwegian (`no`), Polish (`pl`), Portuguese (`pt-PT`), Portuguese - Brazil (`pt-BR`), Romanian (`ro`), Russian (`ru`), Serbian (`sr`), Sinhala (`si`), Slovak (`sk`), Slovenian (`sl`), Spanish (`es`), Swahili (`sw`), Swedish (`sv`), Tajik (`tg`), Tamil (`ta`), Thai (`th`), Turkish (`tr`), Ukrainian (`uk`), Vietnamese (`vi`)

## Screenshots

[View screenshots](artifacts/readme/screenshots.md)

## Features

### Compatibility
- **Redis 6+ with TLS** — see [Configuring Redis TLS](https://spin.atomicobject.com/2021/08/05/configuring-redis-tls/) for setup details
- **Pika compatible** (not fully optimized)
- **SSH tunneling** for single instances, cluster, and sentinel
- **Environment variables:** customize server port and home directory via `P3XRS_PORT` and `P3XRS_DOCKER_HOME`

### Data Handling
- **Binary data:** use the download button for binary content; direct text editing is not supported for binary values
- **Large values (>256 kB):** shown as `[object ArrayBuffer]`; use binary upload/download
- **Clipboard:** text can be copied directly; binary data requires the download button

### User Interface
- **Responsive design:** works on phones, tablets, and desktops
- **Themes:** Dark (Dracula) and Light
- **Desktop shortcuts:** press ALT to access menus in the desktop version
- **Tree view:** adjustable key count (100–100,000) with CDK virtual scrolling for performance

### Console and Search
- **Channel monitoring:** toggle monitoring for all channel messages via a checkbox; the last 20 entries are stored in local storage
- **Database selection:** choose databases via the console or dropdown (shows empty/filled status)
- **Search modes:** client-side for small key sets, server-side for large key sets; search by prefix or substring

### Networking
- **Sub-directory support:** use Nginx/Ingress path rewriting — see [Issue #43](https://github.com/patrikx3/redis-ui/issues/43)
- **Cluster support:** continuously improving, with significant contributions by [@devthejo](https://github.com/devthejo)

### Modern Angular Frontend
The UI has been fully migrated from AngularJS (1.x) to **Angular** — the current long-term support release. This migration delivers major improvements across the board:
- **~1.6 MB smaller bundle** — removed jQuery, moment.js, and the AngularJS/Angular compatibility layer
- **AOT compilation** — faster startup and smaller runtime footprint via `@ngtools/webpack` AngularWebpackPlugin
- **Web Worker tree building** — key sorting and tree construction run off the main thread via inline Blob Workers, keeping the UI responsive even with large key sets
- **CDK virtual scrolling** — tree view uses `CdkVirtualScrollViewport` with `*cdkVirtualFor`, rendering only visible rows for O(visible) DOM performance
- **Standalone components** — modern Angular architecture with signals, CDK virtual scrolling, and Angular Material
- **dayjs** — lightweight date handling replacing moment.js (2 KB core vs 400 KB)

### Redis 8 Module Support
- **ReJSON (JSON data type)** — view, create, edit, and download JSON documents stored with `JSON.SET` (Pro/Enterprise)
- **Module auto-detection** — available modules are detected on connection via `MODULE LIST`
- **Inline JSON tree** — JSON keys display as an expandable/collapsible tree with syntax coloring
- **CodeMirror 6 editor** — edit JSON documents with syntax highlighting, GitHub dark/light themes, line wrapping toggle, and code folding

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

### Redis 8 ReJSON Support

P3X Redis UI supports the **ReJSON** module (built into Redis 8) for the JSON data type.

- Auto-detects the ReJSON module on connection via `MODULE LIST`
- JSON keys appear in the tree with a `</>` icon
- Create, view, edit, format, copy, and download JSON documents
- JSON type is available in the "Add Key" dialog when the module is detected

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

<!--
The main source installer is the `AppImage`, so, the themes are not implemented (the main menus). If you want the themes to be implemented (dark vs light), I suggest using the `AppImage` as it supports the themes natively. Besides, the auto self update function is not implemented in `Snap`, only in `AppImage` version.
-->

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
Browser / Electron App
        ↓
redis-ui-material (Angular + Angular Material)
        ↓ Socket.IO + HTTP
redis-ui-server (Express + ioredis)
        ↓
Redis Instance (standalone / cluster / sentinel, optional SSH tunnel)
```

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


[**P3X-REDIS-UI**](https://corifeus.com/redis-ui) Build v2026.4.323

 [![NPM](https://img.shields.io/npm/v/p3x-redis-ui.svg)](https://www.npmjs.com/package/p3x-redis-ui)  [![Donate for PatrikX3 / P3X](https://img.shields.io/badge/Donate-PatrikX3-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)





[//]: #@corifeus-footer:end
