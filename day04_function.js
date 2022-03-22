// Day 04 : FUNCTION
/**
 * 1. Function : sekumpulan program / command yang digunakan untuk menyelesaikan tugas tertentu, dan umumnya bisa digunakan berkali-kali
 * 2. Untuk menggunakan function, maka kita perlu membuat terlebih dahulu functionnya
 * 3. Function bersifat reusable
 * 4. Built-in Function : Function bawaan Javascript, seperti: console.log, prompt, alert
 * 5. User-defined function : function yang dibuat sendiri oleh user. Cara mendeklarasi:
 *    a. menggunakan keyword function
 *    b. Nama function 
 *    c. Parameter/argumen : agar function dapat menerima data dari luar function. Ciri Parameter/argumen
 *        i. Disimpan di dalam ()
 *        ii. Tidak wajib diberikan
 *        iii. Jika argumen >1, maka dipisahkan dengan "," 
 */
// Metode Deklarasi Function
/** 1. Declarative Function
 *  keywordFunction namaFunction(argumen){
 *      // code program yang ingin dijalankan
 * }
 * 
 */
let angka1 = 200;
let angka2 = 25;

// deklarasi function / pembuatan function
function penjumlahan() {
  let hasil = angka1 + angka2
  // console.log(hasil)
}

// memanggil function
penjumlahan; // tidak menjalankan apa-apa, hanya dipanggil, biasa dipakai kalau difront end, untuk event onclick

// menggunakan/menjalankan function
penjumlahan();

function pengurangan(argument1, argument2) {
  let hasil = argument1 - argument2;
  // console.log(hasil);
}

pengurangan(angka1, angka2);

/**2. Function Expression
 * 
 * keywordVariable namaVariable = keywordFunction(argument){
 *    // function code
 * }
 */

const perkalian = function (argument1, argument2) {
  let hasil = argument1 * argument2;
  // console.log(hasil);
}

perkalian(3, 3);

/**3. Arrow Function
 * keywordVariable namaVariable = (argument) => {
 *    // function code
 * }
 */

const pembagian = (argument1, argument2) => {
  let hasil = argument1 / argument2;
  // console.log(hasil);
}

pembagian(12, 5);

// Default value argument

// const kelipatan = (numb1, numb2 = 2) => {
//   let hasil = numb1 % numb2;
//   if (hasil==0){
//     console.log(`${numb1} adalah kelipatan ${numb2}`);
//   } else {
//     console.log(`${numb1} bukan kelipatan ${numb2}`)
//   }
// }

// kelipatan(15); // 15 bukan kelipatan 2

// return : keyword yang diperuntukkan untuk mengeluarkan nilai dari function, dan bisa digunakan di luar. Posisi return pasti di akhir function sebelum ditutup
const kelipatan = (numb1, numb2 = 2) => {
  let hasil = numb1 % numb2;
  if (hasil == 0) {
    return (`${numb1} adalah kelipatan ${numb2}`);
  } else {
    return (`${numb1} bukan kelipatan ${numb2}`)
  }
}

// console.log(kelipatan(15));


// exercise ganjilgenap
const ganjilGenap = (number) => {
  if (number % 2 == 0) {
    return "Genap";
  } else {
    return "Ganjil"
  }
}

// console.log(`6 adalah bilangan ${ganjilGenap(6)}`);
// console.log(`7 adalah bilangan ${ganjilGenap(7)}`);
// console.log(`5 adalah bilangan ${ganjilGenap(5)}`);
// console.log(`8 adalah bilangan ${ganjilGenap(8)}`);



let barang = ["Jaket", "Sepatu", "Kaos"]

let list = "";
// for (let i = 0; i< barang.length; i++) {
//   list += `${i + 1} ${barang[i]};\n`;
// }

// console.log(list);


// ⏺️ namaVariableArray.forEach() : meluooping sebuah data array dan TIDAK bisa menghasilkan array baru atau TIDAK menghasilkan return

// const cetak = (value, index) => {
//   list += `${index + 1} ${value};\n`
// }
// barang.forEach(cetak) // cara1

barang.forEach((value, index) => {
  list += `${index + 1} ${value};\n`
}); //cara2

// ==============VERSI MAP===============
let listBarang = barang.map((value, index) => {
  return `${index + 1}. ${value}`
})
console.log("FOREACH ===>", list)
console.log("MAP ===>", listBarang.join("\n"))

// console.log(list);
// callback function, di mana fungsi yang dipanggil di dalam sebuah fungsi yang menjadi parameter
//value dan index otomatis akan diambil dari variabel barang


// ⏺️ namaVariableArray.map() : melooping sekumpulan data dalam array; DAN bisa menghasilkan array baru atau menghasilkan return

let numb = [2, 3, 4, 1, 6, 5];
// misal mau semua dikali 2


// let kali =(value,index) =>{
//   return value *2;
// }
// let numbArr = numb.map(kali) // cara 1

// cara 2
let numbArr = numb.map((value, index) => {
  return value * 2;
}) // value dan index tetap bisa diganti dengan argumen lain, tapi posisinya sudah default; yang 1 untuk nilai arraynya, ke2 untuk index

console.log(numbArr)


// callback function, memanggil function dalam function
const jumlah = (angka1, angka2) => {
  return angka1 + angka2;
}

const jumlahDikali = (cb, pengali) => {
  return cb(2, 3) * pengali
} // cb = callback function, nanti akan diisi dengan function lain

console.log(jumlahDikali(jumlah, 5))

// ⏺️ namaVariableArray.filter() : mengolah data array sehingga menghasilkan array baru berdasarkan condition

//contoh dari variabel numb di atas, ingin menghasilkan yang genap saja

let filterGenap = numb.filter((value, index) => {
  return value % 2 == 0;
})
console.log(filterGenap);

