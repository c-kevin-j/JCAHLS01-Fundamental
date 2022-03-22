/**
 * 1. Mencetak:
 * # # # # #
 * # # # # #
 * # # # # #
 * # # # # #
 * # # # # #
 * 
 */

// ==============Cara 1===============
// for (let i=1; i<=5; i++){
//   let print='';
//   for (let j=1; j<=5; j++){
//       print+='# ';
//     }
//   console.log(print);
//   }

// ==============Cara 2===============
// let symC ='';
// for (let i=1; i<=5; i++){
  //   for (let j=1; j <=5; j++) {
    //     symC+='# '
    //     if (j==5){
      //       symC+='\n'
      //     }
      //   }
      // }
      // console.log(symC)
      

/**
 * 2. Mencetak:
 * 1 0 0 0 0
 * 0 2 0 0 0
 * 0 0 3 0 0
 * 0 0 0 4 0
 * 0 0 0 0 5
 */


// for (let i=1; i<=5; i++){
//   let print='';
//   for (let j=1; j<=5; j++){
//     if (i==j){
//       print+=j+' ';
//     } else {
//       print+='0 '
//     }
//   }
//   console.log(print);
// }


/**
 * 3. Mencetak:
 * #
 * # #
 * # # #
 * # # # #
 * # # # # #
 */
let print='';
for (let i=1; i<=5; i++){
  for (let j=1; j<=i; j++){
      print+='# '
  }
  print+='\n';
}
console.log(print);
















