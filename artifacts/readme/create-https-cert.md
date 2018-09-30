[//]: #@corifeus-header

# 📡 P3X Redis UI that uses Socket.IO, AngularJs Material and IORedis with statistics, console - terminal, tree, dark mode, internationalization, multiple connections, web and desktop by Electron.

                        
[//]: #@corifeus-header:end
# Create HTTPS2 certificate

Use PEM pass phrase: `123456789`

```bash
#openssl req -newkey rsa:2048 -keyout localhost.key -out localhost.csr -passwd 123456789
openssl req -x509 -sha256 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 36500 
openssl rsa -in key.pem -out key.nopass.pem
```

# Allow unauthorized TLS certificate

```bash
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
```

[//]: #@corifeus-footer

---

[**P3X-REDIS-UI**](https://pages.corifeus.com/redis-ui) Build v2018.9.30-2 

[![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software) [![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) 


## P3X Sponsors

[IntelliJ - The most intelligent Java IDE](https://www.jetbrains.com)
  
[![JetBrains](https://cdn.corifeus.com/assets/svg/jetbrains-logo.svg)](https://www.jetbrains.com/) [![NoSQLBooster](https://cdn.corifeus.com/assets/png/nosqlbooster-70x70.png)](https://www.nosqlbooster.com/)

[The Smartest IDE for MongoDB](https://www.nosqlbooster.com)
  
  
 

[//]: #@corifeus-footer:end