console.log("Conditionals, Loops and Functions");

// Conditionals:

// If

let noOfStudents = "20"

// loose equality operator == // only checks the value
if (noOfStudents == 20) {
    console.log("loose")
    console.log("There are 20 students")
}

 // strict equality operator === // checks the value and the type // recommended
 if (noOfStudents === 20) {
    console.log("strict")
    console.log("There are 20 students")
 }

 // If... else if ladder
 // and - &&
 // or - ||
 const hour = 8

 if (hour < 12){
    console.log("Good Morning")
 } else if (hour <17) {
    console.log("Good Afternoon")}
    else if (hour < 20) {
        console.log("Good Evening")
    } else {
        console.log("Good Night")
    }

    // Switch Case
    const day = 6

    switch (day) {
        case 1: 
            console.log("Monday")
            break
        case 2:
            console.log("Tuesday")
            break
        case 3:
            console.log("Wednesday")
            break
        case 4:
            console.log("Thursday")
            break
        case 5:
            console.log("Friday")
            break
        case 6:
            console.log("Saturday")
            break
        case 7:
            console.log("Sunday")
            break
        default:
            console.log("Wrong day")
    }

    // Multiple switch cases - fallthrough
    switch (day) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            console.log("Weekday")
            break
        case 6:
        case 7:
            console.log("Weekend")
            break
        default:
            console.log("Wrong day")
    }

    // Ternary Operator
    const isRaining = true

    let action = ""

    if (isRaining) {
        action = "Take an umbrella"
    } else {
        action = "Nothing"
    }

    console.log(action)


    // python what to do for true, if condition else what to do for false
    // condition ? what to do for true condition : what to do for false condition
const action2 = isRaining ? "Take an umbrella" : "Nothing"

console.log(action2)

// Short circut logic
// &&
// ||

let num = 5
let den = 10
let division

if (den !== 0) {
    division = num / den
}
console.log(division)

let division2 = den !== 0 && num / den
console.log(division2)

// || OR
let username = ""

let displayName = username

if (!username) {
    displayName = "Guest"
}

console.log(displayName)

let displayName2 = username || "Guest"

console.log (displayName2)

// Loops

// for loop

for (let i = 0; i < 5; i++) {

    console.log(`This is iteration number ${i}`)

}

// while and do...while loop

let j = 0

while (j < 5) {
    console.log(`J's value in while loop: ${j}`)
    j++

}

let k = 0

do {

    console.log(`K's value in do while loop: ${k}`)
    k++

} while (k < 5)

// for...of => arrays
// for...in => objects

// for..of loop
const fruits = ["Mango", "Orange", "Apple"]

for (let fruit of fruits) {
    console.log(fruit)
}

// for...in loop // arrays
const person = {
    name: "John",
    city: "Sydney",
    age: 27
}

for (let key in person) {
    console.log(key)
    console.log(person[key])
    console.log("\n")
}

// forEach // only loops and then finishes // objects
fruits.forEach(function fruitLoop(fruit, index) {
    console.log(fruit, index)

})

// using arrow function
console.log("forEach using arrow function")
fruits.forEach((fruits, index) => {
    console.log(fruits, index)
}
)

// map // loops and then returns a new array // always a list
const upperCaseFruits = fruits.map(function fruitLoop(fruit) {
    return fruit.toUpperCase()
})

console.log(upperCaseFruits)

// using arrow function

const upperCaseFruitsUsingArrow = fruits.map((fruit) => {
    return fruit.toUpperCase()
})

console.log("map using arrow function")
console.log(upperCaseFruitsUsingArrow)

// filter out data based on certain conditions

const newFruits = ["Mango", "Orange", "Apple", "Banana"]

const filteredFruits = newFruits.filter(function filterLoop(fruit) {
    return fruit.length > 5
})

console.log(filteredFruits)

// Functions

// parameter:
function greet(name) {
    console.log("Hello " + name)
}

// argument:
greet("Jane")

// name - parameter
// "Jane" - argument

// return statement
function sum (num1, num2) {
    return num1 + num2
}

const totalSum = sum(5, 7)
console.log(totalSum)

// First class functions - first class citizens
// can be assigned to a variable
// can be passed as an argument to another function
// can be returned from another function


// anonymous functions - doesnt have a name of its own
// const addFn = function (a, b) {
//  return a + b
// }

// const total = addFn(1 ,2)
// console.log(total)

// arrow function
const addFn =  (a, b) => {
    return a + b
}

const total = addFn(1 ,2)
console.log(total)

function player () {
    console.log("Player")
}

function admin () {
    console.log("Admin")
}

function greetUser (user) {
    console.log("Hello")
    user()
}

greetUser(player)
greetUser(admin)

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function calculate(a, b, operation) {
    return operation(a, b)
}

console.log(calculate(1, 2, add))
console.log(calculate(7, 5, subtract))

// Closure
// function inside a function
// inner function has access to the outer function's variables
// outer function returns the inner function

function multiplier (factor) {
    function product (num) {
        return num * factor
    }
    return product
}

const doubler = multiplier(2)

console.log(doubler(5))
console.log(doubler(11))
console.log(doubler(23))

const tripler = multiplier(3)

console.log(tripler(3))
console.log(tripler(7))
