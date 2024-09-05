/* 
    ?Variables
    containers that store data in memory
    declaration
        allows memory space to be reserved using an identifier
        starts w/ let, var, or const keyword
        cannot start with number of character other than $ or _
        if no value is assigned, it's undefinded
    initialization
        assignment of data value
        can be any value or data type
        can be reassigned (except for const)
*/

// variable declaration
let firstname
console.log(firstname)

// reassignment
firstname = "Jonah"
console.log(firstname)

//variable declaration and initialization
let address = "123 Main St"

/*
    ! Mini Challenge
    * string inerpolate or concatenate above so that it says:
    * Hi, I'm Corey and I live at 123 Main Street
 */

let greet = "Hi, I'm " + firstname + " and I live at " + address
let greet2 = `Hi, I'm ${firstname} and I live at ${address}`

console.log(greet)
console.log(greet2)

//? var is hoisted whereas let is not

var age = 27
console.log(age)

//? const variable
const ssn = 666010101
console.log(ssn)
// ssn = 666000001 // TypeError can't reassign const values
// console.log(ssn)


let fName = "Jonah"
let lName = "Francke"
let houseNumber = "341"
let street = "Autumn Pond Way"
let aptNum = "Unit 205"
let city = "Essex Junction"
let state = "vt"
let postCode = "05452"
let addressStamp = `${fName} ${lName} \n${houseNumber} ${street} ${aptNum} \n${city}, ${state.toUpperCase()} ${postCode}`
console.log(addressStamp)