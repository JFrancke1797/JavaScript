/* 
    ? Scope
    * used to determine info in different code blocks can be accessed

    ? Five Scope Types
    * global/window
    * block
    * function
    * module
    * lexical
*/

/* 
    ? Global
    * outermost scope
    * window object when in the client
    * global object aka .js file in Node
    * accessible from every other scope
*/

let globalScopeVariable = "this is a global scope variable"

{console.log("this is a scope")}  

{{{{{{{{{{{{{{{{{console.log(globalScopeVariable)}}}}}}}}}}}}}}}}}

/* 
    ? Function scope
    * accessible only inside a function
*/

function scope() {
    let fxScopeVariable = "This is a function scope variable"
    console.log(fxScopeVariable)
}

scope()
// console.log(fxScopeVariable) ReferenceError

/* 
    ? Block Scope
    * anywhere there are { }
*/

for (i of "some string") {
    let character = ""
    character = i
    console.log(character)
}

// console.log(character)

/* 
    ? Lexical Scope
    * variables are accessible by their nested position
    * inner fx scope can access outer fx scope
*/

function outerFx() {
    // outer fx scope
    let ofxsv = "outer fx scope variable"

    function innerFx() {
        // inner fx scope
        let ifxsv = "inner fx scope variable"
        console.log(ofxsv)
    }
    return innerFx()
}

console.log(outerFx())

/* 
    ? Module Scope
    * encapulates objects nested insode of other modules or files
    * allows us the use of other files
*/

/* 
    ? Hoisting
    * JS' parsing engine reads top to bottom, left to right
    * JS' interpreter runs the code twice
        * first, it looks for VARiables and fx declarations and hoists them
        * it allocates memory space for those declarations
        * it then executes the code line by line
*/

// console.log(myName) // ReferenceError
let myName = "Jonah Francke"
console.log(myName)

console.log(age)
var age = 28
// console.log(age)

// ? Function Declarations are hoisted

x()
function x () {
    console.log("function declaration")
}
x()

// ? Function Expressions are NOT hoisted

// y() // ReferenceError
let y = function() {
    console.log("function expression")
}
y()

function run() {
    var foo = "foo"
    let bar = "bar"
    console.log(foo, bar)
    {
        var moo = "moo"
        let baz = "baz"
        console.log(moo, baz)
    }
    // console.log(baz) // ReferenceError
    console.log(moo) // ? WORKS: scoped to immediate function block
}

// ! THIS IS BAD !! Don't use hoisting to your "benefit"!!!!

