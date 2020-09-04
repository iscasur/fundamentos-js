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

var persons = [israel, kim, fany, cobo, nona];

for (var i = 0; i < persons.length; i++) {
  var person = persons[i];
  console.log(`${person.name} sizes ${person.height} mts`);
}
