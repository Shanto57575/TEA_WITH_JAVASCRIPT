let score = 33;

// console.log(typeof score);

/* 
   when declaration we don't know if its
   number or string but if we want to do 
   it so that we know when declaring we 
   can do it this way
*/

// let score1 = Number
let joss = Number('1')
console.log(typeof joss); // number

let str = String(1)
console.log(typeof str); // string

let str2 = String("1abc")
console.log(typeof str2); // string

let str3 = Number("1abc")
console.log(typeof str3); // number

let str4 = "1abc"
console.log(typeof str4); // number
console.log(str4); // string

let str5 = Number("1abc")
console.log(typeof str5); // number
console.log(str5); // NaN

/*

"33" => 33
"33abc" => NaN
true => 1, false => 0

*/

let isLoggedIn = 1;
let booleanLoggedIn = Boolean(isLoggedIn);
console.log(booleanLoggedIn);// true

let isLoggedIn1 = 0;
let booleanLoggedIn1 = Boolean(isLoggedIn1);
console.log(booleanLoggedIn1);// false

let str6 = "hello world";
let convert = Boolean(str6);
console.log(convert); //true

let str7 = "";
let convert1 = Boolean(str7);
console.log(convert1); // false

/*

1 = true, 0 = false
"" = false
" " = true
"shanto" = true 

*/
