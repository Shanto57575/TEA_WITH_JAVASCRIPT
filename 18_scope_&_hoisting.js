function one() {
    const username = "shanto"
    function two() {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two();
}

one();

if (true) {
    const username = "shanto"
    if (username === "shanto") {
        const website = "youtube"
        // console.log(username + " " + website);
    }

    // console.log(website); //will give error
}

// console.log(username); // will give error

// ++++++++++++++++ interesting ++++++++++++

console.log(addOne(5));//6

function addOne(num) {
    return num + 1;
}

console.log(addOne(5));//6

console.log(addTwo(5));// Cannot access 'addTwo' before initialization

const addTwo = function (num) {
    /* 
      when you declare function like 
      this it cannot be accessed before
      initialization
    */
    return num + 1;
}

console.log(addTwo(5)); // will not execute

