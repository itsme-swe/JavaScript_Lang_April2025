let msg = new String("Hello World");

console.log(msg); // [String: 'Hello World']

console.log(typeof msg);  // object

let newMsg = msg.valueOf();

console.log(newMsg); // Hello World

console.log(typeof newMsg); // string type

/*

🔸 valueOf() method is used to convert string object into string primitive.

*/
