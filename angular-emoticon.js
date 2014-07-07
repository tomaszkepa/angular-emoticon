/**
 *
 * Description: Simple AngularJS filter for converting text into emoticons.
 * Dependencies: AngularJS, ng-Sanitize
 * Homepage: https://github.com/tomaszkepa/angular-emoticon
 * Author: kempson
 * License: MIT
 *
 */

(function () {
    'use strict';

    angular.module('angularEmoticons', ['ngSanitize']).filter('emoticons', function () {
        var emoticons = [
            {
                "text1": ":)",
                "text2": "",
                "class": "smile"
            },
            {
                "text1": ":d",
                "text2": ";d",
                "class": "big-smile"
            },
            {
                "text1": ":(",
                "text2": ";(",
                "class": "sad"
            },
            {
                "text1": ":/",
                "text2": ";/",
                "class": "upset"

            },
            {
                "text1": ":p",
                "text2": ";p",
                "class": "amuse"
            },
            {
                "text1": "3:)",
                "text2": "3;)",
                "class": "devil"
            },
            {
                "text1": ";)",
                "text2": "",
                "class": "wink"
            },
            {
                "text1": ":o",
                "text2": ";o",
                "class": "surprised"
            },
            {
                "text1": "-_-",
                "text2": "",
                "class": "maun"
            },
            {
                "text1": ":<",
                "text2": ";<",
                "class": "angry"
            },
            {
                "text1": ":*",
                "text2": ";*",
                "class": "kiss"
            },
            {
                "text1": "&lt;3",
                "text2": "",
                "class": "heart"
            },
            {
                "text1": "^_^",
                "text2": "",
                "class": "priviledged"
            },
            {
                "text1": "8-)",
                "text2": "8)",
                "class": "lab"
            },
            {
                "text1": ":s",
                "text2": ";s",
                "class": "confused"
            }
        ];
        return function (text) {
            var input = text.split(' ');
            angular.forEach(emoticons, function (emoticon) {
                for (var i = 0; i < input.length; i++) {
                    if (input[i].toLowerCase() == emoticon.text1 || input[i].toLowerCase() == emoticon.text2) {
                        input[i] = '<span class="emoticon ' + emoticon.class + '"></span>';
                    }
                }
            });
            return input.join(' ');
        };
    });

})();