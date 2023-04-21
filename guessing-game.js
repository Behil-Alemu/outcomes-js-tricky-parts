function guessingGame(target) {
    let secretNum = Math.floor(Math.random()* (11 - 0))
    let guess = 0
    console.log(secretNum)
    
       if (secretNum === target) {
         return `You win! You found ${target} in ${guess} guesses `;
       } else if (secretNum < target) {
         guess++
         return `${target} is too high!`;
       } else {
        guess++
         return `${target} is too low!`;
       }
    
   }

module.exports = { guessingGame };
