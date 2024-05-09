
let age;

function checkAge():void {
    age=document.getElementById("input").value;
    if(Number(age)>17){
        document.getElementById("image").style.display="block";
    }
    else if(Number(age)%1 !==0) {
        document.getElementById("message").innerHTML="You gave me a decimal number"
    }
}
