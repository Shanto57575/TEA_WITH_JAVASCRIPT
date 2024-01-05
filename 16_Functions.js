// Functions

function sayMyName() {
    console.log("s");
    console.log("a");
    console.log("a");
    console.log("n");
    console.log("t");
    console.log("o");
}

// sayMyName()
// sayMyName-- > //will not execute because its just a reference to

function addTwoNumbers(number1, number2) { // number1 & number2 are parameter
    console.log(number1 + number2);
}

const result = addTwoNumbers(3, 5) // 3,5 are arguments

console.log("result: ", result); // undefined , because it function didn't return anything

function loginUserMessage(userName = "sam") {
    if (!userName) {
        console.log("Please enter a user name");
        return
    }
    return `${userName} just logged in`;
}

console.log(loginUserMessage("Shanto")); // Shanto just logged in

console.log(loginUserMessage());// sam just logged in

function calculateCartPrice(...num1) { //rest operator
    return num1;
    /*
      Now as res operator is added 
      now it will return the value 
      in array
    */
}
console.log(calculateCartPrice(200, 400, 500, 200));

function calculateCartPrice2(val1, val2, ...num1) { //rest operator
    return num1;
    /*
      Here val1 = 200, val2 = 400
      & num1 = [500,200] --> an array
    */
}

console.log(calculateCartPrice2(200, 400, 500, 200));

const user = {
    userName: "shanto",
    price: 199
}

function handleObject(anyObject) {
    console.log(`userName is ${anyObject.userName} and price is ${anyObject.price}`);
}

handleObject({
    userName: "shakib",
    price: 199
})

const myArray = [200, 400, 600, 800]

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200, 400, 600, 800]));