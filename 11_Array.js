// Array

const myArr = [0, 1, 2, 3, 4, 5]

console.log(myArr[0]); // 0-based indexing

// shallow copy an deep copies

const myHeros = ["iron-men", "thor"]

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr2);

// Array methods

myArr.push(6);
myArr.push(7);
/*
Appends new elements to the end of an array,
and returns the new length of the array.
*/
myArr.pop();
/*
Removes the last element from an array
and returns it
*/

myArr.unshift(2)
myArr.unshift(10)
/* 
Inserts new elements at the start of 
an array, and returns the new length of 
the array.
time consuming because we have to shift every element
*/

myArr.shift(); //Removes the first element from an array and returns it



// console.log(myArr.includes(100)); // return boolean value

// console.log(myArr.indexOf(4)); //Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// myArr.push(4)
// console.log(myArr);
// console.log(myArr.lastIndexOf(4));


const newArr = myArr.join(" ");// join it with anything "-,a,b,1"
console.log(newArr); //type string
/*
changes the data type make it string
*/

//slice , splice

const array1 = [1, 2, 3, 4, 5, 6]

console.log("original array ->", array1);

const array2 = array1.slice(1, 4)

console.log("Using Slice", array2);
console.log("original array ->", array1);

const array3 = array1.splice(1, 4)

console.log("using splice", array3);
console.log("original array ->", array1);

/*
first difference between slice & splice is 
when giving range slice doesn't add the 
value of last range but splice does

&

second difference is slice doesn't manipulate 
the original value but splice does manipulate 
the original value . its cut the ranged array 
from the original array


so the output is --> 

original array -> [ 1, 2, 3, 4, 5, 6 ]
Using Slice [ 2, 3, 4 ]
original array -> [ 1, 2, 3, 4, 5, 6 ]
using splice [ 2, 3, 4, 5 ]
original array -> [ 1, 6 ]

*/

