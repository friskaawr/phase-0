function pasanganTerbesar(num) {
    // you can only write your code here!
    var stringAngka = String(num);
    // console.log(stringAngka)
    // console.log(stringAngka.length)
    var arr = []
    for(var i=0; i<stringAngka.length-1; i++){
        arr.push(Number(stringAngka[i] + stringAngka[i+1]))
    }
    // console.log(arr)
    var banding = 0;
    for(var i=0; i<arr.length; i++){
      if(banding < arr[i]){
        banding = arr[i]
      }
    }
    return banding
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99