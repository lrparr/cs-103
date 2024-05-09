
const today= new Date();

const day=today.getDate();
const month=today.getMonth()+1;
const year=today.getFullYear();

console.log(month + "/" + day + "/" + year);

document.getElementById("p-in-footer").innerHTML+=month + "/" + day + "/" + year;
