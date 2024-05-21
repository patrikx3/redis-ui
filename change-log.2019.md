[//]: #@corifeus-header

# 📡 P3X Redis UI is a very functional handy database GUI and works in your pocket on the responsive web or as a desktop app

                        
[//]: #@corifeus-header:end
### v2019.10.521
* FEAT: Added config parameter to set connections file name during start



### v2019.10.520
* BUGFIX: fix for expired keys during connection



### v2019.10.512
* FEAT: Enable Azure Redis



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



### v2019.01.28
* FEATURE: Added more translation for Chinese.



### v2019.01.27
* FEATURE: Added more translation for English and Chinese.



### v2019.01.25
* FEATURE: Added new translation - Chinese.



### v2019.01.24
* CHORE: upgrade to Electron 4.0.2



### v2019.01.22
* FEATURE: on the TTL, the MomentJS duration using custom configuration



### v2019.01.21
* FEATURE: on the TTL, it is showing duration using default MomentJs configuration



### v2019.01.19
* BUGFIX: when changing to another database, it was not updating the statistics



### v2019.01.18
* BUGFIX: it was saving the window position and size, but it is not correct, because the user could change 2 monitors to 1 monitor and could save incorrect positions, so I disabled this option



### v2019.01.17
* when there was an error, it was displaying a toast, now it is a correct big alert



### v2019.01.12
* on the first time, the program checks if there is a new update, but, if there is no new release, it will not show the notification (No new update available.), as it is automatic and we do not need to know, unless there is a new release ... If we trigger a check update by hand/click, it will show the toast...



### v2019.01.11
* the DarkoBluo toast was too dark, now every theme can use it own toast background
* in the key display list item has a hover to rename the key and the ttl vs just only using a button
* the key buttons have moved to the right



### v2019.01.08
* it was showing empty databases on the statistics, now it is not showing properly
* because I moved the Electron port to 7844, there was an error because of it, now it works as expected



### v2019.01.06
* it was showing empty databases on the statistics, now it is not showing properly
* in Electron with the dev server it was conflicting with the 7843 port, so I changed to 7844



### v2019.01.02
* the dark error inputs were too dark, so we replaced with orange



### v2019.01.01
* on the search input it works with ENTER besides the search icon


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


[**P3X-REDIS-UI**](https://corifeus.com/redis-ui) Build v2024.4.327

 [![NPM](https://img.shields.io/npm/v/p3x-redis-ui.svg)](https://www.npmjs.com/package/p3x-redis-ui)  [![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)






[//]: #@corifeus-footer:end