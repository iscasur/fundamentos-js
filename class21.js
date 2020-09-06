function Person(name, lastname, height) {
  this.name = name;
  this.lastname = lastname;
  this.height = height;
}

Person.prototype.hi = function () {
  this.height > 1.7
    ? console.log(`Hola, me llamo ${this.name} ${this.lastname} y soy alto`)
    : console.log(`Hola, me llamo ${this.name} ${this.lastname} y soy bajo`);
};

var isra = new Person("Israel", "Castro", 1.65);
var kim = new Person("Kimberli", "Apolonio", 1.6);
var cobo = new Person("Jacobo", "Castro", 1.75);

isra.hi();
kim.hi();
cobo.hi();
