var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]; 

function dataHandling2(input){
  input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provisi Bandar Lampung")
  input.splice(4,1, "Pria", "SMA Internasional Metro")
  
  console.log(input)
  
  var split= input[3].split('/')
  // console.log(split)
  var bulan;
  // console.log(split[1])
  switch(split[1]){
    case '01':
      bulan = 'Januari';
      break;
    case '02':
      bulan = 'Februari';
      break;
    case '03':
      bulan = 'Maret';
      break;
    case '04':
      bulan = 'April';
      break;
    case '05':
      bulan = 'Mei';
      break;
    case '06':
      bulan = 'Juni';
      break;
      case '07':
      bulan = 'Juli';
      break;
    case '08':
      bulan = 'Agustus';
      break;
    case '09':
      bulan = 'September';
      break;
    case '10':
      bulan = 'Oktober';
      break;
    case '11':
      bulan = 'November';
      break;
    case '12':
      bulan = 'Desember';
      break;
    default:
    text = "Salah Bulan";
  }
  var join=split.join("-") 
  console.log(bulan)
  for(var i=0; i<split.length; i++){
    split[i] = Number(split[i])
  }
    var des_sort = split.sort(function(a, b){return b-a});
  for(var i=0; i<des_sort.length; i++){
    if(des_sort[i] <= 9){
      des_sort[i] = '0' + String(des_sort[i])  
    }
    else{
      des_sort[i] = String(des_sort[i])
    }
  }
  console.log(des_sort)
  console.log(join)
  console.log(input[1].substring(0,15))
 
  // var string = '05'
  // console.log(Number(string))
  
  //sorting
  // for()



}

dataHandling2(input)

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */