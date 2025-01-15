[//]: #@corifeus-header

# 📡 P3X Redis UI: A highly functional and convenient database GUI that fits in your pocket, accessible on both responsive web and desktop applications

                        
[//]: #@corifeus-header:end
### v2020.10.533
* FEATURE: Allow by connection to be read only mode (GUI elements removed and console is disabled, only pub/sub monitor or select database allowed)



### v2020.10.530
* BUGFIX: Settings layout fix.



### v2020.10.528
* FEATURE: Further font styling.



### v2020.10.524
* FEATURE: All inputs and actually all text is using Robot/Roboto Mono with 500 weight.



### v2020.10.520
* FEATURE: All inputs and actually all text is using Robot/Roboto Mono with 500 weight.



### v2020.10.518
* BUGFIX: In certain use cases the in-view module was not triggering rendering the components that were supposed to be rendered. 



### v2020.10.516
* BUGFIX: In certain use cases the in-view module was not triggering rendering the components that were supposed to be rendered. 



### v2020.10.513
* BUGFIX: Highlight was happening on folders as well (now, only keys are highlighting)



### v2020.10.508
* FEATURE: Added highlight in the tree.



### v2020.10.506
* FEATURE: Was missing the cursor pointer for the tree



### v2020.10.499
* CHORE: Upgrade deps (Socket.IO v3 mainly)



### v2020.10.496
* BUILD: Removed 32 bit versions



### v2020.10.494
* BUGFIX: Could not quit in MacOS.



### v2020.10.492
* FEATURE: Enhance themes
* BUGFIX: Recent update architecture change broke MacOS version.



### v2020.10.489
* FEATURE: Enhance build and themes.



### v2020.10.485
* BUGFIX: Fix button order by using Material Design Specs.
* FEATURE: Enhance Matrix theme.



### v2020.10.480
* BUGFIX: On mobile, it was not adding a new key.



### v2020.10.477
* FEATURE: Enhance hash, list, set and zset table design.



### v2020.10.473
* FEATURE: Enhance hash, list, set and zset table design.



### v2020.10.471
* BUGFIX: In the production material client was not showing the zebra stripes in the hash, list, set and zset lists.



### v2020.10.469
* FEATURE: Enhance key TTL counter (use Vanilla Js instead of AngularJs)



### v2020.10.467
* FEATURE: `Ace` editor optimization 



### v2020.10.460
* FEATURE: Design optimization 



### v2020.10.458
* FEATURE: Design optimization 



### v2020.10.453
* BUILD: Further optimization to reduce the bundle size (~300kB further removal) 



### v2020.10.451
* FEATURE: Speed optimization on phones



### v2020.10.449
* FEATURE: Speed optimization on phones



### v2020.10.447
* FEATURE: Speed optimization on phones



### v2020.10.445
* BUGFIX: Scrollbar fix on the tree.



### v2020.10.443
* BUGFIX: Scrollbar fix on the tree.



### v2020.10.441
* BUGFIX: Scrollbar fix on the tree.



### v2020.10.434
* FEATURE: Tune design by using borders for main content containers. Most contrast is in the Matrix theme.



### v2020.10.432
* FEATURE: Enhance navigation during switching connections. 
* BUILD: During development use for webpack dev server `contentBase` function.
* FEATURE: Tune design by using borders for main content containers. Most contrast is in the Matrix theme.
* FEATURE: Re-design the inputs, now it is more uniform.



### v2020.10.429
* BUGFIX: Additional theme fixes.
* BUGFIX: Reload key button was not mirroring the new data right away.



### v2020.10.423
* BUGFIX: Remove overview tab as it is not complete and is providing wrong data. 



### v2020.10.421
* FEATURE: On Electron, now, finds an open port and load the app from that port. Before, it was using fixed 7844 port, but you could not use the app at the same time with multiple users. Now, it does.



### v2020.10.418
* BUGFIX: Electron and Web version was using different versioning, now, it is matched.



### v2020.10.413
* BUGFIX: Additional themes fix.



### v2020.10.411
* BUGFIX: Additional themes fix.



### v2020.10.408
* BUGFIX: Additional themes fix.



### v2020.10.406
* BUGFIX: Because of the many themes, some components were wrong (colors, background colors), so, I fixed a few components in all themes.



### v2020.10.404
* BUGFIX: During connection change, it tries to load a key from the previous connection and shows an alert. Now, during connection via menu, it always goes to statistics.



### v2020.10.398
* BUILD: Dynamic import via Webpack to optimize bundle size.



### v2020.10.395
* BUILD: Optimize webpack bundle size.



### v2020.10.393
* BUGFIX: Layout pager fix



### v2020.10.387
* BUGFIX: Build fix.



### v2020.10.380
* FEATURE: Enhance treecontrol colors.



### v2020.10.377
* FEATURE: Enhance colors.



### v2020.10.375
* FEATURE: The tree leafs are colorized (instead of black/white). 



### v2020.10.371
* FEATURE: Replaced the AngularJs Treecontrol leaf icons to FontAwesome.



### v2020.10.367
* BUGFIX: The `set` type key was not showing the data.



### v2020.10.365
* FEATURE: Tree divider is configurable in `p3xrs.json` as an array of characters. It can be disabled by setting an empty array, otherwise it will use the default `:`, `/`, `|`, `-`, `@`. 



### v2020.10.363
* FEATURE: Tree divider as a selector popup beside the tree divider input for common scenarios.



### v2020.10.361
* BUGFIX: Azure/Google/Amazon database count fix.



### v2020.10.359
* FEATURE: Enable the database selector via a hack (probing until a db index is found wrong) for Azure/Google/Amazon.



### v2020.10.350
* BUGFIX: Was forcing only using with socket.io websocket, now allow to long-poll.



### v2020.10.348
* BUGFIX: build fix



### v2020.10.346
* BUGFIX: https://github.com/patrikx3/redis-ui/issues/41



### v2020.10.329
* BUGFIX: Use `humanize-duration` package to convert TTL seconds to human string - replaced my own implementation it was not respecting the leap year.
* FEATURE: Enhance the key TTL listing.



### v2020.10.327
* CHORE: AngularJs Material v1.2.0 is changing the theme, probably wait until the new release is fixed. The colors are off after upgrade.
* FEATURE: Dark toast has a white border.



### v2020.10.325
* FEATURE: The Electron snack bar is clickable to hide the toast. (is always black, not themed)



### v2020.10.315
* FEATURE: Matrix theme - in progress.
* FEATURE: On the key page the set ttl is a dialog now, and you can convert text to seconds (eg. 1d -> 86400)



### v2020.10.313
* BUGFIX: Set TTL function was throwing an error.



### v2020.10.311
* FEATURE: Tuned the colors on all themes.



### v2020.10.307
* FEATURE: Tuned the colors on all themes.



### v2020.10.303
* FEATURE: Revamped theme menu. Ordered themes. Added a new default new dark mode that is based on the light theme.



### v2020.10.301
* FEATURE: Name change



### v2020.10.180
* FEATURE: Name change



### v2020.10.172
* FEATURE: Until further notice, all features are free.



### v2020.10.170
* BUGFIX: JSONEditor popups were not using dark mode in dark theme, added dark mode for JSONEditor popups 



### v2020.10.165
* BUGFIX: Force all monospace font to Roboto Mono 
* FEATURE: Beautify the JSON viewer



### v2020.10.161
* BUGFIX: JSONEditor popup was not compatible with AngularJs Material popup, now works 



### v2020.10.158
* FEATURE: Revamped home page toolbar 



### v2020.10.155
* FEATURE: Revamped home page toolbar 



### v2020.10.148
* BUGFIX: Was missing the copy icon and function in the key value editor popup
* BUGFIX: Was missing the JSON viewer in the key value editor popup



### v2020.10.141
* FEATURE: You can change the language from the WEB GUI via using a helper Express app in Electron at 7845 port, the menu is not needed (ALT) - this is issue is not present in web version



### v2020.10.138
* BUGFIX: The GitHub links were not working 



### v2020.10.135
* FEATURE: The menu is initial hidden, you can enable by clicking ALT. 



### v2020.10.133
* FEATURE: Use Roboto Mono instead of monospace for data display



### v2020.10.131
* FEATURE: Allow to copy data
* FEATURE: The console moved to the main header (always shown if connected)



### v2020.10.123
* FEATURE: Collapse/expand JSON viewer



### v2020.10.121
* FEATURE: Enable JSON Viewer and JSON Format in all versions (donated, non donated) 



### v2020.10.119
* FEATURE: By default enable key sorting with natural compare
* BUGFIX: The main page with the tree layout, was constructed with debounce, now it is instant.

### V2020.10.112
* BUGFIX: The new key count limit feature was crashing, found a good solution.
* BUGFIX: On search, was not resetting the page (sometimes was showing invalid page)



### v2020.10.107
* FEATURE: Allow paging to 1000 items (from 500 - since deferred rendering is faster)
* FEATURE: Limit max key count in the tree settings or the settings page (The maximum key count value must be an integer between 100 and 100000)
* FEATURE: The settings popup is more beautiful.



### v2020.10.105
* FEATURE: Analytics upgrade
* CORE: JsonEditor hex editor color fix (pkg update)
* BUGFIX: JSONEditor does not allow to work with AngularJs Material dialog, as it could happen, that a JSONEditor dialog on escape is not closing, while the parent is closing, so for now, it is fixed, you have to use with cancel or the top right big X to close the dialog.



### v2020.4.316
* BUILD: Wrong version to release.
* CHORE: Updated deps.



### v2020.4.307
* BUGFIX: Layout performance, safe vs sorry 



### v2020.4.303
* BUGFIX: Layout performance 



### v2020.4.301
* FEATURE: JSON editor in code mode (ACE) for light theme using the github theme instead of the jsoneditor theme. 
* BUGFIX: In small screen, cancel text is not hidden and missing tooltip
* FEATURE: Renamed Edit JSON Tree label to Edit JSON (with 4 sub-types: tree, code, view, preview)
* BUGFIX: There was a memory leak in JSON Editor dialog (was not using destroy method on JSONEditor)



### v2020.4.295
* FEATURE: Enable code editor in JSON Editor when switching type to code, it is working with dark mode as well



### v2020.4.292
* BUGFIX: More intelligent error handling
* BUGFIX: Initial main page, the calculating the layout was flickering
* BUGFIX: JsonEditor dark mode



### v2020.4.284
* FEATURE: Toast dismiss on click
* FEATURE: Remove AngularJs being slow in the paging count redis settings
* FEATURE: the tabs content is scrollable, so the tab labels are not scrollable anymore, so you always keep the tab labels to be shown
* BUGFIX: More intelligent error handling



### v2020.4.277
* BUGFIX: Remove sensitive data from Google analytics



### v2020.4.275
* BUGFIX: missing on the search input clear button



### v2020.4.272
* FEATURE: GUI align layout on confirm popup (reverse button order)
* FEATURE: keep the search box content so keeps in new requets will be filtered with this search box content 
* BUGFIX: fix crash during rename, delete, set ttl key with a big open tree, for now there is a fix, but check if it is crashing again, until i find a 100% solution 



### v2020.4.264
* FEATURE: default paging default increased from 50 to 250
* FEATURE: layout for the string key editor, position change about is valid json switch



### v2020.4.259
* FEATURE: Enable/disable animation on AngularJs/AngularJs Material in the settings / tree settings popup. The default is animation disabled from now.



### v2020.4.257
* FEATURE: Google analytics



### v2020.4.241
* FEATURE: only allow in donated version:
  * Cluster
  * AWS ElastiCache
  * Gcloud memorystore
  * Azure Redis



### v2020.4.238
* FEATURE: In JSONEditor save with format
* FEATURE: Enable Google Analytics



### v2020.4.233
* FEATURE: Add format JSON to data.
* FEATURE: Settings for JSON format 2 or 4 spaces.
* BUGFIX: JSONEditor was not working as the app was overriding the document mousemove/mousedown/mouseup.



### v2020.4.226
* BUGFIX: Enable donate-ware plus functions.



### v2020.4.224
* FEATURE: Enable donate-ware plus functions.



### v2020.4.218
* FEATURE: Longer toast hide delay when trying to edit big JSON objects.



### v2020.4.212
* BUGFIX: Fix `fontawesome` performance problem - SVG too slow, using CSS now.



### v2020.4.210
* BUGFIX: Fix `jsoneditor` (has no dark theme)



### v2020.4.208
* FEATURE: Enable JSON editor using https://github.com/josdejong/jsoneditor



### v2020.4.204
* BUGFIX: Layout bugfix.



### v2020.4.202
* FEATURE: Re-enable the desktop (Electron) main header, as it is, in the web version.



### v2020.4.197
* BUGFIX: further deferred tree rendering fix



### v2020.4.194
* BUGFIX: deferred tree rendering fix (collapse/expand was not working as expected)



### v2020.4.192
* BUGFIX: deferred tree rendering fix (collapse/expand was not working as expected)



### v2020.4.189
* FEATURE: deferred tree rendering using `inview` (https://github.com/thenikso/angular-inview) => Check, if a DOM element is or not in the browser current visible viewport. Which means, that we are not rendering the whole tree, but what is currently visible in the viewport, kind of like Facebook does it.



### v2020.4.176
* CORE: update deps, upgrade to Electron v9



### v2020.4.162
* Bugfix: Takes care of [Cannot read property '1' of undefined](https://github.com/patrikx3/redis-ui/issues/34)



### v2020.4.140
* BUGFIX: Docker issue



### v2020.4.139
* BUGFIX: Docker issue



### v2020.4.126
* FEATURE: when testing a connection, we provide an overlay, as sometimes, it takes some time, and if we do not have an overlay, you will think nothing is happening



### v2020.4.124
* CHORE: update all dependencies 



### v2020.4.103
* FEAT: GCloud Memorystore support
* FEAT: Has a different flag for the settings Azure and Aws ElastiCache. Please, change your settings do appropriately what kind of Redis you use.  


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

### 🖥️ Server Availability  
Our server may occasionally be down, but please be patient. Typically, it will be back online within 15-30 minutes. We appreciate your understanding.  

---

### 🌍 About My Domains  
All my domains, including [patrikx3.com](https://patrikx3.com), [corifeus.hu](https://corifeus.hu), and [corifeus.com](https://corifeus.com), are developed in my spare time. While you may encounter minor errors, the sites are generally stable and fully functional.  

---

### 📈 Versioning Policy  
**Version Structure:** We follow a **Major.Minor.Patch** versioning scheme:  
- **Major:** 📅 Corresponds to the current year.  
- **Minor:** 🌓 Set as 4 for releases from January to June, and 10 for July to December.  
- **Patch:** 🔧 Incremental, updated with each build.  

**🚨 Important Changes:** Any breaking changes are prominently noted in the readme to keep you informed.

---


[**P3X-REDIS-UI**](https://corifeus.com/redis-ui) Build v2025.4.116

 [![NPM](https://img.shields.io/npm/v/p3x-redis-ui.svg)](https://www.npmjs.com/package/p3x-redis-ui)  [![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)






[//]: #@corifeus-footer:end