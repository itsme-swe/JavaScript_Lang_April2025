/*

🔸 A timestamp in JavaScript is the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC (also known as the Unix Epoch). It represents an exact point in time.

*/

let myTimeStamp = Date.now();

console.log(myTimeStamp); // 1742476192009

// 💥 Here we are converting date into milliseconds
let myDate = new Date();

console.log(myDate.getTime()); // 1742476332333

// 💥 Converting timnestamp to date
let timeStampToDate = new Date(myTimeStamp);

console.log(timeStampToDate.toLocaleDateString()); // 3/20/2025
