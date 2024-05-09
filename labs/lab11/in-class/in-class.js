let bool=true;
let image;


function toggle() {
    image=document.getElementById("image");

    if(bool===true) {
        image.style.display="block";
        bool=false;
    }
    else {
        image.style.display="none";
        bool=true;
    }
}