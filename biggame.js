let finalScore_1 = document.getElementById('finalScore-0');

let finalScore_2 = document.getElementById('finalScore-1');

let newGame = document.getElementById('new-game');

let rollDice = document.getElementById('roll-dice');

let currentScore_1 = document.getElementById("currentScore-0");
let currentScore_2 = document.getElementById("currentScore-1");


init();

let score = [0, 0];
let PlayerscurrentScore = 0;
let activePlayer = 0;

document.getElementById('img').style.display='none';

rollDice.addEventListener('click', function () {
   
    let random = Math.floor(Math.random() * 6) + 1;
    document.getElementById('img').src = './images/dice-' + random + '.png';
    
    
    document.getElementById('img').style.display='inline-block';
    
    if (random !== 1) {
      
        PlayerscurrentScore += random;
        document.getElementById('currentScore-' + activePlayer).textContent = PlayerscurrentScore;
        document.getElementById('active-' + activePlayer).style.display = 'inline-block';
    } else {
   
        nextPlayer();
    }
});

  document.getElementById('hold-btn').addEventListener('click',function(){
      score[activePlayer] += PlayerscurrentScore;
      document.getElementById('finalScore-'+activePlayer).innerHTML = score[activePlayer];
      if(score[activePlayer]>=100){
          document.getElementById('playerName-'+activePlayer).innerHTML = "WINNER!!!";
          PlayerscurrentScore = 0;
          document.getElementById('img').style.display='none';
          rollDice.style.cursor='no-drop';
          document.getElementById('inputBtn').style.pointerEvents='none';
          document.getElementById('hold-btn').style.cursor='no-drop';
          
      }else{
          nextPlayer();
      }  
  });

document.getElementById('new-game').addEventListener('click',function(){
    init();
    document.getElementById('img').style.display='none';

})

function init() {
    finalScore_1.innerHTML = 0;
    finalScore_2.innerHTML = 0;
    currentScore_1.innerHTML = 0;
    currentScore_2.innerHTML = 0;
}


  function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    PlayerscurrentScore = 0;
    currentScore_1.textContent = '0';
    currentScore_2.textContent = '0';
    document.getElementById('active-0').style.display = 'none';
    document.getElementById('active-1').style.display = 'none';
    document.getElementById('img').style.display='none';
  }