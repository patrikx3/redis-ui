[//]: #@corifeus-header

# 📡 P3X Redis UI: A highly functional and convenient database GUI that fits in your pocket, accessible on both responsive web and desktop applications

                        
[//]: #@corifeus-header:end
# AI Configuration

Natural language → Redis commands via the Groq API. Works out of the box.

## How It Works

By default, AI queries route through `network.corifeus.com` (Groq API call handled there — no configuration needed).

If you set your own Groq API key, you can:

- **Keep routing via `network.corifeus.com`** (default) — your key is used but queries still go through the proxy for analytics
- **Route directly to Groq** — toggle "Route via network.corifeus.com" OFF in AI Settings

## AI Settings (UI)

Settings page → AI Settings panel:

- **AI Enabled** — on/off (enabled by default)
- **Route via network.corifeus.com** — only visible with a valid Groq API key
- **Groq API Key** — set via Edit (validated against Groq before saving)

## Configuration Options

**Recommended:** configure via the GUI first. Optionally lock it via `groqApiKeyReadonly: true` in `p3xrs.json` or `--groq-api-key-readonly` CLI flag.

`p3xrs.json`:

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
| `groqApiKey` | string | `""` | Free key at [console.groq.com](https://console.groq.com) |
| `aiEnabled` | boolean | `true` | Enable AI auto-detect on unrecognized commands; `ai:` prefix always works |
| `aiUseOwnKey` | boolean | `false` | `true` = direct to Groq, `false` = via network.corifeus.com |
| `groqApiKeyReadonly` | boolean | `false` | Lock all AI settings (toggles disabled, Edit hidden) |

CLI:

```bash
p3xrs --groq-api-key gsk_your_key_here
p3xrs --groq-api-key-readonly
```

## Readonly Mode

To lock AI settings on a public instance — set the key in `p3xrs.json` plus `groqApiKeyReadonly: true`, or pass `--groq-api-key --groq-api-key-readonly`. Combine with `-r` (readonly connections) which also disables AI settings.

Example systemd unit:

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