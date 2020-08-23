const clockDiv = $('#clock');
for (let fractionPercent = 0; fractionPercent < 360; fractionPercent += 6) {
    if (fractionPercent % 5 !== 0) {
        let markMinuteElement = $("<div></div>").addClass('divideMark').css('transform', `rotate(${fractionPercent}deg)`);
        clockDiv.append(markMinuteElement);
    }
}

const secDiv = $('#sec');
const minDiv = $('#min');
const hourDiv = $('#hour');
const digitalClockElement = $('#digitalClock');
const mainClockElement = $('.bg-main-clock');

updateClock = () => {
    let date = new Date();
    //set running time for main clock
    let secOnPercent = date.getSeconds() / 60;
    let minOnPercent = (date.getMinutes() + secOnPercent) / 60;
    let hourOnPercent = (date.getHours() + minOnPercent) / 12;
    secDiv.css('transform', `rotate(${secOnPercent * 360}deg)`);
    minDiv.css('transform', `rotate(${minOnPercent * 360}deg)`);
    hourDiv.css('transform', `rotate(${hourOnPercent * 360}deg)`);
    //set running time for digital clock
    digitalClockElement.html(date.toLocaleTimeString());

}

updateClock()
setInterval(updateClock, 1000);




