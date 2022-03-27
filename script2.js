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
    super(_sku, _img, _name, _price)
    this.qty = _qty;
    this.subTotal = _price * _qty;
  }
}

let dbProduct = [
  new Product("SKU-1-126374", "https://pbs.twimg.com/profile_images/649550988169211904/ALQZxXEb_400x400.jpg", "Oreo", "Food", 25, 7500),
  new Product("SKU-2-198374", "https://ih1.redbubble.net/image.1665309730.5469/raf,128x128,075,f,fafafa:ca443f4786.jpg", "Pocari", "Drink", 50, 10000)
]

let dbCart = [
  new Cart ("SKU-1-126374", "https://pbs.twimg.com/profile_images/649550988169211904/ALQZxXEb_400x400.jpg", "Oreo", 7500, 3)
]

let selectedIdx = null;
let dataFilter = [];

//////////////////////////////////// Management Product //////////////////////////////////////////
function handleSubmit() {
  // 1. Mengambil data
  let form = document.getElementById("form-product")
  let sku = `SKU-${dbProduct.length + 1}-${Math.round(Math.random() * 1000000)}`;
  let img = form.elements[0].value;
  let name = form.elements[1].value;
  let stock = form.elements[2].value;
  let price = form.elements[3].value;
  let category = form.elements[4].value;

  console.log(sku, img, name, price, stock, category)
  // 2. Proteksi
  if (img == "" || name == "" || category == "null" || stock == "" || price == "") {
    alert("Isi semua data dengan benar")
  } else {
    // 3. Data disimpan kedalam dbProduct
    dbProduct.push(new Product(sku, img, name, category, parseInt(stock), parseInt(price)))
    // 4. Reset ulang input element
    form.elements[0].value = "";
    form.elements[1].value = "";
    form.elements[2].value = null;
    form.elements[3].value = "";
    form.elements[4].value = "";
  }

  printProduct();
}

function handleSave(sku) {
  let idx = dbProduct.findIndex(val => val.sku == sku);
  // 1. ambil value dari form
  let name = document.getElementById("new-name").value;
  let stock = parseInt(document.getElementById("new-stock").value);
  let price = parseInt(document.getElementById("new-price").value);

  // 2. menyimpan data ke dbProduct berdasarkan selectedIdx
  dbProduct[idx].name = name;
  dbProduct[idx].stock = stock;
  dbProduct[idx].price = price;

  // 3. selectedIdx di reset
  selectedIdx = null;

  // 4. mencetak ulang table datanya
  if (dataFilter.length > 0) {
      dataFilter = dbProduct.filter(val => val.sku == sku);
      printProduct(dataFilter);
  } else {
      printProduct();
  }

}

function printProduct(data = dbProduct) {
  let htmlElement = data.map((val, idx) => {
      if (selectedIdx == idx) {
          return `<tr>
          <td>${val.sku}</td>
          <td><img src="${val.img}" width="75px"></td>
          <td><input type="text" id="new-name" value="${val.name}"/></td>
          <td>${val.category}</td>
          <td><input type="number" id="new-stock" value="${val.stock}"/></td>
          <td><input type="number" id="new-price" value="${val.price}"/></td>
          <td><button  type="button" onclick="handleSave('${val.sku}')">Save</button>
              <button type="button" >Cancel</button>
          </td>
      </tr>`
      } else {
          return `<tr>
          <td>${val.sku}</td>
          <td><img src="${val.img}" width="75px"></td>
          <td>${val.name}</td>
          <td>${val.category}</td>
          <td>${val.stock.toLocaleString()}</td>
          <td>IDR. ${val.price.toLocaleString()}</td>
          <td><button  type="button" onclick="handleEdit(${idx})">Edit</button>
              <button type="button" onclick="handleDelete('${val.sku}')">Delete</button>
          </td>
      </tr>`
      }
  })
  document.getElementById("table-list").innerHTML = htmlElement.join("")
  // console.log(htmlElement)
}

function handleEdit(idx) {
  selectedIdx = idx;
  if (dataFilter.length > 0) {
      printProduct(dataFilter);
  } else {
      printProduct();
  }
}

function handleDelete(sku) {
  console.log(sku)
  let idx = dbProduct.findIndex((val) => val.sku == sku)
  console.log(idx)
  if (confirm("Yakin mau menghapus produk ini ?")) {
      dbProduct.splice(idx, 1);
      if (dataFilter.length > 0) {
          dataFilter = dbProduct.filter(val => val.sku == sku);
          printProduct(dataFilter);
      } else {
          printProduct();
      }
  }
}

printProduct();

//////////////////////////// Filter Product ///////////////////////////////

function handleFilter() {
  // 1. get value dari form filter
  let form = document.getElementById("form-filter")
  let filterName = form.elements[0].value;
  let filterMin = parseInt(form.elements[1].value);
  let filterMax = parseInt(form.elements[2].value);
  let filterCategory = form.elements[3].value;
  console.log("Cek input : ", filterName, filterMin, filterMax, filterCategory);
  // 2. proses filter data
  dataFilter = dbProduct.filter((value, index) => {
      if (filterName.length > 0) {
          return value.name.toLowerCase().includes(filterName.toLowerCase())
      } else if (filterMin >= 0&& filterMax >=0) {
        return value.price >= filterMin && value.price <= filterMax
      } else if (filterCategory != "null") {
        return value.category == filterCategory
      }
  })

  console.log(dataFilter)

  // 3. mencetak data
  printProduct(dataFilter);

  // 4. reset form filter
  form.elements[0].value = "";
  form.elements[1].value = "";
  form.elements[2].value = "";
  form.elements[3].value = "null";
}

function handleReset() {
  printProduct();
  selectedIdx = null
}