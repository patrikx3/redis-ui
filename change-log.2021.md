[//]: #@corifeus-header

# 📡 P3X Redis UI: A highly functional and convenient database GUI that fits in your pocket, accessible on both responsive web and desktop applications

                        
[//]: #@corifeus-header:end
### v2021.10.262
Released on 12/15/2021
* BUGFIX: Had to twice click on the search icon.



### v2021.10.254
Released on 12/11/2021
* FEATURE: Russian translation



### v2021.10.252
Released on 11/29/2021
* BUGFIX: JSON editor CSS fix.



### v2021.10.250
Released on 11/18/2021
* BUGFIX: The JSON editor was not working properly in Firefox.



### v2021.10.245
Released on 11/12/2021
* FEATURE: The more complex dialogs width is fixed when content changes.
* FEATURE: The server is more intelligent to find out which features on different Redis instances are working or not (because of this, no more connection options to set if Azure / Aws / Google / DigitalOcean).



### v2021.10.239
Released on 11/12/2021
* FEATURE: Command listing does not need an option (if disabled on the server, no error).



### v2021.10.237
Released on 11/12/2021
* FEATURE: Refactored the connection, disable AWS, Azure, and all others. Now, it always probes the database listing. Can also disable the command listing.



### v2021.10.231
Released on 11/11/2021
* FEATURE: Configurable TLS connection `rejectUnauthorized` option



### v2021.10.227
Released on 11/11/2021
* FEATURE: It was working only with self-signed certificates. Now, works with TLS connection without a self-signed certificate (so totally valid secure connection).



### v2021.10.219
Released on 11/09/2021
* BUGFIX: There was a major bottleneck in the GUI (was using `setInterval` infinity loop instead of `setTimeout`)
* CHORE: Upgraded all deps



### v2021.10.210
Released on 10/27/2021
* BUGFIX: Redis settings dialog was refreshing the tree twice.



### v2021.10.208
Released on 10/27/2021
* FEATURE: Input selection dark mode style.



### v2021.10.204
Released on 10/27/2021
* CHORE: Update to latest NodeJs LTS v16



### v2021.10.198
Released on 10/26/2021
* BUGFIX: Console history fix.



### v2021.10.195
Released on 10/26/2021
* BUGFIX: Electron v15 new window open function update.



### v2021.10.185
Released on 10/26/2021
* FEATURE: Changed the `change-log.md` file name.



### v2021.10.183
Released on 10/26/2021
* FEATURE: Console history is working using local storage, so that history is kept indefinite with 20 entries



### v2021.10.160
Released on 10/26/2021
* BUGFIX: Console history was not working after the autocomplete refactor.



### v2021.10.158
Released on 10/25/2021
* FEATURE: Added more add/delete buttons on the tree key. 
* BUGFIX: After refresh, it lost the tree state.



### v2021.10.156
Released on 10/24/2021
* FEATURE: Added a refresh button to the tree controls.



### v2021.10.154
Released on 10/21/2021
* FEATURE: Replaced the console input alike Bash functionality with an autocomplete popup. 



### v2021.10.125
Released on 9/10/2021
* BUGFIX: Toast layout was wrong.



### v2021.10.123
* FEATURE: Enable connect with TLS (further implementations).



### v2021.10.119
* FEATURE: Enable connect with TLS.



### v2021.10.112
* BUGFIX: Replace `configstore` to `electron-store`



### v2021.10.110
* BUGFIX: Further fix for -> Disable `monitor` command, as it crashes, and it does not work via a GUI.



### v2021.10.108
* BUGFIX: Disable `monitor` command, as it crashes, and it does not work via a GUI.



### v2021.10.106
* BUGFIX: Paging fix (zset and stream was not working). 



### v2021.10.101
* BUGFIX: Performance fixes.



### v2021.4.181
* BUGFIX: Work with port 8080 as well.



### v2021.4.179
* FEATURE: Set the server port based on the environment variable `P3XRS_PORT`



### v2021.4.177
* BUGFIX: Further, the JSON editor dialog was not showing properly (height issues).
* CHORE: Update deps.



### v2021.4.169
* BUGFIX: The JSON editor was not showing properly.



### v2021.4.167
* BUGFIX: The tree collapse/expand not working properly.



### v2021.4.164
* BUGFIX: The `ioredis` `db` configuration is giving an error.  (https://github.com/luin/ioredis/issues/1310)



### v2021.4.162
* FEATURE: Moved the hash/list/set/stream/zset pager component from spaghetti code to a real component



### v2021.4.160
* BUGFIX: Connection error (was on an open connection, then switching to an invalid configuration and as it was on the console, it kept on console, when there was no connection, so this view was invalid, should not show any view where there is no connection) 



### v2021.4.158
* FEATURE: Added `username` for Redis configuration to work with since Redis v6 ACL



### v2021.4.156
* BUGFIX: Hardening the server.
* BUGFIX: Using `Fontsource Roboto` package is working with the valid configuration (about font weights and styles)
* FEATURE: Created a settings menu, the first option is to hide the menu (showing with ALT)



### v2021.4.151
* BUGFIX: Provide a nice error message, when the auto connect connection is removed and the connection failed on loading the page.



### v2021.4.149
* BUGFIX: Further dark mode scrollbar fixes.



### v2021.4.144
* BUGFIX: The TTL timer was doing duplicate timer.



### v2021.4.142
* FEATURE: All types are paging (tree and keys -> all)



### v2021.4.138
* FEATURE: All types are paging (tree and keys -> all)



### v2021.4.127
* BUGFIX: Key form json validation fix. 



### v2021.4.125
* FEATURE: Streams type GUI development.



### v2021.4.119
* BUGFIX: Build fix.



### v2021.4.116
* FEATURE: Basic streams GUI implementation.



### v2021.4.111
* CHORE: Update deps.
* FEATURE: Dark themes are using dark scrollbars (always excluding though of tablet, phone, mobile)



### v2021.4.106
* BUGFIX: Cluster fix error (https://github.com/patrikx3/redis-ui/issues/50)



### v2021.4.104
* BUGFIX: Update npm `commander` package had breaking changes.  



### v2021.4.101
* FEATURE: Font styling.
* FEATURE: On loading keys, the loading indicator overlay is removed (https://github.com/patrikx3/redis-ui-material/pull/5)


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


[**P3X-REDIS-UI**](https://corifeus.com/redis-ui) Build v2024.10.113

 [![NPM](https://img.shields.io/npm/v/p3x-redis-ui.svg)](https://www.npmjs.com/package/p3x-redis-ui)  [![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)






[//]: #@corifeus-footer:end