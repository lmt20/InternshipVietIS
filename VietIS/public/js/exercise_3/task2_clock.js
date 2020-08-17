// create minute marks on the main clock
const clockDiv = document.getElementById('clock');
for(let fractionPercent=0; fractionPercent < 360; fractionPercent += 6)
{
    if(fractionPercent % 5 !== 0){
        let markMinuteElement = document.createElement("div");
        markMinuteElement.setAttribute('class', 'divideMark');
        markMinuteElement.setAttribute('style', `transform: rotate(${fractionPercent}deg)`);
        clockDiv.appendChild(markMinuteElement);
    }
}

//set running time for clock
const secDiv = document.getElementById('sec');
const minDiv = document.getElementById('min');
const hourDiv = document.getElementById('hour');
const digitalClockElement = document.getElementById('digitalClock');
const mainClockElement = document.getElementsByClassName('bg-main-clock')[0];

updateClock = () => {
    let date = new Date();
    //set running time for main clock
    let secOnPercent = date.getSeconds() / 60;
    let minOnPercent = (date.getMinutes() + secOnPercent) / 60;
    let hourOnPercent = (date.getHours() + minOnPercent) / 12;
    secDiv.setAttribute('style', `transform: rotate(${secOnPercent*360}deg)`);
    minDiv.setAttribute('style', `transform: rotate(${minOnPercent*360}deg)`);
    hourDiv.setAttribute('style', `transform: rotate(${hourOnPercent*360}deg)`);
    //set running time for digital clock
    digitalClockElement.innerHTML = date.toLocaleTimeString();

    
}
updateClock()
setInterval(updateClock, 1000);




