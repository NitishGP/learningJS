const CLOCK= document.querySelector(".clock");
let sec=0;
let hr=0;
let min= 0;
let IntervalID,clickcount;

const StartWatch=()=>{
clickcount++;
if (clickcount == 1) {
    IntervalID=setInterval(()=>{
    if(sec<59)
    sec++;

    else if(min>59){
        min=0;
        hr++;
    }
    else {
        sec=0;
        min++;
    }
    console.log(`${String(hr).padStart(2,"0")}:${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`);
    CLOCK.innerText=`${String(hr).padStart(2,"0")}:${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;


},1000);
    }
};

const StopWatch=()=>{
clearInterval(IntervalID);
clickcount=0;
};

const ResetWatch=()=>{
    sec=0;
    hr=0;
    min=0;
    CLOCK.innerText=`${String(hr).padStart(2,"0")}:${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
    clearInterval(IntervalID);
    clickcount=0;
};