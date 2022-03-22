// CLASS OBJECT at JAVASCRIPT (juga digunakan di C# C++ JAVA yang ada object oriented programming)
// untuk mengenerate (1) data object / (2) komponen yang biasa digunakan di front end di library react
// Class: template yang diperuntukan untuk membuat data object
/**
 * Class structure:
 * class className{
 *    constructor(arg1,arg2,...) { -> constructoryang akan menghasilkan tipe data object; arg untuk mendapatkan nilai dari luar kelas
 *        this.propertyName1 = arg1;
 *        this.propertyName2 = arg2;
 *    }
 * 
 *    method = () => { 
 *        // code
 *    }
 * }
 * 
 */

class Manusia { // nama class depannya huruf kapital
  constructor(_name, _birth, _gender) { // nama argumen diberi underscore supaya tidak bingung
    this.name = _name;
    this.birth = _birth;
    this.gender = _gender
  }

  getAge = () => {
    let birthYear = parseInt(this.birth.split("-")[2]);
    let date = new Date();
    return date.getFullYear() - birthYear;
  }

  introduce = () => {  // tidak perlu keyword val, karena langsung dianggap sebagai method
    return `My name is ${this.name}, I was born on ${this.birth}, my age is ${this.getAge()} years old`
  }
}

let dataPenduduk = [];

dataPenduduk.push(new Manusia("Renold", "12-11-1980", "M"));
dataPenduduk.push(new Manusia("Reva", "12-10-2000", "F"));

console.log(dataPenduduk);
let list = dataPenduduk.map((value, index) => {
  return `${index + 1}. ` + value.introduce()
})

console.log(list.join("\n"))

// Class Inheritance => pewarisan data dari class utama agar dapat digunakan oleh class turunannya => membuat class baru, tapi memiliki bagian dari class lain
// class turunan
class Pekerjaan extends Manusia {
  constructor(_name, _birth, _gender, _profession, _salary) {
    super(_name, _birth, _gender); //  super => menggunakan property dari class utama
    this.profession = _profession;
    this.salary = _salary;
    this.age = this.getAge();
  }
}

let dbJob = [];

dbJob.push(new Pekerjaan("Arnold", "13-10-1985", "Male", "Chef", 30000000))
console.log(dbJob)

let jobDesc = {
  job: "Prepare tools",
  getStatus: () => {
    return `Done`
  }
}

console.log(jobDesc.getStatus())