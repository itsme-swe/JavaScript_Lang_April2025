function func() {
  let str = "It's a great day";
  let value = str.endsWith("great", 12);
  console.log(value);
}

func(); // true

function func1() {
  let str = "It's a great day";
  let value = str.endsWith("great");
  console.log(value);
}

func1(); // false

/*
🔸 The JavaScript str.endsWith("string", length) method is used to check whether the given string ends with the characters of the specified string or not.
*/
