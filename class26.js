class Person {
  constructor(name, lastname, height) {
    this.name = name;
    this.lastname = lastname;
    this.height = height;
  }

  hi(fn) {
    var { name, lastname } = this;
    console.log(`Hi, my name is ${name} ${lastname}`);
    if (fn) {
      fn(name, lastname);
    }
  }

  isTall() {
    return this.height > 1.7;
  }
}

class Developer extends Person {
  constructor(name, lastname, height) {
    super(name, lastname, height);
  }

  hi(fn) {
    // var name = this.name;
    // var lastname = this.lastname;
    var { name, lastname } = this;
    console.log(`Hi, my name is ${name} ${lastname} and I am a Developer`);
    if (fn) {
      fn(name, lastname, true);
    }
  }
}

function replyHi(name, lastname, isDev) {
  console.log(`Good morging ${name} ${lastname}`);
  if (isDev) {
    console.log(`Look! I did not know you were developer`);
  }
}

var isra = new Person("Israel", "Castro", 1.65);
var kim = new Person("Kimberli", "Apolonio", 1.6);
var cobo = new Developer("Jacobo", "Castro", 1.75);

isra.hi();
kim.hi(replyHi);
cobo.hi(replyHi);
