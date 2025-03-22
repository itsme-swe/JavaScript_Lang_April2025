function* generate() {
  yield "Hello";
  yield "World";
}

const generator = generate();

console.log(generator.next());
console.log(generator.next());

/*
{ value: 'Hello', done: false }
{ value: 'World', done: false }
*/
