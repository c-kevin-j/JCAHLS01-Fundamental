const correctAnswer = {
  no1: 'A',
  no2: 'B',
  no3: 'D',
  no4: 'D',
}

let score = 0;

let yourAnswer = {
  no1: '',
  no2: '',
  no3: '',
  no4: '',
}

function handleSubmit() {
  console.log("submit");
  let totalCorrect = 0;
  let form = document.getElementById("answers")
  yourAnswer.no1 = form.elements["no1"].value;
  yourAnswer.no2 = form.elements["no2"].value;
  yourAnswer.no3 = form.elements["no3"].value;
  yourAnswer.no4 = form.elements["no4"].value;

  for (let index in correctAnswer) {
    if (correctAnswer[index] == yourAnswer[index]) {
      totalCorrect++;
    }
  }
  score = totalCorrect * 25;
  printSkor();
}

function printSkor() {
  document.getElementById("score").innerHTML = `Nilai anda adalah ${score}`
}

function handleReset() {
  let form = document.getElementById("answers");

  for (let i = 0; i < form.length; i++) {
    let radioButton = form[i];
    radioButton.checked = false;
  }
  score = 0;
  yourAnswer.no1 = '';
  yourAnswer.no2 = '';
  yourAnswer.no3 = '';
  yourAnswer.no4 = '';
  document.getElementById("score").innerHTML = ``
}