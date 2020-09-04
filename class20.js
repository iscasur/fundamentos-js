var israel = {
  name: "Israel",
  lastname: "Castro",
  height: 1.65,
  amountOfBooks: 95,
};

var kim = {
  name: "Kimberli",
  lastname: "Apolonio",
  height: 1.6,
  amountOfBooks: 78,
};

var fany = {
  name: "Fany",
  lastname: "Castro",
  height: 1.62,
  amountOfBooks: 105,
};

var cobo = {
  name: "Jacobo",
  lastname: "Castro",
  height: 1.75,
  amountOfBooks: 56,
};

var nona = {
  name: "Alondra",
  lastname: "Castro",
  height: 1.64,
  amountOfBooks: 85,
};

const isTall = ({ height }) => height > 1.7;
const isSmall = ({ height }) => !isTall({ height });

var persons = [israel, kim, fany, cobo, nona];

var tallPersons = persons.filter(isTall);
var smallPersons = persons.filter(isSmall);
// var tallPersons = persons.filter(function (person) {
//   return person.height > 1.7;
// });

// person.height = person.height * 100
const heightInCms = (person) => ({
  ...person,
  height: person.height * 100,
});

var personsCms = persons.map(heightInCms);

console.log(tallPersons);
console.log(smallPersons);
console.log(personsCms);

// var acum = 0;

// for (var i = 0; i < persons.length; i++) {
//   acum = acum + persons[i].amountOfBooks;
// }

const reducer = (acum, { amountOfBooks }) => acum + amountOfBooks;

var totalOfBooks = persons.reduce(reducer, 0);

console.log(`En total todos tienesn ${totalOfBooks} libros`);
