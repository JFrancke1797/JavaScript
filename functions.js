/* 
    ? Functions
    * a block of reusable code
    * take in parameters (doors to the inside of your fx)
    * perform an action
    * return a result
    * need to be invoked (called) to run
    * can have none, one, or many paramters
    * data coming thru the parameter is called an argument
    * can only have one return statement value
    * if no return is provided, it defaults to undefined
    
    ? There are 2 types of functions
    * function declaration
        * hoisted
    * function expression
        * not hoisted
*/

// Function Declaration
function sayHello() {
    return "Hello August Cohort"
}

// Function Invocation
console.log(sayHello())

function greetLearner(learner) {
    return `Hello ${learner}`
}

console.log(greetLearner("Nick"))
console.log(greetLearner("Paul"))
console.log(greetLearner("Corey"))

function addNums(num1, num2) {
    return num1 + num2
}

console.log(addNums(642, 3243))

//! Challenge - rewrite the reverse string logic within a function
// it should take str as a parameter and return reversed string

function reverseStr(str) {
    result = ""
    for (let index = str.length - 1; index >= 0; index = index - 1) {
        result += str[index] //or result += str[i]
    }
    return result
}

console.log(reverseStr("hello"))

/* 
    ? Function Expression
    * utilizes a variuable as a placeholder
*/

let nameAge = function(name, age) {
    return `Your name is ${name} and you're ${age} years old`
}

console.log(nameAge("Jonah", 27))

// ? Arrow Functions

/* 
    * introduced in ES6
    * concise way of writing fx
    * part of fx expression family
    * do not bind to .this or super (more on this in Classes)
*/

/* 
    ? Concise Body Arrow Function
    * cane have none or one parameter
    * code block must not have { }
    * return statement is implicit
    * kinda sorta not really like a ternary
*/

let greetEveryone = () => `Hello everyone`
console.log(greetEveryone())

/* 
    ? Block Body Arrow Function
    * has a block of code { }
    * can have explicit return statement
    * can have many parameters
*/

let createEmail = (name, email, body) => {
    return `Email: ${email} \n Dear ${name}: \n ${body}`
}

console.log(createEmail("Jonah", "sucker@gmail.com", "lalalalalala"));

/* 
    ? Immediately Invoked Function Expression
    * it has no invocation
    * it invokes immediately
*/

(function() {
    console.log("IIFE")
})();

/* 
    ! Fizzbuzz Challenge
    * create a function that takes parameters called start and stop
    * loop over numbers from start to stop
    * if the number is divisible by 3, print Fizz
    * if the number is divisible by 5, print Buzz
    * if the number is divisible by both, print Fizzbuzz
    * if neither, print only the number
    * invoke your function to make sure it works
*/

function fizzBuzz(start, stop) {
    for (i = start; i <= stop; i++) {
        if (i % 15 == 0) {
            console.log("Fizzbuzz")
        } else if (i % 5 == 0) {
            console.log("Buzz")
        } else if (i % 3 == 0) {
            console.log("Fizz")
        } else {
            console.log(`${i}`)
        }
    }
}

console.log(fizzBuzz(1, 100))