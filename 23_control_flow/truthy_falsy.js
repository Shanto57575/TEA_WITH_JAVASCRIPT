//falsy values

// false, 0, -0, BigInt, 0n, null, undefined, NaN

//truthy values

// "0", "false", " ", [], {}, function () { }

const userEmail = [];

if (userEmail.length === 0) {
    console.log("Array is Empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

console.log(false == 0); //true
console.log(false == ''); //true
console.log(0 == ''); //true

// Nullish coalescing Operator (??) : null , undefined

let val1, val2, val3;
val1 = 5 ?? 10;
console.log(val1); // 5
val2 = null ?? 10;
console.log(10); // 10
val3 = undefined ?? 15;
console.log(val3); // 15

let val4 = null ?? 10 ?? 20
console.log(val4); // 20

// Ternary Operator

// condition ? true : false;

const price = 100;

price >= 100 ? console.log("greater than equal 100") : console.log("less than 100");


// +++++++++++---- Ternary Operator & Nullish coalescing Operator are different