function main() {
  // Put your code here
  let placeNames = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"];

  console.log("All Place Names")

  for (let place of placeNames) {
    console.log(place)
  }

  console.log("")
  const startsWithThe = placeNames.filter((place) => place.startsWith("The"));

  console.log("'The' Place Names")

  for (let place of startsWithThe) {
    console.log(place)
  }

}

main();