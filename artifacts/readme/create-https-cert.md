[//]: #@corifeus-header

# 📡 P3X Redis UI is a very functional handy database GUI and works in your pocket on the responsive web or as a desktop app

                        
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

🙏 This is an open-source project. Star this repository, if you like it, or even donate to maintain the servers and the development. Thank you so much!

Possible, this server, rarely, is down, please, hang on for 15-30 minutes and the server will be back up.

All my domains ([patrikx3.com](https://patrikx3.com) and [corifeus.com](https://corifeus.com)) could have minor errors, since I am developing in my free time. However, it is usually stable.

**Note about versioning:** Versions are cut in Major.Minor.Patch schema. Major is always the current year. Minor is either 4 (January - June) or 10 (July - December). Patch is incremental by every build. If there is a breaking change, it should be noted in the readme.


---

[**P3X-REDIS-UI**](https://corifeus.com/redis-ui) Build v2024.4.156

[![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)






[//]: #@corifeus-footer:end
