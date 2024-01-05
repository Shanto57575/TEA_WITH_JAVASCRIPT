"use strict"; // treat all js code as newer version

/*

JavaScript has evolved over time, introducing new features and improvements. 
The "use strict" directive is not about treating code as a newer version; 
instead, it enforces stricter rules to catch errors and enhance code quality. 
While not mandatory, including "use strict" is considered good practice, 
ensuring a more disciplined and error-resistant coding style, even in modern 
JavaScript where many strict mode rules are applied by default.

*/

// alert(3 + 3) works in browser only not in node js 

/* semicolon is not necessary when we are using different code in different lines
but it necessary when we are writing two different code in same line....though its
not good practice its decrease readability of the code

console.log(3) console.log(10); ---> will throw Error
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
console.log(typeof Number); // function