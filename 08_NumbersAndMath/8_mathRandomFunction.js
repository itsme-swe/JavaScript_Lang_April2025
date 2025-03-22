// We will be using Math.random() to get the values b/w 10 and 20.

const min = 10;

const max = 20;

const randValue = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randValue);
