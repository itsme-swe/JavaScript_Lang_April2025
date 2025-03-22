/*
💥 The splice() method is used to Insert and Remove elements in between the Array.
JavaScript Array splice() Method is an inbuilt method in JavaScript that is used to change the contents of an array by removing or replacing existing elements and/or adding new elements. It modifies the original array and returns an array of the removed elements.

PARAMETERS:
🔸index: It is a required parameter. This parameter is the index from which the modification of the array starts (with the origin at 0). This can be negative also, which begins after many elements counting from the end.

🔸remove_count: The number of elements to be removed from the starting index.

🔸items_list: The list of new items separated by a comma operator that is to be inserted from the starting index.

*/

let webDvlop = ["HTML", "CSS", "JS", "Bootstrap"];

console.log("Original Array", webDvlop); // [ 'HTML', 'CSS', 'JS', 'Bootstrap' ]

let removedElement = webDvlop.splice(0, 2, "Go", "Python");

console.log(webDvlop); // [ 'Go', 'Python', 'JS', 'Bootstrap' ]

console.log(removedElement); // [ 'HTML', 'CSS' ]

let insertNewElement = webDvlop.splice(-2, 0, "Rust");

console.log(webDvlop); // [ 'Go', 'Python', 'Rust', 'JS', 'Bootstrap' ]

console.log(insertNewElement); // [] -- The method only returns removed element, if we are inserting and not removing then it returns empty object.

console.log("Original Array", webDvlop);
