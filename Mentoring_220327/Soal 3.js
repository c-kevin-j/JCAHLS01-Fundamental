let hasil = {
  menang: 0,
  kalah: 0,
  imbang: 0,
  lastResult: '',
  poinTotal: 0,
}

function handleSubmit(player) {
  let opponent = opponentPlay();
  hasil = contest(player, opponent);

  document.getElementById("play-suit").innerHTML = `
  <h2>Player</h2>
  <img src=${player}.png width=100px><br />
  <img src="Versus-PNG-Clipart.png" width=100px>
  <h2>PC</h2>
  <img src=${opponent}.png width=100px>
  `

  document.getElementById("result").innerHTML = `
  <p>Kamu ${hasil.lastResult}</p>
  <p>Table Score Player: Menang : ${hasil.menang}; Kalah : ${hasil.kalah}; Imbang = ${hasil.imbang}; Score : ${hasil.poinTotal}</p>
  `
}

function opponentPlay() {
  let random = Math.floor(Math.random() * 3) + 1
  let opponent = "";
  if (random == 1) {
    opponent = 'gunting';
  } else if (random == 2) {
    opponent = 'batu';
  } else if (random == 3) {
    opponent = 'kertas';
  }
  return opponent;
}

function contest(player, opponent){
  if ((player == 'gunting' && opponent == 'kertas') || (player == 'batu' && opponent == 'gunting') || (player == 'kertas' && opponent == 'batu')) {
    hasil.lastResult ='MENANG';
    hasil.menang += 1;
    hasil.poinTotal +=25;
  } else if (player == opponent) {
    hasil.lastResult ='IMBANG';
    hasil.imbang += 1;
  } else {
    hasil.lastResult ='KALAH';
    hasil.kalah += 1;
  }
  return hasil;
}

