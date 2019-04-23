function totalDigitRekursif(angka) {
    // you can only write your code here!
    var numString = String(angka)
    // console.log(numString.split(''));
    // base case
    if(numString.length == 1){
        return Number(numString)
    }
    // recursive case
    else{
        var splitted = numString.split('')
        var splice = splitted.splice(0,1)
        return Number(splice) + totalDigitRekursif(Number(splitted.join('')))
    }
    
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5