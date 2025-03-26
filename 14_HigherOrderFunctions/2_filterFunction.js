/*
💥 The filter() method creates a new array containing elements that satisfy a specified condition. This method skips empty elements and does not change the original array.

*/

// 1️⃣ Given an array of costs of different products, create a new array with the costs from the input array if the cost is <= $350, and print it to the console.

const givenArray = [390, 190, 311.85, 67, 19048, 5000, 670];

const newArr = givenArray.filter((cost) => cost <= 350);

console.log(newArr); // [ 190, 311.85, 67 ]

console.log();

// 2️⃣ Given an array of objects with the city name and population, create an array with objects from the first array if the population of that particular city is >= 5 million.

const givenPopulation = [
  { name: "Shanghai", population: 24300000 },
  { name: "Los Angeles", population: 3792621 },
  { name: "New Delhi", population: 21800000 },
  { name: "Mumbai", population: 18400000 },
  { name: "Chicago", population: 2695598 },
  { name: "Houston", population: 2100263 },
];

const newPopulation = givenPopulation.filter(
  (ele) => ele.population >= 5000000
);

console.log(newPopulation);

/*

[
  { name: 'Shanghai', population: 24300000 },
  { name: 'New Delhi', population: 21800000 },
  { name: 'Mumbai', population: 18400000 }
]
  
*/
