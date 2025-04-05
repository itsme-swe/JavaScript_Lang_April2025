//💥 In this example we are adding default property to the string using prototype
const carName = "Volvo XC90    ";

// ◽ Now adding own method to the String object
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

carName.trueLength();
/*
◽ output ⇨

Volvo XC90
True length is: 10

*/

"Harsh Mehra".trueLength();
/*
Harsh Mehra
True length is: 11
*/

"Juhi Chellani".trueLength();
/*
Juhi Chellani
True length is: 13
*/
