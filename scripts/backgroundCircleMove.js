let redBall = document.getElementById("circle-red");
let greenBall= document.getElementById("circle-green");
let pinkBall = document.getElementById("circle-pink");
let blueBall = document.getElementById("circle-blue");
let purpleBall = document.getElementById("circle-purple");

let FPS = 60;

let xRedPosition = 10;
let yRedPosition = 50;
let xRedSpeed = 1.5;
let yRedSpeed = 2.5;

let xGreenPosition = 20;
let yGreenPosition = 300;
let xGreenSpeed = 1;
let yGreenSpeed = 2.5;

let xPinkPosition = 160;
let yPinkPosition = 230;
let yPinkSpeed = 1;
let xPinkSpeed = 3;

let xBlueposition = 30;
let yBlueposition = 350;
let yBlueSpeed = 1;
let xBlueSpeed = 2.5;

let xPurpleposition = 250;
let yPurpleposition = 230;
let yPurpleSpeed = 1;
let xPurpleSpeed = 1.5;

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

let updateBlue = ()=>{
    blueBall.style.left = xBlueposition+"px";
    blueBall.style.top = yBlueposition+"px";
}

let updatePurple = ()=>{
    purpleBall.style.left = xPurpleposition+"px";
    purpleBall.style.top = yPurpleposition+"px";
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

setInterval(()=>{
    if(xBlueposition + blueBall.clientWidth >= window.innerWidth || xBlueposition<=0){
        xBlueSpeed=-xBlueSpeed;
    }

    if(yBlueposition + blueBall.clientHeight >= innerHeight || yBlueposition <= 0){
        yBlueSpeed= -yBlueSpeed;
    }
    xBlueposition+=xBlueSpeed;
    yBlueposition+=yBlueSpeed;
    updateBlue();
},1000/FPS)

setInterval(()=>{
    if(xPurpleposition + purpleBall.clientWidth >= window.innerWidth || xPurpleposition<=0){
        xPurpleSpeed=-xPurpleSpeed;
    }

    if(yPurpleposition + purpleBall.clientHeight >= innerHeight || yPurpleposition <= 0){
        yPurpleSpeed= -yPurpleSpeed;
    }
    xPurpleposition+=xPurpleSpeed;
    yPurpleposition+=yPurpleSpeed;
    updatePurple();
},1000/FPS)