let myOwnDate = new Date(2025, 2, 20);

console.log(myOwnDate); // 2026-09-02T18:30:00.000Z

console.log(myOwnDate.toLocaleString()); // 3/20/2025, 12:00:00 AM

/*
🔸 In JavaScript, the Date constructor follows this pattern:
     new Date(year, monthIndex, day)

JavaScript months are zero-based, meaning 0 is January and 11 is December.
*/
