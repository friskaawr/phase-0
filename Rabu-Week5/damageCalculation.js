function attack (damage) {
    // Code disini
    return damage - 2;
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
    var dmg = attack(damagePerAttack);
    // console.log(dmg)
    return numberOfAttacks * dmg
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  console.log(damageCalculation(10, 4)); // 20
  console.log(damageCalculation(5, 20)); // 90