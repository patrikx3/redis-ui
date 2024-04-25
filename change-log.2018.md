### v2018.12.30
* added menus
* added a donate button
* added proper minimize/maximize behavior
* keeps the last state of the window - maximized or set bounds
* added version to the window



### v2018.12.29
* added auto updater



### v2018.12.27
* final cosmetic style - fixed removing the outline on input focus, so it is styled by only p3x



### v2018.12.26
* Cosmetic changes, do make the UI a bit fancier (shadows, borders)



### v2018.12.23
* There is an AngularJs Material bug (the flex changed)
  * https://github.com/angular/material/issues/11565
* When you disconnected and you were in the console, it was throwing and error. Now, on disconnecting it goes to the main screen.



### v2018.12.22
* The key search behaviour changed
  * before it triggered the search with on-change the input
  * now it is triggered by a search icon
* The main screen drag divider resizer has fancier cursors
* The main screen resizer width is narrower 
* The toolbars are smaller, more space for the actual actions



### v2018.12.20
* Allows to work with 1 million keys, with reduced functions
  * With keys over 110k keys
    * Sorting is disabled
    * Searching happening only on the server, client side searching is disabled
    * The fancy information on the tree are disabled
* The console TAB completion works with uppercase letters as well

## v2018.12.19
* The client side key sorting is using natural compare (has a small penalty, but under 100k is bearable).
* CONSOLE: TAB or SHIFT + TAB completion like bash is enabled
* CONSOLE: Cursor UP or DOWN history is enabled



### v2018.12.17
* The Redis key tree is resizable now - before it was working with click, now it works with dragging
* Added a new theme - named Enterprise 
* Added a new theme - name Redis 



### v2018.12.16
* The Redis key tree is resizable now 



### v2018.12.15
* I have found, that the best solution is on the server side is to use http instead of https and for security use NGINX (or similar) as a proxy and it is as secure as it can be.



### v2018.12.14
* Due to a variable name, the key sorting was not working, now is.

