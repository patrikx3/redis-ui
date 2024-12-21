[//]: #@corifeus-header

# 📡 P3X Redis UI: A highly functional and convenient database GUI that fits in your pocket, accessible on both responsive web and desktop applications

                        
[//]: #@corifeus-header:end

### v2024.10.121
Released on 12/21/2024
* BUGFIX: Enable Mac OS build.

### v2024.10.115
Released on 12/21/2024
* BUGFIX: Available in Flatpak again.

### v2024.10.114
Released on 12/21/2024
* CHORE: Updated all packages.

### v2024.10.108
Released on 11/26/2024
* CHORE: Updated all packages.

### v2024.10.106
Released on 07/02/2024
* CHORE: Updated all packages.

### v2024.4.340
Released on 06/09/2024
* FEATURE: Further rounded components.

### v2024.4.329
Released on 06/06/2024
* FEATURE: Enable rounded buttons and toolbars.

### v2024.4.327
Released on 05/21/2024
* BUGFIX: Build problem

### v2024.4.322
Released on 05/21/2024
* FEATURE: Enable Apple Store. This should be the first release version on Apple Store.

### v2024.4.321
Released on 05/21/2024
* FEATURE: Enable Electron quit shortcut on Control or Command and Q.

### v2024.4.308
Released on 05/20/2024
* BUGFIX: The console button was always showing even though there was no connection
* FEATURE: Enable universal build.

### v2024.4.272
Released on 05/17/2024
* FEATURE: Enable MacOS certificate.

### v2024.4.255
Released on 05/14/2024
* BUGFIX: In readonly mode, I disabled the console, which was an error. Now you can in readonly, receive monitor patterns in the console.

### v2024.4.253
Released on 05/13/2024
* BUGFIX: The Electron app was not working.

### v2024.4.252
Released on 05/07/2024
* BUGFIX: The Electron app was not working.

### v2024.4.251
Released on 05/04/2024
* CHORE: Updated all packages and NodeJs using v22.

### v2024.4.242
Released on 04/25/2024
* BUGFIX: Console is not available in read only mode.

### v2024.4.240
Released on 04/25/2024
* FEATURE: Disable `subscribe`, `monitor`, `quit`, `psubscribe` in the console. 

### v2024.4.238
Released on 04/24/2024
* BUGFIX: In the PubSub monitor with input, was not always working

### v2024.4.237
Released on 04/24/2024
* CHORE: Updated to Electron v30
* CHORE: Updated packages to latest versions
* FEATURE: In the PubSub monitor, an input can filter the patterns to receive.

### v2024.4.233
Released on 04/04/2024
* FEATURE: Refactored the main menus in reverse order.

### v2024.4.232
Released on 04/04/2024
* BUGFIX: Pika Redis parser fix.

### v2024.4.231
Released on 04/03/2024
* BUGFIX: The last update was triggering an alert.

### v2024.4.230
Released on 04/03/2024
* FEATURE: Pika works, but with some small errors.

### v2024.4.228
Released on 04/02/2024
* BUGFIX: In the latest updates, instead of the web UI it was saying `operational`.

### v2024.4.227
Released on 04/01/2024
* FEATURE: When the conenction in Redis is closed, handle the error. Change the behavior on catching exceptions, when the connection says `Connection is closed.`, disconnect from the connection.

### v2024.4.226
Released on 04/01/2024
* BUGFIX: Further localization for Russian, Chinise and English.

### v2024.4.225
Released on 04/01/2024
* BUGFIX: Further localization for Russian, Chinise and English.

### v2024.4.224
Released on 04/01/2024
* BUGFIX: The SSH feature was showing wrong clients count on the settings connections list.

### v2024.4.223
Released on 04/01/2024
* FEATURE: Progress icon on saving and uploading because of binary data could be big.

### v2024.4.222
Released on 03/31/2024
* FEATURE: Fix Russian for missing translations in some package.
* FEATURE: On buffer, it shows the size of the data.

### v2024.4.221
Released on 03/31/2024
* FEATURE: Upload binary data confirm and toast dialog for all keys.

### v2024.4.220
Released on 03/31/2024
* FEATURE: Confirm for key string uploading.

### v2024.4.219
Released on 03/31/2024
* FEATURE: Responsive fix for new connection list in settings.

### v2024.4.218
Released on 03/31/2024
* FEATURE: Uploading buffer in string type in editor.

### v2024.4.217
Released on 03/31/2024
* BUGFIX: In the string key fix as it is automatically decide if it is buffer or string.

### v2024.4.215
Released on 03/31/2024
* FEATURE: On the settings page, show the connected clients count.
* FEATURE: Show a disconnect button on the settings connections list.
* FEATURE: The connection form fieldset border color is dark/light mode.
* BUGFIX: In the string key on cancel it hide the value.

### v2024.4.213
Released on 03/31/2024
* BUGFIX: Fix memory leak.

### v2024.4.212
Released on 03/30/2024
* BUGFIX: Logging update on the server side.

### v2024.4.211
Released on 03/30/2024
* BUGFIX: Fix redirection issue and add watch for connection state and if undefined go to the settings page.

### v2024.4.210
Released on 03/30/2024
* FEATURE: Fix redirection issue and add watch for connection state and if undefined go to the settings page.

### v2024.4.209
Released on 03/30/2024
* FEATURE: Change the connection error handling.

### v2024.4.208
Released on 03/30/2024
* FEATURE: Change the connection error handling.

### v2024.4.206
Released on 03/30/2024
* FEATURE: Change the connection form.

### v2024.4.202
Released on 03/30/2024
* FEATURE: On the connection form reveal the password as text.

### v2024.4.201
Released on 03/30/2024
* BUGFIX: SSH error handling 2.

### v2024.4.200
Released on 03/30/2024
* BUGFIX: SSH error handling (it was crashing the app).

### v2024.4.199
Released on 03/30/2024
* FEATURE: Show connection ID in the connection editor.

### v2024.4.198
Released on 03/29/2024
* BUGFIX: Cluster retry strategy was infinite. Now it is turned off.

### v2024.4.197
Released on 03/29/2024
* BUGFIX: Cluster was not working.
* BUGFIX: Console history was not working properly.

### v2024.4.194
Released on 03/29/2024
* BUGFIX: Algorithm enhanced in TLS handling.

### v2024.4.193
Released on 03/29/2024
* BUGFIX: The connection dialog node index was wrongly named first, when the first on that list is the second as the main redis settings is the first node.

### v2024.4.192
Released on 03/29/2024
* BUGFIX: The clone function in material project was keeping the AngularJs hash key. Now fixed.

### v2024.4.191
Released on 03/29/2024
* FEATURE: Sentinel name is different from the connection name.

### v2024.4.190
Released on 03/29/2024
* FEATURE: SSH tunnel is working with single instance (cluster and sentinel is not done).

### v2024.4.189
Released on 03/29/2024
* BUGFIX: In the console, if you keep the monitor on, it will not crash if you keep on the screen for a long time (as the output console could be too big), now, only keep the last 256 items in the console.

### v2024.4.188
Released on 03/28/2024
* BUGFIX: AngularJs error fix.

### v2024.4.187
Released on 03/28/2024
* FEATURE: Removed the Overview menu in the Electron main menu as it was not used.
* FEATURE: Sentinel support.

### v2024.4.186
Released on 03/27/2024
* CHORE: Corifeus release.

### v2024.4.181
Released on 03/26/2024
* FEATURE: The default theme is basaed on the preference of the light/dark of the host. (Enterprise / Dark enterprise as default now)
* FEATURE: Added SNAP ARM 32bit version

### v2024.4.180
Released on 03/26/2024
* FEATURE: The text area is using Roboto Mono font style.
* BUGFIX: The zset list was not working for editing the data.

### v2024.4.179
Released on 03/26/2024
* BUGFIX: In the quick console, it was always reloading the redis key and associated data, which is bad when we are using a 5MB binary data. Redis key data refresh is manual now only.

### v2024.4.178
Released on 03/25/2024
* BUGFIX: In strings type, the editing when validate JSON enabled it was not working as expected.

### v2024.4.177
Released on 03/24/2024
* BUGFIX: The set member on click was not showing the editing value.

### v2024.4.175
Released on 03/24/2024
* FEATURE: When loading a key, when big binary data, we are using a circular progress component.

### v2024.4.174
Released on 03/24/2024
* BUGFIX: Fixed an error in the stream size bytes calculating.

### v2024.4.173
Released on 03/24/2024
* FEATURE: Renamed from buffer to binary buttons and labels.

### v2024.4.172
Released on 03/24/2024
* BUGFIX: Big data for clipboard was slow. Now, with binary, it is not working, but text, it is perfect.
* FEATURE: Shows the data size in all keys.

### v2024.4.170
Released on 03/24/2024
* FEATURE: With values of bigger than 0.5MB, it is showing the editor as buffer.

### v2024.4.169
Released on 03/24/2024
* FEATURE: Buffer uploading is working for string, hash, list, set, zset.

### v2024.4.166
Released on 03/23/2024
* FEATURE: Buffer downloading is working for string, hash, list, set, zset.
* BUGFIX: The indexing was wrong with the paging in the hash, list, set, zset.

### v2024.4.165
Released on 03/21/2024
* BUILD: Further more configuration for Flathub.

### v2024.4.164
Released on 03/21/2024
* BUILD: Added more configuration for Flathub.

### v2024.4.163
Released on 03/21/2024
* BUILD: Release test for Flathub again.

### v2024.4.160
Released on 03/19/2024
* BUILD: Release test for Flathub.

### v2024.4.158
Released on 03/18/2024
* FEATURE: Modified the tree hover behavior, using Material logic.

### v2024.4.156
Released on 03/17/2024
* FEATURE: Modified the tree hover behavior.

### v2024.4.155
Released on 03/10/2024
* BUGFIX: Setting the buffer and then again upload trying, it is not working. Now, it is always uploading (at least, it tries).

### v2024.4.154
Released on 03/10/2024
* CHORE: Added a hover state in the tree.

### v2024.4.153
Released on 03/10/2024
* CHORE: Build fix.

### v2024.4.150
Released on 03/09/2024
* BUGFIX: The buffer for the translatation was not working in other than English.


### v2024.4.149
Released on 03/09/2024
* FEATURE: In the string type, you can upload and download a buffer.
* FEATURE: When uploading, it allows up to 256MB, but Redis can restrict this size.


### v2024.4.148
Released on 03/09/2024
* CHORE: Update all packages.
  
### v2024.4.141
Released on 03/08/2024
* BUGFIX: Added info to the vulnerabilities, that the scout is showing and provided info as well.

### v2024.4.140
Released on 03/08/2024
* BUGFIX: Some hover states in the buttons in the material GUI were not hovering, now it works.

### v2024.4.139
Released on 03/07/2024
* FEATURE: Switch from Docker `node:slim` which is latest version, now, we use the LTS version called `node:lts-slim`.
* FEATURE: Docker compose `yml` file is updated to version 3.
* FEATURE: Disabled the license feature in the server, a bit increased the speed of the server - using less processing.
* CHORE: Updated the Redis v7.0.15 commands, when from the server commands are not available, it has to be manually to be copied to the code, so that the console autocomplete will work.
* BUGFIX: The `quit` command is disabled.
* BUGFIX: Fixed a version error, that in NPM version was different from released in Github.

### v2024.4.136
Released on 03/05/2024
* BUGFIX: In Docker, it was not working with the readonly option.

### v2024.4.134
Released on 02/28/2024
* FEATURE: The values were not showing the white space.

### v2024.4.132
Released on 02/28/2024
* FEATURE: Add a key to the existing keys (like sub-key). Right now, it is only in the tree, now it is in the key gui as well.
* FEATURE: When adding to an existing key, add as the default key is the key plus the tree divider.

### v2024.4.130
Released on 02/28/2024
* BUGFIX: The App stopped working.

### v2024.4.128
Released on 02/25/2024
* BUGFIX: The keys count calculation fix.

### v2024.4.126
Released on 02/25/2024
* FEATURE: Build MacOS on Intel and Apple silicon.
* FEATURE: The build for MacOS and Windows is deployed using GitHub Actions.

### v2024.4.115
Released on 02/25/2024
* BUGFIX: There was a static path that was not working in the server.

### v2024.4.113
Released on 02/25/2024
* CHORE: Update to latest versions of all packages including Electron.
* BUGFIX: The Fontawesome animation was not working.
* FEATURE: Add overlay show/hide functionality and disable escape key
* BUGFIX: Fix languages in the JSONEditor and Moment.

### v2024.4.107
Relesed on 02/06/2024
* CHORE: Update to latest version of 2024 and update all packages.


## Older change logs     
[Change log 2023](change-log.2023.md)  
[Change log 2022](change-log.2022.md)  
[Change log 2021](change-log.2021.md)  
[Change log 2020](change-log.2020.md)  
[Change log 2019](change-log.2019.md)  
[Change log 2018](change-log.2018.md)  
  
[//]: #@corifeus-footer

---


## Support Our Open-Source Project ❤️
If you appreciate our work, consider starring this repository or making a donation to support server maintenance and ongoing development. Your support means the world to us—thank you!

### Server Availability
Our server may occasionally be down, but please be patient. Typically, it will be back online within 15-30 minutes. We appreciate your understanding.

### About My Domains
All my domains, including [patrikx3.com](https://patrikx3.com) and [corifeus.com](https://corifeus.com), are developed in my spare time. While you may encounter minor errors, the sites are generally stable and fully functional.

### Versioning Policy
**Version Structure:** We follow a Major.Minor.Patch versioning scheme:
- **Major:** Corresponds to the current year.
- **Minor:** Set as 4 for releases from January to June, and 10 for July to December.
- **Patch:** Incremental, updated with each build.

**Important Changes:** Any breaking changes are prominently noted in the readme to keep you informed.

---


[**P3X-REDIS-UI**](https://corifeus.com/redis-ui) Build v2024.10.120

 [![NPM](https://img.shields.io/npm/v/p3x-redis-ui.svg)](https://www.npmjs.com/package/p3x-redis-ui)  [![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)






[//]: #@corifeus-footer:end


