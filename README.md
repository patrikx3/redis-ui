[//]: #@corifeus-header

  [![NPM](https://img.shields.io/npm/v/p3x-redis-ui.svg)](https://www.npmjs.com/package/p3x-redis-ui)  [![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://paypal.me/patrikx3) [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Corifeus @ Facebook](https://img.shields.io/badge/Facebook-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)  [![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m780749701-41bcade28c1ea8154eda7cca.svg)](https://stats.uptimerobot.com/9ggnzcWrw)





# 📡 P3X Redis UI is a very functional handy database GUI and works in your pocket on the responsive web or as a desktop app v2024.4.263



**Bugs are evident™ - MATRIX️**
    



### NodeJS LTS is supported

### Built on NodeJs version

```txt
v22.2.0
```





# Description

                        
[//]: #@corifeus-header:end


**p3x-redis-ui** is a versatile Redis GUI that can function as either a backend server on the web or as a desktop application. This open-source software is particularly effective for managing JSON, featuring integration with JSONEditor and ACE. Explore a variety of options in the 'edit json' button dialog, which also supports uploading and downloading binary data. Additionally, it handles SSH, cluster, and sentinel configurations.

## Features

### Configuration and Security
- **Secure Configuration:** Setup is intricate due to its roots in shared web applications, ensuring that passwords and sensitive data are safeguarded with unique identifiers for both main and node configurations. Node-specific IDs enhance security measures for node passwords.

### Compatibility and Usage
- **Redis Versions and TLS:** Supports Redis 6 with TLS, enhancing security and data integrity.
  - For TLS configuration details, visit [Configuring Redis TLS](https://spin.atomicobject.com/2021/08/05/configuring-redis-tls/).
- **Pika Compatibility:** Compatible with Pika, though not perfectly optimized.
- **SSH Tunneling:** Functional for single instances. Support for cluster and sentinel configurations is under development.
- **Environmental Customizations:** Customize the server port and home directory via `P3XRS_PORT` and `P3XRS_DOCKER_HOME` environment variables.

### Data Handling
- **Binary Data Management:** Special care is needed when handling binary data to prevent issues. Use the download button for binary data; direct editing in text mode is not supported for binary content.
- **Large Data Sets:** Handles values larger than 256 kB, indicated by `[object ArrayBuffer]`. For large values, utilize binary upload and download capabilities.
- **Clipboard Operations:** Text copying is supported directly; binary data requires using the download functionality.

### User Interface and Experience
- **Desktop Shortcuts:** Access menus in the desktop version by pressing ALT.
- **Responsive Design:** Fully responsive, ensuring usability on phones and tablets.
- **Themes:** Choose between Dark - Dracula and light themes for personalized visual comfort.
- **Data Visualization and Management:** 
  - Tree view settings allow adjustments to key count from a minimum of 100 to a maximum of 100,000 to prevent crashes.
  - Deferred rendering in the tree view enhances performance by rendering only what is visible in the viewport.

### Advanced Features
- **Monitoring and Logging:** Monitor all channel messages on the console with a simple checkbox. Console history is stored indefinitely in local storage, keeping the last 20 entries accessible.
- **Database Interaction:** Select databases via the console or a dropdown menu, which also indicates whether databases are empty or filled.
- **Search Functionality:**
  - Client-side mode for searching small sets of keys.
  - Server-side mode for efficient searching within large sets of keys.
  - Search can be configured to start with a specific string or include a string within the keys.

### Network Setup and Extensions
- **Sub-directory Support:** Utilize Nginx/Ingress to rewrite paths when used in a sub-directory.
  - For more information, see [Issue #43](https://github.com/patrikx3/redis-ui/issues/43).

### Contributions and Support
- **Cluster Support:** Recently added and continuously improving. Contributions by [@devthejo](https://github.com/devthejo) have significantly enhanced this functionality.
- **Community and Feedback:** As this tool evolves, feedback and issue reporting are highly valued to refine and improve the features.

Redis UI provides a powerful interface for managing Redis databases with a focus on security, efficiency, and user experience. Whether you are dealing with small or large data sets, p3x-redis-ui offers robust solutions tailored to meet diverse operational needs.

<!--
👷 **The first full complete version was created in 20 days in September of 2018.** 
-->

<!--
## Donated-Ware features
  
**Until further notice, all donated-ware features are enabled for free. Please, test out your use case, how the JSON editor is helping you. Let us know!**

The `p3x-redis-ui+` version has additional features.   
The donation is $1/month. Please contact at [alabard@gmail.com](mailto:alabard@gmail.com) and can donate @ https://paypal.me/patrikx3  
  
The features that are only working in the donated-ware version:
* JSON editor
* Cluster
* Sentinel

To check if your license is valid @  
https://server.patrikx3.com/api/patrikx3/redis-ui/status/your-license-key

#### New features
Users, that donated, have a big chance that requests for new features will be implemented.

##### New features
* SSH tunnel
* Upload binary data

##### To write
* Collapse/expand recursively on individual leafs

#### Plus function problems
Given, I do not have a full fledged server and to maintain the servers it costs money, it is possible, sometimes the server goes down. It is rare, but it will be back up probably in 5-10 minutes. If there is a problem that is longer, please contact me.

### Contributors license
Contributors get plus donate license for free for a year.    
Contributors, that created features that are working only in the donate-ware version get a license for life.  
  
-->  
  
## Important Notice 
To ensure accuracy and minimize errors, we strongly advise against manually creating the configuration `JSON` file using a text editor. Instead, utilize the GUI to generate the configuration, which can then be seamlessly integrated into systems like Kubernetes.

### Awareness of AngularJs Security Risks
For detailed information on potential vulnerabilities and mitigation strategies, please refer to our [dedicated documentation](artifacts/readme/angularjs.md).

## Access the Latest Online Version
Explore the most current iteration of our project at [p3x.redis.patrikx3.com](https://p3x.redis.patrikx3.com)

### Operational Insights:
- **Data Restoration:** Our Redis database automatically restores certain datasets every morning at CET, offering a fresh start daily. Feel free to experiment as needed.
  
- **Application Stability:** You may notice brief downtime (about 1 second) in our test application, possibly due to automatic updates triggered by changes in the Git repository.

- **Version Consistency:** Please be aware that the live snapshot might differ from the versions available on GitHub or NPM. Updates and new features are typically released monthly or as developments occur.


### Screenshots
[Screenshots readme](artifacts/readme/screenshots.md)


## Change log
[The change log readme](change-log.md) 


## Releases / Downloadable installer
  
https://github.com/patrikx3/redis-ui/releases  

## MacOS Compatibility
Our application supports builds for both Intel and Apple Silicon architectures.

### Handling Downloaded Files from GitHub
Although I'm not an Apple expert, if you download the `zip` file for the `arm64` version, you'll need to execute the following command on the unzipped app to remove the quarantine attribute applied by macOS:

```bash
sudo xattr -rd com.apple.quarantine P3X-Redis-UI.app
```

This command ensures that your system trusts the application, allowing it to run smoothly without security interruptions from macOS.

### Snap

<!--
The main source installer is the `AppImage`, so, the themes are not implemented (the main menus). If you want the themes to be implemented (dark vs light), I suggest using the `AppImage` as it supports the themes natively. Besides, the auto self update function is not implemented in `Snap`, only in `AppImage` version.  
-->

[![LINK](https://snapcraft.io/static/images/badges/en/snap-store-black.svg)](https://snapcraft.io/p3x-redis-ui#cory-non-external)

## Flathub
You download from the releases page and install as:
  
```sh
wget https://github.com/patrikx3/redis-ui/releases/download/v${VERSION}/P3X-Redis-UI-${VERSION}-x86_64.flatpak
flatpak install ./P3X-Redis-UI-${VERSION}-x86_64.flatpak
flatpak run com.patrikx3.redis_ui
```

Besides the menu is integrated.
 

### AppImage, dep, rpm

AppImage, dep and rpm auto update itself.  
  
#### To integrate into the menu using AppImage
Execute:
```bash
sudo add-apt-repository ppa:appimagelauncher-team/stable
sudo apt-get update
sudo apt-get install appimagelauncher
```


#### After downloading the ```AppImage```, make it an executable.
```bash
mkdir -p $HOME/opt
mv ~/Downloads/p3x-redis-ui-a.b.c-x86_64.AppImage $HOME/opt/
chmod +x $HOME/opt/p3x-redis-ui-a.b.c-x86_64.AppImage
# Then you can run it
$HOME/opt/p3x-redis-ui-a.b.c-x86_64.AppImage &
```


<!--
It then actually integrates itself into the menus and it will auto update itself.
-->

### On ElectronJs  
The app can be found on [ElectronJs Apps](https://electronjs.org/apps) and search for `P3X`, you will find it.

### CLI
 
Start up with a server or via a browser and NodeJs/NPM.
  
[Start up with a server readme](artifacts/readme/start-up-server.md)

[Some description about the config file readme](p3xrs.json)

[Some description about the config connections readme](.p3xrs-conns.json)

[Example of config connections](.p3xrs-conns-example.json)


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
https://github.com/patrikx3/redis-ui/blob/master/k8s/manifests

```bash
kubectl apply -f namespace.yaml
# Do not forget to edit redis host and password configuration
kubectl apply -f configmap.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f ingress.yaml
```

Helm chart `p3x-redis-ui` deployment in kubernetes
https://github.com/patrikx3/redis-ui/blob/master/k8s/chart

```bash
helm template -f values.yaml release --namespace namespace . > generated.yaml
kubectl apply -f generated.yaml
```


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
.\scripts\start-local.cmd
```

### Development of the translations

By default, only English is created, but given all strings are from a `JS` file, it is very quick to spawn another language eg. German, French, Spanish etc ...

[For a new language](https://github.com/patrikx3/redis-ui-material/blob/master/src/main.js)
[English strings, for the web UI](https://github.com/patrikx3/redis-ui-material/blob/master/src/strings/en/strings.js)   
[English strings, for the Electron](https://github.com/patrikx3/redis-ui/blob/master/src/strings/en/index.js)  
  
[Moment a new language for vendor (require moment/locale)](https://github.com/patrikx3/redis-ui-material/blob/master/src/vendor.js)    
[JSON Editor, to incorporate a new language](https://github.com/patrikx3/redis-ui-material/blob/master/redis-ui-material/src/core/settings.js)  
[Moment a new language for Material (momentDateMap)](https://github.com/patrikx3/redis-ui-material/blob/master/src/core/settings.js)    
[Humanize duration](https://github.com/patrikx3/redis-ui-material/blob/master/redis-ui-material/src/core/settings.js)

# Solution
  
Interestingly, this solution doesn't employ REST; it opts for Socket.IO instead! 😄 It might seem a bit unconventional, but I actually appreciate the choice. Using Socket.IO is expected to be more responsive, as it avoids the significant overhead associated with the HTTP protocol. This approach should provide a smoother and faster interaction experience.
  
## Reference for Socket.IO speed
https://www.google.com/search?q=rest+vs+websocket+comparison+benchmarks


# URL links

[P3X Redis UI playground](https://www.patrikx3.com/en/front/playground/19/p3x-reds-ui#PG19)  
  
[Corifeus P3X Redis UI](https://corifeus.com/redis-ui/)  
  
[AlternativeTo Redis UI](https://alternativeto.net/software/p3x-redis-ui/)  

[NPM P3X Redis UI](https://www.npmjs.com/package/p3x-redis-ui)

[Snap Store](https://snapcraft.io/p3x-redis-ui)

[Github.IO Page](https://patrikx3.github.io/redis-ui/)

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


[**P3X-REDIS-UI**](https://corifeus.com/redis-ui) Build v2024.4.263

 [![NPM](https://img.shields.io/npm/v/p3x-redis-ui.svg)](https://www.npmjs.com/package/p3x-redis-ui)  [![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)






[//]: #@corifeus-footer:end

