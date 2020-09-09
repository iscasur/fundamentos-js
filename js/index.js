const blue = document.getElementById("blue");
const violet = document.getElementById("violet");
const orange = document.getElementById("orange");
const green = document.getElementById("green");
const btnStart = document.getElementById("btnStart");

class Game {
  constructor() {
    this.initialize();
    this.generateSequence();
    this.nextLevel();
  }

  initialize() {
    this.chooseColor = this.chooseColor.bind(this);
    btnStart.classList.add("hide");
    this.level = 1;
    this.colors = {
      blue,
      violet,
      orange,
      green,
    };
  }

  generateSequence() {
    this.sequence = new Array(10)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 4));
  }

  nextLevel() {
    this.illuminateSequence();
    this.addEventsClick();
  }

  transformNumberToColor(number) {
    switch (number) {
      case 0:
        return "blue";
      case 1:
        return "violet";
      case 2:
        return "orange";
      case 3:
        return "green";
    }
  }

  illuminateSequence() {
    for (let i = 0; i < this.level; i++) {
      const color = this.transformNumberToColor(this.sequence[i]);
      setTimeout(() => this.illuminateColor(color), 1000 * i);
    }
  }

  illuminateColor(color) {
    this.colors[color].classList.add("light");
    setTimeout(() => this.turnOffColor(color), 350);
  }

  turnOffColor(color) {
    this.colors[color].classList.remove("light");
  }

  addEventsClick() {
    this.colors.blue.addEventListener("click", this.chooseColor);
    this.colors.violet.addEventListener("click", this.chooseColor);
    this.colors.orange.addEventListener("click", this.chooseColor);
    this.colors.green.addEventListener("click", this.chooseColor);
  }

  chooseColor(ev) {
    console.log(this);
  }
}

function startGame() {
  window.game = new Game();
}
