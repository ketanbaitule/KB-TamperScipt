// ==UserScript==
// @name         MLH Event Local Time Converter
// @namespace    http://tampermonkey.net/
// @version      2024-12-04
// @description  Convert Event Time To Local Time
// @author       Ketan Baitule
// @match        https://events.mlh.io/events/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mlh.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const startDateUTC = new Date(document.querySelector('meta[itemprop="startDate"]').getAttribute("content"));
    const endDateUTC = new Date(document.querySelector('meta[itemprop="endDate"]').getAttribute("content"));
    const titleNode = document.querySelector(".event-details").querySelector(".text-dark-gray.text-semibold.lh-title");
    // Date Local String
    const dateTitleLocalString = new Intl.DateTimeFormat('en-US', {
        weekday: 'long', // 'Friday'
        month: 'long', // 'December'
        day: 'numeric', // '6'
        year: 'numeric', // '2024'
    }).format(startDateUTC);
    titleNode.innerText = dateTitleLocalString;
    const startDateTime = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit', // '12'
        minute: '2-digit', // '00'
        hour12: true,
    }).format(startDateUTC)
    const endDate = new Intl.DateTimeFormat('en-US', {
        month: 'short', // 'Dec'
        day: 'numeric', // '6'
        year: 'numeric', // '2024'
        hour: '2-digit', // '12'
        minute: '2-digit', // '00'
        hour12: true,
        timeZoneName: "long"
    }).format(endDateUTC);
    const rangeElement = titleNode.nextElementSibling;
    rangeElement.children[0].innerText = startDateTime;
    rangeElement.children[3].innerText = endDate;
    rangeElement.children[5].innerText = "";
})();
