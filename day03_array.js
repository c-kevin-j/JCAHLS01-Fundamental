// Day 03: Array Data Type
/**
 * 1. Definisi : Sebuah tipe data penampung. dikarenakan dapat menampung banyak data dan berbagai tipe data yang lain
 * Setiap data pada Array memiliki alamat index untuk bisa mengakses data tersebut. Index pada Array memiliki tipe data Number
 * 2. Tujuan : mempermudah pengelolaan data. (khususnya untuk data yang memiliki tujuan yang sama, sehingga bisa dikelompokkan jadi 1)
 * 3. Array bertipe object (jika diperiksa dengan typeOf)
 * Perbedaan Array dan Object: kalau Array punya index yang berdasarkan Number, Object pakai nama / string yang disebut properti.
 * 4. Array ditandai dengan [] => [data1, data2, ...]
 * 
 */

// Syntax Array
let namaApel = "Apel"; // ❌
let namaJeruk = "Jeruk"; // ❌

let namaBuah = ["Apel", "Jeruk", "Durian", "Melon"]; // Cara 1 ✔️
let stock = Array(10, 15, 25, 12); // Cara 2 ✔️
let harga = [];
harga[0] = 5000;
harga[1] = 2500;
harga[2] = 10000;
harga[3] = 7000;
// akses data pada array => namaVariable[index]
console.log("Nama Buah :", namaBuah[1]);
console.log("Stok Buah :", stock[1]);
console.log("Harga Buah :", harga[1]);
console.log(`Buah ${namaBuah[0]} stoknya ada ${stock[0]} dan harganya Rp.${harga[0]}`);

// let toko = "Toko Buah Manis"
// console.log(toko.split('').reverse().join(''))

// Merubah value dari salah satu data pada array
// Reassign
namaBuah[0] = "Semangka";
console.table(namaBuah)

let text = '';
for (let i = 0; i < namaBuah.length; i++) {
  text += (i + 1) + ' Buah ' + namaBuah[i] + ' stoknya ada ' + stock[i] + ' dan harganya Rp.' + harga[0] + '\n';
}
console.log(text);

//////////////////////////////////// ARRAY FUNCTION ////////////////////////////////////
// ⏺️ namaVariableArray.length : untuk mengetahui jumlah data yang ada di dalam array
// OUTPUT dari function length adalah NUMBER INT
console.log("Banyak data array :", namaBuah.length);
console.log("Value terakhir :", namaBuah[namaBuah.length - 1]);

// ⏺️ namaVariableArray.push(data) : digunakan untuk menambah item baru di akhir array
namaBuah.push("Alpukat");
stock.push(20);
harga.push(6500);
console.table(namaBuah);
console.table(stock);
console.table(harga);

// ⏺️ namaVariableArray.pop() : digunakan untuk menghapus data terakhir dari array
namaBuah.pop();
stock.pop();
harga.pop();
// console.table(namaBuah);
// console.table(stock);
// console.table(harga);

// ⏺️ namaVariableArray.unshift(data) : untuk menambah data baru di awal Array
namaBuah.unshift("Nangka");
stock.unshift(10);
harga.unshift(2500);

// ⏺️ namaVariableArray.shift() : digunakan untuk menghapus data pertama dari array
namaBuah.shift();
stock.shift();
harga.shift();

// ⏺️ namaVariableArray.reverse() : membalikkan urutan data array
let motor = ["Yamaha", "Honda", "Triumph", "Ducati"]
  ;
console.log("❌SEBELUM REVERSE :", motor);
console.log("✅SETELAH REVERSE :", motor.reverse());

// ⏺️ namaVariableArray.join("separator") : menggabungkan semua data array menjadi string 
console.log(motor.join()); // Ducati,Triumph,Honda,Yamaha
console.log(motor.join(' ')); // Ducati Triumph Honda Yamaha
console.log(motor.join(' / ')); // Ducati / Triumph / Honda / Yamaha

// ⏺️ namaVariableArray.splice(indexAwal, jumlahDataYangDihapus, dataBaru) : menghapus data Array pada index tertentu
// Fungsi 1️⃣ : menghapuss data array pada index tertentu
let mobil = ["Daihatsu", "Toyota", "Lexus", "BMW"];
console.log("❌SEBELUM DIHAPUS :", mobil); // 'Daihatsu', 'Toyota', 'Lexus', 'BMW'
mobil.splice(2, 1);
console.log("✅SETELAH DIHAPUS :", mobil); // 'Daihatsu', 'Toyota', 'BMW'

// Fungsi 2️⃣ : menyisipkan data baru
console.log("❌SEBELUM DISISIPKAN :", mobil);
mobil.splice(2, 0, "Lexus", "Mazda", "Wuling");
console.log("✅SESUDAH DISISIPKAN :", mobil); // 'Daihatsu', 'Toyota', 'Lexus', 'Mazda', 'Wuling', 'BMW'

// Fungsi 3️⃣ : Mengganti data
console.log("❌SEBELUM DIGANTI :", mobil);
mobil.splice(1, 1, "Ferrari");
console.log("✅SESUDAH DIGANTI :", mobil); // 'Daihatsu', 'Ferrari', 'Lexus', 'Mazda', 'Wuling', 'BMW'

// ⏺️ namaVariableArray.slice(startIndex, endIndex) 
console.log(mobil.slice(1, 4)) // 'Ferrari', 'Lexus', 'Mazda'

// ⏺️ namaVariableArray.includes(data) : memeriksa ada atau tidak data pada array
console.log(mobil.includes("Lexus")); // true
console.log(mobil.includes("Isuzu")); // false

// ⏺️ namaVariableArray.indexOf(data) : mencari alamat index dari data pada array
console.log(mobil.indexOf("BMW")); // 5
console.log(mobil.indexOf("Isuzu")); // -1

let nama = ["Budi", "Edo", "Budi"];
console.log(nama.indexOf("Budi")); // 0, mengembalikan yang pertama kali ditemukan
