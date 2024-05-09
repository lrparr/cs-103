let today= new Date();
let day= today.getDate();
let month= today.getMonth()+1;
let year= today.getFullYear();




let hour=today.getHours();
let minutes=today.getMinutes();
let ampm="";



// if it is less than 12:
if(hour<12){
    // then its AM
    ampm="AM";


    // but if its less than 10, then its single digit, which needs a 0 prior
    if(hour<10 && hour!==0){
        hour="0"+hour;
    }
    // and if its 0 it should be changed to 12 AM
    if(hour===0){
        hour=12;
    }
}else{


    ampm="PM";
    if(hour-12<10 && hour-12 !== 0){
        hour="0"+(hour-12);
    }
    else if(hour-12>=10){
        hour=hour-12;
    }
    else{
        hour=12;
    }
}


if (minutes<10) {
    minutes="0"+minutes;
}


document.getElementById("time-date").innerHTML=
    `
    <h3>${hour + ":" + minutes + ampm}</h3>
    <h5>${day + "/" +month + "/"+ year}</h5>


   `
;


let bool=true;


function changeTheme(){
    if(bool===true) {
        document.getElementById("footer").style.backgroundColor = "red";
        document.getElementById("header").style.backgroundColor = "red";
        bool=false;
    }
    else{
        document.getElementById("footer").style.backgroundColor = "forestgreen";
        document.getElementById("header").style.backgroundColor = "forestgreen";
    }
}





