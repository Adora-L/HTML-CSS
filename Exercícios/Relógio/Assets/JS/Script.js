const horas = document.getElementById('hours');
const minutos = document.getElementById('minutes');
const segundos = document.getElementById('seconds');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let mts = dateToday.getMinutes();
    let sgs = dateToday.getSeconds();

    if (hr < 10) hr ='0' + hr;
    if (mts < 10) mts ='0' + mts;
    if (sgs < 10) sgs ='0' + sgs;

    horas.textContent = hr;
    minutos.textContent = mts;
    segundos.textContent = sgs;
}) 