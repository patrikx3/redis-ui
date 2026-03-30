[//]: #@corifeus-header

# 📡 P3X Redis UI: A highly functional and convenient database GUI that fits in your pocket, accessible on both responsive web and desktop applications

                        
[//]: #@corifeus-header:end

### v2026.4.323
Released on 03/30/2026
* FEATURE: Added custom humanize-duration language support for 13 locales.
* DOCS: Updated supported languages documentation to 54 locales.

### v2026.4.322
Released on 03/30/2026
* FEATURE: Expanded to 54 locales with 33 new locale folders and 4 new languages (Bosnian, Sinhala, Swahili, Tamil), fixed locale wiring, and widened language menu.
* PERF: Reverted production splitChunks that was inflating total bundle size.
* REFACTOR: Removed unused Angular components, wrappers, utilities, and legacy AngularJS files.

### v2026.4.321
Released on 03/29/2026
* CHORE: Improved publish script dependency update reliability.

### v2026.4.319
Released on 03/29/2026
* FEATURE: Made all features free by removing license requirements and enabling enterprise mode by default.
* DOCS: Cleaned up HTML comment placement in license configuration section.

### v2026.4.318
Released on 03/29/2026
* DOCS: Removed obsolete AngularJS CVE documentation.
* DOCS: Updated README to reflect CodeMirror editor integration.
* BUGFIX: Use yarn upgrade instead of yarn install to pick up latest published packages in the build pipeline.
* DOCS: Added release build pipeline info to AGENTS.md.

### v2026.4.316
Released on 03/29/2026
* FEATURE: Added RedisJSON module support with key read/write operations.
* FEATURE: Added translated display labels for duplicate stream field entries.
* BUGFIX: Allow free viewing of RedisJSON keys without restrictions.
* BUGFIX: Use translated strings for stream tooltips and labels.
* BUGFIX: Added dark scrollbar styling and theme synchronization to the Electron shell.
* DOCS: Updated pro and enterprise license pricing.

### v2026.4.315
Released on 03/29/2026
* BUGFIX: Use yarn upgrade instead of yarn install in the publish pipeline to correctly pick up latest published packages.
* BUGFIX: Fixed release name format and updated existing releases with changelog entries.

### v2026.4.314
Released on 03/29/2026
* FEATURE: Added RedisJSON module support with key read/write operations and free viewing of RedisJSON keys.
* FEATURE: Replaced ACE and jsoneditor with CodeMirror 6 editor, refactored JSON viewer to use mat-tree, added wrap toggle, theme colors, and OnPush change detection for console.
* BUGFIX: Added dark scrollbar styling and theme sync to the Electron shell.
* BUGFIX: Handle untagged draft releases and add worker-src CSP directive for blob workers.
* DOCS: Updated pro and enterprise license pricing.

### v2026.4.313
Released on 03/29/2026
* FEATURE: Redesigned stream key view with structured field/value display, JSON detection, copy per entry/field, and integrated JSON viewer.
* CHORE: Switched publish script to use yarn upgrade for reliable dependency resolution.

### v2026.4.312
Released on 03/29/2026
* FEATURE: Allow viewing RedisJSON keys on the free tier, with edit and create gated behind Pro+.
* BUGFIX: Added dark scrollbar support and theme synchronization to the Electron shell.
* REFACTOR: Removed global variable hacks and switched to postMessage for the Electron bridge communication.
* DOCS: Added release build pipeline info and noted macOS/Windows builds are done by GitHub CI.

### v2026.4.311
Released on 03/29/2026
* PERF: Enabled Angular OnPush change detection strategy for improved rendering performance.
* CHORE: Updated release name format and synced existing GitHub releases with changelog content.

### v2026.4.310
Released on 03/29/2026
* BUGFIX: Fixed handling of untagged draft releases in the publish workflow.
* CHORE: Added worker-src CSP directive to support blob workers.

### v2026.4.309
Released on 03/29/2026
* PERF: Extended OnPush change detection strategy across all Angular components.
* CHORE: Updated Content Security Policy (CSP) and improved toast notification styling.

### v2026.4.308
Released on 03/29/2026
* FEATURE: Added RedisJSON module support with key read/write operations, viewer, and editor.
* FEATURE: Added ReJSON as a licensed feature.
* FEATURE: Added dark scrollbar styling.
* REFACTOR: Enabled OnPush change detection for main components for better performance.
* REFACTOR: Replaced detectChanges with markForCheck in breakpoint observers.
* BUGFIX: Resolved race condition causing empty keys and statistics on initial load.
* BUGFIX: Fixed ChangeDetectorRef handling in BreakpointObserver subscriptions and MDC typography.
* CHORE: Dropped armv7l (32-bit ARM) build targets.

### v2026.4.307
Released on 03/29/2026
* FEATURE: Replaced inline JSON editor with interactive tree view and dialog editor for improved usability.
* PERF: Switched to AOT compilation, removing @angular/compiler (~1MB bundle savings).
* PERF: Removed jQuery dependency, replaced with native DOM APIs (~180KB savings).
* PERF: Replaced moment.js with dayjs (~400KB savings).
* REFACTOR: Simplified Webpack optimization and chunk splitting configuration by build mode.
* BUGFIX: Fixed Webpack runtime chunk issue in production builds.
* BUGFIX: Added Angular Linker (Babel) for AOT-compatible node_modules resolution.

### v2026.4.306
Released on 03/29/2026
* FEATURE: Added Redis 8 ReJSON (JSON data type) support — view, create, edit, format, copy, and download JSON documents.
* FEATURE: Auto-detect Redis modules on connection via MODULE LIST.
* FEATURE: JSON keys shown in tree with dedicated icon.
* FEATURE: JSON type available in Add Key dialog (Pro/Enterprise only).
* REFACTOR: Migrated Electron webview to iframe with postMessage communication for improved stability.
* REFACTOR: Enabled OnPush change detection on key components to eliminate NG0100 errors.
* REFACTOR: Replaced detectChanges with markForCheck in all BreakpointObserver subscriptions.
* BUGFIX: Fixed Electron app intermittent loading spinner (race condition with server startup).
* BUGFIX: Fixed search filter not triggering on page load when restored from cookie.
* BUGFIX: Fixed "undefined:" key prefix in Add Key dialog when opened from root.
* CHORE: Added feature-pro-rejson-required and invalid-json-value error strings to all 21 languages.
* CHORE: Updated README with ReJSON tier policy documentation.
* CHORE: Dropped armv7l (32-bit ARM) build targets.

### v2026.4.305
Released on 03/29/2026
* REFACTOR: Enabled OnPush change detection for main components and replaced detectChanges with markForCheck in breakpoint observers.
* REFACTOR: Simplified webpack optimization and chunk splitting configuration with build-mode-specific settings.
* PERF: Added Angular Linker (Babel) for AOT-compatible node_modules processing.
* BUGFIX: Disabled runtime chunk in production webpack builds to fix output issues.

### v2026.4.304
Released on 03/29/2026
* REFACTOR: Migrated from AngularJS hybrid to standalone Angular with vanilla toast notifications.
* REFACTOR: Migrated entire codebase from CommonJS to ES modules (server and client).
* REFACTOR: Migrated Electron webview to iframe with postMessage communication.
* PERF: Switched to AOT compilation, removing @angular/compiler (~1MB savings).
* PERF: Removed jQuery dependency, using native DOM (~180KB savings).
* PERF: Replaced moment.js with dayjs (~400KB savings).
* FEATURE: Offloaded key sorting and tree building to a Web Worker for smoother UI.
* FEATURE: Added functionality to promote GitHub draft releases to published.
* BUGFIX: Resolved race condition causing empty keys and statistics on initial load.
* BUGFIX: Fixed ChangeDetectorRef in all BreakpointObserver subscriptions and MDC typography.
* BUGFIX: Fixed search enter, tree refresh, and socket tick issues.
* BUGFIX: Fixed test-connection settlement logic to prevent double-emit.
* BUGFIX: Fixed p3xrDevMode reference error in production build.
* BUGFIX: Fixed accordion elevation, dark border, layout padding, and list weight.
* REFACTOR: Removed legacy AngularJS source files and console menu item from main menu.
* CHORE: Dropped armv7l (32-bit ARM) build targets.

### v2026.4.303
Released on 03/29/2026
* FEATURE: Added functionality to promote GitHub draft releases to published via API.
* BUGFIX: Fixed GitHub release promotion to handle draft releases correctly (drafts are not returned by the tags endpoint).
* CHORE: Dropped armv7l (32-bit ARM) build targets (unsupported in Electron 41).

### v2026.4.302
Released on 03/29/2026
* FEATURE: Offload key sorting and tree building to a Web Worker for improved responsiveness.
* FEATURE: Replace AngularJS shell with vanilla toast notifications.
* PERF: Switch to AOT compilation, removing @angular/compiler (~1MB savings).
* PERF: Remove jQuery dependency, use native DOM (~180KB savings).
* PERF: Replace moment.js with dayjs (~400KB savings).
* REFACTOR: Complete migration from AngularJS hybrid to standalone Angular.
* REFACTOR: Migrate codebase from CommonJS to ES modules across all packages.
* REFACTOR: Remove legacy AngularJS source files.
* REFACTOR: Remove console menu item from main menu.
* REFACTOR: Extract Redis commands into MainCommandService.
* BUGFIX: Resolve race condition causing empty keys and statistics on initial load.
* BUGFIX: Add ChangeDetectorRef to all BreakpointObserver subscriptions and fix MDC typography.
* BUGFIX: Fix search enter, tree refresh, socket tick, and remove deprecated animations.
* BUGFIX: Fix accordion elevation, dark border subtle, layout padding, and list weight.
* BUGFIX: Refactor test-connection settlement logic to prevent double-emit.
* BUGFIX: Fix p3xrDevMode reference error in production build.
* BUGFIX: Add Angular Linker (babel) for AOT-compatible node_modules.
* DOCS: Rewrite and reorganize README for clarity and conciseness.
* CHORE: Simplify license and add auto-changelog support.

### v2026.4.201
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


[**P3X-REDIS-UI**](https://corifeus.com/redis-ui) Build v2026.4.323

 [![NPM](https://img.shields.io/npm/v/p3x-redis-ui.svg)](https://www.npmjs.com/package/p3x-redis-ui)  [![Donate for PatrikX3 / P3X](https://img.shields.io/badge/Donate-PatrikX3-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)





[//]: #@corifeus-footer:end


