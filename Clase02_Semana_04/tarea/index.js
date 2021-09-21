
function doTasks() {
  for (let i = 0; i < 9; i++) {
    const dice = throwDice();
    console.log(`Tú numero de dado es, ${dice}`);
    if( dice === 6){
      console.log("Pausamos los lanzamientos");
      break;
    }
    
  }
} 

function throwDice() {
    var diceValue = Math.floor(Math.random() * 6) + 1; 
    return diceValue;
}

doTasks();