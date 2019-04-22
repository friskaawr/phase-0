function checkAB(num) {
    // you can only write your code here!
    var found = false;
    for(var i=0; i<num.length; i++){
    //  console.log(i)
     if(num[i]==='a' && num[i+4] ==='b' || num[i]==='b' && num[i+4] ==='a'){
        found = true;
    }
  }
  return found
}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false