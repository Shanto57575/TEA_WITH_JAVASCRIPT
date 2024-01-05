// Immediately Invoked Function Expressions IIFE

//: --> https://medium.com/@rabailzaheer/iife-explained-immediately-invoked-function-expressions-fccd8f53123d#:~:text=IIFE%20provides%20encapsulation%2C%20allowing%20you,when%20working%20with%20multiple%20libraries.

/*

Sometimes we face problem from the
pollution of global scopes so to remove
the conflicts of variables or unintended
modifications of data we use IIFE

*/
// function that immediately executed


// function chai() {
//     console.log(`DB CONNECTED`);
// }

// chai()

// function chai() {
//     console.log(`DB CONNECTED`);
// } () --> Error

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //semicolon must be added to let the IIFE know the end

(() => {
    // simple IIFE
    console.log(`shanto connected`);
})();

(() => {
    console.log(`shakib connected `);
})();

((name) => {
    // IIFE with parameter
    console.log(`${name} connected`);
})("Saif");

(function () {
    console.log("joss");
})()