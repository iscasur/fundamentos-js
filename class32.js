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
  .then(function (person) {
    console.log(`The caracter #1 is ${person.name}`);
  })
  .catch(onError);
