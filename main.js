"use strict";

const HOURHAND = document.querySelector('.hour-hand'); //aguja de la hora
const MINUTEHAND = document.querySelector('.minute-hand'); //aguja de los minutos
const SECONDHAND = document.querySelector('.second-hand'); //aguja de los segundos

function runClock() {
    const NOW = new Date();
    const HOUR = NOW.getHours();
    const MINUTE = NOW.getMinutes();
    const SECOND = NOW.getSeconds();
    
    
    const HOURDEG = (HOUR % 12) * 30; //calcular grados de la aguja hora
    const MINUTEDEG = MINUTE * 6; //calcular grados de la aguja minutos
    const SECONDDEG = SECOND * 6;//calcular grados de la aguja segundos
    
    //aplicamos las rotaciones correspondientes a cada aguja
    HOURHAND.style.transform = `rotate(${HOURDEG}deg)`;
    MINUTEHAND.style.transform = `rotate(${MINUTEDEG}deg)`;
    SECONDHAND.style.transform = `rotate(${SECONDDEG}deg)`;
}

setInterval(runClock, 1000); //llamamos a la funcion cada segudo