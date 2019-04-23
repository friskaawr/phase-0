/**
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator
Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):
Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti 
akan menjadi huruf setelah huruf vokal itu 
(ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)
Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord
Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya
Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:
Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator 
dan return password-nya dari function ini juga

function c
 */
function changeVocals (str) {
    //code di sini
    var change = [
        ['a','b'],
        ['i','j'],
        ['u','v'],
        ['e','f'],
        ['o','p'],
        ['A','B'],
        ['I','J'],
        ['U','V'],
        ['E','F'],
        ['O','P']
    ]
    var strBaru = ''
        for(var i=0; i<str.length; i++){
            var found = false
            for(var j=0; j<change.length; j++){
                if(str[i] === change[j][0]){
                    found = true;
                    strBaru += change[j][1]
                // console.log(change[i])
            }
        }  
        if(found == false){
            strBaru+=str[i]
            }
    }
    return strBaru
}
  
  function reverseWord (str) {
    //code di sini
    var strBalik = ''
    for(var i=str.length-1; i>=0; i--){
        strBalik+=str[i]
    }
    return strBalik
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var lower = 'abcdefghijklmnopqrstuvwxyz'
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var changeStr = ''
    for(var i=0; i<str.length; i++){
        var found = false
        for(var j=0; j<lower.length; j++){
            if(str[i] === lower[j]){
                changeStr+=upper[j]
                found=true
            }
            if(str[i] === upper[j]){
                changeStr+=lower[j]
                found=true
            }
        }
        if(found == false){
            changeStr+=str[i]
        }
    }
    return changeStr
  }
  
  function removeSpaces (str) {
    //code di sini
    var notSpaces = ''
    for(var i=0; i<str.length; i++){
        if(str[i]!==' '){
            notSpaces+=str[i]
        }
    }
    return notSpaces;
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length <= 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    var cv = changeVocals(name)
    var rw = reverseWord(cv)
    var luc = setLowerUpperCase(rw)
    var ns = removeSpaces(luc)
    return ns
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'