// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
let combinedArrays = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(combinedArrays.length)
// Expected output: 9

// Pseudo code:
// Create a variable that will hold both arrays together as one with .concat()
// add both array lengths together padres1998WorldSeriesRuns & adres1984WorldSeriesRuns using .concat()and save that value into my created variable
// use console.log() to print out the length of that variable using .length expecting an output of 9 as the result



// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Golf 2023"
let newCohort = currentCohort.split("").reverse().join("")
console.log(newCohort)

// Expected output: "3202 floG"

// Pseudo code:
// create a new variable that will hold the desired result
// in that new variable use .split("") to split up the string to make it able to be reveresed (currentCohort)then use .reverse() to reverse the string finally use .join("") to put the string back together
// use console.log(newCohort) to diplay the new variable holding the expected result of the original coHort being reveresed ("3202 floG") 


// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]

for (let i = 0; i < stockExchange.length; i++) {
    if (stockExchange[i] % 2 !== 0) {
        console.log(stockExchange[i])
        
    }
}

// Expected output: 13 5 -5 27

// Pseudo code:
// Make  a for loop that will run as many times as we have index's in our array by using the .length method on our array (stockExchange)
// make a conditional stament that checks each index of the array. If that index is divided by two and the remainder isnt equal to 0, then the number is an odd number.
// if that number is an odd number console.Log() the number at that index
