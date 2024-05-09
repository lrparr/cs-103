let first;
let second;

function addition() {
    first = document.getElementById("input-one").value;
    second = document.getElementById("input-two").value;
    let result = Number(first) + Number(second);
    document.getElementById("output").innerHTML = String(result);
}
function subtraction() {
    first = document.getElementById("input-one").value;
    second = document.getElementById("input-two").value;
    let result = Number(first) - Number(second);
    document.getElementById("output").innerHTML = String(result);
}
function division() {
    first = document.getElementById("input-one").value;
    second = document.getElementById("input-two").value;
    let result = Number(first) / Number(second);
    document.getElementById("output").innerHTML = String(result);
}
function multiply() {
    first = document.getElementById("input-one").value;
    second = document.getElementById("input-two").value;
    let result = Number(first) * Number(second);
    document.getElementById("output").innerHTML = String(result);
}


    //document.getElementById("input-one").value="";
    //document.getElementById("input-two").value="";

