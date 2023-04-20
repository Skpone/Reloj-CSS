"use strict";

const HOURHAND = document.querySelector('.hour-hand');
const MINUTEHAND = document.querySelector('.minute-hand');
const SECONDHAND = document.querySelector('.second-hand');

function runClock() {
    const NOW = new Date();
    const HOUR = NOW.getHours();
    const MINUTE = NOW.getMinutes();
    const SECOND = NOW.getSeconds();
    
    const HOURDEG = (HOUR % 12) * 30;
    const MINUTEDEG = MINUTE * 6;
    const SECONDDEG = SECOND * 6;
    
    HOURHAND.style.transform = `rotate(${HOURDEG}deg)`;
    MINUTEHAND.style.transform = `rotate(${MINUTEDEG}deg)`;
    SECONDHAND.style.transform = `rotate(${SECONDDEG}deg)`;
}

setInterval(runClock, 1000);