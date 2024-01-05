const score = 400

const balance = Number(100)
const balance2 = new Number(100)

console.log(typeof balance); //Number
console.log(typeof balance2); // Object


console.log(balance.toString().length);
console.log(balance.toFixed(2));//400.00

const otherNumber = 123.89966

const newN = otherNumber.toPrecision(4) //Returns a string
console.log(newN); // 123.9-> length 5
console.log(typeof newN.length);  // string

const hundreds = 1000000
console.log(hundreds.toLocaleString('')); //us standard --> 1,000,000
console.log(hundreds.toLocaleString('en-IN')); //indian standard --> 10,00,000

/*
  For more method type Number in browser
*/


// ------------Math--------------

console.log(Math);// for more details run in browser

console.log(Math.abs(-4));//4
console.log(Math.round(4.2));//4
console.log(Math.round(4.5));//5
console.log(Math.round(4.6));//5
console.log(Math.cei1l(4.2));//5
console.log(Math.floor(4.6));//4
console.log(Math.sqrt(64));//8
console.log(Math.min(4, 3, 6, 7));//3
console.log(Math.max(4, 3, 6, 7));//7

console.log(Math.random()); //always give values from (0 - 1)
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);