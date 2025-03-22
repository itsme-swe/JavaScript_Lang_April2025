function func() {
  let str = "It's a great day";
  let value = str.startsWith("great", 7);
  console.log(value);
}

func(); // true

function func1() {
  let str = "It's a great day";
  let value = str.startsWith("great");
  console.log(value);
}

func1(); // false

/*
🔸 JavaScript String startsWith() method checks if a string starts with the characters of a specified string.
*/
