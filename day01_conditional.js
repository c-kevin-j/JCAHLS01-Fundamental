////////////////////////// CONDITIONAL STATEMENT //////////////////////////
/** 
 * Aturan conditional statement :
 * 1. Membutuhkan nilai boolean (bisa dari comparison operator, logical operator, truthly-falsy)
 * 
 * Jenis :
 * 1. IF STATEMENT : untuk 1 kondisi
 * 2. IF...ELSE STATEMENT : untuk 2 kondisi
 * 3. IF...ELSE IF...ELSE STATEMENT : untuk >2 kondisi
 * 4. SWITCH...CASE STATEMENT : untuk memastikan sebuah nilai dengan case yg ditentukan
*/

// 1. IF STATEMENT
let nama = "Leonardo";
let usia = 20;
let email = "leo@mail.com";
/**
 * Aturan Penulisan :
 * if(condition){
 *   // task
 * }
 * note :
 * - condition : kondisi yang diinginkan, bernilai BOOLEAN (COMPARISON / LOGICAL OPERATOR / TRUTHLY / FALSY)
 * - task : apa yang ingin dijalankan ketika condition if terpenuhi
 */

// Example : memverifikasi usia pendaftaran SIM
if(usia >= 17){
  //console.log("Verifikasi usia berhasil ✅", nama); // cara 1
  console.log(`Verifikasi usia ${nama} berhasil ✅, periksa email ${email} anda ⚠️`); // cara 2
}

// 2. IF...ELSE STATEMENT
/**
 * Aturan Penulisan :
 * if(condition){
 *   // task
 * } else {
 *   //task
 * }
 * note :
 * - condition : kondisi yang diinginkan, bernilai BOOLEAN (COMPARISON / LOGICAL OPERATOR / TRUTHLY / FALSY)
 * - task : apa yang ingin dijalankan ketika condition if terpenuhi
 */
if (usia >=17){
  console.log(`Verifikasi usia ${nama} berhasil ✅, periksa email ${email} anda ⚠️`);
} else {
  console.log(`Verifikasi usia ${nama} gagal ❌`);
}

// 3. IF...ELSE IF...ELSE STATEMENT
/**
 * Aturan Penulisan :
 * if(condition){
 *   // task
 * } else if(condition){
 *   // task
 * } else {
 *   // task
 * }
 * note :
 * - condition : kondisi yang diinginkan, bernilai BOOLEAN (COMPARISON / LOGICAL OPERATOR / TRUTHLY / FALSY)
 * - task : apa yang ingin dijalankan ketika condition if terpenuhi
 */

let nilai = 50;

if (nilai>=90){
  console.log("Grade A", nilai);
} else if (nilai >=80 && nilai < 90){
  console.log("Grade B", nilai);
} else if (nilai >= 70 && nilai  <80){
  console.log("Grade C", nilai);
} else {
  console.log("Grade D", nilai);
}

// 4. SWITCH..CASE -> harus menyediakan case yang diperiksa
let profesi = "Coder";
switch(profesi){
  case "Coder":
    //task
    console.log("Saya suka bikin aplikasi");
    break; // supaya tidak terus menjalankan case yang di bawahnya
  case "Dokter":
    console.log("Saya suka mengobati orang");
    break;
  case "Polisi":
    console.log("Saya suka nilang");
    break;
  default:
    console.log("Gak tau ngapain");
    break;
}

// Ternary operator : condition ? task : task  -> : ibarat else
let validasi_usia = usia > 17 ? "Usia cukup" : "Usia tidak cukup";

console.log(validasi_usia);
