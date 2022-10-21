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
const xHoverIcon='<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M51.12 1.269c.511 0 1.023.195 1.414.586l9.611 9.611c.391.391.586.903.586 1.415s-.195 1.023-.586 1.414L44.441 32l17.704 17.705c.391.39.586.902.586 1.414 0 .512-.195 1.024-.586 1.415l-9.611 9.611c-.391.391-.903.586-1.415.586a1.994 1.994 0 0 1-1.414-.586L32 44.441 14.295 62.145c-.39.391-.902.586-1.414.586a1.994 1.994 0 0 1-1.415-.586l-9.611-9.611a1.994 1.994 0 0 1-.586-1.415c0-.512.195-1.023.586-1.414L19.559 32 1.855 14.295a1.994 1.994 0 0 1-.586-1.414c0-.512.195-1.024.586-1.415l9.611-9.611c.391-.391.903-.586 1.415-.586s1.023.195 1.414.586L32 19.559 49.705 1.855c.39-.391.902-.586 1.414-.586Z" stroke="#31C3BD" stroke-width="2" fill="none"></path></svg>';
const oHoverIcon=`<svg width="66" height="66" xmlns="http://www.w3.org/2000/svg"><path d="M33 1c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C15.327 65 1 50.673 1 33 1 15.327 15.327 1 33 1Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" stroke="#F2B137" stroke-width="2" fill="none"/></path></svg>`;

let hoverChoice=document.querySelectorAll(".box");

let livePlayer= "x";
const turnO=document.getElementsByClassName("turns-o")[0];
const turnX=document.getElementsByClassName("turns-x")[0];

let choicePick=document.querySelectorAll(".box");
console.log(choicePick);
const xClickedIcon = '<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#31C3BD" fill-rule="evenodd"/></path></svg>';
const oClickedIcon = '<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#F2B137"/></path></svg>';
//gaming functions
//gaming functions - on click choice


//gaming functions - x or o turn 
function whoseTurn(){
    if(livePlayer=="x"){
        turnO.style.display = "none";
        turnX.style.display = "block";
    }else{
        turnO.style.display = "block";
        turnX.style.display = "none";
    }
}
//gaming functions - hover visuals
hoverChoice.forEach((i) => {
    i.addEventListener("mouseover", () => {
        if(i.childElementCount===0 && currentPlayer=="x"){
            i.insertAdjacentHTML("afterbegin", xHoverIcon);            
        }else if(i.childElementCount===0 && currentPlayer=="y"){
            i.insertAdjacentHTML("afterbegin", oHoverIcon);            
        }
    });
    i.addEventListener("mouseleave", () => {
        i.innerHTML="";
    })
    i.addEventListener("click", () => {
        if(livePlayer=="x" && i.childElementCount===1){
            console.log(i);
            i.insertAdjacentElement("beforeend", xClickedIcon);
            livePlayer = "o";
        }else if(livePlayer=="o" && i.childElementCount===1){
            i.insertAdjacentElement("afterbegin", oClickedIcon);
            livePlayer = "x";
        }
    })

})

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