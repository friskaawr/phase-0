function splitManual(string, item){
var arr = []
var tmp =''
for(var i=0; i<string.length; i++){
    // var found = false;
    if(string[i] !== item){
        // found=true
        tmp+=string[i]
    }
    if(string[i] == item || i == string.length-1){
        arr.push(tmp)
        tmp = ''
    }
}
return arr
}

function meleeRangedGrouping (str) {
    //your code here
    var splitted = splitManual(str, ',')
    // console.log(splitted)
    // console.log(splitted.length)
    var group = [[],[]]
    if(str.length === 0){
        return []
    }
    for(var i=0; i<splitted.length; i++){
        var s = splitManual(splitted[i], '-')
        // console.log(s)
        if(s[1] == 'Ranged'){
            group[0].push(s[0])
        }
        else if(s[1] == 'Melee'){
            group[1].push(s[0])
        }
    }
    return group
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
//   // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []