function main() {
  // Put your code here
  console.log("Let's roll some dice, baby!");
  console.log("---------------------------");

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (i = 0; i < 10; i++) {
    let die1 = getRandomInt(1, 6)
    let die2 = getRandomInt(1, 6)

    switch (die1) {
      case 1:
        die1vis = "\u2680";
        break;
      case 2:
        die1vis = "\u2681";
        break;
      case 3:
        die1vis = "\u2682";
        break;
      case 4:
        die1vis = "\u2683";
        break;
      case 5:
        die1vis = "\u2684";
        break;
      case 6:
        die1vis = "\u2685";
        break;
    }

    switch (die2) {
      case 1:
        die2vis = "\u2680";
        break;
      case 2:
        die2vis = "\u2681";
        break;
      case 3:
        die2vis = "\u2682";
        break;
      case 4:
        die2vis = "\u2683";
        break;
      case 5:
        die2vis = "\u2684";
        break;
      case 6:
        die2vis = "\u2685";
        break;
    }

    let message = `${die1vis} + ${die2vis} == ${die1 + die2}`
    if (die1 == die2) {
      message += " DOUBLES!"
    }




    console.log(message)
  }



}

main();