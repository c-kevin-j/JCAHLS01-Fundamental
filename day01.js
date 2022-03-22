// Variable : Penampung data pada program
/**
 * susunan variable ===> keywordVariable namaVariable = nilaiVariable ;
 * 
 * keywordVariable : var, let, const
 * 
 * namaVariable : harus diawali dengan huruf atau symbol "_" atau "$"
 * 
 * nilaiVariable : berdasarkan tipe data ==> string, number, boolean, array, object
 */

// keyword var : redeclare, reassign
var nama = "Abdi"; // deklarasi variable : tahap pertama ketika membuat variable
var nama = "Edo"; // Redeclare ✅
nama = "Budi"; // Reassign ✅

console.log(nama); // console.log(nilai_yang_ingin_dilihat) : untuk menampilkan nilai pada terminal

// keyword let : Non-Redeclare, Reassign
let age = 26;
//let age = 20; // Redeclare ❌
age = 30 // Reassign ✅
console.log(age);

// keyword const : Non-Redeclare, Non-reassign
const PI = 3.14;
// const PI = 14; // Redeclare ❌
// PI = 22/7 // Reassign ❌

console.log(PI);

////////////////// ATURAN PENULISAN VARIABLE //////////////////
// 1. Harus diawali huruf
// let 1nama ; ❌
let pekerjaan; // ✅
var alamat = "Surabaya"; // ✅

// 2. Boleh diawali dengan symbol (_ atau $)
let _telp = "0812345678"; // ✅
let $fax = "031245667"; // ✅

// 3. Variable yang terdiri dari 2 suku kata atau lebih
let fullName = "Abdi ALghi";  // camelCase ✅
let harga_barang = 20000; // snake_case ✅
let namaproduk = "Air Jordan"; //✅
// let stok barang; // ❌
// let stok-barang; // ❌

// Keyboard shortcut yang biasa digunakan

// shift + alt + f : merapikan program
// windows + . : emoticon
// ctrl + s : untuk save program
// ctrl + / : membuat comment
// ctrl + f : find di program
// ctrl + ` : membuka terminal
// alt + arrow key : menggeser baris
// shit + alt + up/down arrow : duplicate baris program

/////////////////////////// DATA TYPE ///////////////////////////
// 1️⃣ String : untuk huruf atau karakter
let namaToko = "Gladius 'A' \"Toko\" Olahraga"; // double quote
let nama_toko = 'Gladius \'B\' "Toko" Olahraga'; // single quote
let namatoko = `Gladius 'C' "Toko" 
Olahraga`; // backtick
console.log(namaToko);
console.log(nama_toko);
console.log(namatoko);

let alamatToko = "Jl. Sudirman No 23";

//let alamatLengkap = namaToko + " " + alamatToko; // cara 1
let alamatLengkap = `Pak Eko, ${namaToko}, ${alamatToko}`; //cara 2

console.log(alamatLengkap);

////// FUNGSI PADA TIPE DATA STRING //////
let greeting = "Hello, Purwadhika Student";

// typeof : memeriksa tipe data
console.log("⚠️ output dari typeof ==>", typeof greeting); // nilai dari variable, menghasilkan string
console.log("⚠️ output dari typeof ==>", typeof "hello"); // nilai langsung, menghasilkan string

// string.length : menghitung panjang data string
console.log("⚠️ output dari string.length ==>", greeting.length);

// string.toLowerCase() : mengubah semua huruf menjadi huruf kecil
console.log("⚠️ output dari string.toLowerCase() ==>", greeting.toLowerCase());

// string.toUpperCase() : mengubah semua huruf menjadi huruf besar
console.log("⚠️ output dari string.toUpperCase() ==>", greeting.toUpperCase());

// string.includes() : memastikan sebuah kata ada pada variable 
console.log("⚠️ output dari string.includes('kata_cari') ==>", greeting.includes("Purwadhika")); // case sensitive 


// 2️⃣ Number : berkaitan angka

let jarak = 1500; // Nilai INT/INTEGER atau nilai bulat
let berat = 90.25; // Nilai FLOAT
let saldoATM = 25e6; // 25.000.000

// console.log(saldoATM);

// Arithmetic operator : +, -, *, /, %
let hasil = jarak + 500;
//console.log(1 + 2 + "2" + 4); // jadi 324
hasil = jarak - 500;
hasil = jarak / 500;
hasil = jarak * 500;

// Increment
jarak++; //1501
jarak++; //1502
jarak++; //1503
jarak++; //1504

jarak += 5; // ==> jarak = jarak + 5; // 1509
jarak += 5; // ==> jarak = jarak + 5; // 1514

jarak--; //1513
jarak--; //1512
jarak--; //1511
jarak--; //1510

jarak -= 5; // ==> jarak = jarak - 5; // 1505
jarak -= 5; // ==> jarak = jarak - 5; // 1500

console.log("Jarak ===>", jarak);

/////////////// Math Object ///////////////
const PI_CIRCLE = Math.PI;
console.log(PI_CIRCLE);

console.log(Math.abs(-25.5)); // nilai absolute positif
console.log(Math.abs(-25.5)*-1); // nilai absolute positif
console.log(-Math.abs(-25.5)); // nilai absolute positif

console.log(Math.pow(4,2)); // 4 pangkat 2
console.log(Math.sqrt(4)); // akar pangkat 2
console.log(Math.cbrt(8)); // akar pangkat 3

// Pembulatan
console.log(Math.round(2.5)); // pembulatan ke nilai terdekat
console.log(Math.ceil(2.5)); // pembulatan ke atas
console.log(Math.floor(2.5)); // pembulatan ke bawah

console.log(Math.min(3, 2, 5, 67, 3, 1)); // mencari nilai terkecil
console.log(Math.max(3, 2, 5, 67, 3, 1)); // mencari nilai terbesar

console.log(Math.random()); // membuat nilai random dari 0.xx s/d 1

// Parsing data string to number
let angka ="123.456"

console.log(typeof angka);
console.log(parseInt(angka)); // 123
console.log(parseFloat(angka)); // 123.456

// Parsing data number to string
let angkaB = 150050;

console.log(angkaB.toString()); // "150050"
console.log(angkaB.toLocaleString()); // "150.005"


// memeriksa data apakah angka
console.log(isNaN(2)); // NaN : not a number //false
console.log(isNaN("ABCDE")); // NaN : not a number //true
console.log(isNaN("12")); // NaN : not a number //false

// 3️⃣ Boolean : nilai benar =>> TRUE atau salah =>> FALSE
let benar = true;
let salah = false;

// Comparison Operator : >, <, >=, <=, ==, ===, !=
let angka_A = 20;
let angka_B = 15;
console.log("Comparison : ", angka_A > angka_B); // true
console.log("Comparison : ", angka_A < angka_B); // false
console.log("Comparison : ", angka_A == angka_A); // true
console.log("Comparison : ", angka_A == angka_B); // false
console.log("Comparison : ", angka_A != angka_B); // true
console.log("Comparison : ", angka_A == 20); // true
console.log("Comparison : ", angka_A == "20"); // true =>> selama nilainya sama, tipe data berbeda akan menghasilkan true
console.log("Comparison : ", angka_A === "20"); // false =>> nilai dan tipe datanya harus sama akan menghasilkan true

// Logical Operator : AND, OR, NOT

// AND : akan menghasilkan nilai TRUE apabila kedua perbandingan bernilai TRUE
console.log("Logical AND : ", true && true); // true
console.log("Logical AND : ", true && false); // false
console.log("Logical AND : ", false && false); // false
console.log("Logical AND : ", angka_A < 19 && angka_B < 19); // false && true => false
console.log("Logical AND : ", angka_A > 19 && angka_B < 19); // true && true => true

// OR : selama ada yang bernilai TRUE maka hasilnya adalah TRUE
console.log("Logical OR : ", true || true); // true
console.log("Logical OR : ", true || false); // true
console.log("Logical OR : ", false || true); // true
console.log("Logical OR : ", false || false); // false
console.log("Logical OR : ", angka_A >= 15 || angka_B <= 15); // true || true => true
console.log("Logical OR : ", angka_A >= 15 || angka_B > 15); // true || false => true

// NOT : membalik logika
console.log("Logical NOT : ", !true); // false
console.log("Logical NOT : ", !false); // true

// Tipe data Truthly dan Falsy
// Truthly ✅ : nilai pada tipe data yang bernilai true
console.log(Boolean(2)); // true
console.log(Boolean("ABCDE")); // true
console.log(Boolean(true)); // true
console.log(Boolean(-2)); // true
console.log(Boolean("false")); // true
console.log(Boolean(" ")); // true

// Truthly ❌ : nilai pada tipe data yang bernilai false
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false



