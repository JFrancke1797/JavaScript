/* 
    ? Asynchronous Programming
    * JS is single-threaded
    * need for asynchronous operations
    * 
*/

function greet() {
    return "hello everyone"
}

//console.log(greet())

function verifyAge(age) {
    if (age < 18) return
    return "Access Granted"
}

//console.log(verifyAge(27))

/* 
    ? Callback function
    * a function that is being called by another function
*/

function getData() {
    setTimeout(() => {
        console.log("some data returned")
        return 28
    }, 3000)
}

let jonahsAge = getData()
console.log(jonahsAge)

console.log(getData())

console.log(greet())

console.log(verifyAge(27))

/* 
    ? Promises
    * an object that may produce a singular value in the future

    ? three states
    * pending (unfinished)
    * fulfilled (complete value result)
    * rejected (error)
    * 
    * promises allow other code to excecute wihout having to wait for their completion
*/

function promiseFx() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("after 3 seconds it resolves")
        }, 3000)
    })
}

console.log(promiseFx())

// ? in order to get tangible data out of a Promise object, we must resolve it

promiseFx()
    .then(msg => console.log(msg))
    .catch(err => console.log(err))
    .finally(() => console.log("this runs after the promise"))

/* 
    ? Asychronous functions
    * introduced in ES7
    * alternative to writing functions
    * a function that returns a promise object
    * allows us to resolve or reject a promise
*/

async function asyncFx() {
    return "hello from the async function"
}

console.log(asyncFx())  // returns a promise

/* 
    ? Await keyword
    * can be utilized only inside of async fx
    * tells JS we must wait on promise returning fx before moving on
*/

async function start() {
    console.log(await asyncFx())
}

// using async fx avoids callback hell

start()