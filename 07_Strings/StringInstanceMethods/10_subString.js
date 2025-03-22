let s = "Learning JavaScript";

let res = s.substring(3);

console.log(res);

/*
🔸 The substring() method in JavaScript is used to extract characters between two indices from a string, without modifying the original string. This method returns a new string that is a part of the original string, starting from a specified position up to (but not including) another specified position.

Unlike some other methods, substring() treats negative indices as 0. It does not count from the end of the string. Instead, it converts negative values to 0, meaning the method starts from the beginning of the string.
*/
