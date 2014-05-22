/*
 *
 * Copyright (c) 2014 Daniele Lenares (https://github.com/Ryuk87)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 *
 * Version 1.0
 *
 */
/*global alert: false, confirm: false, console: false, Debug: false */


var tc = function () {
    'use strict';

    var counter,
        mins = 0,
        sec = 0,
        current_running = '',
        counter_stopped = false,
        is_resuming = false,
        countup_mins_to,
        countup_sec_to,
        original_title = document.title;

    /**     
     * Transforms the numbers into strings
     * @param {int} number to convert
     * @returns {string} The converted string
     */
    function stringFromNum(number) {
        if (number < 10) {
            return '0' + number;
        } else {
            return number;
        }
    }

    /**     
     * Writes the counter in the title bar
     * @param {int} mins to write
     * @param {int} sec to write
     */
    function writeCounterToTitle(mins, sec) {
        document.title = '( ' + stringFromNum(mins) + ' : ' + stringFromNum(sec) + ' ) ' + original_title;
    }

    return {
        /**     
         * Creates a countup timer (to a certain time). Max timer is 59:59.
         * @param {int} mins to count to
         * @param {int} sec to count to
         */
        countup: function (mins_to, sec_to) {

            if (counter !== undefined && !is_resuming) {
                console.info("A counter is already running.");
                return false;
            }

            if (mins_to === undefined || mins_to > 59) {
                mins_to = (current_running === '') ? 59 : countup_mins_to;
            } else if (mins_to < 0) {
                mins_to = (current_running === '') ? 0 : countup_mins_to;
            }

            if (sec_to === undefined || sec_to > 59) {
                sec_to = (current_running === '') ? 59 : countup_sec_to;
            } else if (sec_to < 0) {
                sec_to = (current_running === '') ? 0 : countup_sec_to;
            }

            current_running = 'countup';
            countup_mins_to = mins_to;
            countup_sec_to = sec_to;

            writeCounterToTitle(mins, sec);

            counter = setInterval(function () {
                if ((mins === 59 && sec === 59) || (mins === countup_mins_to && sec === countup_sec_to)) {
                    clearInterval(counter);
                } else {
                    if (sec === 59) {
                        sec = 0;
                        mins += 1;
                    } else {
                        sec += 1;
                    }

                    writeCounterToTitle(mins, sec);
                }

            }, 1000);

            return true;
        },

        /**     
         * Creates a countdown timer (from a certain time). Max starting timer is 59:59.
         * @param {int} mins to count from
         * @param {int} sec to count from
         */
        countdown: function (min_from, sec_from) {

            if (counter !== undefined && !is_resuming) {
                console.info("A counter is already running.");
                return false;
            }

            if (min_from === undefined || min_from > 59) {
                min_from = (current_running === '') ? 59 : mins;
            } else if (min_from < 0) {
                min_from = (current_running === '') ? 0 : mins;
            }

            if (sec_from === undefined || sec_from > 59) {
                sec_from = (current_running === '') ? 59 : sec;
            } else if (sec_from < 0) {
                sec_from = (current_running === '') ? 0 : sec;
            }

            current_running = 'countdown';
            mins = min_from;
            sec = sec_from;

            writeCounterToTitle(mins, sec);

            counter = setInterval(function () {
                if (mins === 0 && sec === 0) {
                    clearInterval(counter);
                } else {
                    if (sec === 0) {
                        sec = 59;
                        mins -= 1;
                    } else {
                        sec -= 1;
                    }

                    writeCounterToTitle(mins, sec);
                }

            }, 1000);

            return true;
        },

        /**     
         * Resumes the previously stopped timer.
         */
        resume: function () {
            if (counter !== undefined && counter_stopped && current_running !== '') {
                is_resuming = true;
                switch (current_running) {
                case 'countup':
                    this.countup();
                    break;
                case 'countdown':
                    this.countdown();
                    break;
                }
                is_resuming = false;
                counter_stopped = false;
                return true;
            } else {
                if (current_running === '') {
                    console.info("No counter has started.");
                } else {
                    console.info("The counter is already running");
                }
                return false;
            }
        },

        /**     
         * Stops the current running timer.
         */
        stop: function () {
            if (counter_stopped) {
                console.info("The counter has already been stopped");
                return false;
            } else {
                if (counter !== undefined) {
                    clearInterval(counter);
                    counter_stopped = true;
                    return true;
                } else {
                    console.info("stop() function has been called before a counter has started.");
                    return false;
                }
            }
        },

        /**     
         * Stops the current runnig timer and clear the document title.
         */
        clear: function () {
            if (counter !== undefined) {
                counter_stopped = false;
                this.stop();
                counter = undefined;
                counter_stopped = false;
                mins = 0;
                sec = 0;
                countup_mins_to = 0;
                countup_sec_to = 0;
                current_running = '';
                document.title = original_title;
                return true;
            } else {
                console.info("clear() function has been called before a counter has started.");
                return false;
            }
        }
    };
}();