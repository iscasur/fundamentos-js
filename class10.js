var israel = {
  name: "Israel",
  lastname: "Castro",
  age: 30,
  accountant: true,
  developer: true,
  singer: false,
  dj: false,
  guitar: false,
  droner: false,
};

function printProfessions(person) {
  console.log(`${person.name} is:`);

  if (person.accountant) {
    console.log("Accountant");
  } else {
    console.log("not an accountant");
  }

  if (person.developer) {
    console.log("Developer");
  }

  if (person.singer) {
    console.log("singer");
  }

  if (person.dj) {
    console.log("Dj");
  }

  if (person.guitar) {
    console.log("Guitar");
  }

  if (person.droner) {
    console.log("Droner");
  }
}

printProfessions(israel);
