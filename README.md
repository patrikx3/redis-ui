[//]: #@corifeus-header
  
[![NPM](https://nodei.co/npm/p3x-redis-ui.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/p3x-redis-ui/)

  [![Build Status](https://travis-ci.org/patrikx3/redis-ui.svg?branch=master)](https://travis-ci.org/patrikx3/redis-ui) 
[![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m780749701-41bcade28c1ea8154eda7cca.svg)](https://uptimerobot.patrikx3.com/)

 


 
# 📡 P3X Redis UI that uses Socket.IO, AngularJs Material and IORedis with statistics, console - terminal, tree, dark mode, internationalization, multiple connections, web and desktop by Electron. v2018.12.20-5  

This is an open-source project. Star this repository, if you like it, or even donate! Thank you so much! :)

I run my own server with dynamic IP address, so, it may happen, that the server can not be reachable for about max 15 minutes, due to nature of the dynamic DNS. The server may also be unreachable, when I backup the SSD with Clonzilla (very rarely) or an electrical issue (but this should not happen again). When the server is down, please hang on for 15-30 minutes and the server will be back up.

All my domains (patrikx3.com and corifeus.com) could have errors, since I am developing in my free time. However, it is usually stable.

**Bugs are evident™ - MATRIX️**

### Node Version Requirement 
``` 
>=10.13.0 
```  
   
### Built on Node 
``` 
v11.5.0
```   
   
The ```async``` and ```await``` keywords are required.

Install NodeJs:    
https://nodejs.org/en/download/package-manager/    



# Description  

                        
[//]: #@corifeus-header:end

`p3x-redis-ui` is a new Redis GUI which can serve as a backend server or as a desktop application.
Some of the features are coming below.

👷 **The first full complete version was created in 20 days in September of 2018.** 

## Releases
https://github.com/patrikx3/redis-ui/releases  

## On ElectronJs  
(The GitHub versions are always instant, while the ElectronJs Apps releases are delayed.)  
https://electronjs.org/apps/p3x-redis-ui  
    
## The test version
https://p3x.redis.patrikx3.com

#### Larger key sets
* On the test server you can test
  * Database 0 - below 10k keys
    * Fancy
    * Fast
  * Database 1 - 10k keys
    * It is fast totally. Given, it is not over for 50 keys / page.  
  * Database 2 - 100k keys 
    * You will see, that with large sets, it can take up to 15 seconds to load all the keys (dependent on the workstation and memory) and sort (if you enabled in the settings). It is usable, but it is fancy and fast for smaller key sets. 
  * Database 3 - 1 million keys 
    * Given the app pre-loads all keys at once, the browser or the electron app for a small workstation could crash
    * The latency is quite long, so the app is not so responsive
    * The app is certified to work for max 100k keys, although it works with over 900k keys  
    * The below functions are happening if the key count is above 110k keys
      * Key sorting is disabled
      * Searching only allows on server side searching
      * In the tree, no fancy information is showing - to reduce the stressing on the server
    * Although, this app works with 1 million keys and reduced functions. For such huge key count, it is recommended to use the pure `redis-cli`.
    
**The sweet spot for the key count is around 10-20k including key sorting and still the app is very responsive.**  
Above 10-20k key count as the key large set grows the GUI latency is including as well.    
    
## Screenshots
[Screenshots readme](artifacts/readme/screenshots.md)

## Features 

* Works as a backend
* Works as a desktop via Electron
  * I have 
    * Linux
    * Windows
    * macOS
      * I do not have the money to buy a macOS machine and build an Electron installer, but it would be very easy to do
* I took very careful of the error handling (as much I can find errors)
* Starts with no settings without config, or setup your own config
* Able to create, test, save, delete multiple connections or a readonly connections setup, for shared usage
* Able to use the console and interact with Redis
  * TAB or SHIFT + TAB completion like bash is enabled
  * Cursor UP or DOWN history is enabled
* Online you are able to choose the tree separator, for example :, /, -, space etc... or even empty separator
* It is based on Redis-Commander and phpRedisAdmin
* You can select the database via console or the drop down.
   * The database select drop down shows if the checked database is empty or filled, so you can always know which is filled
* Save button to save the db
* Full statistics pages, can be useful
* This is just a New Kind on the Block in the Redis world, so, of course, there are advantages and disadvantages in the other Redis GUIs
* Dark - Dracula / light themes
* Search
  * Client side mode searching in keys - small key set
  * Server side mode searching in keys - large key set
  * Search mode
    * the search keys starts with a string key
    * the search keys includes a string in the key
* From 320px width, it is supposed to be 100% responsive
* There is a key sorting function, which has a penalty, because it sorts with natural compare, which means it is more human display, then just raw characters, but up to 100k the keys is still ok. 
* There is a performance penalty for this application, given it uses AngularJS `ng-repeat` for the tree component. The best is if your application uses nested keys (something:nested:good), then the tree will be fast, but, for example, Nextcloud uses about 500 keys inline and it can take 5 seconds to generate the tree.
  * Another solution is that instead of the : separator for your app, you can use the / separator. Then it will be much more responsive, see the settings tree separator.
  * A second solution is to use paging, the default paging is 50 keys
* Maximum keys for this App
  * This application is usable up to 100k keys - given it pre-loads all keys and related info at once plus sorting - with natural comparing ...
    * In that case, loading all keys into the browser takes about maximum 5-15 seconds
    * For big key set to be usable paging should be a maximum 100 keys / page, though for 50 is the sweetest spot
  * This application is not recommended with over 100k keys, because it might just crash the NodeJs server. I can understand there are use cases where you need over 100k keys, but this is not that p3x-redis-ui. 
    * This app including functions like sorting and tree options that are fancy vs large sets ...

This software is more functional than fast ...

# Start up with a server or via a browser and NodeJs/NPM
[Start up with a server readme](artifacts/readme/start-up-server.md)

# Some description about the config file
[Some description about the config file readme](p3xrs.json)

# TODO
[The to do readme](todo.md) 

# Change log
[The change log readme](changelog.md) 

# Development

It creates a package that allows you to compose `p3x-redis-ui-server` and `p3x-redis-ui-material` into one:

[Server on GitHub](https://github.com/patrikx3/redis-ui-server)  
[Client on GitHub](https://github.com/patrikx3/redis-ui-material)

By default, only English is created, but given all strings are from a `JS` file, it is very quick to spawn another language eg. German, French, Spanish etc ...

[English strings, easy to translate](https://github.com/patrikx3/redis-ui-material/blob/master/src/strings/en/strings.js)

This solution is not using REST at all, but instead uses Socket.IO 🤣, which is weird, but I like it, it is supposed to be more responsive, as there is no big overhead in the HTTP protocol.

### Reference for Socket.IO speed
http://blog.arungupta.me/rest-vs-websocket-comparison-benchmarks/

[//]: #@corifeus-footer

---

[**P3X-REDIS-UI**](https://pages.corifeus.com/redis-ui) Build v2018.12.20-5 

[![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software) [![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) 


## P3X Sponsors

[IntelliJ - The most intelligent Java IDE](https://www.jetbrains.com)
  
[![JetBrains](https://cdn.corifeus.com/assets/svg/jetbrains-logo.svg)](https://www.jetbrains.com/) [![NoSQLBooster](https://cdn.corifeus.com/assets/png/nosqlbooster-70x70.png)](https://www.nosqlbooster.com/)

[The Smartest IDE for MongoDB](https://www.nosqlbooster.com)
  
  
 

[//]: #@corifeus-footer:end