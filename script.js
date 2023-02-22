const fname = document.getElementById("fname")
const lname = document.getElementById("lname")

const fnameLetters = fname.innerHTML.split("");
const lnameLetters = lname.innerHTML.split("");

fname.innerText = "";
lname.innerText = "";

fnameLetters.forEach((letter)=>{
    const fnameSpan = document.createElement("span");
    fnameSpan.className = "name-letter";
    fnameSpan.innerText = letter;
    fname.appendChild(fnameSpan)
})

lnameLetters.forEach((letter)=>{
    const lnameSpan = document.createElement("span");
    lnameSpan.className = "name-letter";
    lnameSpan.innerText = letter;
    lname.appendChild(lnameSpan)
})

document.onmousemove = function(event) {
    console.log("Mouse X: " + event.clientX + ", Mouse Y: " + event.clientY);
    var x = window.innerWidth - event.clientX;
    var y = window.innerHeight - event.clientY;
    let angle = 90 - Math.atan(x/y);
    document.getElementById("circle").style.rotate = angle+"deg";
    console.log(angle)
  };
  