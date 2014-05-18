/*
 *
 * Copyright (c) 2014 Daniele Lenares (https://github.com/Ryuk87)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 *
 * Version 0.1
 *
 */
/*global alert: false, confirm: false, console: false, Debug: false */


var tc = function () {
    'use strict';

    var counter,
        mins = 0,
        sec = 0,
        countup = false,
        countdown = false,
        original_title = document.title;

    return {
        countup: function () {
            var string_mins = '',
                string_sec = '';

            countup = true;

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
        resume: function () {
            if (counter !== undefined) {
                if (countup === true) {
                    this.countup();
                } else if (countdown === false) {

                }
            } else {
                console.info("No counter has started.");
            }
        },
        stop: function () {
            if (counter !== undefined) {
                clearInterval(counter);
                counter = undefined;
                countup = false;
                countdown = false;
            } else {
                console.info("stop() function has been called before a counter has started.");
            }
        },
        clear: function () {
            if (counter !== undefined) {
                this.stop();
                mins = 0;
                sec = 0;
                countup = false;
                countdown = false;
                document.title = original_title;
            } else {
                console.info("clear() function has been called before a counter has started.");
            }
        }
    };
}();