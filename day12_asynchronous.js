// ASYNCHRONOUS
/**
 * proses eksekusi program pada Javascript
 * 1. Synchronous : mengeksekusi program secara berurutan per baris
 * 
 * 2. Asynchronous : output tidak keluar berurutan (ada semacam jeda untuk memproses fungsinya -> biasa kalo ada interaksi dengan server sehingga ada butuh waktu eksekusi / mendapatkan output dari luar aplikasinya)
 * 
 * 
 */

// Synchronous
function funcA () {
  console.log("Fungsi A")
}
function funcB () {
  console.log("Fungsi B")
}
function funcC () {
  console.log("Fungsi C")
}
funcA()
funcB()
funcC()

// Asynchronous Function Javascript: setTimeout, setInterval => umumnya tapi tidak menggunakan ini, tapi membuat function sendiri untuk interaksi dengan server
function funcD () {
  console.log("Fungsi D")
}
function funcE () {
  setTimeout(()=>{
    console.log("Fungsi E")
  },500)
}
function funcF () {
  console.log("Fungsi F")
}
funcD()
funcE()
funcF()

