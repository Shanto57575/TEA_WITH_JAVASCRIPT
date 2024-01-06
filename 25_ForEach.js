const coding = ["py", "js", "cpp", "java", "swift"]


// normal function
// coding.forEach(function (val) {
//     console.log(val);
// })

// arrow function
// coding.forEach((item) => {
//     console.log(item);
// })

// or

// coding.forEach(item => console.log(item))


function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)

/*

In this code, you are passing the reference to
the printMe function without invoking it. The
forEach method will then invoke the function 
for each element in the coding array, passing 
each element as an argument to printMe. This 
is the correct way to use forEach with a function.

*/

/*

coding.forEach(printMe())
Here, printMe() is immediately executed, and 
its result is passed to forEach. Since printMe
doesn't return anything explicitly, it becomes
undefined. Therefore, you are essentially trying
to do coding.forEach(undefined), which is incorrect 
and leads to an error.

*/


coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})


const myCoding = [
    {
        language: "javascript",
        languageFileName: 'js'
    },
    {
        language: "C++",
        languageFileName: 'cpp'
    },
    {
        language: "Python",
        languageFileName: 'py'
    },
]

myCoding.forEach((item, index, arr) => {
    console.log(item.language, index, arr);
})

coding.forEach(item => {
    console.log(item);
})