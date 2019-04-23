function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var numString = String(angka)
    // console.log(numString[0])
    //base case
    if(numString.length == 1){
        return Number(numString)
    }
    else{
        var hasil_kali = 1;
        for(var i=0; i<numString.length; i++){
            hasil_kali*=Number(numString[i])
        }
        // console.log(hasil_kali)
        var re = String(hasil_kali)
        return kaliTerusRekursif(Number(re))
    }
//     if(angka === 0){
//         return 1
//     }
//     else{
//         var a = (angka%10) * kaliTerusRekursif(Math.floor(angka/10))
//         var b = (a%10) * kaliTerusRekursif(Math.floor(a/10))
//         return (b%10) * kaliTerusRekursif(Math.floor(b/10))
//     }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6