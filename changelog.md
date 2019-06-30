[//]: #@corifeus-header

# 📡 P3X Redis UI can work with huge key sets, is functional and works on the web and desktop (Electron)

                        
[//]: #@corifeus-header:end


### 2019.4.177
* BUGFIX: For the cluster mode, enabled read only connections, GUI was incorrect (was showing add/delete nodes). Now, is correct.


### 2019.4.164
* FEATURE: For the cluster mode, the database selector is disabled, as in clusters, there is only one database.


### 2019.4.160
* FEATURE: It shows the key count as a tooltip, when there is a pager on the page input. When there is no pager, now, we show the key count.

### 2019.4.158
* FEATURE: Frontend cleaning up on the cluster settings page.

### 2019.4.153
* FEATURE: In cluster mode, nodes passwords's have a security feature.

### 2019.4.149
* FEATURE: Highly experimental cluster support.

### 2019.4.144
* FEATURE: Able to monitor all channel messages on the console by using a checkbox.

### 2019.4.142
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

[**P3X-REDIS-UI**](https://pages.corifeus.com/redis-ui) Build v2019.4.182 

[![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software) 


## P3X Sponsors

[IntelliJ - The most intelligent Java IDE](https://www.jetbrains.com/?from=patrikx3)
  
[![JetBrains](https://cdn.corifeus.com/assets/svg/jetbrains-logo.svg)](https://www.jetbrains.com/?from=patrikx3) [![NoSQLBooster](https://cdn.corifeus.com/assets/png/nosqlbooster-70x70.png)](https://www.nosqlbooster.com/)

[The Smartest IDE for MongoDB](https://www.nosqlbooster.com)
  
  


# Open collective

## Contributors

This project exists thanks to all the people who contribute.  
   
<a href="https://github.com/patrikx3/redis-ui/graphs/contributors"><img src="https://opencollective.com/p3x-redis-ui/contributors.svg?width=890&button=false" /></a>


## Backers

Thank you to all our backers!   
  
🙏 [Become a backer](https://opencollective.com/p3x-redis-ui#backer)
  
<a href="https://opencollective.com/p3x-redis-ui#backers" target="_blank"><img src="https://opencollective.com/p3x-redis-ui/backers.svg?width=890"></a>


## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. 
  
🙏 [Become a sponsor](https://opencollective.com/p3x-redis-ui#sponsor)  
  
<a href="https://opencollective.com/p3x-redis-ui/sponsor/0/website" target="_blank"><img src="https://opencollective.com/p3x-redis-ui/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/p3x-redis-ui/sponsor/1/website" target="_blank"><img src="https://opencollective.com/p3x-redis-ui/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/p3x-redis-ui/sponsor/2/website" target="_blank"><img src="https://opencollective.com/p3x-redis-ui/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/p3x-redis-ui/sponsor/3/website" target="_blank"><img src="https://opencollective.com/p3x-redis-ui/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/p3x-redis-ui/sponsor/4/website" target="_blank"><img src="https://opencollective.com/p3x-redis-ui/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/p3x-redis-ui/sponsor/5/website" target="_blank"><img src="https://opencollective.com/p3x-redis-ui/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/p3x-redis-ui/sponsor/6/website" target="_blank"><img src="https://opencollective.com/p3x-redis-ui/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/p3x-redis-ui/sponsor/7/website" target="_blank"><img src="https://opencollective.com/p3x-redis-ui/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/p3x-redis-ui/sponsor/8/website" target="_blank"><img src="https://opencollective.com/p3x-redis-ui/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/p3x-redis-ui/sponsor/9/website" target="_blank"><img src="https://opencollective.com/p3x-redis-ui/sponsor/9/avatar.svg"></a>
        
 

[//]: #@corifeus-footer:end


