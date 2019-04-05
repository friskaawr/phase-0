function splitManual(str){
    var tamp = '';
    var hasil = []
    for(var i=0; i<str.length; i++){
      if(str[i] !== ' '){
        tamp+= str[i]
        
      }
      if(str[i] == ' ' || i == str.length-1){
        hasil.push(tamp);
        tamp = ''
      }
    }
    return hasil;
  }
  
  function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var b=splitManual(kalimat)
  
    return b.length;
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5