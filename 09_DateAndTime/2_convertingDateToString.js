const myDate = new Date();

console.log(myDate.toString()); // Thu Mar 20 2025 18:20:18 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); // Thu Mar 20 2025

console.log(myDate.toISOString()); // 2025-03-20T12:51:53.010Z

console.log(myDate.toJSON()); // 2025-03-20T12:52:32.653Z

console.log(myDate.toLocaleDateString()); // 3/20/2025

console.log(myDate.toLocaleString()); // 3/20/2025, 6:23:09 PM

console.log(myDate.toLocaleTimeString()); // 6:23:46 PM

console.log(typeof myDate); // object
