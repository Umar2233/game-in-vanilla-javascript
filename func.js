let start = document.createElement("button");
start.innerText = "Start";
document.body.appendChild(start);

let w = document.getElementById("startaudio");
let z = document.getElementById("endaudio");

let stop = document.createElement("button");
stop.innerText = "Stop";
document.body.appendChild(stop);

let bar = document.createElement("img");
bar.src = "./images/bar.png"
bar.style.position = "absolute";
bar.style.top = "800px";
bar.style.left = "0"
bar.style.width = "300px";
bar.style.height = "100px"
document.body.appendChild(bar);

let ball = document.createElement("img");
ball.src = "./images/img2.png";
ball.style.width = "80px";
ball.style.position = "absolute";
ball.style.left = "0";
ball.style.top = "0";
ball.style.zIndex = "-1";
document.body.appendChild(ball);

let x = 1;
let y = 1;
let time = 20;
let startBall = false;
let startAgain = false;

let timeout = function() {
    if(ball.width + ball.offsetLeft > window.innerWidth || ball.offsetLeft < 0) {
        x *= -1
    }
    if(ball.height + ball.offsetTop > bar.offsetTop && ball.width + ball.offsetLeft < bar.offsetLeft + bar.width && ball.width + ball.offsetLeft > bar.offsetLeft|| ball.offsetTop < 0){
        y *= -1;
    }

    ball.style.left = ball.x + (30 * x) + "px";
    ball.style.top = ball.y + (10 * y) + "px";
    if (startBall){
        setTimeout(timeout, time);
    }

    if(ball.height + ball.offsetTop > window.innerHeight){
        ball.style.display = "none"
        startBall = false;
        let s = confirm("Game Over");
        if(s){
            ball.style.display = "block";
            ball.style.left = "30px";
            ball.style.top = "0";
            startAgain = false
        }
    }
}

start.addEventListener("click", () => {
    x = 1;
    y = 1;
    w.play();
    startBall = true
    if(!startAgain){
        timeout();
    }
    startAgain = true;
})

stop.addEventListener("click", () => {
    x = 0;
    y = 0;
    startBall = false;
    startAgain = false;
})


let i = 0;

document.addEventListener("keydown", (e) => {
    if(e.keyCode === 37){
        if(bar.offsetLeft < 0){
            i = 0
        }
        if(bar.offsetLeft > 0){
            i -= 60;
        bar.style.left = i + "px";
    }
    }
    if(e.keyCode === 39){
        if(bar.offsetLeft + bar.width < 1920){
            i += 60;
        bar.style.left = i + "px";
    }
        if(bar.offsetLeft > 1920) {
            i = 1300
        }
    } 
})
