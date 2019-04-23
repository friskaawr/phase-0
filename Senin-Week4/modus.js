function bubbleSort(arr){
    var kecil_sementara = arr[0]
    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr.length-i; j++){
            if(arr[j] > arr[j+1]){
                kecil_sementara = arr[j+1]
                arr[j+1] = arr[j];
                arr[j]=kecil_sementara
            }
        }
    }
    return arr;
}

function cariModus(arr) {
    // you can only write your code here!
 var newArr = []
//  bubbleSort(arr)
//  console.log(a)
 for(var i=0; i<arr.length; i++){
     var found = false;
     for(var j=0; j<newArr.length; j++){
         if(newArr[j][0] == arr[i]){
             found = true;
             newArr[j].push(arr[i])
         }
     }
     if(found == false){
         newArr.push([arr[i]])
     }
 }
// console.log(newArr)
 var length_banyak = 0;
 for(var i=0; i<newArr.length-1; i++){
        if(newArr[i].length > newArr[i+1].length){
        length_banyak = newArr[i].length
        }
 }
 var arr_length= []
 for(var i=0; i<newArr.length; i++){
     if(newArr[i].length == length_banyak){
         arr_length.push(newArr[i][0])
     }
 }
//  console.log(arr_length)
// console.log(newArr)
 if(arr_length.length == 0){
     return -1
 }
 else{
     return arr_length[0]
    }
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1