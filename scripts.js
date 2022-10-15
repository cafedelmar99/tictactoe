//choosing x or o
const choiceX=document.getElementsByClassName('background-x')[0];
const choiceY=document.getElementsByClassName('background-o')[0];
const xIcon=document.getElementById("icon-is-x");
const oIcon=document.getElementById("icon-is-o");
//const gameCpu
const gameVsPlayer=document.getElementById("vs-player");
const firstPage=document.getElementsByClassName("starter-div")[0];
const gamePage=document.getElementsByClassName("game-start")[0];

choiceY.addEventListener("click", playerIsY);
choiceX.addEventListener("click", playerIsX);
gameVsPlayer.addEventListener("click", startGameVsPlayer);

let currentPlayer;

//gaming
const hoverChoice=document.getElementsByClassName("box");

hoverChoice.addEventListener("mouseover", showPossible);
//gaming functions
function showPossible(){
    hoverChoice.style.add("xHover");
}

function artGame(){
    
}



//choosing x or o functions
function playerIsX(){
    currentPlayer = "x";
    choiceX.style.backgroundColor="#A8BFC9";
    choiceY.style.backgroundColor="#1A2A33"
    xIcon.style.fill="#1F3641";
    oIcon.style.fill="#A8BFC9";
}

function playerIsY(){
    currentPlayer="y";
    choiceX.style.backgroundColor="#1A2A33";
    choiceY.style.backgroundColor="#A8BFC9";
    xIcon.style.fill="#A8BFC9";
    oIcon.style.fill="#1F3641";
}

function startGameVsPlayer(){
    firstPage.style.display="none";
    gamePage.style.display="block";
}