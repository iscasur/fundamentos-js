const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`;
const opts = { crossDomain: true };

const onPeopleResponse = function (person) {
  console.log(`Hi, my name is ${person.name}`);
};

$.get(lukeUrl, opts, onPeopleResponse);
