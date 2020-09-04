var israel = {
  name: "Israel",
  lastname: "Castro",
  height: 1.65,
};

var kim = {
  name: "Kimberli",
  lastname: "Apolonio",
  height: 1.6,
};

var fany = {
  name: "Fany",
  lastname: "Castro",
  height: 1.62,
};

var cobo = {
  name: "Jacobo",
  lastname: "Castro",
  height: 1.75,
};

var nona = {
  name: "Alondra",
  lastname: "Castro",
  height: 1.64,
};

const isTall = ({ height }) => height > 1.7;
const isSmall = ({ height }) => !isTall({ height });

var persons = [israel, kim, fany, cobo, nona];

var tallPersons = persons.filter(isTall);
var smallPersons = persons.filter(isSmall);
// var tallPersons = persons.filter(function (person) {
//   return person.height > 1.7;
// });

console.log(tallPersons);
console.log(smallPersons);
