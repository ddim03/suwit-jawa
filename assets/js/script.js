const playerName = document.querySelector('.info.player h4');
let inputName;
while (inputName == '' || inputName == null) {
  inputName = prompt("Masukan Nama anda : ");
  if (inputName == '' || inputName == null) {
    alert('Masukan nama anda terlebih dahulu');
  }
}
playerName.innerHTML = inputName;


function getComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp > 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getResult(computer, player) {
  if (computer == player) return "Seri!";
  if (computer == "gajah") return player == "semut" ? "Menang!" : "Kalah!";
  if (computer == "orang") return player == "gajah" ? "Menang!" : "Kalah!";
  if (computer == "semut") return player == "orang" ? "Menang!" : "Kalah!";
}

function randomComp() {
  const imgComputer = document.querySelector(".computer-area img");
  const img = ["gajah", "orang", "semut"];
  const start = new Date().getTime();
  let i = 0;
  setInterval(function () {
    if (new Date().getTime() - start > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "assets/img/" + img[i++] + ".png");
    if (i == img.length) i = 0;
  }, 100);
}

const playerOptions = document.querySelectorAll(".player-options img");
let sc = 0;
let sp = 0;
playerOptions.forEach((p) => {
  p.addEventListener("click", function () {
    const pComp = getComputer();
    const pPlayer = p.className;
    randomComp();
    setTimeout(function () {
      const result = document.querySelector(".judgment h4");
      result.innerHTML = getResult(pComp, pPlayer);
      const imgComp = document.querySelector(".computer-area img");
      imgComp.setAttribute("src", "assets/img/" + pComp + ".png");
      const sComp = document.querySelector('.scoreC span');
      const sPlayer = document.querySelector('.scoreP span');
      if (getResult(pComp,pPlayer) == 'Menang!') {
        sp++;
      } else if (getResult(pComp,pPlayer) == 'Kalah!') {
        sc++;
      }
      sComp.innerHTML = sc;
      sPlayer.innerHTML = sp;
      setTimeout(function(){
        if (sp == 3) {
          alert(`${inputName} Menang!!`);
          sp = 0;
          sc = 0;
          sComp.innerHTML = sc;
          sPlayer.innerHTML = sp;
        } else if(sc == 3) {
          alert('Computer Menang');
          sp = 0;
          sc = 0;
          sComp.innerHTML = sc;
          sPlayer.innerHTML = sp;
        }
      }, 500);
    }, 1000);
  });
});
