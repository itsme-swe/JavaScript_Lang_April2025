// "use strict";

function x() {
  console.log(this);
}

x();

/*
💥 When this keyword is called in strict mode at that time the value will be undefined. And, if this keyword is called in non-strict mode then the value will be window object.
*/
