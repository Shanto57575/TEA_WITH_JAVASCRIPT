// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 !== "1");
// console.log(2 != 1)

// console.log("2" >= 1);
// console.log("02" >= 1);

// console.log(null > 0); // false
console.log(null == 0); //false
console.log(null === 0); //false
console.log(null >= 0); //true
console.log(null <= 0);//true
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined === 0); // false

console.log("2" == 2); //true
console.log("2" === 2); //false

console.log("----------");

console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(undefined > null); // false
console.log(undefined > null); // false
console.log(undefined >= null); // false
console.log(undefined <= null); // false

/*

The reason is that an equality check == and
comparison >, <, >=, <= work differently

Comparisons convert null to a number, treating
it as 0. Thats why null >= 0 is true and null > 0 
is false

*/

