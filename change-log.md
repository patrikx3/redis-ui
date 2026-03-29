[//]: #@corifeus-header

# 📡 P3X Redis UI: A highly functional and convenient database GUI that fits in your pocket, accessible on both responsive web and desktop applications

                        
[//]: #@corifeus-header:end

### v2026.4.202
Released on 03/29/2026
* FEATURE: Replaced AngularJS toast in Electron shell with vanilla HTML toast (black background, white text, click-to-dismiss, auto-dismiss after 5s).
* FEATURE: Removed AngularJS dependency from Electron shell (angular, angular-material, angular-animate, angular-aria, angular-messages).
* FEATURE: Added AGENTS.md folder structure documentation for all three packages (redis-ui, redis-ui-material, redis-ui-server).
* FEATURE: Updated README.md architecture section with full repository structure tree and communication flow diagram.
* BUGFIX: Fixed BreakpointObserver not triggering UI updates — added explicit ChangeDetectorRef.detectChanges() to all 13 components using breakpoint subscriptions.
* BUGFIX: Fixed MDC list item text clipping — allow text wrapping and auto-height for mat-list-item elements.
* BUGFIX: Fixed Angular Material letter-spacing — reset MDC typography tracking CSS variables to use Roboto's natural kerning.
* REFACTOR: Updated README.md to replace "deferred rendering" with "CDK virtual scrolling" and document recent architectural changes (AOT, Web Worker, ESM backend, dayjs).

### v2026.4.201
Released on 03/28/2026
* PERF: Replaced moment.js with dayjs (~400KB savings).
* PERF: Removed jQuery dependency, use native DOM (~180KB savings).
* PERF: Switched to AOT compilation, removed @angular/compiler (~1MB savings).
* PERF: Offloaded key sorting and tree building to a Web Worker for non-blocking UI.
* BUGFIX: Fixed race condition causing empty keys and statistics on initial production load (missing await on async data load, Web Worker concurrent request handling).
* BUGFIX: Fixed p3xrDevMode reference error in production build.
* BUGFIX: Fixed Angular Linker (babel) for AOT-compatible node_modules.
* REFACTOR: Hidden p3xr global from browser console via ProvidePlugin.

### v2026.4.200
Released on 03/27/2026
* FEATURE: Migrated layout component (header/footer toolbars) from AngularJS to Angular Material.
* FEATURE: Migrated error page from AngularJS to Angular.
* FEATURE: Excluded migrated AngularJS components (layout, settings, error) from grunt injector to reduce bundle size.
* FEATURE: Header and footer toolbars now use per-theme colors matching the original AngularJS Layout sub-theme palettes.
* FEATURE: Added elevation shadow on header (8dp) and footer (8dp upward) toolbars.
* FEATURE: Footer responsive breakpoints match AngularJS originals (Theme at 600px, Donate/Connection at 720px, Language/GitHub/Disconnect at 960px).
* FEATURE: Button hover effect on header/footer toolbars with theme-aware colors.
* FEATURE: Uniform icon-to-text gap (4px) for both Font Awesome and Material icons in toolbars.
* FEATURE: Neutralized Angular Material purple-tinted surface colors for all light and dark themes (inputs, dialogs, selects use neutral grey).
* FEATURE: Version/SNAPSHOT label color matches toolbar text color per theme.
* BUGFIX: Fixed infinite renderView recursion caused by Angular JIT compiler fetching index.html as template via webpack historyApiFallback (switched to build-time template inlining with require()).
* BUGFIX: Fixed NG0313 duplicate DatePipe conflict in SettingsComponent.
* BUGFIX: Fixed NG0304 unknown element warnings for AngularJS directives in hybrid mode (CUSTOM_ELEMENTS_SCHEMA).

### v2026.4.125
Released on 03/21/2026
* FEATURE: Added localization support for 18 new languages: Bulgarian (bg), Czech (cs), German (de), Greek (el), Spanish (es), French (fr), Hungarian (hu), Italian (it), Japanese (ja), Dutch (nl), Polish (pl), Portuguese (pt-PT), Romanian (ro), Slovak (sk), Serbian (sr), Swedish (sv), Turkish (tr), Ukrainian (uk).

### v2026.4.124
Released on 03/17/2026
* FEATURE: Allow sentinel and cluster work with SSH on the same networks.
* FEATURE: License update.

### v2026.4.122
Released on 03/16/2026
* FEATURE: License more info.
* BUGFIX: Tree position fix.
* FEATURE: Max devices limit.

### v2026.4.108
Released on 03/15/2026
* FEATURE: Move from different console, make it as on the home an embedded console, so it is all in the same place.

### v2026.4.107
Released on 03/15/2026
* FEATURE: Upgrade build.yml

### v2026.4.105
Released on 03/15/2026
* FEATURE: Moved from Koa to Express the server.
* FEATURE: Enable code securing.

### v2026.4.102
Released on 03/14/2026
* CHORE: Update all packages.
* FEATURE: Enabled licensing.

### v2026.4.101
Released on 03/07/2026
* CHORE: Update all packages.


## Older change logs     
[Change log 2025](change-log.2025.md)  
[Change log 2024](change-log.2024.md)  
[Change log 2023](change-log.2023.md)  
[Change log 2022](change-log.2022.md)  
[Change log 2021](change-log.2021.md)  
[Change log 2020](change-log.2020.md)  
[Change log 2019](change-log.2019.md)  
[Change log 2018](change-log.2018.md)  
  
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


[**P3X-REDIS-UI**](https://corifeus.com/redis-ui) Build v2026.4.125

 [![NPM](https://img.shields.io/npm/v/p3x-redis-ui.svg)](https://www.npmjs.com/package/p3x-redis-ui)  [![Donate for PatrikX3 / P3X](https://img.shields.io/badge/Donate-PatrikX3-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)





[//]: #@corifeus-footer:end


