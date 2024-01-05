const user = {
    username: "shanto",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`); // this -> current_context
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "shakib"
user.welcomeMessage()
console.log(this); // {} -- in node environment
console.log(this); // window object in browser environment
// browser's global object is window object

// function chai() {
//     console.log(this); //you will get a lot of things
//     let username = "shanto"
//     console.log(this.username); // undefined
// }

// chai();

// const chai = function () {
//     let username = "shanto"
//     console.log(this); //you will get a lot of things
//     console.log(this.username); // undefined
// }

// chai();

const chai = () => {
    let username = "shanto"
    console.log(this); // {}
}

chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 // implicit return
// const addTwo = (num1, num2) => (num1 + num2) 

const addTwo = (num1, num2) => { username: "shanto" } // undefined
const addThree = () => ({ username: "shanto" }) // { username: 'shanto' }

console.log(addTwo(10, 20));
console.log(addThree());



