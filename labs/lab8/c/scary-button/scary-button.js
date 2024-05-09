let booleanVar  =false;

function boo() {
    if (booleanVar===false) {
        document.getElementById("cute").style.display="none";
        document.getElementById("scary").style.display="block";
        booleanVar=true;
    }
    else {
        document.getElementById("cute").style.display="block";
        document.getElementById("scary").style.display="none";
        booleanVar=false
    }
}