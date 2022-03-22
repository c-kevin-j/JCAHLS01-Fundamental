/////////////////////// LOOP STATEMENT ///////////////////////
// LOOP : perulangan

/**
 * A. WHILE LOOP STATEMENT: digunakan ketika akhir loop belum pasti
 * 
 * while(condition){
 *  // program yang ingin dijalankan
 * }
 *  
 * */

// Example :
let nilai = 10;

while (nilai > 0) {
  //console.log("Angka :", nilai);
  nilai--;
}

/**
 * B. DO..WHILE LOOP STATEMENT
 * 
 * do{
 *    // program yang ingin dijalankan
 * } while(condition);
 */

let count = 1;
do {
  //console.log(`Bus No. ${count}`);
  count++;
} while (count <= 10);

/**
 * C. FOR LOOP STATEMENT : batas looping diketahui
 * 
 * for(statement_1; statement_2; statement_3){
 *  // program yang ingin dijalankan
 * }
 * 
 * statement_1 : variable yang mendefinisikan nilai awal dari batas looping
 * statement_2 : condition untuk memeriksa variable statement_1 dengan batas loopingnya, apakah bernilai true
 * statement_3 : berisi perintah increment atau decrement terhadap statement_1
 * 
 * keuntungan : dapat membatasi jumlah loop sejak awal
 */

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    //console.log(`Kereta No. ${i} Genap`);
  } else {
    //console.log(`Kereta No. ${i} Ganjil`);
  }
}

for (let i = 1; i <= 30; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`BizzBuzz =>`, i);
  } else if (i % 3 == 0) {
    console.log(`Bizz =>`, i);
  } else if (i % 5 == 0) {
    console.log(`Buzz =>`, i);
  }
}

