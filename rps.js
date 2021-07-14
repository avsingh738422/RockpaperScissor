function counterPlay(){
  let randNumb = Math.ceil(Math.random() * 9);
  let cpuChoice;
   if(randNumb <= 3){
      cpuChoice = 'rock';
   }
   else if(randNumb > 6){
      cpuChoice = 'paper';  
   }
   else {
      cpuChoice = 'scissor';
   }
  return cpuChoice; 
}

function gameRound(){
  let computerSelection = "scissor";
  let playerSelection = "rock";// yet to decide how to get player input;
  let result;
  if(playerSelection == computerSelection){
    result = "It's a tie! Play again.";
  }
  else if(playerSelection == "rock" && computerSelection == "scissor" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissor" && computerSelection == "paper"){
    result = "you win!";
  }
  else{
    result = "you lose! play again";
  }
  return result;
}