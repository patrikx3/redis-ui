[//]: #@corifeus-header

# 📡 P3X Redis UI is a very functional handy database GUI and works in your pocket on the responsive web or as a desktop app

                        
[//]: #@corifeus-header:end
* CVE-2024-21490
  * https://scout.docker.com/vulnerabilities/id/CVE-2024-21490
    * This affects versions of the package angular from 1.3.0. A regular expression used to split the value of the ng-srcset directive is vulnerable to super-linear runtime due to backtracking. With a large carefully-crafted input, this can result in catastrophic backtracking and cause a denial of service. Note: This package is EOL and will not receive any updates to address this issue. Users should migrate to @angular/core.
  * We are not using the `ng-srcset` directive.

* CVE-2023-26118⁠
  * https://scout.docker.com/vulnerabilities/id/CVE-2023-26118
    * All versions of the package angular are vulnerable to Regular Expression Denial of Service (ReDoS) via the element due to the usage of an insecure regular expression in the input[url] functionality. Exploiting this vulnerability is possible by a large carefully-crafted input, which can result in catastrophic backtracking.
  * We are not using the HTML `input[url]` directive, if we do, we limit the URL to be maximum 2048 characters, so there is no ReDoS...

* CVE-2023-26117⁠
  * https://scout.docker.com/vulnerabilities/id/CVE-2023-26117
    * All versions of the package angular are vulnerable to Regular Expression Denial of Service (ReDoS) via the $resource service due to the usage of an insecure regular expression. Exploiting this vulnerability is possible by a large carefully-crafted input, which can result in catastrophic backtracking.
  * We are not using the `$resource` service.

* CVE-2023-26116⁠
  * https://scout.docker.com/vulnerabilities/id/CVE-2023-26116
    * All versions of the package angular are vulnerable to Regular Expression Denial of Service (ReDoS) via the angular.copy() utility function due to the usage of an insecure regular expression. Exploiting this vulnerability is possible by a large carefully-crafted input, which can result in catastrophic backtracking.
  * We are not using the `angular.copy()` function, we are using the `lodash` deep clone function.

* CVE-2022-25869
  * https://scout.docker.com/vulnerabilities/id/CVE-2022-25869
    * All versions of package angular are vulnerable to Cross-site Scripting (XSS) due to insecure page caching in the Internet Explorer browser, which allows interpolation of  `<textarea>` elements. NPM package angular is deprecated. Those who want to receive security updates should use the actively maintained package @angular/core.
  * Please, do not use Internet Explorer.

* CVE-2022-25844
  * https://scout.docker.com/vulnerabilities/id/CVE-2022-25844
    * AngularJS lets users write client-side web applications. The package angular after 1.7.0 is vulnerable to Regular Expression Denial of Service (ReDoS) by providing a custom locale rule that makes it possible to assign the parameter in posPre: ' '.repeat() of NUMBER_FORMATS.PATTERNS[1].posPre with a very high value. Note: 1. This package has been deprecated and is no longer maintained. 2. The vulnerable versions are 1.7.0 and higher.
  * We are not using a Regular Expression in this way (custom locale).

[//]: #@corifeus-footer

---

🙏 This is an open-source project. Star this repository, if you like it, or even donate to maintain the servers and the development. Thank you so much!

Possible, this server, rarely, is down, please, hang on for 15-30 minutes and the server will be back up.

All my domains ([patrikx3.com](https://patrikx3.com) and [corifeus.com](https://corifeus.com)) could have minor errors, since I am developing in my free time. However, it is usually stable.

**Note about versioning:** Versions are cut in Major.Minor.Patch schema. Major is always the current year. Minor is either 4 (January - June) or 10 (July - December). Patch is incremental by every build. If there is a breaking change, it should be noted in the readme.


---

[**P3X-REDIS-UI**](https://corifeus.com/redis-ui) Build v2024.4.154

[![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)






[//]: #@corifeus-footer:end