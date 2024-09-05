/* 
    ? Conditionals and Logic Gates
    * conditional statement checks if an expression is truthy
    * the expression must always resolve to true
    * if it's truthy, a code within a statement executes
    * if it's falsey, nothing happens unless we specify otherwise
    
    ? Expressions vs Statements
    * Expression
        * unprocessed value grouped using the ( )
        * evaluated to be truthy
        * can be empty
        TODO: Expressions evaluate
    * Statements
        * keyword
        * expression
        * and code block
        TODO: Statements evaluate and execute code block when invoked
        ! Conditional is an example of a statement
*/ 

/* 
    ?If statement
    checks if something is true and executes the code
*/

/* let lightSwitch = "off"

if (lightSwitch === "on") {
    console.log("The light is on")
} */

let lightSwitch = false
if (lightSwitch === true) {
    console.log("The light is on")
}

/* 
    ?else if statement
    allows us to add additional conditions if the prior one has not been satisfied

    ?Else statement
    allows us to add additional condition that resolves when nothing else makes sense
*/

let temp = 40

if (temp >= 90) {
    console.log("Summer time")
} else if (temp < 90) {
    console.log("good temp")
} else if (temp <70) {
    console.log("comfortable")
} else if (temp < 50) {
    console.log("Fall weather")
}

if (temp >= 90) {
    console.log("Summer time")
}
if (temp < 90) {
    console.log("good temp")
}
if (temp <70) {
    console.log("comfortable")
}
if (temp < 50) {
    console.log("Fall weather")
}

/* 
    ?Syntax
    if (conditionIsTrue) {
        execute this code block
    } else if (conditionIsTrue) {
        execute this code block
    } else {
        execute this code block
    }
*/

/* 
    ? logical operators NOT AND OR
    * OR operator ( || )
        * true if one of the conditions is true
        * ex: I will buy paint if it's blue or gray
        * (gray, no blue) = buy
        * blue, no gray = buy
        * blue, gray = buy
        * no blue, no gray = no buy
    * AND operator ( && )
        * true if both conditions are true
        * gray, blue = buy
        * no gray, blue = no buy
        * gray, no blue = no buy
        * no gray, no blue - no buy
    * NOT operator (! or in expression !=)
    *  flips the logical expression 
    */

// ? NOT example

lightSwitch = true
console.log(lightSwitch)
lightSwitch = !true
console.log(lightSwitch)
console.log(lightSwitch != true)

if (!true) console.log("Will this run?")

// ? AND OR examples

let sensors= "armed"
let alarm = false

if (sensors === "armed" || alarm) {
    console.log("the system is active")
} else if (sensors === "disarmed" || alarm === false) {
    console.log("False alarm")
} else if (sensors --- "armed" && alarm === false) {
    console.log("system fault")
}

let age = "potato"

if (age < 16) {
    console.log("You can't drive")
} else if (age >= 16 && age < 18) {
    console.log("You can drive but not vote")
} else if (age >= 18 && age < 21 ) {
    console.log("You can vote but not drink")
} else if (age >= 21) {
    console.log("You can drink")
} else {
    console.log(`${age}`)
}

/* 
    ? Ternaries
    * an expression
    * a quick way of creating if/else conditional
    * commonly used to check a quick condition
*/

/* 
    ? Syntax
    conditional ? expr if true : expr if false
    ? Chaining syntax
    conditional ? expr if true
        : else if expr ? if true
        : else if expr ? if true
        : else or Null
*/

let ignition = undefined

ignition ? console.log("ready to start") : console.log("turn ignition on")

// ? Chaining Ternaries

let season = 3
season == 1 ? console.log("spring")
    : season == 2 ? console.log("summer")
    : season == 3 ? console.log("autumn")
    : season == 4 ? console.log("winter")
    : null

/* 
    ? Switch statements
    * execute a block of code dependent upon a different case
    * we ask a question requiring specific response determined by our answer
*/

let uprightInstructor = "Jonah"

switch(uprightInstructor) {
    case "Paul":
        console.log(`${uprightInstructor} is a senior SWE`)
        break
    case "Amit":
        console.log(`${uprightInstructor} is one of the best instructors`)
        break
    case "Mary":
        console.log(`${uprightInstructor} is a senior TA`)
        break
    default:
        console.log(`${uprightInstructor} may not work here`)
}

