// Stack(primitive) --> changes the copy value only
// Heap(Non-primitive) --> changes the original value -- array, objects

let myName = "Shanto"

let anotherName = myName
anotherName = "Shanto_shakib_saif"

console.log(myName);
console.log(anotherName);

let user = {
    email: "user@gmail.com",
    bkash: "userBkash"
}

let userTwo = user

userTwo.email = "userTwo@gmail.com"

console.log(user);
console.log(userTwo);