var playerHealth = 40;
var grantHealth = 10;
var grantLives = 3;
var playerLives = 1;


function startGame() {
  play = prompt ("Would you like to play a game?")
  if ( play === "yes"){
    name = prompt("What is your name?");
    startCombat()
  } else {
    console.log("Maybe next time")
  }
}

startGame()

function startCombat(){

  console.log(name + " starts with " + playerHealth + " hitpoints");

  console.log("Grant starts with " + grantHealth + " hitpoints and " + grantLives + " lives");

  while(grantHealth > 0){


    playerHealth = playerHealth - getDamage();
    grantHealth = grantHealth - getDamage();
    console.log(name + " has " + playerHealth + " hitpoints remaining");
    console.log("Grant has " + grantHealth + " hitpoints remaining");
    if (grantHealth <= 0){
      grantLives--; console.log("Grant now has " + grantLives + " lives left.");
    attack();
    }

    if (grantLives === 0 && playerHealth > 0){
	     console.log("you have won the battle");
	      break;
      }
    if (playerHealth < 1){
	     console.log(name + " has lost the battle");
	      break;
	     }

    }
}



function attack(){

  if(grantLives >= 1) {

    advance = prompt("Would you like to attack or quit?");
    if( advance === "attack" ){
      grantHealth = 10;
      playerHealth = playerHealth - getDamage();
      grantHealth = grantHealth - getDamage();
      console.log(name + " has " + playerHealth + " hitpoints remaining");
      console.log("Grant has " + grantHealth + " hitpoints remaining");
      if (grantHealth <= 0){
    	grantLives--; console.log("Grant now has " + grantLives + " lives left.");
      }
    } else if (advance === "quit"){
      console.log(name + " left the game");
    }

  }

}

function getDamage() {
	return Math.floor(Math.random() * 5 + 1);
}
