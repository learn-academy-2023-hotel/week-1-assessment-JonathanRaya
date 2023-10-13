// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
//  console.log(cohort.length)

// a) Your answer: It will display 10
// b) Verify and explain: When .length is called on a string, it counts all the characters including the spaces. Therefore the answer is 10 because there is 9 characters and 1 space.

// --------------------2) What will this log?

const greeting = "Hello World!"
//  console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: It logs the letter o because like an array, the index starts at 0 for strings so the letter o is at index 0 in this string 

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
//  console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: It logs ruby because index is assigned a value of 1. the console log is calling the array with index inside the bracket which equals 1. Ruby is at the index of 1 so it is the result logged.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//  console.log(weekendDays.toUpperCase())

// a) Your answer:SATURDAY, SUNDAY
// b) Verify and explain: I thought it would log each Item in the array in all uppercase letters. 
// I got an error when I tried to run the code. I think the reason for this is because .toUpperCase() only works on sting datatypes. An Array is not a string datatype

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
 console.log(typeof dataTypes.length)

// a) Your answer:It will not run the code and produce an error
// b) Verify and explain: 
// I thought it would not run and produce an error because an array isnt a datatype. But after seeing the result my guess is that it says number because it is looking at what kind of data .length produces which is a number.