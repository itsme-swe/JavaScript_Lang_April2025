const carDetails = [
  { carName: "Verna", company: "Hyundai", engine: 1500 },
  { carName: "Slavia", company: "Skoda", engine: 1499 },
  { carName: "Rox", company: "Mahindra", engine: 2200 },
  { carName: "Virtus", company: "Volkswagen", engine: 1500 },
  { carName: "Fortuner", company: "Toyota", engine: 2800 },
];

const output = carDetails.map((x) => x.carName + " - " + x.company);

console.log(output);
/*
[
  'Verna - Hyundai',
  'Slavia - Skoda',
  'Rox - Mahindra',
  'Virtus - Volkswagen',
  'Fortuner - Toyota'
]
*/

const output2 = carDetails.reduce((acc, curr) => {
  if (acc[curr.engine]) {
    acc[curr.engine] = ++acc[curr.engine];
  } else {
    acc[curr.engine] = 1;
  }
  return acc;
}, {});

console.log(output2); // output: { '1499': 1, '1500': 2, '2200': 1, '2800': 1 }
