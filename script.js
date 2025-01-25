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