var score = 0;
var timer =15;
var hitrn = 0;

var highScore = localStorage.getItem('highscore') ? parseInt(localStorage.getItem('highscore')) : 0;
document.getElementById("highscore").innerHTML = highScore;

function makeBubble(){
     var clutter = "";
for(var i = 1; i<=80; i++){
     var rn = Math.floor(Math.random()*10)
     clutter +=`<div class="bubble">${rn}</div>`
}
document.querySelector(".bubble-container").innerHTML = clutter;
}

function runTimer(){
 var timerint = setInterval(() => {
     if(timer > 0){
          timer--;
          document.querySelector("#timer").innerHTML = timer;
     }else{
          clearInterval(timerint);
          document.querySelector("#bubble").innerHTML = "";
          document.querySelector("#bubble").style.display = "none";
          document.querySelector("#result").style.display = "flex";
          document.querySelector("#userscore").innerHTML = `Your Final Score Is ${score}`
     }

   }, 1000);
}

function getHit(){
     hitrn = Math.floor(Math.random()*10);
     document.querySelector("#hit").innerHTML = hitrn;
}

function increaseScore(){
   score +=10;
   document.querySelector("#score").innerHTML = score;
}

document.querySelector("#bubble").addEventListener("click",(dets)=>{
      var clickedNum = Number(dets.target.textContent);
      if(hitrn === clickedNum){
          increaseScore();
          getHit();
          makeBubble();
      }
      if (score > highScore){
          highScore = score;
          localStorage.setItem('highscore',highScore);
          document.getElementById("highscore").innerHTML = highScore;
      }
})

getHit();
runTimer();
makeBubble();
console.log(score)


