let score = "33abc"

// console.log(typeof score);
//conversion

// let valueInNumber = Number(score)
// console.log( typeof valueInNumber);
// console.log(score)
// console.log(valueInNumber)

//for conversion:
    // "33" -> 33 easily converted
    // "33abc" -> NaN
    // "true" -> 1; "false" -> 0

// let isLoggedIn = " "

// let isBoolean = Number(isLoggedIn)

// console.log(isBoolean)


//******************************Operations:*********************************

let value = 3
let negValue = -value
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3) //2 to the power 3
// console.log(2/3) 
// console.log(2%3) 

let str1 = "Helloe"
let str2 = "Sankalp"

console.log(str1 + " " + str2)

console.log("1" + 2)
console.log("1" + 2 + 3) //here they concatenated as a string
console.log(1 + 2 + "3") // here they added the two nos and then concatenated {According to the ECMA guidelines}
console.log(1 + "2")
console.log(1 + 2)

let gameCounter = 100
++gameCounter
console.log(gameCounter)
