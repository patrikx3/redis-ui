[//]: #@corifeus-header

# 📡 P3X Redis UI can work with huge key sets, is functional and works on the web and desktop (Electron)

                        
[//]: #@corifeus-header:end

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

### v2019.10.521
* FEAT: Added config parameter to set connections file name during start

### v2019.10.520
* BUGFIX: fix for expired keys during connection

### v2019.10.512
* FEAT: Enable Azure Redis

### v2019.10.269    
* FEATURE: Hash key length is also limited by the max value display length. 

### v2019.10.261    
* FEATURE: Rename tree settings to Redis settings. 

### v2019.10.256    
* FEATURE: Key value display upgrade. 

### v2019.10.254    
* FEATURE: The display is using pre for the string value.
* CHORE: Upgraded to Electron v6.0.2

### v2019.10.248
* FEATURE: MAXVALUEDISPLAY => If max value display zero, it shows everything, if it is bigger than 0, it will truncate. If it is -1, it will not show the value without edit.
* CHORE: Upgraded to Electron v6.0.1

### v2019.10.132
* Bugfix: Electron v6 was generating twice icons so I reverted to v4.2.8

### v2019.10.129
* CHORE: Upgraded Electron v4 to v6.

### v2019.10.121
* BUGFIX: DISABLE_WAYLAND fix
* BUGFIX: When refreshing, it was refreshing twice. 

### v2019.10.105
* BUGFIX: Removed unnecessary self created ioredis cluster code. 

### v2019.10.101
* FEATURE: Final cluster mode development.

### v2019.4.177
* BUGFIX: For the cluster mode, enabled read only connections, GUI was incorrect (was showing add/delete nodes). Now, is correct.

### v2019.4.164
* FEATURE: For the cluster mode, the database selector is disabled, as in clusters, there is only one database.


### v2019.4.160
* FEATURE: It shows the key count as a tooltip, when there is a pager on the page input. When there is no pager, now, we show the key count.

### v2019.4.158
* FEATURE: Frontend cleaning up on the cluster settings page.

### v2019.4.153
* FEATURE: In cluster mode, nodes passwords's have a security feature.

### v2019.4.149
* FEATURE: Highly experimental cluster support.

### v2019.4.144
* FEATURE: Able to monitor all channel messages on the console by using a checkbox.

### v2019.4.142
* FEATURE: Validate text as JSON. 
  * https://github.com/patrikx3/redis-ui/issues/19

### v2019.4.137
* BUGFIX: https://github.com/patrikx3/redis-ui/issues/17

### v2019.4.131
* BUGFIX: There was an error with the upgrade of NodeJs with SASS bindings.

### v2019.4.125
* BUGFIX: Revert to Electron v4, as showing 2 icons with the hack.

### v2019.4.125
* CHORE: Revert to Electron v4, as showing 2 icons with the hack.

### v2019.4.111
* CHORE: Upgraded to Electron v5
* BUGFIX: Electron was not working sandbox, I worked it out with a script in `src/build/after-pack.js`

### v2019.4.20
* CHORE: The console crashed the app with invalid commands eg. `áéűáű`. It was implemented with my own solution, now it is a native solution by `ioredis`.
* BUGFIX: Reverted Electron v4, as v5 is giving an SUID permission error (same as https://github.com/patrikx3/onenote/issues/63)

### v2019.4.18
BUGFIX: The console crashed the app with invalid commands eg. `áéűáű`

### v2019.4.15
CHORE: Updated all dependencies.

### v2019.03.19
* FEATURE: enable to work with AWS ElastiCache

### v2019.03.09
* BUGFIX: when you are on the 2nd page and then switch to another database that has only one page, it will not show the keys

### v2019.02.13
* BUGFIX: the `p3xr accordion` margin was too big 
* FEATURE: The delete buttons is always to the left, then edit and the cancel is the last
* BUGFIX: The alert is not working with multiple dialog

### v2019.02.10
* FEATURE: On Electron, disable the header and the buttons (home, settings, overview) are in the main menu (P3X Redis UI menu).
* BUGFIX: on the TTL info, where it updates the time is not working with click
* BUGFIX: the first time, Electron sets the language, is throwing an error (something like the DOM is not ready)
* FEATURE: bigger area for home layout
* FEATURE: add console to the menu

### v2019.02.09
* FEATURE: On the modal and form buttons order were not correct, the cancel button should be the last.
* BUGFIX: The key string length view was not updating when the string changed. (Eg. size was not updating)

### v2019.02.04
* BUGFIX: Donation button was Hungarian, now is supposed to be automatically by browser locale.

## v2019.01.28
* FEATURE: Added more translation for Chinese.

## v2019.01.27
* FEATURE: Added more translation for English and Chinese.

## v2019.01.25
* FEATURE: Added new translation - Chinese.

## v2019.01.24
* CHORE: upgrade to Electron 4.0.2

## v2019.01.22
* FEATURE: on the TTL, the MomentJS duration using custom configuration

## v2019.01.21
* FEATURE: on the TTL, it is showing duration using default MomentJs configuration

## v2019.01.19
* BUGFIX: when changing to another database, it was not updating the statistics

## v2019.01.18
* BUGFIX: it was saving the window position and size, but it is not correct, because the user could change 2 monitors to 1 monitor and could save incorrect positions, so I disabled this option

## v2019.01.17
* when there was an error, it was displaying a toast, now it is a correct big alert

## v2019.01.12
* on the first time, the program checks if there is a new update, but, if there is no new release, it will not show the notification (No new update available.), as it is automatic and we do not need to know, unless there is a new release ... If we trigger a check update by hand/click, it will show the toast...

## v2019.01.11
* the DarkoBluo toast was too dark, now every theme can use it own toast background
* in the key display list item has a hover to rename the key and the ttl vs just only using a button
* the key buttons have moved to the right

## v2019.01.08
* it was showing empty databases on the statistics, now it is not showing properly
* because I moved the Electron port to 7844, there was an error because of it, now it works as expected

## v2019.01.06
* it was showing empty databases on the statistics, now it is not showing properly
* in Electron with the dev server it was conflicting with the 7843 port, so I changed to 7844

## v2019.01.02
* the dark error inputs were too dark, so we replaced with orange

## v2019.01.01
* on the search input it works with ENTER besides the search icon

## v2018.12.30
* added menus
* added a donate button
* added proper minimize/maximize behavior
* keeps the last state of the window - maximized or set bounds
* added version to the window

## v2018.12.29
* added auto updater

## v2018.12.27
* final cosmetic style - fixed removing the outline on input focus, so it is styled by only p3x

## v2018.12.26
* Cosmetic changes, do make the UI a bit fancier (shadows, borders)

## v2018.12.23
* There is an AngularJs Material bug (the flex changed)
  * https://github.com/angular/material/issues/11565
* When you disconnected and you were in the console, it was throwing and error. Now, on disconnecting it goes to the main screen.

## v2018.12.22
* The key search behaviour changed
  * before it triggered the search with on-change the input
  * now it is triggered by a search icon
* The main screen drag divider resizer has fancier cursors
* The main screen resizer width is narrower 
* The toolbars are smaller, more space for the actual actions

## v2018.12.20
* Allows to work with 1 million keys, with reduced functions
  * With keys over 110k keys
    * Sorting is disabled
    * Searching happening only on the server, client side searching is disabled
    * The fancy information on the tree are disabled
* The console TAB completion works with uppercase letters as well

## v2018.12.19
* The client side key sorting is using natural compare (has a small penalty, but under 100k is bearable).
* CONSOLE: TAB or SHIFT + TAB completion like bash is enabled
* CONSOLE: Cursor UP or DOWN history is enabled

## v2018.12.17
* The Redis key tree is resizable now - before it was working with click, now it works with dragging
* Added a new theme - named Enterprise 
* Added a new theme - name Redis 

## v2018.12.16
* The Redis key tree is resizable now 

## v2018.12.15
* I have found, that the best solution is on the server side is to use http instead of https and for security use NGINX (or similar) as a proxy and it is as secure as it can be.

## v2018.12.14
* Due to a variable name, the key sorting was not working, now is.

## v2018.9.28-3
* the AppImage was not working, now I verified on Windows and Linux

## v2018.9.26-0
* the first full version

[//]: #@corifeus-footer

---

🙏 This is an open-source project. Star this repository, if you like it, or even donate to maintain the servers and the development. Thank you so much!

Possible, this server, rarely, is down, please, hang on for 15-30 minutes and the server will be back up.

All my domains ([patrikx3.com](https://patrikx3.com) and [corifeus.com](https://corifeus.com)) could have minor errors, since I am developing in my free time. However, it is usually stable.

**Note about versioning:** Versions are cut in Major.Minor.Patch schema. Major is always the current year. Minor is either 4 (January - June) or 10 (July - December). Patch is incremental by every build. If there is a breaking change, it should be noted in the readme.


---

[**P3X-REDIS-UI**](https://corifeus.com/redis-ui) Build v2020.4.264

[![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)


## P3X Sponsor

[IntelliJ - The most intelligent Java IDE](https://www.jetbrains.com/?from=patrikx3)

[![JetBrains](https://cdn.corifeus.com/assets/svg/jetbrains-logo.svg)](https://www.jetbrains.com/?from=patrikx3)




[//]: #@corifeus-footer:end


