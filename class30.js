const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

function getCharacter(id, callback) {
  const URL = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

  $.get(URL, opts, function (person) {
    console.log(`Hi, my name is ${person.name}`);

    if (callback) {
      callback();
    }
  });
}

getCharacter(1, function () {
  getCharacter(2, function () {
    getCharacter(3, function () {
      getCharacter(4, function () {
        getCharacter(5, function () {
          getCharacter(6, function () {
            getCharacter(7);
          });
        });
      });
    });
  });
});

// There is no way to know the order we'll get the API response
