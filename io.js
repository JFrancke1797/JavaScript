/* 
    ? IO & Callbacks
    * process = event that runs in the background or foreground of the machine
    * node.js allows access to its processes via process object
    * this allows us to process external input and external output
    * we do this by using process.stdin and process.stdout
*/

// const process = require("process")
// console.log(process.pid)
// console.log(process)

// console.log("Hello, what is your name?")
// process.stdin.once("data", (input) => {
//     console.log(`Welcome, ${input.toString()}`)
//     process.exit()
// })

//.on() method continually listens to a data stream
/* let count = 0
console.log("What is your name?")
process.stdin.on ("data", (input) => {
    count++
    if (count == 5) process.exit()
    console.log(`Welcome, ${input.toString()}`)
}) */

// ? Readline

const readline = require("readline")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

// rl.question("What is your name?", input => {
//     rl.setPrompt(`Hello ${input}`)
//     rl.prompt()
//     rl.close()
// })

async function ask(q) {
    return new Promise((resolve, reject) => {
        rl.question(q, resolve)
    })
}

async function start () {
    const flower = await ask("what's your favorite flower?")
    const car = await ask("What's your favorite car?")
    console.log(flower, car)
    rl.close()
}

start()