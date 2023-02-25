let redBall = document.getElementById("circle-red");
let greenBall= document.getElementById("circle-green");
let pinkBall = document.getElementById("circle-pink");
let FPS = 60;

let xRedPosition = 10;
let yRedPosition = 50;
let xRedSpeed = 2;
let yRedSpeed = 3;

let xGreenPosition = 20;
let yGreenPosition = 300;
let xGreenSpeed = 2;
let yGreenSpeed = 5;

let xPinkPosition = 160;
let yPinkPosition = 230;
let yPinkSpeed = 2;
let xPinkSpeed = 1;

let updateRed =()=>{
    redBall.style.left = xRedPosition+"px";
    redBall.style.top = yRedPosition+"px";
}

let updateGreen =()=>{
    greenBall.style.left = xGreenPosition+"px";
    greenBall.style.top = yGreenPosition+"px";
}

let updatePink = ()=>{
    pinkBall.style.left = xPinkPosition+"px";
    pinkBall.style.top = yPinkPosition+"px";
}

setInterval(()=>{
    if(xRedPosition + redBall.clientWidth >= window.innerWidth || xRedPosition<=0){
        xRedSpeed=-xRedSpeed;
    }

    if(yRedPosition + redBall.clientHeight >= innerHeight || yRedPosition <= 0){
        yRedSpeed= -yRedSpeed;
    }
    xRedPosition+=xRedSpeed;
    yRedPosition+=yRedSpeed;
    updateRed();
},1000/FPS)

setInterval(()=>{
    if(xGreenPosition + greenBall.clientWidth >= window.innerWidth || xGreenPosition<=0){
        xGreenSpeed=-xGreenSpeed;
    }

    if(yGreenPosition + greenBall.clientHeight >= innerHeight || yGreenPosition <= 0){
        yGreenSpeed= -yGreenSpeed;
    }
    xGreenPosition+=xGreenSpeed;
    yGreenPosition+=yGreenSpeed;
    updateGreen();
},1000/FPS)

setInterval(()=>{
    if(xPinkPosition + pinkBall.clientWidth >= window.innerWidth || xPinkPosition<=0){
        xPinkSpeed=-xPinkSpeed;
    }

    if(yPinkPosition + pinkBall.clientHeight >= innerHeight || yPinkPosition <= 0){
        yPinkSpeed= -yPinkSpeed;
    }
    xPinkPosition+=xPinkSpeed;
    yPinkPosition+=yPinkSpeed;
    updatePink();
},1000/FPS)