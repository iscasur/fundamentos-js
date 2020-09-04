var israel = {
  name: "Israel",
  lastname: "Castro",
  age: 30,
  weight: 75,
};

console.log(`Starting the year ${israel.name} weight ${israel.weight}kg`);

const CHANGE_WEIGHT = 0.3;
const DAYS_OF_YEAR = 365;
const META = israel.weight - 3;
var days = 0;

const upWeight = (person) => (person.weight += CHANGE_WEIGHT);
const downWeight = (person) => (person.weight -= CHANGE_WEIGHT);
const eatMuch = () => Math.random() < 0.3;
const doExercise = () => Math.random() < 0.4;

while (israel.weight > META) {
  if (eatMuch()) {
    upWeight(israel);
  }
  if (doExercise()) {
    downWeight(israel);
  }
  days += 1;
}

console.log(`${days} days passed until ${israel.name} lost 3kg`);
