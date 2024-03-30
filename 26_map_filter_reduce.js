const coding = ["py", "js", "cpp", "java", "swift"]

const values = coding.forEach(item => {
    console.log(item);
    return item;
})

console.log(values); // undefined


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNums.filter((num) => num > 5)
// // const newNums = myNums.filter((num) => {
// //     return num > 5
// // })


// const newNums = [];

// myNums.forEach(num => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// // console.log(newNums);

// let fetchedData;

// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(res => res.json())
//     .then(data => {
//         fetchedData = data
//         const filteredData = fetchedData?.filter((item) => item.id === 1)
//         // console.log(filteredData);
//     })


// //++++++++++-----map----++++++++++++

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNumbers = myNumbers.map((num) => num + 10)
// // const newNumbers = myNumbers.map((num) => { return num + 10 })
// // console.log(newNumbers);

// const NewNumbers = myNumbers
//     .map(num => num * 10)

// const NewNumbers1 = myNumbers
//     .map(num => num * 10)
//     .map(num => num + 1)

// const NewNumbers2 = myNumbers
//     .map(num => num * 10)
//     .map(num => num + 1)
//     .filter(num => num >= 40)

// console.log("NewNumbers", NewNumbers);
// console.log("NewNumbers", NewNumbers1);
// console.log("NewNumbers", NewNumbers2);

// // reduce

// const arr = [1, 2, 3, 4, 5,];

// const initialValue = 0;

// const sum = arr.reduce((acc, currVal) => (acc + currVal), 0)

// const shoppingCart = [
//     {
//         item: "iphone",
//         price: 999
//     },
//     {
//         item: "Pixel",
//         price: 799
//     },
//     {
//         item: "Samsung",
//         price: 1200
//     },
// ]

// const totalPrice = shoppingCart.reduce((acc, item) => (acc + item.price), 0)

// // console.log(totalPrice);

// const sum2 = shoppingCart.reduce((acc, currItem) => {
//     console.log(`acc is ${acc} & currItem is ${currItem.price}`)
//     return acc + currItem.price
// }, 0)

// // console.log(sum2);

// const sum3 = shoppingCart.reduce((acc, currItem) => {
//     console.log(acc + currItem.price)
//     return acc + currItem.price
// }, 0)