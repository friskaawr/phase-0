/** 
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. 
Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]

Code
*/
function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    // console.log(arrPenumpang[0][1])
    // console.log(rute.length)
    var hasil = []
    var awal, akhir;
    var jarak = 0, biaya_rute = 2000
    for(var i=0; i<arrPenumpang.length; i++){
        var result = {}
        var naikdari = arrPenumpang[i][1]
        var tujuan = arrPenumpang[i][2]
        for(var j=0; j<rute.length; j++){
            if(naikdari === rute[j]){
                // console.log(naikdari)
                // console.log(rute[j])
                awal = j
            }
            if(tujuan === rute[j]){
                akhir = j
            }
        }
        jarak = akhir - awal
        // console.log(jarak)
        result.penumpang = arrPenumpang[i][0]
        result.naikDari = naikdari
        result.tujuan = tujuan
        result.biaya = jarak*biaya_rute;
        hasil.push(result)
    }   
    return hasil
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]