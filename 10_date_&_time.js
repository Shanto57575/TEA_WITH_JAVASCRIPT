// Dates & Time

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(typeof myDate.toJSON());
console.log(myDate.toUTCString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate.toTimeString());
console.log(typeof myDate); // object

let myCreatedDate = new Date(2023, 0, 1) // Year, month(0-based indexed), day
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3) // Year, month(0-based indexed), day
let myCreatedDate3 = new Date("01-14-2023") // Year, month(0-based indexed), day
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate2.toLocaleString());
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000)); //seconds

let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getHours());

// newDate.toLocaleString('default', {
//     weekday: "long"
// })