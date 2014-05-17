/*global alert: false, confirm: false, console: false, Debug: false */


var tc = function () {
    'use strict';
    
    var counter,
        original_title = document.title;

    return {
        countdown: setInterval(function () {}),
        start: function () {
            var mins = 0,
                sec = 0,
                string_mins = '',
                string_sec = '';
            
            counter = setInterval(function () {
                if (sec === 59) {
                    sec = 0;
                    mins += 1;
                } else {
                    sec += 1;
                }

                if (mins < 10) {
                    string_mins = '0' + mins;
                } else {
                    string_mins = mins;
                }

                if (sec < 10) {
                    string_sec = '0' + sec;
                } else {
                    string_sec = sec;
                }
                
                document.title = '( ' + string_mins + ' : ' + string_sec + ' ) ' + original_title;

            }, 1000);
        },
        stop: function () {
            if (counter !== undefined) {
                clearInterval(counter);
                counter = undefined;
            } else {
                console.info("stop() function has been called before a counter has started.");
            }
        },
        clear: function() {
            this.stop();
            document.title = original_title;
        }
    };
}();