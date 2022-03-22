let database = [
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
  {
    name: "Kaos",
    stock: 12,
    price: 35000
  },
  {
    name: "Celana",
    stock: 10,
    price: 60000
  }
]

// 1️⃣ Menghitung total harga menggunakan forEach
let totalHarga = 0;
database.forEach((value, index) => {
  totalHarga += value.price;
})
//console.log(totalHarga);


// 2️⃣ Menghitung total harga menggunakan duplikasi fungsi forEach
// let total = 0;
// let listData ='';

// const duplicateForEach = (cbfn, array) => {
//   for (let i = 0; i < array.length; i++) {
//     cbfn(array[i], i)
//   }
// };

// duplicateForEach((value, index) => {
//   listData += `Nama Barang: ${value.name} Stok: ${value.stock} Harga: ${value.price} \n`;
// }, database)

// console.log(listData)

// 3️⃣ Membuat list barang menggunakan duplikasi fungsi map
const duplicateMap = (cbfn, array) => {
  let temp=[];
  for (let i = 0; i < array.length; i++) {
    temp.push(cbfn(array[i], i))
  }
  return temp;
};

let listDataMap = duplicateMap((value, index) => {
  return `Nama Barang: ${value.name} Stok: ${value.stock} Harga: ${value.price}`;
}, database)

// console.log(listDataMap.join('\n'))


// 4️⃣ Membuat list filter barang menggunakan duplikasi fungsi array Filter

const duplicateFilter = (cbfn, array) => {
  let temp=[];
  for (let i = 0; i < array.length; i++) {
    if(cbfn(array[i],i)){
      temp.push(array[i])
    }
  }
  return temp;
};

listDataFilter = duplicateFilter((value, index) => {
  return value.name == 'Hoodie';
}, database)

//console.log(listDataFilter)

// 5️⃣ Object Function
let student = {
  nama: "Edo Renaldo",
  usia: 20,
  kelas: "IPA",
}

//console.log(Object.keys(student)); // [ 'nama', 'usia', 'kelas' ]

const duplicateGetKeys=(obj)=>{
  let temp = [];
  for(let property in obj){
    temp.push(property); 
  }
  return temp;
}
//console.log(duplicateGetKeys(student));


// 6️⃣ Get Value
const duplicateGetValues=(obj)=>{
  let temp = [];
  for(let property in obj){
    temp.push(obj[property]); 
  }

  return temp;
}
console.log(duplicateGetValues(student));


// 7️⃣ Get Entries
// [["nama","Edo Renaldo"],["usia",20], ["kelas","IPA"]]
const duplicateGetEntries=(obj)=>{
  let temp = [];
  for(let property in obj){
      let tempEntries = [];
      tempEntries.push(property); 
      tempEntries.push(obj[property]); 
      temp.push(tempEntries)
    }
  return temp;
}
console.log(duplicateGetEntries(student));


