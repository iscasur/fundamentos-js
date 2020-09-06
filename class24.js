function hierarchicalFrom(protoSon, protoFather) {
  var fn = function () {};
  fn.prototype = protoFather.prototype;
  protoSon.prototype = new fn();
  protoSon.prototype.constructor = protoSon;
}

function Person(name, lastname, height) {
  this.name = name;
  this.lastname = lastname;
  this.height = height;
}

Person.prototype.hi = function () {
  console.log(`Hi, my name is ${this.name} ${this.lastname}`);
};

Person.prototype.isTall = function () {
  return this.height > 1.7;
};

function Developer(name, lastname) {
  this.name = name;
  this.lastname = lastname;
}

hierarchicalFrom(Developer, Person);

Developer.prototype.hi = function () {
  console.log(
    `Hi, my name is ${this.name} ${this.lastname} and I am a Developer`
  );
};

// var isra = new Person("Israel", "Castro", 1.65);
// var kim = new Person("Kimberli", "Apolonio", 1.6);
// var cobo = new Person("Jacobo", "Castro", 1.75);
