// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// all ok till Now
var c = 300 //global scope

// this if curly braces is block
if (true) {
    let a = 10;
    const b = 20;
    c = 30;
}

// console.log(a); --> a is not defined
// console.log(b); --> b is not defined
console.log(c); // 30 --> thats a problem



let a = 300 //global scope

// this if curly braces is block
if (true) {
    let a = 10;
    const b = 20;
    console.log("Inner : ", a);
}

console.log(a); // --> a is not defined
// console.log(b); --> b is not defined
// console.log(c); // 30 --> thats a problem



/*

when you write global scope in browser
& when you write global scope in node 
environment both are different

*/