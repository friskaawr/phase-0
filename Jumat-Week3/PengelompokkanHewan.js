// sort abjad

function sortAbjad(arr){
    var abjad = 'abcdefghijklmnopqrstuvwxyz'
    var result = []
    for(var i=0; i<abjad.length; i++){
        for(var j=0; j<arr.length; j++){
            if(arr[j][0] === abjad[i]){
                result.push(arr[j])
            }
        }
    }
    return result;
}

function groupAnimals(animals) {
    // you can only write your code here!
    var sortArray = sortAbjad(animals)
    var result = [];
    for(var i=0; i<sortArray.length; i++){
        var found = false;
        for(var j=0; j<result.length; j++){
            if(result[j][0][0] === sortArray[i][0]){
                found = true;
                result[j].push(sortArray[i]);
            }
        }

        if(found == false){
            result.push([sortArray[i]])
        }
    }
    return result
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]