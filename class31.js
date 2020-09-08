const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

function getCharacter(id, callback) {
  const URL = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

  $.get(URL, opts, callback).fail(() => {
    console.log(`Error. We couldn't get the id character ${id}`);
  });
}

getCharacter(1, function (character) {
  console.log(`Hi, my name is ${character.name}`);

  getCharacter(2, function (character) {
    console.log(`Hi, my name is ${character.name}`);

    getCharacter(3, function (character) {
      console.log(`Hi, my name is ${character.name}`);

      getCharacter(4, function (character) {
        console.log(`Hi, my name is ${character.name}`);

        getCharacter(5, function (character) {
          console.log(`Hi, my name is ${character.name}`);

          getCharacter(6, function (character) {
            console.log(`Hi, my name is ${character.name}`);

            getCharacter(7, function (character) {
              console.log(`Hi, my name is ${character.name}`);
            });
          });
        });
      });
    });
  });
});

// There is no way to know the order we'll get the API response
