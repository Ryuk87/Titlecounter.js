Titlecounter.js
==============

A dependency-free javascript library to create a counter (down and up) that will be shown in your webpage title


## How to use it
Download the minified `titlecounter.min.js` and include it in your page:
```
<script src="titlecounter.min.js"></script>
```

#####Start a countup timer
Starts the timer from 00:00
```
tc.countup();
```
Starts the timer and count for 2 minutes
```
tc.countup(2,0);
```
#####Start a countdown timer
Starts the timer from 59:59
```
tc.countdown();
```
Starts the timer and countdown for 10 minutes and 30 seconds
```
tc.countdown(10,30);
```
#####Stop the timer
Stops the previous started timer (doesn't clear the page title)
```
tc.stop();
```
#####Resume the timer
Resume the previous stopped timer (doesn't work after clear() has been called)
```
tc.resume();
```
#####Clear the timer
Stops the previous started timer and clear the page title
```
tc.clear();
```

## Changelog
#### v1.0 (05-22-2014)
* Countdown function added.
* Ability to count up to a specific amount of time (mins/sec)
* Ability to count down from a specific amount of time (mins/sec)
* Some code refactoring

#### v0.1 (05-18-2014)
* First release

### License and Copyright
titlecounter.js is licensed under [MIT](http://www.opensource.org/licenses/mit-license.php) license.

(c) 2014 Daniele Lenares

If you like my work, offer me a beer/coffee/cappuccino on [Gittip](https://www.gittip.com/Ryuk87/)