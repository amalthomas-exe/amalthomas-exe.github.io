const fname = document.getElementById("fname-main")
const lname = document.getElementById("lname-main")

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

document.getElementById("reveal-btn").onclick = ()=>{
    document.getElementById("cover-page").style.animation = "cover-go-up 1s ease-in-out";
    setTimeout(()=>{
        document.getElementById("cover-page").style.display = "none";
        document.getElementById("about").style.display = "block";
    },1000)
}

var coverPage = document.getElementById("cover-page");
var swipeManager = new Hammer.Manager(coverPage);
var Swipe = new Hammer.Swipe();

swipeManager.add(Swipe);

var deltaY = 0;
swipeManager.on('swipe',(e)=>{
  var direction = e.offsetDirection;
  console.log(direction);
  if (direction === 8 || direction === 16){
    document.getElementById("cover-page").style.animation = "cover-go-up 1s ease-in-out";
    setTimeout(()=>{
        document.getElementById("cover-page").style.display = "none";
        document.getElementById("about").style.display = "block";
    },1000)
  }
})

coverPage.onmousemove = (e)=>{
    let x = e.clientX;
    let y = e.clientY;

    let anchor = document.getElementById("reveal-btn");
    let rekt = anchor.getBoundingClientRect();
    let anchorX = rekt.left + rekt.width / 2;
    let anchorY = rekt.top + rekt.height /2 ;
    let dy = anchorY  - y;
    let dx = anchorX - x;
    let angle = Math.atan2(dy,dx)*180 / Math.PI;
    document.getElementById("arrow").style.rotate = angle-90+"deg";

}