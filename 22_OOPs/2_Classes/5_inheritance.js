class Car {
  constructor(name) {
    this.name = name;
  }

  start() {
    console.log(`${this.name} car started.`);
  }
}

class Company extends Car {
  constructor(name, engine) {
    super(name);
    this.engine = engine;
  }
}

const user1 = new Company("Honda", "1050");

user1.start();
