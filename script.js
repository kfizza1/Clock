function rotateHands(){
    const now = new Date();
    const hour = now.getHours()%12;
    const minute = now.getMinutes();
    const second = now.getSeconds();

const hourHand = document.querySelector(".hour-hand")
const minutesHand = document.querySelector(".minute-hand")
const secondHand = document.querySelector(".second-hand")

const hourdeg = (hour*30)+ (0.5*minute);
const mindeg = (minute*6) + (0.1*second);
const secdeg = second*6;

hourHand.style.transform = `translate(-50%,-100%)rotate(${hourdeg}deg)`;
minutesHand.style.transform = `translate(-50%,-100%)rotate(${mindeg}deg)`;
secondHand.style.transform = `translate(-50%,-100%)rotate(${secdeg}deg)`;
}
setInterval(rotateHands,1000);
rotateHands();