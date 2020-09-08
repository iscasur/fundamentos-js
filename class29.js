const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

const onPeopleResponse = function (person) {
  console.log(`Hi, my name is ${person.name}`);
};

function getCharacter(id) {
  const URL = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(URL, opts, onPeopleResponse);
}

getCharacter(1);
getCharacter(2);
getCharacter(3);

// There is no way to know the order we'll get the API response
