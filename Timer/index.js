const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const counterTimer = document.querySelector(".counterTimer");
const heading = document.querySelector("h1");

const second = 1000, //1second=1000ms
    minute = 60* second,
    hour = 60* minute, 
    day = 24* hour;

const timerFunction = () => {

    let now  = new Date();
    let dd= String(now.getDate()).padStart(2, "0");
    let mm= String(now.getMonth()+1).padStart(2, "0");
    let yyyy= now.getFullYear();

    now = (`${mm}/${dd}/${yyyy}`);

    console.log(now);

    const enterDay = prompt("Enter Day").padStart(2, "0");
    const enterMonth = prompt("Enter Month").padStart(2, "0");
    console.log(`${enterMonth}/${enterDay}/${yyyy}`);
    let targetDate = (`${enterMonth}/${enterDay}/${yyyy}`);

    // if(now > targetDate) {
    // targetDate = `${enterMonth}/${enterDay}/${yyyy  }`;}

    const intervalid = setInterval(() => {

        const timer = new Date(targetDate).getTime();
        const today = new Date().getTime();

        const difference = timer - today;
        const leftDay = Math.floor((difference/day)),
            leftHour = Math.floor((difference%day)/hour),
            leftMinute = Math.floor((difference%hour)/minute);
       const    leftSecond = Math.floor((difference%minute)/second);

       daysElement.innerText = leftDay;
       hoursElement.innerText = leftHour;
       minutesElement.innerText = leftMinute;
       secondsElement.innerText = leftSecond;


        console.log(`${leftDay}:${leftHour}:${leftMinute}:${leftSecond}`);

        if(difference < 0){
            counterTimer.style.display="none";
            heading.innerText= "Time's Up!";
            clearInterval(intervalid);
        }
       } ,0)

};

timerFunction();