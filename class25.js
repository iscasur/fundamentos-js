class Person {
  constructor(name, lastname, height) {
    this.name = name;
    this.lastname = lastname;
    this.height = height;
  }

  hi() {
    console.log(`Hi, my name is ${this.name} ${this.lastname}`);
  }

  isTall() {
    return this.height > 1.7;
  }
}

class Developer extends Person {
  constructor(name, lastname, height) {
    super(name, lastname, height);
  }

  hi() {
    console.log(
      `Hi, my name is ${this.name} ${this.lastname} and I am a Developer`
    );
  }
}

// var isra = new Person("Israel", "Castro", 1.65);
// var kim = new Person("Kimberli", "Apolonio", 1.6);
// var cobo = new Person("Jacobo", "Castro", 1.75);
