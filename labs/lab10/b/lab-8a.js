let first;
let second;

function addition() {
    first = document.getElementById("input-one").value;
    second = document.getElementById("input-two").value;
    let result = Number(first) + Number(second);

    if(result<0){
        document.getElementById("output").innerHTML = String(result);
        document.getElementById("output").style.color="red";
    }
    else {
        document.getElementById("output").innerHTML = String(result);
        document.getElementById("output").style.color="black";
    }
}
function subtraction() {
    first = document.getElementById("input-one").value;
    second = document.getElementById("input-two").value;
    let result = Number(first) - Number(second);
    if(result<0){
        document.getElementById("output").innerHTML = String(result);
        document.getElementById("output").style.color="red";
    }
    else {
        document.getElementById("output").innerHTML = String(result);
        document.getElementById("output").style.color="black";
    }
}
function division() {
    first = document.getElementById("input-one").value;
    second = document.getElementById("input-two").value;
    let result = Number(first) / Number(second);

    if(result<0){
        document.getElementById("output").innerHTML = String(result);
        document.getElementById("output").style.color="red";
    }
    else {
        document.getElementById("output").innerHTML = String(result);
        document.getElementById("output").style.color="black";
    }
}
function multiply() {
    first = document.getElementById("input-one").value;
    second = document.getElementById("input-two").value;
    let result = Number(first) * Number(second);

    if(result<0){
        document.getElementById("output").innerHTML = String(result);
        document.getElementById("output").style.color="red";
    }
    else {
        document.getElementById("output").innerHTML = String(result);
        document.getElementById("output").style.color="black";
    }
}


function numberToPower(){
    first = document.getElementById("input-one").value;
    second = document.getElementById("input-two").value;
    let total = 1;
    for (let i = 1; i <= first; i++) {
        total = total * second;
    }

   if(total<0){
       document.getElementById("output").innerHTML = String(total);
       document.getElementById("output").style.color="red";
   }
   else {
       document.getElementById("output").innerHTML = String(total);
       document.getElementById("output").style.color="black";
   }
}
function doClear() {
    document.getElementById("input-one").value="";
    document.getElementById("input-two").value = "";
    document.getElementById("output").innerHTML = "";
}
