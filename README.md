titlecounter.js
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
#### v0.1 (05-18-2014)
* First release

### License and Copyright
jQuery GoUp! is licensed under [MIT](http://www.opensource.org/licenses/mit-license.php) license.

(c) 2014 Daniele Lenares

If you like my work, offer me a beer/coffee/cappuccino on [Gittip](https://www.gittip.com/Ryuk87/)