// javascript execution context

let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2);
let result2 = addNum(val1, val2);

/*

js is single threaded
--> global execution context
--> functional execution context
--> eval execution context


js code is executed in two phases:

1. Memory creation phase -- memory allocation phase
2. Execution phase -- executed here

1. js code is run by global execution - this
2. Memory phase 
   --> val1 --> undefined
   --> val2 --> undefined
   --> addNum --> definition
   --> result1  --> undefined
   --> result2 --> undefined
3. Execution phase
   --> val1 --> 10
   --> val2 --> 5
***after the finish of child execution context ---> result1 = 15
   --> addNum --> Execution context again 
                  1. New variable environment + 
                  2. Execution thread
                        |
                        |
                        |
                    Memory Phase
                    val1 --> undefined
                    val2 --> undefined
                    total --> undefined
                        |
                        |
                        |
                    Execution context
                      num1 -> 10
                      num2 -> 5
                      total --> 15

                      after its done working it 
                      will get deleted and return
                     the value to parent execution context

*** call stack ***

*/