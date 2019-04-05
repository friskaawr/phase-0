function balikString(string){
 var result = '';
    for(var i=string.length-1; i>=0; i--){
        result += string[i]
 }
 return result;
}

console.log(balikString('hello world'));
console.log(balikString('zahriah friska'));