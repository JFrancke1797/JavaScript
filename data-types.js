console.log("Hello World")

/* 
    ? console object
    gives us acces to browser or node's debugging console
    allow the developer view output from their program
*/

2 + 2 // runse but doesn't show in console
console.log(2 + 2) // shows in the console

/* 
    ? JS data types
        primitive
            string
            number
            boolean
            null
            undefined
            not a number
        reference
            array
            object
            map
            set
*/

/* 
    ?Strings
    primitive data type representing characters
    enclosed in '', "", or ``

    Examples
*/

console.log("this is a text")
console.log('this is a text using string interpolation backticks')
// string representation of a number
console.log("2023")

// we can concatenate different strings (add them together)
console.log("I'm Jonah and " + "I'm 27")

/* 
    strings are indexed starting from zero (0)
    index value goes between [ ]
*/

console.log("supercallifragilisticexpialidocious"[6])

/* 
    ? string interpolation
    a process of including space for an expression
    Syntax:
        'string ${ } string'
*/

console.log(`my name is jonah and I am ${20 + 7} years old`)

/* 
    ?String methods and properties
    .length
    .slice()
    .toUpperCase()
    .toLowerCase()
*/

console.log("supercallifragilisticexpialidocious".length)
console.log("Francke".toUpperCase())
console.log("Jonah Francke".slice(0, 6))

/* 
    ?Checking data types using typeof operator
*/

console.log(typeof 1990)

/* 
    ?numbers
    any integer or decimal
*/

console.log(25)
console.log(3.14)
console.log(0.2 + 0.1)
console.log(Number.MAX_SAFE_INTEGER)

/* 
    ?Booleans
    binary value
    either true (on) or false (off)
    examples of falsey values:
        0
        undefinded
        null
        NaN
        ""
*/

console.log(true, false)
console.log(2 == "2")

//Boolean() interface returns whether value is truthy or falsey
console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean(" "))
console.log(Boolean(""))

/* 
    ?type coercion
    JS is a weakly typed programming language (duck typed)
    doesn't require data type definition
    comparison operator (==) performs typecoercion before resolving expression
        will check values but NOT data types
    strict equality comparison operator (===) will avoid type coercion
        will check values AND data types
*/

console.log(10 == "10")
console.log(2 +"2")

console.log(10 === "10")

console.log(2 == "2", typeof 2, typeof "2")
console.log(2 === "2", typeof 2, typeof "2")

/* 
    ?Not a Number
    triggered when performing operations w/ numbers and non-numbers
    used when performing math computations that don't make sense
    ! know what type coercion is but DOESN'T use it
*/

console.log(undefined + 5)
console.log(Math.sqrt(-1)) // imaginary number (so NaN)

/* 
    ?Null and undefined
    null - placeholder for something
    undefined - lack of existence
    falsey values
*/

/* 
    Operators
    addition +
    subtraction -
    multiplication *
    division /
    exponent **
    dot .
    modulo %
    assignment (=)
    comparison (==)
    strict comparison (===)
    is not equal to  (!= or !==) OR !value
*/

// modulo % -> remainder of long division

console.log(10 / 2)
console.log(10 % 2)
console.log(10 % 3)

// ? assignment

let MyName = "Jonah" // assigns the value of Paul (str) to the variable MyName
console.log(MyName)

// ? Comparison
console.log(MyName == "Jonah")

//? is not equal to != --> flips values

console.log(2 != 2)