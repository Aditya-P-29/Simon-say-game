let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "purple", "blue"];
let start = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (!start) {  
        console.log("Game started");
        start = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 600);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 400);
}
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    gameSeq.push(randColor);
    console.log("Game sequence:", gameSeq);

    let flashInterval = 0;
    gameSeq.forEach((color) => {
        setTimeout(() => {
            let btn = document.querySelector(`#${color}`);
            gameFlash(btn);
        }, flashInterval += 700);
    });
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);}
        }
     else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start again`;
        document.body.style.backgroundColor = "red";   
        setTimeout(function() {
            document.body.style.backgroundColor = "white";
        }, 200);

        // reset();
    }
}
function btnPress() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {   
    btn.addEventListener("click", btnPress);
}

function reset() {
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    h2.innerText = "Press any key to start game.";
    document.body.style.backgroundColor = "white";   
}