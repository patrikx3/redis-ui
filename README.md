[//]: #@corifeus-header

[![NPM](https://nodei.co/npm/p3x-redis-ui.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/p3x-redis-ui/)

  

[![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://paypal.me/patrikx3) [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Corifeus @ Facebook](https://img.shields.io/badge/Facebook-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)  [![Build Status](https://api.travis-ci.com/patrikx3/redis-ui.svg?branch=master)](https://travis-ci.com/patrikx3/redis-ui)
[![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m780749701-41bcade28c1ea8154eda7cca.svg)](https://uptimerobot.patrikx3.com/)





# 📡 P3X Redis UI can work with huge key sets, is functional and works on the web and desktop (Electron) v2020.4.272



**Bugs are evident™ - MATRIX️**
    

### NodeJs LTS Version Requirement
```txt
>=12.13.0
```

### Built on NodeJs
```txt
v12.18.0
```

The ```async``` and ```await``` keywords are required. Only the latest LTS variant is supported.

Install NodeJs:
https://nodejs.org/en/download/package-manager/



# Description

                        
[//]: #@corifeus-header:end

`p3x-redis-ui` is a new Redis GUI which can serve as a backend server or as a desktop application.
Some of the features are coming below.

<!--
👷 **The first full complete version was created in 20 days in September of 2018.** 
-->

## Donated-Ware features
The `p3x-redis-ui+` version has additional features.   
The donation is $1/month. Please contact at [alabard@gmail.com](mailto:alabard@gmail.com) and can donate @ https://paypal.me/patrikx3  
  
The features that are only working in the donated-ware version:
* JSON viewer
* JSON editor
* JSON format
* Cluster
* AWS ElastiCache
* Gcloud memorystore
* Azure Redis

To check if your license is valid @  
https://server.patrikx3.com/api/patrikx3/redis-ui/status/your-license-key

#### New features
Users, that donated, have a big chance that requests for new features will be implemented.

##### Possible new features
* SSH tunnel
* Upload binary data

#### Plus function problems
Given, I do not have a full fledged server and to maintain the servers it costs money, it is possible, sometimes the server goes down. It is rare, but it will be back up probably in 5-10 minutes. If there is a problem that is longer, please contact me.

### Contributors license
Contributors get plus donate license for free for a year.

## Warning
If you are reading the `readme` fom Docker, the links are not working, please read the `readme` from GitHub or Corifeus @ 
* https://corifeus.com/redis-ui
* https://github.com/patrikx3/redis-ui
   
## The online current version
https://p3x.redis.patrikx3.com  - this is the plus version

This Redis database every day in the morning European time CET restores some data, so you may do whatever you want to do.   
  
Besides, you could experience the test app to exit for 1 second, because it could auto update itself. It auto updates itself when the code from Git changes.

Third, it is a snapshot, it is possible, that the features are different from GitHub or NPM as the releases are usually monthly or as they happen. 


### Screenshots
[Screenshots readme](artifacts/readme/screenshots.md)

## Releases

### Snap

<!--
The main source installer is the `AppImage`, so, the themes are not implemented (the main menus). If you want the themes to be implemented (dark vs light), I suggest using the `AppImage` as it supports the themes natively. Besides, the auto self update function is not implemented in `Snap`, only in `AppImage` version.  
-->

[![LINK](https://snapcraft.io/static/images/badges/en/snap-store-black.svg)](https://snapcraft.io/p3x-redis-ui#cory-non-external)

### AppImage

https://github.com/patrikx3/redis-ui/releases  

After downloading the ```AppImage```, make it an executable.
```bash
mkdir -p $HOME/opt
mv ~/Downloads/p3x-redis-ui-a.b.c-x86_64.AppImage $HOME/opt/
chmod +x $HOME/opt/p3x-redis-ui-a.b.c-x86_64.AppImage
# Then you can run it
$HOME/opt/p3x-redis-ui-a.b.c-x86_64.AppImage &
```

It then actually integrates itself into the menus and it will auto update itself.

### On ElectronJs  
(The GitHub versions are always instant, while the ElectronJs Apps releases are delayed.)  
https://electronjs.org/apps/p3x-redis-ui  
    
### Start up with a server or via a browser and NodeJs/NPM
[Start up with a server readme](artifacts/readme/start-up-server.md)

[Some description about the config file readme](p3xrs.json)

### Docker 

https://hub.docker.com/r/patrikx3/p3x-redis-ui

#### Compose
https://github.com/patrikx3/redis-ui/blob/master/docker-compose.yml  
  
  

```bash
wget https://raw.githubusercontent.com/patrikx3/redis-ui/master/docker-compose.yml
# You might want to tune the settings folder in the docker-compose.yml.
# the /home/user/p3x-redis-ui-settings settings folder in yml should be set by yourself.
docker-compose up
```

#### Bare

```bash
# you can tune the settings folder
# in the -v first part is where you can set your own folder
mkdir -p ./p3x-redis-ui-settings
docker run -v $PWD/p3x-redis-ui-settings:/settings -h docker-p3x-redis-ui -p 7843:7843 -t -i patrikx3/p3x-redis-ui
```

The GUI will be @ http://localhost:7843

### Kubernetes
A complete example of deployment `p3x-redis-ui` in kubernetes using raw manifests
https://github.com/patrikx3/redis-ui/blob/master/k8s

```bash
kubectl apply -f namespace.yaml
# Do not forget to edit redis host and password configuration
kubectl apply -f configmap.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f ingress.yaml
```

  
## Features 

* To make more responsive the GUI, start with search in a key set, instead of loading every keys...
* https://github.com/josdejong/jsoneditor has no dark variant, so it is always light
* Since `v2020.4.189`, the tree can handle bigger key count, as of now, we are using deferred rendering for the tree - only rendering what is in the viewport, so it should be much faster versus rendering everything at once 
* Please, check out your Redis use case, if this program can cover your requirements
* Does not handle binary data
* **Does not work with sentinel**
* **Has experimental cluster support**
  * Thanks so much for the awesome contribution by [@idetoile](https://github.com/idetoile) of the cluster function.
* Able to monitor all channel messages on the console by using a checkbox.
* Works with multiple languages
* Works as a backend
* Works as a desktop via Electron
  * Linux
  * Windows
  * macOS
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

## Performance

#### Key set size
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
      * In the tree, no fancy information is showing - to reduce the stressing on the browser
    * Although, this app works with 1 million keys and reduced functions. For such huge key count, it is recommended to use the pure `redis-cli`.
    
**The sweet spot for the key count is around 10-20k including key sorting with max 100 key / page and still the app is very responsive. If you have a huge key set, make sure to search on the server and it will be very responsive.**  
Above 10-20k key count as the key large set grows the GUI latency is including as well.    
    
        
Of course, we could set a limit and the UI would be always responsive, but there was no request of this feature.
  
# TODO
[The to do readme](todo.md) 

# Change log
[The change log readme](changelog.md) 

# Contributors
[The contributors readme](contributors.md)

# Development

For file names do not use camelCase, but use kebab-case. Folder should be named as kebab-case as well. As you can see, all code filenames are using it like that, please do not change that.
Please apply the `.editorconfig` settings in your IDE.

It creates a package that allows you to compose `p3x-redis-ui-server` and `p3x-redis-ui-material` into one:

[Server on GitHub](https://github.com/patrikx3/redis-ui-server)  
[Client on GitHub](https://github.com/patrikx3/redis-ui-material)

If you develop on this app, you are required to test, that all JS you code write is working with Electron (as the embedded Electron NodeJs version is usually below the real NodeJs). Once the server and client is running as above, you clone this repo and test like this:
```bash
# terminal 1
git clone https://github.com/patrikx3/redis-ui-material.git
cd redis-ui-material
npm install
npm run dev

# terminal 2
git clone https://github.com/patrikx3/redis-ui-server.git
cd redis-ui-server
npm install
npm run dev

# if you are not working on Electron, at this point you can fire the browser
# @ http://localhost:8080/

# terminal 3 
git clone https://github.com/patrikx3/redis-ui.git
cd redis-ui
npm install
./scripts/start-local.sh
# or
./scripts/start-local.cmd
```

### Development of the translations

By default, only English is created, but given all strings are from a `JS` file, it is very quick to spawn another language eg. German, French, Spanish etc ...

[English strings, for the web UI](https://github.com/patrikx3/redis-ui-material/blob/master/src/strings/en/strings.js)   
[English strings, for the Electron](https://github.com/patrikx3/redis-ui/blob/master/src/strings/en/index.js)

For a new language:
Add into `redis-ui-material/src/bundle.js`.

This solution is not using REST at all, but instead uses Socket.IO 🤣, which is weird, but I like it, it is supposed to be more responsive, as there is no big overhead in the HTTP protocol.

### Reference for Socket.IO speed
https://www.google.com/search?q=rest+vs+websocket+comparison+benchmarks


# URL links

[P3X Redis UI playground](https://www.patrikx3.com/en/front/playground/20/p3x-reds-ui#PG20)  
  
[Corifeus P3X Redis UI](https://corifeus.com/redis-ui/)  
  
[AlternativeTo Redis UI](https://alternativeto.net/software/p3x-redis-ui/)  

[NPM P3X Redis UI](https://www.npmjs.com/package/p3x-redis-ui)

[Snap Store](https://snapcraft.io/p3x-redis-ui)

[//]: #@corifeus-footer

---

🙏 This is an open-source project. Star this repository, if you like it, or even donate to maintain the servers and the development. Thank you so much!

Possible, this server, rarely, is down, please, hang on for 15-30 minutes and the server will be back up.

All my domains ([patrikx3.com](https://patrikx3.com) and [corifeus.com](https://corifeus.com)) could have minor errors, since I am developing in my free time. However, it is usually stable.

**Note about versioning:** Versions are cut in Major.Minor.Patch schema. Major is always the current year. Minor is either 4 (January - June) or 10 (July - December). Patch is incremental by every build. If there is a breaking change, it should be noted in the readme.


---

[**P3X-REDIS-UI**](https://corifeus.com/redis-ui) Build v2020.4.272

[![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)


## P3X Sponsor

[IntelliJ - The most intelligent Java IDE](https://www.jetbrains.com/?from=patrikx3)

[![JetBrains](https://cdn.corifeus.com/assets/svg/jetbrains-logo.svg)](https://www.jetbrains.com/?from=patrikx3)




[//]: #@corifeus-footer:end


