const blue = document.getElementById("blue");
const violet = document.getElementById("violet");
const orange = document.getElementById("orange");
const green = document.getElementById("green");
const btnStart = document.getElementById("btnStart");

class Juego {
  constructor() {
    this.initialize();
  }

  initialize() {
    btnStart.classList.add("hide");
  }
}

function startGame() {
  var juego = new Juego();
}
