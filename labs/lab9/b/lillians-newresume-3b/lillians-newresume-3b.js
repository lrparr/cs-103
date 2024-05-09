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