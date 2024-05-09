let age;

function checkAge() {
    age=document.getElementById("age").value;

    if(isNaN(Number(age))) {
        document.getElementById("container").style.visibility="hidden";
        document.getElementById("output").innerHTML="You did not give me a number.";
    }

    else if(Number(age)<0) {
        document.getElementById("container").style.visibility="hidden";
        document.getElementById("output").innerHTML="A negative number is not acceptable.";
    }

    else if(Number(age)%1 !==0) {
        document.getElementById("container").style.visibility="hidden";
        document.getElementById("output").innerHTML="This is not a valid age.";
    }

    else if(Number(age)>=18 && Number(age)<=120) {
        document.getElementById("container").style.visibility="visible";
        document.getElementById("output").innerHTML="";
    }
    else {
        document.getElementById("container").style.visibility="hidden";
        document.getElementById("output").innerHTML="Cannot gain access";
    }
}




const today= new Date();

let day=today.getDate();
let month=today.getMonth()+1;
const year=today.getFullYear();
let hour=today.getHours();
let min =today.getMinutes();
let ampm="";



if (hour<12) {
    ampm="AM";
        if (hour < 10 && hour !==0){
            hour = "0" + hour;
        }
        if (hour===0){
            hour = 12;
        }
}
else {
    ampm = "PM";

    if (hour - 12 < 10 && hour - 12 !== 0) {
        hour = "0" + (hour - 12);
    }
    else if (hour - 12 >= 10) {
        hour = hour - 12;
    }
    else {
        hour=12;
    }
}

if (min<10){
    min = "0" + min;
}

if (day<10) {
    day= "0" + day;
}
if (month<10) {
    month= "0" + month;
}

document.getElementById("time-date").innerHTML=
    `
        <h3>${hour + ":" + min + ampm}</h3>
        <h3>${month + "/" + day + "/" + year}</h3>
    `;








