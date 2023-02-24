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