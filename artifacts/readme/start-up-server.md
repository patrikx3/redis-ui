[//]: #@corifeus-header

# 📡 P3X Redis UI: A highly functional and convenient database GUI that fits in your pocket, accessible on both responsive web and desktop applications

                        
[//]: #@corifeus-header:end


# Start up with a server

Config skeleton @ [p3xrs.json](../../p3xrs.json)


```bash
sudo npm i -g p3x-redis-ui

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

## 🚀 Quick and Affordable Web Development Services

If you want to quickly and affordably develop your next digital project, visit [corifeus.eu](https://corifeus.eu) for expert solutions tailored to your needs.

---

## 🌐 Powerful Online Networking Tool  

Discover the powerful and free online networking tool at [network.corifeus.com](https://network.corifeus.com).  

**🆓 Free**  
Designed for professionals and enthusiasts, this tool provides essential features for network analysis, troubleshooting, and management.  
Additionally, it offers tools for:  
- 📡 Monitoring TCP, HTTP, and Ping to ensure optimal network performance and reliability.  
- 📊 Status page management to track uptime, performance, and incidents in real time with customizable dashboards.  

All these features are completely free to use.  

---

## ❤️ Support Our Open-Source Project  
If you appreciate our work, consider ⭐ starring this repository or 💰 making a donation to support server maintenance and ongoing development. Your support means the world to us—thank you!  

---

### 🌍 About My Domains  
All my domains, including [patrikx3.com](https://patrikx3.com), [corifeus.eu](https://corifeus.eu), and [corifeus.com](https://corifeus.com), are developed in my spare time. While you may encounter minor errors, the sites are generally stable and fully functional.  

---

### 📈 Versioning Policy  
**Version Structure:** We follow a **Major.Minor.Patch** versioning scheme:  
- **Major:** 📅 Corresponds to the current year.  
- **Minor:** 🌓 Set as 4 for releases from January to June, and 10 for July to December.  
- **Patch:** 🔧 Incremental, updated with each build.  

**🚨 Important Changes:** Any breaking changes are prominently noted in the readme to keep you informed.

---


[**P3X-REDIS-UI**](https://corifeus.com/redis-ui) Build v2025.4.135

 [![NPM](https://img.shields.io/npm/v/p3x-redis-ui.svg)](https://www.npmjs.com/package/p3x-redis-ui)  [![Donate for PatrikX3 / P3X](https://img.shields.io/badge/Donate-PatrikX3-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)





[//]: #@corifeus-footer:end
