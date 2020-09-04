var israel = {
  name: "Israel",
  lastname: "Castro",
  age: 30,
  weight: 75,
};

console.log(`Al inicio del año ${israel.name} pesa ${israel.weight}kg`);

const CHANGE_WEIGHT = 0.2;
const DAYS_OF_YEAR = 365;

const upWeight = (person) => (person.weight += CHANGE_WEIGHT);
const downWeight = (person) => (person.weight -= CHANGE_WEIGHT);

for (var i = 1; i <= DAYS_OF_YEAR; i++) {
  var random = Math.random();

  if (random < 0.25) {
    upWeight(israel);
  } else if (random < 0.5) {
    downWeight(israel);
  }
}

console.log(
  `Al final del año ${israel.name} pesa ${israel.weight.toFixed(2)}kg`
);
