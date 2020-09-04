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

var kim = {
  name: "Kimberly",
  lastname: "Apolonio",
  age: 15,
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

const AGE_IS_ADULT = 18;

// const isAdult = function (person) {
//   return person.age >= AGE_IS_ADULT;
// };

const isAdult = ({ age }) => age >= AGE_IS_ADULT;

function printAge(person) {
  if (isAdult(person)) {
    console.log(`${person.name} is an adult`);
  } else {
    console.log(`${person.name} is not an adult`);
  }
}

const allowAccess = ({ age }) =>
  !isAdult({ age })
    ? console.log("ACCESS DENIED")
    : console.log("Access Acepted");

// function allowAccess(person) {
//   if (!isAdult(person)) {
//     console.log("DENIED ACCESS");
//   }
// }

printProfessions(israel);
printAge(israel);
