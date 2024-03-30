/*
In terms of keeping data and accessing data from memory
js have two types of data type:

1. primitive
2. Non-primitive (reference)

primitive types are (7) :

Number, String, Boolean, null, undefined, Symbol, BigInt

reference types are () :

1. Array
2. Objects
3. Functions


*** 

Js is a dynamically typed language.So 
this means you can just assign anything 
you want to the variable and it will work. 

Dynamically typed language--> These are the languages that do not require 
             any pre-defined data type for any variable as it is interpreted at runtime 
             by the machine itself. In these languages, interpreters assign the data type
             to a variable at runtime depending on its value
***


*/

const id = Symbol(123);
const id2 = Symbol(123);

console.log(id === id2); // false 

/*

Because,
Symbols are unique and immutable, and even if they have the same description, 
they are considered distinct values. This uniqueness is one of the primary 
features of symbols in JavaScript and is useful for creating private object 
properties or preventing naming conflicts.

/*

Each Symbol created using the Symbol 
constructor is guaranteed to be unique.
Even if you pass the same value to the 
Symbol constructor, the resulting symbols
will be distinct.

Despite having the same description, 
these symbols are distinct and not equal. 
The == comparison operator checks for 
equality in terms of value, but since 
symbols are unique, id and id2 are 
considered different, and the comparison 
evaluates to false.

*/

const id3 = Symbol.for(123);
const id4 = Symbol.for(123);

console.log(id3 == id4); // true

/*
To compare symbols for equality based on 
their description, you can use the Symbol.
for method, which searches for existing 
symbols with the given key and returns it 
if found, or creates a new one if not found:
*/

const bigNumber = 389238420243232939997

/*
Numeric literals with absolute values 
equal to 2 ^ 53 or greater are too large
to be represented accurately as integers 
*/

const bigNumber2 = 389238420243232939997n // --just add n

console.log(typeof bigNumber); // number
console.log(typeof bigNumber2); // bigint

const heros = ["iron men", "thor", "captain Bangladesh"]
console.table([heros[0], heros[1], heros[2]]);
console.log(heros)

const myObj = {
    name: "Shanto",
    age: 18,
}

console.table(myObj);

const myFunction = function () {
    console.log("Hello World");
}

myFunction(); 