/* 
    ? Recursion
    * procedure involving invoking the procedure itself
    * allows us to loop over items without the use of a loop
    * every recursive function requires a GUARD CLAUSE
*/
let goCount = 0
function go() {
    if (goCount > 10) return
    console.log("the function runs -- go go go!")
    goCount++
    go()
}

go()

let factorialCount = 5
let result = 1
while (factorialCount > 0) {
    result = factorialCount * result
    factorialCount--
}

console.log(result)

function factorial(num) {
    if (num === 0) return 1
    return num * factorial(num - 1)
}

console.log(factorial(5))

function countdown(s) {
    if (s === 0) {
        return "Blastoff!"
    }
    console.log(s + "...")
    return countdown(s - 1)
    
}

countdown(10)