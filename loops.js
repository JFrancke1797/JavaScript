/* 
    ? Loops
    * allow us to execute a block of code repeatedly until an exit condition has been met
*/

/* 
    ? Traditional For Loop

    ? Syntax

    for (start; stop; step) {
        code block to execute
    }

    * iterator - (ex: i) value that is a placeholder for our loop
    * iterable - (ex: longWord) value we can iterate/loop over
*/

/* for (let i = 10; i >= 0; i = i - 1) {
    console.log(i)
} */

// ? Infinite loop - a loop without a stop condition

/* 
    for (let i = 0;; i++) {
        console.log(i)
    }
*/

/* let longWordEN = "supercalifragilisticexpialidotious"
console.log(longWordEN.length)

for (let index = 0; index < longWordEN.length; index += 1) {
    console.log(longWordEN[index])
} */

/* 
    ? For in Loop
    * allows us to seek an index value of an iterable against a condition
    * do not require an index number
    * do not require a stop statement
*/

/* let longWordDE= "kraftfahrzeughaftlischtversicherung"

for (i in longWordDE) {
    console.log(longWordDE[i])
} */

/* 
    ? For of Loop
    * allows us to seek iterable value against a condition
*/

/* let longWordPL = "konstantynopolitanczkowianeczka"

for (i of longWordPL) {
    console.log(i)
} */

/* 
    ? for of and for in difference
    * for in allows to loop over items that are not an array
    * for of works on indexed items only
*/

// ? Challenge
// ! count down from 10

/* 
    ! Challenge 2
    * create a variable with a sentence
    * loop over that variable
    * if a letter is a vowel, increment count, print (console log) it
    * at the end, you should have a list of vowels and the total vowel count
*/

/* let sentence = "My dog's name is Bentley"
// a e i o u
let count = 0
for (ltr of sentence) {
    if (ltr == "a" || ltr == "e" || ltr == "i" || ltr == "o" || ltr == "u") {
        count++
        console.log(ltr)
    }
}
console.log(`The vowel count is ${count}`) */

/* 
    ? While Loop
    * executes a statement inside of a code block
    * it does so as long as a while condition evaluates to true
    
    ? Syntax
    while (true) {
        do this until false
    }
*/

/* let loopCount = 0

while (loopCount < 10) {
    console.log(loopCount)
    loopCount += 1
}
 */
/* 
    ?Do While loop
    * executes code in the do section while a comdition remains true
    ! if you like your instructor, you will spare him from aneurysm and NOT use this pls
*/

/* 
    ? Coding Challenge
    * there is an array of swings to make it into a hole
    * swings at 2nd and 5th hole are Par 3
    * swings at 4th and 8th hole are Par 5
    * swings at any other hole are Par 2
    * calculate total points
    HINT: think of this in pseudocode
*/
let golfScore = 0
const swings = [1, 2, 5, 7, 3, 4, 2, 1, 8]

for (i in swings) {
    if (i == 1 || i == 4) {
        golfScore += swings[i] - 3
    } else if (i == 3 || i == 7) {
        golfScore += swings[i] - 5
    } else {
        golfScore += swings[i] - 2
    }
}

console.log(golfScore)

/* 
    ? String Reversal
    * create a variable with a string
    * utilize a loop to reverse the string
    * strings are immutable
*/

let string = "palindrome"
let result = ""
for (let index = string.length - 1; index >= 0; index = index - 1) {
    console.log(string[index])
    result = result + string[index] //or result += string[i]
}
console.log(result)