// ==UserScript==
// @name         Give Back My Right Click
// @namespace    http://tampermonkey.net/
// @version      2024-01-14
// @description  Enable Right Click
// @author       You
// @match        https://www.nagpurtoday.in/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nagpurtoday.in
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.body.addEventListener("contextmenu", function(e) {
        e.stopImmediatePropagation()
    })
})();
