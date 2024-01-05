const name = "shanto"
const repo = 50;
console.log(name + repo + 12);

console.log(`Hello my name is ${name} and my repo count is ${repo}`);

const gameName = new String("shanto-shakib-saif") // run in brow

console.log(typeof gameName); // Object

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt());

/*
charAt() => if no value passed will give first value 
if the out of bound value passed wont give anything
*/

console.log(gameName.indexOf("b")); // if not found will return -1

const newString = gameName.substring(1, 4)// (0,n)
console.log(newString); // the answer will be (0, n-1)

//shantoshakib
const anotherString = gameName.slice(0, 4);
const anotherString2 = gameName.slice(-12, 4);

// console.log(anotherString);
console.log(gameName.search("b"));
const newStringOne = "   shanto "
console.log(newStringOne);
console.log(newStringOne.trim()); //Removes the leading and trailing white space and line terminator characters from a string.

const url = "https://shanto.com/shanto%20islam"

console.log(url.replace('%20', "-"));

console.log(url.includes('shanto'));

//split

console.log(gameName.split('-')); //return in array format

console.log();