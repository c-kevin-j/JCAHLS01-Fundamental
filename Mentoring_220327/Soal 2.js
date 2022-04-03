class Warga {
  constructor(_antrian, _nama, _asal, _tujuan) {
    this.antrian = _antrian;
    this.nama = _nama;
    this.asal = _asal;
    this.tujuan = _tujuan;
  }
};

let dbWarga = [
  new Warga(`A27BN`, `Bayu`, `Tasikmalaya`, `Bogor`),
  new Warga(`IOA90`, `Yudi`, `Sukabumi`, `Cidodol`),
  new Warga(`T53WI`, `Andi`, `Jakarta`, `Bandung`),
];

let dbRapid = [];
let dbPositif = [];
let dbNegatif = [];

function printData(db, id) {
  let data = db.map((value, index) => {
    let tabel = `<tr>
    <td>${value.antrian}</td>
    <td>${value.nama}</td>
    <td>${value.asal}</td>
    <td>${value.tujuan}</td>`
    if (id == "list-antrian") {
      tabel += `<td><button type="button" onclick="handleRapid(${index})">Rapid Test</button></td>
      </tr>
      `
    } else if (id == "list-rapid") {
      tabel = printRapid(tabel, index);
    } else if (id == "list-positif") {
      tabel = printPositif(tabel, index)
    } else if (id == "list-negatif") {
      tabel = printNegatif(tabel, index)
    }
    return tabel
  });
  document.getElementById(id).innerHTML = data.join("");
}
printData(dbWarga, "list-antrian");

function printRapid(tabel, index) {
  tabel += `<td><select id="hasil-rapid-${index}" onchange="hasilRapid(${index})">
      <option value="null" selected>Pilih</option>
      <option value="positif">Positif</option>
      <option value="negatif">Negatif</option>
      </select>
      </td>
      </tr>
      `
    ;

  return tabel;
}

function printPositif(tabel, index) {
  tabel += `<td><select id="action-positif-${index}" onchange="actionPositif(${index})">
      <option value="null" selected>Pilih</option>
      <option value="sembuh">Sembuh</option>
      <option value="meninggal">Meninggal</option>
      </select>
      </td>
      </tr>
      `
    ;
  return tabel;
}

function printNegatif(tabel, index) {
  tabel += `<td><button type="button" onclick="actionNegatif(${index})">To Warga</button></td>
  </tr>
  `
  return tabel;
}

function randomizedID() {
  let nomorAntri = ``;
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  for (let i = 1; i <= 5; i++) {
    nomorAntri += characters[Math.floor(Math.random() * characters.length)];
  }
  return nomorAntri;
}

function handleAntri() {
  const nomorAntri = randomizedID();
  let inputName = document.getElementById("inputNama").value;
  let inputAsal = document.getElementById("inputAsal").value;
  let inputTujuan = document.getElementById("inputTujuan").value;
  dbWarga.push(new Warga(nomorAntri, inputName, inputAsal, inputTujuan));
  document.getElementById("inputNama").value = null;
  document.getElementById("inputAsal").value = null;
  document.getElementById("inputTujuan").value = null;
  printData(dbWarga, "list-antrian");
}

function handleRapid(index) {
  dbRapid.push(new Warga(dbWarga[index].antrian, dbWarga[index].nama, dbWarga[index].asal, dbWarga[index].tujuan))
  dbWarga.splice(index, 1)
  printData(dbWarga, "list-antrian");
  printData(dbRapid, "list-rapid");
}

function hasilRapid(indexRapid) {
  console.log("index", indexRapid)
  let hasil = document.getElementById(`hasil-rapid-${indexRapid}`).value;
  console.log("hasil", hasil)
  if (hasil == "positif") {
    dbPositif.push(new Warga(dbRapid[indexRapid].antrian, dbRapid[indexRapid].nama, dbRapid[indexRapid].asal, dbRapid[indexRapid].tujuan))
    dbRapid.splice(indexRapid, 1)
    printData(dbPositif, "list-positif");
    printData(dbRapid, "list-rapid");
  } else if (hasil == "negatif") {
    dbNegatif.push(new Warga(dbRapid[indexRapid].antrian, dbRapid[indexRapid].nama, dbRapid[indexRapid].asal, dbRapid[indexRapid].tujuan))
    dbRapid.splice(indexRapid, 1)
    printData(dbNegatif, "list-negatif");
    printData(dbRapid, "list-rapid");
  }
}

function actionNegatif(index) {
  dbWarga.push(new Warga(dbNegatif[index].antrian, dbNegatif[index].nama, dbNegatif[index].asal, dbNegatif[index].tujuan))
  dbNegatif.splice(index, 1);
  printData(dbWarga, "list-antrian");
  printData(dbNegatif, "list-negatif")
}

function actionPositif(index) {
  let hasil = document.getElementById(`action-positif-${index}`).value;
  if (hasil == "sembuh") {
    dbWarga.push(new Warga(dbPositif[index].antrian, dbPositif[index].nama, dbPositif[index].asal, dbPositif[index].tujuan))
    dbPositif.splice(index, 1);
    printData(dbWarga, "list-antrian");
    printData(dbPositif, "list-positif")
  } else if (hasil == "meninggal") {
    dbPositif.splice(index, 1)
    printData(dbPositif, "list-positif")
  }
}

