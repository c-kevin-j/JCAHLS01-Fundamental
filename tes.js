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

const productBought = {};

for (let i=0; i<beli.length; i++) {
  for (let j=0; j<beli[i].keranjang.length; j++) {
    const product = beli[i].keranjang[j];
    const productId = product.idproduct;
    if (productBought[productId]) { 
      // kalau pakai [ ] sama seperti menambahkan parameter baru ke dalam objeck, tapi kalau berdasarkan variabel. kalau pakai . berarti sudah tahu akan ditambahkan parameter apa
       productBought[productId]+= product.qty;
    } else {
       productBought[productId]= product.qty;
    }
  }
}

for (let i=0; i<db.length; i++) {
  db[i].salesQty = productBought[db[i].idproduct] || 0;
  db[i].omset = db[i].salesQty * db[i].price;
  db[i].totalStock = db[i].stock;
  db[i].stock -= db[i].salesQty;
}

// console.log(db)