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

let dbProduct = [
  new Product("SKU-1-126374", "https://pbs.twimg.com/profile_images/649550988169211904/ALQZxXEb_400x400.jpg", "Oreo", "Food", 25, 7500),
  new Product("SKU-2-198374", "https://ih1.redbubble.net/image.1665309730.5469/raf,128x128,075,f,fafafa:ca443f4786.jpg", "Pocari", "Drink", 50, 10000)
]

// let selectedIdx;

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
  document.getElementById("table-list").innerHTML = dbProduct.map((value, index) => {
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
    // ============= Cara 2 =============
    // if (selectedIdx == index){
    //   return `<tr>
    //   <td>${value.sku}</td>
    //   <td><img src="${value.img}" width=75px></td>
    //   <td><input type="text" id="new-name" value=${value.name} /></td>
    //   <td>${value.category}</td>
    //   <td><input type="number" id="new-stock" value=${value.stock} /></td>
    //   <td><input type="number" id="new-price" value=${value.price} /></td>
    //   <td><button type="button" onclick="">Save</button>
    //   <button type="button" onclick="handleCancel()">Cancel</button></td>
    //   </tr>
    // `
    // } else {
    //   return `<tr>
    //   <td>${value.sku}</td>
    //   <td><img src="${value.img}" width=75px></td>
    //   <td>${value.name}</td>
    //   <td>${value.category}</td>
    //   <td>${value.stock.toLocaleString()}</td>
    //   <td>IDR ${value.price.toLocaleString()}</td>
    //   <td><button type="button" onclick="handleEdit(${index})">Edit</button>
    //   <button type="button" onclick="handleDelete(${index})">Delete</button></td>
    //   </tr>
    // `
    // }
  }).join("");
}

function handleDelete(indexDelete) {
  if (confirm("Yakin mau menghapus produk ini?")) {
    dbProduct.splice(indexDelete, 1);
  }
  printProduct();
}

function handleEdit(indexEdit) {
  // selectedIdx = indexEdit;
  printProduct(indexEdit);
}

// function handleCancel() {
//   selectedIdx = null;
// }

function handleSave(index) {
  console.log(dbProduct);
  dbProduct[index].name = document.getElementById("new-name").value;
  dbProduct[index].stock = document.getElementById("new-stock").value;
  dbProduct[index].price = document.getElementById("new-price").value;
  printProduct();
}

printProduct();