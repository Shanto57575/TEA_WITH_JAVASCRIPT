const marvel_heros = ["thor", "ironMan", "spiderMan"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// access flash

// console.log(marvel_heros[3][1]);


const all_Heros = marvel_heros.concat(dc_heros)
// console.log(all_Heros);

//concat returns new Array

//using spread operator
const all_New_Heros = [...marvel_heros, ...dc_heros]
console.log(all_New_Heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_array = another_array.flat(Infinity) // will give all elements in one array
const real_array = another_array.flat(1) // specified depth

console.log(real_array);

console.log(Array.isArray("shanto")); // returns boolean if it is array
console.log(Array.from("shanto"));// Creates an array from an iterable object.
console.log(Array.from([1, [2, 3]].flat(Infinity)));// Creates an array from an iterable object.
console.log(Array.from({ name: "shanto" })); //if it cant convert it will will return an empty array --> []

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score, score2, score3)); // Returns a new array from a set of elements.


