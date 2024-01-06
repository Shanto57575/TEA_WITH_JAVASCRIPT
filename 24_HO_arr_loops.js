// for of

// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello world"

// for (const greet of greetings) {
//     // if (greet == " ") continue; removing space
//     console.log(`Each char is ${greet}`);
// }

// maps

const map = new Map();
map.set('BD', "Bangladesh")
map.set('USA', "united state of america")
map.set('FR', "France")

// console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) {
    console.log(key, ': ' + value);
}

// const myObject = {
//     game1: "NFS",
//     game2: "spiderMan"
// }

// // for - of doesn't wok here
// // for (const [key, value] in myObject) {
// //     console.log(key, ': ' + value);
// // }

// const myObject2 = {
//     js: "javascript",
//     cpp: "c++",
//     rb: "ruby",
//     swift: "Swift by Apple"
// }

// for (const key in myObject2) {
//     console.log(`${key} shortcut is for ${myObject2[key]}`);
// }

// const programming = ["js", "rb", "py", "cpp", "java", "js"]

// for (key in programming) {
//     console.log(programming[key]);
// }

// for in cannot be used in map