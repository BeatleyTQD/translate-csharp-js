function main() {
  // Put your code here
  function newSpell(name, isEvil, energyRequired) {
    return {
      Name: name,
      IsEvil: isEvil,
      EnergyRequired: energyRequired
    }
  }

  function newBook(title, spells) {
    return {
      Title: title,
      Spells: spells
    }
  }



  const newtSpell = newSpell("Turn enemy into a newt", true, 5.1);
  const charitySpell = newSpell("Conjure some gold for a local charity", false, 2.99);
  const healSpell = newSpell("Give a deaf person the ability to heal", false, 12.2);
  const emperorSpell = newSpell("Make yourself emperor of the universe", true, 100);
  const politicalSpell = newSpell("Convince your relatives your political views are correct", false, 2921.5)

  let allSpells = [newtSpell, charitySpell, healSpell, emperorSpell, politicalSpell]

  evilSpells = allSpells.filter(spell => spell.IsEvil === true)
  goodSpells = allSpells.filter(spell => spell.IsEvil === false)


  let evilBook = newBook("Evil Book", evilSpells);
  let goodBook = newBook("Good Book", goodSpells);

  //Actual Display
  console.log("Do you believe in magic?");
  console.log(evilBook)
  console.log(goodBook)




}

main();