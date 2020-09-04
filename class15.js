var counter = 0;

const rains = () => Math.random() < 0.25;

do {
  counter++;
} while (!rains());

var frequency = counter === 1 ? "time" : "times";

console.log(`I went to see if it was raining ${counter} ${frequency}`);
