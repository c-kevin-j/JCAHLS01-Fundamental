let db = [
  {
    idproduct: 1,
    name: "Hoodie",
    stock: 12,
    price: 75000
  },
  {
    idproduct: 2,
    name: "Sepatu",
    stock: 10,
    price: 80000
  }
];

let beli = [
  {
    iduser: 1,
    user: "budi",
    keranjang: [
      {
        idproduct: 2,
        qty: 2,
        subtotal: 160000
      },
      {
        idproduct: 1,
        qty: 2,
        subtotal: 150000
      },
    ]
  },
  {
    iduser: 2,
    user: "Edo",
    keranjang: [
      {
        idproduct: 1,
        qty: 1,
        subtotal: 75000
      },
    ]
  },
  {
    iduser: 3,
    user: "Edi",
    keranjang: [
      {
        idproduct: 2,
        qty: 5,
        subtotal: 400000
      },
    ]
  }
]

class Report {
  constructor(_idproduct,_name,_stock,_price,_salesQty,_omset,_totalStock){
    this.idproduct = _idproduct;
    this.name = _name;
    this.stock = _stock;
    this.price = _price;
    this.salesQty = _salesQty;
    this.omset = _omset;
    this.totalStock = _totalStock;
  }
}

const getreport = (database,cart) => {
  let newDB=[];

  for (let i=0; i<database.length; i++){
    let jumlahTemp=0;
    let omsetTemp=0;

    for (let j=0; j<cart.length;j++){
      for (let k=0; k<cart[j].keranjang.length;k++){
        if(cart[j].keranjang[k].idproduct == database[i].idproduct){
          jumlahTemp+=cart[j].keranjang[k].qty
          omsetTemp+=cart[j].keranjang[k].subtotal
        }
      }
    }
    let sisaStok=database[i].stock-jumlahTemp;
    newDB.push(new Report(database[i].idproduct,database[i].name,sisaStok,database[i].price,jumlahTemp,omsetTemp,database[i].stock))
  }
  return newDB;
}

getreport(db,beli)