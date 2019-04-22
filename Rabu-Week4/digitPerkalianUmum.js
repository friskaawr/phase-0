function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var arr=[]
    for(var i = 0; i<=angka; i++){
        if(angka%i === 0){
            arr.push(String(i)+String(angka/i))
        }
    }
    // console.log(arr)

    var length=arr[0].length;
    // console.log(length)
    for(var i=0; i<arr.length; i++){
        // console.log(arr[i].length)
        if(arr[i].length < length){
            length = arr[i].length
        }
    }
    return length
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2