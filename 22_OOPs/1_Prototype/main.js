const employee = {
  tax: "20%",

  calTax() {
    console.log(`Tax is ${this.tax}`);
  },
};

const karan = {
  salary: 5000,
  tax: "30%",
};

karan.__proto__ = employee; // Here myObj2 is inheriting properties and methods from myObj by using .__proto__

karan.calTax(); //◽ output: Tax is 30%

const varun = {
  salary: 10000,
  tax: "5%",
};

varun.__proto__ = employee;

varun.calTax(); //◽ output: Tax is 5%
