const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

function getCharacter(id) {
  return new Promise((resolve, reject) => {
    const URL = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

    $.get(URL, opts, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

function onError(id) {
  console.log(`We couldn't get the character ${id}`);
}

getCharacter(1)
  .then((person) => {
    console.log(`The caracter #1 is ${person.name}`);
    return getCharacter(2);
  })
  .then((person) => {
    console.log(`The caracter #2 is ${person.name}`);
    return getCharacter(3);
  })
  .then((person) => {
    console.log(`The caracter #3 is ${person.name}`);
    return getCharacter(4);
  })
  .then((person) => {
    console.log(`The caracter #4 is ${person.name}`);
    return getCharacter(5);
  })
  .then((person) => {
    console.log(`The caracter #5 is ${person.name}`);
    return getCharacter(6);
  })
  .then((person) => {
    console.log(`The caracter #6 is ${person.name}`);
    return getCharacter(7);
  })
  .then((person) => {
    console.log(`The caracter #7 is ${person.name}`);
  })
  .catch(onError);
