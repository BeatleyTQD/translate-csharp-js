function main() {
  // Put your code here

  const goodBook = makeGoodSpellBook(allSpells);
  const evilBook = makeEvilSpellBook(allSpells);

  function newSpell(name, isEvil, energyRequired) {
    return {
      Name: name,
      IsEvil: isEvil,
      EnergyRequired: energyRequired
    }
  }

  const newtSpell = newSpell("Turn enemy into a newt", true, 5.1);
  const charitySpell = newSpell("Conjure some gold for a local charity", false, 2.99);
  const healSpell = newSpell("Give a deaf person the ability to heal", false, 12.2);
  const emperorSpell = newSpell("Make yourself emperor of the universe", true, 100);
  const politicalSpell = newSpell("Convince your relatives your political views are correct", false, 2921.5)

  let allSpells = [newtSpell, charitySpell, healSpell, emperorSpell, politicalSpell]

  function makeEvilSpellBook(allSpells) {
    const evilBook = {
      title: "Evil Book",
      spells: allSpells.filter(spell => spell.isEvil)
    };

    return evilBook;
  }

  function makeGoodSpellBook(allSpells) {
    const goodBook = {
      title: "Good Book",
      spells: allSpells.filter(spell => !spell.isEvil)
    };

    return goodBook;
  }

  function displaySpellBook(book) {
    console.log(book.title);
    for (aSpell of book.spells) {
      console.log(aSpell.name);
    }
  }

  //Actual Display
  console.log("Do you believe in magic?");
  displaySpellBook(goodBook)
  displaySpellBook(evilBook)




}

main();