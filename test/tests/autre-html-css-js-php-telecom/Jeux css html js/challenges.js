/* javaScript code for a simple game*/



var scores, roundScores,activePlayer;
var gamePlaying=true;

frish();

//document.querySelector('#current-0').textContent=dice;

//var another =document.querySelector('#score-0').textContent;
function frish(){
gamePlaying=true;
  scores=[0,0];
  roundScores=0;
  activePlayer=0;
  document.querySelector('.dice').style.display='none';

document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;
document.getElementById('name-0').textContent='PLAYER 1'
document.getElementById('name-1').textContent='PLAYER 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');


}

frish();
//document.querySelector('.player-'+activePlayer+'-panel').classList.remove('winner');
document.querySelector('.btn-roll').addEventListener('click',function() {
if (gamePlaying) {
  var dice=Math.floor(Math.random()*6)+1;
  var diceDom=document.querySelector('.dice');
  diceDom.style.display='block';
  diceDom.src='images/dice-'+dice+'.png';

  if (dice!==1) {
    roundScores+=dice;
    document.querySelector('#current-'+activePlayer).textContent=roundScores;





  } else {
    nextPlayer();
    //document.querySelector('.dice').style.display='none';
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
  }
}
})




document.querySelector('.btn-hold').addEventListener('click',function(){
if(gamePlaying){
  scores[activePlayer]+=roundScores;
 document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
 roundScores=0;
if(scores[activePlayer]>=100){
  document.querySelector('#name-'+activePlayer).textContent='winner!'
  document.querySelector('.dice').style.display='none';
  document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
  document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
  gamePlaying=false;


}
nextPlayer();


}
});


function nextPlayer(){
  activePlayer===0? activePlayer=1 : activePlayer=0;
  roundScores=0;

  document.getElementById('current-0').textContent=0;
  document.getElementById('current-1').textContent=0;

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display='none';
};

document.querySelector('.btn-new').addEventListener('click',function(){
  frish();

})
