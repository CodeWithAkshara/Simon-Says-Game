let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "blue"];

let started = false;
let level = 0;
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelUp();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");
    
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 3);
    let randomcolor = btns[randomIdx];
    let randombtn = document.querySelector(`.${randomcolor}`);
    gameSeq.push(randomcolor);
    
    btnflash(randombtn);
}
function check(idx) {

    if (gameSeq[idx] == userSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        } 
    } else {
        let highest;

        if (level > highest) {
            highest = level;
        }

        h3.innerHTML = `Game over! Your score was <b>${level}</b><br>press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    btnflash(btn);

    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    check(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}