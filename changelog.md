[//]: #@corifeus-header

# 📡 P3X Redis UI can work with huge key sets, is functional and works on the web and desktop (Electron)

                        
[//]: #@corifeus-header:end

# Change log

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

[**P3X-REDIS-UI**](https://pages.corifeus.com/redis-ui) Build v2019.2.4-3 

[![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software) [![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) 


## P3X Sponsors

[IntelliJ - The most intelligent Java IDE](https://www.jetbrains.com/?from=patrikx3)
  
[![JetBrains](https://cdn.corifeus.com/assets/svg/jetbrains-logo.svg)](https://www.jetbrains.com/?from=patrikx3) [![NoSQLBooster](https://cdn.corifeus.com/assets/png/nosqlbooster-70x70.png)](https://www.nosqlbooster.com/)

[The Smartest IDE for MongoDB](https://www.nosqlbooster.com)
  
  
 

[//]: #@corifeus-footer:end
