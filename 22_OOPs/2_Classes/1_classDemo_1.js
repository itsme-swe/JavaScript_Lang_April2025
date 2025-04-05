class Toyota {
  constructor(name) {
    this.name = name;
  }
  start() {
    console.log(`${this.name} start`);
  }

  stop() {
    console.log(`${this.name} stop`);
  }
}

let innova = new Toyota("Innova");

innova.start();
innova.stop();

let fortuner = new Toyota("Fortuner");

fortuner.start();
fortuner.stop();
