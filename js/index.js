const blue = document.getElementById("blue");
const violet = document.getElementById("violet");
const orange = document.getElementById("orange");
const green = document.getElementById("green");
const btnStart = document.getElementById("btnStart");
const LAST_LEVEL = 10;

class Game {
  constructor() {
    this.initialize();
    this.generateSequence();
    setTimeout(this.nextLevel(), 500);
  }

  initialize() {
    this.nextLevel = this.nextLevel.bind(this);
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
    this.sequence = new Array(LAST_LEVEL)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 4));
  }

  nextLevel() {
    this.sublevel = 0;
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

  transformColorToNumber(color) {
    switch (color) {
      case "blue":
        return 0;
      case "violet":
        return 1;
      case "orange":
        return 2;
      case "green":
        return 3;
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

  deleteEventClick() {
    this.colors.blue.removeEventListener("click", this.chooseColor);
    this.colors.violet.removeEventListener("click", this.chooseColor);
    this.colors.orange.removeEventListener("click", this.chooseColor);
    this.colors.green.removeEventListener("click", this.chooseColor);
  }

  chooseColor(ev) {
    const nameColor = ev.target.dataset.color;
    const numberColor = this.transformColorToNumber(nameColor);
    this.illuminateColor(nameColor);
    if (numberColor === this.sequence[this.sublevel]) {
      this.sublevel++;
      if (this.sublevel === this.level) {
        this.level++;
        this.deleteEventClick();
        if (this.level === LAST_LEVEL + 1) {
          // Won
        } else {
          setTimeout(this.nextLevel, 2000);
        }
      }
    } else {
      // Lost
    }
  }
}

function startGame() {
  window.game = new Game();
}
