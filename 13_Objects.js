// constructor -> singleton
// Object.create ->  ||

// Object literals

/*
 *** Behind the scenes keys works like an string
 const jsUsers = {
    "name": "shanto", // key : value
}
*/
const jsUsers = {
    "name": "shanto", // key : value
    age: 18,
    location: "Chittagong",
    email: "shanto@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// console.log(jsUsers.name);
// console.log(jsUsers["name"]);

jsUsers.email = "shakib@gmail.com" // thats how we override values in Object

// if we want the value should not be changed
// we can freeze it

// Object.freeze(jsUsers);

jsUsers.email = "saif@gmail.com" // it will not be changed because jsUser is freezed
// console.log(jsUsers);


jsUsers.greetings = function () {
    console.log("Hello JS user");
}

jsUsers.greetingsTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUsers.greetings());
console.log(jsUsers.greetingsTwo());