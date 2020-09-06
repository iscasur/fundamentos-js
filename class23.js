function Person(name, lastname, height) {
  this.name = name;
  this.lastname = lastname;
  this.height = height;
}

Person.prototype.hi = () => {
  console.log(`Hi, my name is ${this.name} ${this.lastname}`);
};

Person.prototype.isTall = function () {
  return this.height > 1.7;
};

var isra = new Person("Israel", "Castro", 1.65);
var kim = new Person("Kimberli", "Apolonio", 1.6);
var cobo = new Person("Jacobo", "Castro", 1.75);
