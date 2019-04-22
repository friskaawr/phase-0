function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    
    // you can only write your code here!
    
    var hasil = []
        // product : '',
        // shoppers : [],
        // leftOver : 0,
        // totalProfit :

    // var stok_sepatu = listBarang[0][2], stok_baju = listBarang[1][2], stok_sweater = listBarang[2][2]
    var jumlah = 0;
    // console.log(shoppers.length)
    for(var i=0; i<listBarang.length; i++){
        var history = {}
        var purchasedName = []
        var barang = listBarang[i][0]
        var stok = listBarang[i][2]
        // hasil.push(result)
        for(var j=0; j<shoppers.length; j++){
          if(shoppers[j].product === barang && shoppers[j].amount <= stok){
            purchasedName.push(shoppers[j].name);
            stok -= shoppers[j].amount
        }
        history.product = barang,
        history.shoppers = purchasedName
        history.leftOver = stok
        history.totalProfit = (listBarang[i][2] - stok)*listBarang[i][1]
        // console.log(result)
        
    }
    hasil.push(history)
    // console.log(shoppers[0].product)
    // console.log(hasil.length)
  }
  return hasil;
}
  
  // TEST CASES
  // console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  // console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
//   console.log(countProfit([])); //[]