    const score=JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    loses:0,
    ties:0
    };

function pickComMove(){
    let comMove='';    
    const ranNum=Math.random();
    if(ranNum>=0 && ranNum <= 1/3){
    comMove=`Rock`;
    }
    else if(ranNum>= 1/3 && ranNum<= 2/3){
    comMove=`Paper`;
    }
    else 
    comMove=`Scissor`;
    return comMove;
}
let autoplaying = false;
let intervalID;
function autoplay(){
    if(!autoplaying){
        intervalID = setInterval(function(){
        const move=pickComMove();
        playGame(move);
    },1000);
    autoplaying = true;
    document.querySelector(".auto-play").innerHTML = 'Pause';
}
else{
    clearInterval(intervalID);
    autoplaying = false;
    document.querySelector(".auto-play").innerHTML = 'Auto Play';
}
}
document.querySelector('.js-rock-btn').addEventListener('click',()=>{
    playGame('Rock');
    });
document.querySelector('.js-paper-btn').addEventListener('click',()=>{playGame('Paper')});
document.querySelector('.js-scissor-btn').addEventListener('click',()=>{playGame('Scissor')});
document.body.addEventListener('keydown',(event)=>{
if(event.key === 'r'){playGame('Rock');}
else if(event.key === 'p')playGame('Paper');
else if (event.key === 's') playGame('Scissor');;
}
);
function playGame(move){
    const comMove=pickComMove();
    let result=''; 
    if(comMove===move) 
        {result=`you tie`;
        score.ties+=1;
        }
    else if(comMove===`Scissor` && move===`Rock`||
    comMove===`Rock` && move===`Paper` ||
    comMove===`Paper` && move===`Scissor`
    ) {result=`You win`;
    score.wins+=1;
}
    else{ result=`you lose`;
    score.loses+=1; 
    }
document.querySelector('.js-result').innerHTML = result;
localStorage.setItem("score",JSON.stringify(score));
UpdateScore();
let res=document.querySelector('.js-moves');
res.innerHTML = `you <img src="${move}-emoji.png" class="move-icon">
<img src="${comMove}-emoji.png" class="move-icon">
Computer`;
}
function UpdateScore(){
document.querySelector('.js-score').innerHTML =`wins=${score.wins} loses=${score.loses} ties=${score.ties}.`;
}


