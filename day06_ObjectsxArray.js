// ARRAY OF OBJECTS
/**
 * 1. Merupakan struktur data yang biasa digunakan untuk output database  => object untuk menyimpan data detail
 * 2. Juga digunakan untuk data JSON (Javascript Object Notation) -> struktur data (tipe datanya biasa object), namun biasa digunakan sebagai media penyimpanan data yang biasa berupa array of objects juga
 * 3. Struktur penulisan :
 *    let arrObj = [
 *        {
 *          id : 1,
 *          name : "Jacket",
 *          stock : [
 *                      {
 *                        type: "Red",
 *                        qty: 20
 *                      }
 *                  ],
 *        }
 *    ]
 * 
 */
// Fungsi yang biasa digunakan
// Array.map() ==> Ditujukan untuk mengolah data Array of Object secara sekaligus; contoh untuk men-generate tampilan ==> Output : Array
// Array.filter() ==> Ditujukan untuk memfilter data Array of Objects; contoh membuat fitur pencarian data  ==> Output : Array
// Array.findIndex() ==> Ditujukan untuk mencari index dari data yang dimiliki (kalau di array biasa pakai indexOf)  ==> Output : Number

let dataProduct = [
  {
    name: "Jacket",
    price: 85000,
    stock: [
      {
        type: "M",
        qty: 8
      },
      {
        type: "L",
        qty: 12
      },
      {
        type: "XL",
        qty: 15
      }
    ]
  },
  {
    name: "Shoes",
    price: 70000,
    stock: [
      {
        type: "40",
        qty: 10
      },
      {
        type: "41",
        qty: 5
      },
      {
        type: "42",
        qty: 3
      }
    ]
  },
  {
    name: "Hat",
    price: 35000,
    stock: [
      {
        type: "S",
        qty: 10
      },
      {
        type: "M",
        qty: 5
      },
      {
        type: "L",
        qty: 3
      }
    ]
  },
]
// console.table(dataProduct);

let searchData = dataProduct.filter((value, index) => {
  return value.name == "Hat"
});

let dataIdx = dataProduct.findIndex((value, index) => {
  return value.name == "Hat"
})
// console.table(searchData);
// console.table(dataIdx);
dataProduct[dataIdx].name = "Topi";
// console.table(dataProduct);

// CONCATINATION ==> Penggabungan data array atau menduplikasi data
let mobil = ["Tesla", "Ferrari", "Lamborgini"];
let motor = ["Honda", "Yamaha", "Kawasaki"];
// let kendaraan = mobil.concat(motor, ["KTM", "Wuling"]); // Cara 1
// let kendaraan = [...mobil, ...motor, "Harley"] // cara 2 : spread operator : mengambil semua isi Array dan dipindahkan

// let sepedaMotor = motor; // kalau seperti ini akan dianggap hanya seperti rename, sehingga kalau ada perubahan di sepedaMotor, motor ikut berubah

let sepedaMotor = [...motor];
sepedaMotor[0] = "SUZUKI";

// console.log(motor)
// console.log(sepedaMotor)

let dbA = {
  name: "Reno",
  usia: 12,
  alamat: "BSD"
}
let dbB = {
  pekerjaan: "Coder",
  gaji: 7500000
}

let dataDB = { ...dbA, ...dbB, alamat:"Sudirman Thamrin", status: "Aktif" } // kalau ada penambahan manual, harus perhatikan apakah sudah ada propertynya. kalau ada yang sama, maka nilai yang lama akan ditimpa
console.log(dataDB)


