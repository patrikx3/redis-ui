[//]: #@corifeus-header

# 📡 P3X Redis UI that uses Socket.IO, AngularJs Material and IORedis with statistics, console - terminal, tree, dark mode, internationalization, multiple connections, web and desktop by Electron.

                        
[//]: #@corifeus-header:end


# Start up with a server

```bash
npm i -g p3x-redis-ui
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

[**P3X-REDIS-UI**](https://pages.corifeus.com/redis-ui) Build v2019.1.8-4 

[![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software) [![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) 


## P3X Sponsors

[IntelliJ - The most intelligent Java IDE](https://www.jetbrains.com)
  
[![JetBrains](https://cdn.corifeus.com/assets/svg/jetbrains-logo.svg)](https://www.jetbrains.com/) [![NoSQLBooster](https://cdn.corifeus.com/assets/png/nosqlbooster-70x70.png)](https://www.nosqlbooster.com/)

[The Smartest IDE for MongoDB](https://www.nosqlbooster.com)
  
  
 

[//]: #@corifeus-footer:end