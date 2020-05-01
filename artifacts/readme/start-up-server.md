[//]: #@corifeus-header

# 📡 P3X Redis UI can work with huge key sets, is functional and works on the web and desktop (Electron)

                        
[//]: #@corifeus-header:end


# Start up with a server

```bash
npm i -g p3x-redis-ui

# help info
p3x-redis --help

# help info detailed
Usage: p3x-redis [options]

Options:
  -V, --version                           output the version number
  -c, --config [config]                   Set the p3xr.json p3x-redis-ui-server configuration, see more help in https://github.com/patrikx3/redis-ui-server
  -r, --readonly-connections              Set the connections to be readonly, no adding, saving or delete a connection
  -n, --connections-file-name [filename]  Set the connections file name, overrides default .p3xrs-conns.json
  -h, --help                              output usage information


# startup with default settings on 7843 port
p3x-redis 

# if you want to disable changing of connections
p3x-redis --readonly-connections
# or
p3x-redis -r
# or
p3x-redis --config /home/p3x-redis-ui/p3xrs.json
# mix
p3x-redis --config /home/p3x-redis-ui/p3xrs.json --readonly-connections
```

# Create a Linux SystemD service
```bash
adduser --disabled-password p3x-redis-ui
touch /etc/systemd/system/p3x-redis-ui.service
nano /etc/systemd/system/p3x-redis-ui.service
```

Place this file with this content:
```text
[Unit]
Description=p3x-redis
After=network.target

[Service]
Type=simple
User=p3x-redis-ui
WorkingDirectory=/home/p3x-redis-ui
# or if you want readonly connections as it is public
#ExecStart=/usr/bin/p3x-redis --readonly-connections
#ExecStart=/usr/bin/p3x-redis --readonly-connections --config /home/p3x-redis-ui/p3xrs.json
ExecStart=/usr/bin/p3x-redis
Restart=on-abort

[Install]
WantedBy=multi-user.target
``` 

Finally:
```bash
systemctl daemon-reload
systemctl enable p3x-redis-ui
service p3x-redis-ui start
```

The server is loading at:  
[http://localhost:7843](http://localhost:7843)

The best is, if you have an NGINX with a valid, secure HTTPS certificate for example Let's Encrypt and then use it as a proxy, for example my own:
```text
/etc/nginx/sites-enabled/p3x.redis.patrikx3.com
```

For free SSL certificate, I use `acme.sh`:  
https://github.com/Neilpang/acme.sh  

Config:  
```text
server {
        listen 80 ;
        listen [::]:80 ;        
        server_name p3x.redis.patrikx3.com;        
        error_log /var/log/nginx/p3x.redis.patrikx3.com-error.log;
        access_log /var/log/nginx/p3x.redis.patrikx3.com-access.log combined;
        location ~ /.well-known {        
                auth_basic off;
                auth_pam off;
                allow all;
                # make sure this path existing and has read for nginx
                root /var/www/acme-challenge;
        }      
        location = /robots.txt {
                allow all;
                log_not_found off;
                access_log off;
        }
        return 301 https://$host$request_uri;
}

server {
        server_name p3x.redis.patrikx3.com;        
        error_log /var/log/nginx/p3x.redis.patrikx3.com-error.log;
        access_log /var/log/nginx/p3x.redis.patrikx3.com-access.log combined;
        location ~ /.well-known {        
                auth_basic off;
                auth_pam off;
                allow all;
                root /var/www/acme-challenge;
        }
        
        location = /robots.txt {       
                allow all;
                log_not_found off;
                access_log off;
        }        
        ssl_certificate /home/p3x-redis-ui/acme/ssl/p3x.redis.patrikx3.com/fullchain.cer;
        ssl_certificate_key /home/p3x-redis-ui/acme/ssl//patrikx3.com/patrikx3.com.key;

        location / {
                proxy_pass "http://127.0.0.1:7843";
                proxy_set_header X-Forwarded-For $remote_addr;
                proxy_set_header Host $host;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "upgrade";

        }
        listen 443 ssl http2;
        listen [::]:443 ssl http2;
        ssl on;
        add_header Strict-Transport-Security "max-age=31536000; " always;
        add_header X-Content-Type-Options nosniff;
        add_header X-XSS-Protection "1; mode=block";
}
```



[//]: #@corifeus-footer

---

🙏 This is an open-source project. Star this repository, if you like it, or even donate to maintain the servers and the development. Thank you so much!

Possible, this server, rarely, is down, please, hang on for 15-30 minutes and the server will be back up.

All my domains ([patrikx3.com](https://patrikx3.com) and [corifeus.com](https://corifeus.com)) could have minor errors, since I am developing in my free time. However, it is usually stable.

**Note about versioning:** Versions are cut in Major.Minor.Patch schema. Major is always the current year. Minor is either 4 (January - June) or 10 (July - December). Patch is incremental by every build. If there is a breaking change, it should be noted in the readme.


---

[**P3X-REDIS-UI**](https://corifeus.com/redis-ui) Build v2020.4.158

[![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)


## P3X Sponsor

[IntelliJ - The most intelligent Java IDE](https://www.jetbrains.com/?from=patrikx3)

[![JetBrains](https://cdn.corifeus.com/assets/svg/jetbrains-logo.svg)](https://www.jetbrains.com/?from=patrikx3)




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
