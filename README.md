[//]: #@corifeus-header

  [![NPM](https://img.shields.io/npm/v/p3x-redis-ui.svg)](https://www.npmjs.com/package/p3x-redis-ui)  [![Donate for PatrikX3 / P3X](https://img.shields.io/badge/Donate-PatrikX3-003087.svg)](https://paypal.me/patrikx3) [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Corifeus @ Facebook](https://img.shields.io/badge/Facebook-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)  [![Uptime ratio (90 days)](https://network.corifeus.com/public/api/uptime-shield/31ad7a5c194347c33e5445dbaf8.svg)](https://network.corifeus.com/status/31ad7a5c194347c33e5445dbaf8)





# 📡 P3X Redis UI: A highly functional and convenient database GUI that fits in your pocket, accessible on both responsive web and desktop applications v2026.4.2014


  
🌌 **Bugs are evident™ - MATRIX️**  
🚧 **This project is under active development!**  
📢 **We welcome your feedback and contributions.**  
    



### NodeJS LTS is supported

### 🛠️ Built on NodeJs version

```txt
v24.15.0
```





# 📝 Description

                        
[//]: #@corifeus-header:end

**p3x-redis-ui** is a versatile Redis GUI that works as a web-based server application or a standalone desktop app. It excels at managing JSON data through an integrated CodeMirror editor with GitHub dark/light themes, supports uploading and downloading binary data, and handles SSH, cluster, and sentinel configurations.

📊 **Comparing tools?** See [**COMPARISON.md**](artifacts/readme/COMPARISON.md) for an honest breakdown vs. redis-commander, RedisInsight, and AnotherRedisDesktopManager — feature matrix, performance at 1M keys, and when to pick each.


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

## Demo

![P3X Redis UI Demo](artifacts/demo.gif)

## Live Demo

Try the latest version at [p3x.redis.patrikx3.com](https://p3x.redis.patrikx3.com).

- **Daily data reset:** the Redis database restores certain datasets every morning (CET)
- **Brief downtime:** occasional ~1 second interruptions may occur due to automatic updates from Git changes
- **Version differences:** the live instance may differ from the GitHub or NPM release; updates are typically published monthly

## Features

See [**Features**](artifacts/readme/features.md) — Triple GUI (Angular + React + Vue), AI-powered queries, real-time monitoring (Pulse / Profiler / PubSub / Analysis), RediSearch, RedisTimeSeries, ReJSON, RedisBloom, VectorSet, Redis 8.x, ACL, and more.

## AI Configuration

See [**AI Configuration**](artifacts/readme/ai.md) — works out of the box; covers GUI/CLI config, readonly mode, and the Groq API key.


## Important Notice

Do not manually create the configuration `JSON` file with a text editor. Use the GUI to generate it instead — the resulting file can then be deployed to systems like Kubernetes.

## Optional HTTP Basic Authentication

See [**HTTP Basic Auth**](artifacts/readme/http-basic-auth.md) — config, env vars, CLI flags.


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

> **Stuck on the loading screen?** Reinstall the app (Snap / Flatpak / deb / rpm / AppImage / dmg / msi). A cached or partial install from a previous auto-update is the usual cause; reinstall clears it and the GUI loads on next launch.

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

See [**Architecture**](artifacts/readme/architecture.md) — Socket.IO + Express + ioredis, three frontends (Angular / React / Vue), related repositories.

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


[**P3X-REDIS-UI**](https://corifeus.com/redis-ui) Build v2026.4.2014

 [![NPM](https://img.shields.io/npm/v/p3x-redis-ui.svg)](https://www.npmjs.com/package/p3x-redis-ui)  [![Donate for PatrikX3 / P3X](https://img.shields.io/badge/Donate-PatrikX3-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)





[//]: #@corifeus-footer:end
