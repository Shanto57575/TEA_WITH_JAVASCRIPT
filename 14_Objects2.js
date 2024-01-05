// const tinderUser = new Object(); ---> singleton
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "shanto"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "shanto@gmail.com",
    fullName: {
        userFullName: {
            firstName: "shanto",
            lastName: "islam"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

const obj3 = { obj1, obj2 }
const obj4 = { ...obj1, ...obj2 } // preferred
const obj5 = Object.assign({}, obj1, obj2)

console.log(obj3);
console.log(obj4);
console.log(obj5);

// obj4 && obj5 are same

// array of Objects representation

const users = [
    {
        id: 1,
        name: "shanto"
    },
    {
        id: 2,
        name: "shakib"
    },
    {
        id: 3,
        name: "saif"
    },
]

console.log(users[1].name); //shakib

console.log(tinderUser);
console.log(Object.keys(tinderUser));//return  array of keys
console.log(Object.values(tinderUser));//return  array of values

console.log(Object.entries(tinderUser));

//is the property exists in Objects

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true

// For more details got to browser
// & type Object.Prototype