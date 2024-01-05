"use strict"; // treat all js code as newer version

/*

There are lots of differences between old js code and new js code
thats why when new js code invented to not ruining the old code "use strict"
is used so that it treat all the code as newer version...though it is not necessary to
write use strict now but its a good practice.

*/

// alert(3 + 3) we are using node js not browser

/* semicolon is not necessary when we are using different code in different lines
but it necessary when we are writing two different code in same line....though its
not good practice its decrease readability of the code

console.log(3) console.log(10); ---> throw Error
console.log(3); console.log(10); ---> ok, But not preferred

console.log(3);  ---> ] correct with semicolon
console.log(10); ---> ] correct with semicolon
console.log(3)  ---> ] correct without semicolon
console.log(10) ---> ] correct without semicolon

*/

let name = "Shanto"
let age = 18
let isAvailable = false;
let state;

//primitive data types

/*

1. number = 2 --> 2 to the power 53
2. bigInt
3. string => "shanto" , ""
4. boolean => true / false
5. null = standAlone value
6. undefined=> eg. let name; ->it is not defined
7. symbol => unique

*/

// Non-primitive data types

/*

1. Object
2. Array

*/

console.log(typeof undefined); // undefined
console.log(typeof null); // null
console.log(typeof NaN); // number