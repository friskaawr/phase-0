function targetTerdekat(arr) {
    // you can only write your code here!
    //find character O
    var find_o;
    var find_x = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i] == 'o'){
            find_o = i;
        }
        if(arr[i] == 'x'){
            find_x.push(i)
        }
    }

    if(find_x.length === 0){
        return 0;
    }
    // console.log(find_o);
    var posisi_x=[]
    var jarak = arr.length;
    for(var i=0; i<arr.length; i++){
        if(arr[i] == 'x'){
            var find = Math.abs(i-find_o);
            posisi_x.push(i)
        }
        if(find<jarak){
            jarak = find
        }
    }
    return jarak;
    // console.log(posisi_x)
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2