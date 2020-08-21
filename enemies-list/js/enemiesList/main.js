function main() {
  // Put your code here
  console.log("My Enemies List!")
  console.log("----------------")

  function enemy(firstName, lastName, offenses = [], isReallyHated) {
    return {
      firstName: firstName,
      lastName: lastName,
      offenses: [offenses],
      isReallyHated: isReallyHated
    }
  };
  
  const Josh = enemy("Joshua", "Flowers", ["Being a jerk to me in elementary school", "Not being nice to me in elementary school"], true)
  const Darth = enemy("Darth", "Vader", ["Cut off Luke's hand", "Murdered all those kids", "Unkind management practices"], false)
  const Betty = enemy("Betty", "Rudelady", ["Phone calls in the theater", "Phone calls on the bus", "Phone calls in line at the grocery store", "Poor conversationalist"], true)
  const Leon = enemy("Leon", "Peck", ["Keeps giving me a hotplate"], false)

  let enemyList = [Josh, Darth, Betty, Leon]

  for (singleEnemy of enemyList) {
    if (singleEnemy.isReallyHated) {
      console.log(`${singleEnemy.firstName} ${singleEnemy.lastName} Really, really dislike!`)
    } else {
      console.log(`${singleEnemy.firstName} ${singleEnemy.lastName}`)
    }
  }



}

main();