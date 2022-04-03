class Product {
  constructor(_sku, _img, _name, _category, _stock, _price) {
    this.sku = _sku; // format SKU adalah SKU-(urutan produk)-(angka random 6 digit)
    this.img = _img;
    this.name = _name;
    this.category = _category;
    this.stock = _stock;
    this.price = _price;
  }
}

class Cart extends Product {
  constructor(_sku, _img, _name, _price, _qty) {
    super(_sku, _img, _name, null, null, _price)
    this.qty = _qty;
    this.subTotal = _price * _qty;
  }
}

class Transaction {
  constructor(_index,_username,_date,_totalPayment,_change,_detail) {
    this.index = _index;
    this.username = _username;
    this.date = _date;
    this.totalPayment = _totalPayment;
    this.change = _change;
    this.detail = _detail;
  }
}

let dbProduct = [
  new Product("SKU-1-126374", "https://pbs.twimg.com/profile_images/649550988169211904/ALQZxXEb_400x400.jpg", "Oreo", "Food", 25, 7500),
  new Product("SKU-2-198374", "https://ih1.redbubble.net/image.1665309730.5469/raf,128x128,075,f,fafafa:ca443f4786.jpg", "Pocari", "Drink", 50, 10000)
]

let dbCart = []

let dbTransaction = []

function handleSubmit() {
  let form = document.getElementById("form-product");
  let img = form.elements[0].value;
  let name = form.elements[1].value;
  let stock = Number(form.elements[2].value);
  let price = Number(form.elements[3].value);
  let category = form.elements[4].value;

  if (img && name && stock && price && category != "null") {
    let sku = `SKU-${dbProduct.length + 1}-${`000000${(Math.floor(Math.random() * 999999)) + 1}`.slice(-6)}`; // slice(-6) untuk mengambil 6 digit terakhir
    dbProduct.push(new Product(sku, img, name, category, stock, price));
    form.elements[0].value = null;
    form.elements[1].value = null;
    form.elements[2].value = null;
    form.elements[3].value = null;
    form.elements[4].value = null;
  } else {
    alert("Isi data dengan benar");
  }
  printProduct();
}

function printProduct(indexEdit) {
  let indexFilter = [];
  let dataFilter = document.getElementById("form-filter");
  let byName = dataFilter.elements[0].value.toLowerCase();
  let byMin = Number(dataFilter.elements[1].value);
  let byMax = Number(dataFilter.elements[2].value);
  let byCategory = dataFilter.elements[3].value;

  dbProduct.forEach((value, index) => {
    const validName = (byName == "" || value.name.toLowerCase().includes(byName));
    const validPriceMin = (byMin == 0 || (value.price >= byMin))
    const validPriceMax = (byMax == 0 || (value.price <= byMax));
    const validCategory = (byCategory == "null" || (value.category == byCategory));
    if (validName && validPriceMin && validPriceMax && validCategory) {
      indexFilter.push(index)
    }
  })

  document.getElementById("table-list").innerHTML = dbProduct.map((value, index) => {
    if (indexFilter.includes(index)) {
      if (index != indexEdit) {
        return `<tr>
      <td>${value.sku}</td>
      <td><img src="${value.img}" width=75px></td>
      <td>${value.name}</td>
      <td>${value.category}</td>
      <td>${value.stock.toLocaleString()}</td>
      <td>IDR ${value.price.toLocaleString()}</td>
      <td><button type="button" onclick="handleEdit(${index})">Edit</button>
      <button type="button" onclick="handleDelete(${index})">Delete</button></td>
      <td><button type="button" onclick="handleBuy('${value.sku}')">🛒Buy</td>
      </tr>
    `
      } else {
        return `<tr>
      <td>${value.sku}</td>
      <td><img src="${value.img}" width=75px></td>
      <td><input type="text" id="new-name" value=${value.name} /></td>
      <td>${value.category}</td>
      <td><input type="number" id="new-stock" value=${value.stock} /></td>
      <td><input type="number" id="new-price" value=${value.price} /></td>
      <td><button type="button" onclick="handleSave(${index})">Save</button>
      <button type="button" onclick="printProduct()">Cancel</button></td>
      </tr>
    `
      }
    }

  }).join("");
}

function handleDelete(indexDelete) {
  if (confirm("Yakin mau menghapus produk ini?")) {
    dbProduct.splice(indexDelete, 1);
  }
  printProduct();
}

function handleEdit(indexEdit) {
  printProduct(indexEdit);
}

function handleSave(index) {
  dbProduct[index].name = document.getElementById("new-name").value;
  dbProduct[index].stock = Number(document.getElementById("new-stock").value);
  dbProduct[index].price = Number(document.getElementById("new-price").value);
  printProduct();
}

function handleReset() {
  let form = document.getElementById("form-filter");
  form.elements[0].value = null;
  form.elements[1].value = null;
  form.elements[2].value = null;
  form.elements[3].value = null;
  printProduct();
}

printProduct();

/////////////////// Manage Transaction ///////////////////
function printKeranjang() {
  let htmlElement = dbCart.map((value, index) => {
    return `
    <tr>
        <td>${index + 1}</td>
        <td>${value.sku}</td>
        <td><img src="${value.img}" width="75px"></td>
        <td>${value.name}</td>
        <td>IDR. ${value.price.toLocaleString()}</td>
        <td>${value.qty.toLocaleString()}</td>
        <td>IDR. ${value.subTotal.toLocaleString()}</td>
        <td>
        <button type="button" onclick="handleDeleteCart('${value.sku}')">Delete</button>
        </td>
    </tr>
    `
  })

  document.getElementById("cart-list").innerHTML = htmlElement.join("");
  totalHarga();
}


function handleBuy(skuBuy) {
  let idxDB = dbProduct.findIndex((val) => val.sku == skuBuy)
  let idxCart = dbCart.findIndex((val) => val.sku == skuBuy);
  if (idxCart == -1) {
    dbCart.push(new Cart(dbProduct[idxDB].sku, dbProduct[idxDB].img, dbProduct[idxDB].name, dbProduct[idxDB].price, 1))
    dbProduct[idxDB].stock -= 1
  } else {
    if (dbProduct[idxDB].stock == 0) {
      alert('Stok tidak mencukupi');
    } else {
      dbProduct[idxDB].stock -= 1
      dbCart[idxCart].qty += 1;
      dbCart[idxCart].subTotal = dbCart[idxCart].qty * dbCart[idxCart].price;
    }
  }
  printProduct();
  printKeranjang();
}

function handleDeleteCart(skuDelete) {
  let idxDB = dbProduct.findIndex((val) => val.sku == skuDelete)
  let idxCart = dbCart.findIndex((val) => val.sku == skuDelete);

  dbProduct[idxDB].stock += 1
  if ((dbCart[idxCart].qty - 1) > 0) {
    dbCart[idxCart].qty -= 1;
    dbCart[idxCart].subTotal = dbCart[idxCart].qty * dbCart[idxCart].price;
  } else {
    dbCart.splice(idxCart, 1);
  }
  printProduct();
  printKeranjang();
}

let hargaBayar=0;
function totalHarga() {
  // bisa juga isinya dipindahkan ke print keranjang
  hargaBayar = 0;
  dbCart.forEach((value) => {
    hargaBayar += value.subTotal;
  }
  )
  document.getElementById("total-harga").innerHTML = `IDR ${hargaBayar.toLocaleString()}`;
}

function handleCheckout() {
  let totalBayar = parseInt(document.getElementById("total-bayar").value);
  if (totalBayar < hargaBayar) {
    document.getElementById("kwitansi").innerHTML = `<td colspan=2>Uang Anda tidak mencukupi</td>`
  } else if (totalBayar >= hargaBayar) {
    document.getElementById("kwitansi").innerHTML = `<td colspan=2>Total belanja = IDR ${hargaBayar.toLocaleString()}; Total Bayar = IDR ${totalBayar.toLocaleString()}; Kembalian Anda = IDR ${(totalBayar - hargaBayar).toLocaleString()} </td>`

    let username = document.getElementById("user-name").value
    let date = new Date();
    dbTransaction.push(new Transaction(dbTransaction.length+1,username, `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`,totalBayar,totalBayar-hargaBayar,dbCart))
    console.log(dbTransaction)
    document.getElementById("total-bayar").value = null
    hargaBayar = 0;
    document.getElementById("total-harga").innerHTML = 0;
    dbCart = []
    document.getElementById("user-name").value = null;

    printKeranjang();
  } else {
    document.getElementById("kwitansi").innerHTML = ``
  }
  printHistori();
}

function printHistori() {
  document.getElementById("histori-transaksi").innerHTML = dbTransaction.map((val,idx) => {
    return`<tr>
    <td>${val.index}</td>
    <td>${val.username}</td>
    <td>${val.date}</td>
    <td>${parseInt(val.totalPayment) - parseInt(val.change)}</td>
    </tr>
    `
  }).join("")
}

function handleCancelCheckout() {
  dbCart.forEach((val) => {
    dbProduct.forEach((value)=> {
      if (val.sku==value.sku){
        value.stock+=val.qty
      }
    })
  })
  dbCart = [];
  printKeranjang();
  printProduct();
}