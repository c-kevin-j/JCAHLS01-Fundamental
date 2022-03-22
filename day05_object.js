// Day 05 : Object=> data penampung seperti array tetapi tidak harus berurutan. Dan alamatnya menggunakkan properti

/**
 * Array => penampung data yang berdasarkan alamat index
 * Object => penampung data yang berdasarkan alamat nama properti. properti bisa berupa string
 * 
 * let variableArray = [data1, data2, data3, ...] => umumnya untuk yg tipe data sama
 * 
 * let variableObject = {
 *    namaProperty: data,
 *    namaProduct: "Sepatu Air Jordan",
 *    price: 250000,
 *    isReady: true
 *    size: [43, 43, 45]
 *    total: (param)=>{block code} => jarang terjadi
 * } => biasa digunakan untuk kumpulan data yang punya beberapa tipe data
 * 
 */

// Menulis data object
// Cara 1️⃣: syntax object literal
let instructor = {
  name: "Abdi Alghi",
  class: "JCWDAHLS-01",
  age: 27,
  materi: [
    "Fundamental", "Front-end", "Back-end"
  ]
}
console.log(instructor.name);
console.log(instructor["materi"]);

// Cara 2️⃣: syntax object "new" keyword
let student = new Object();

student.name = "Andrew";
student.age = "23";
student.classes = "Full Stack";
student.age = "18";

// Object Destructuring => properti dari object seakan bisa digunakan sebagai variabel
let { name, age, classes } = student;
console.log(age);

// Object Destructuring Array
let data = ["Edo", "Jr", 27];
let [namaDepan, namaBelakang, usia] = data
console.log(namaDepan);
console.log(namaBelakang);
console.log(usia);

// ARRAY OF OBJECT
let product = [
  {
    name: "Hoodie",
    stock: 12,
    price: 75000
  },
  {
    name: "Sepatu",
    stock: 10,
    price: 80000
  },
];

//console.log(product[0].name)

// Looping pada object => untuk mengetahui ada properti apa saja
for(let property in instructor){
  console.log(`${property}: ${instructor[property]}`); 
}