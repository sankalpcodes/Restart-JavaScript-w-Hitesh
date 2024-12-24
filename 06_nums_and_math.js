// +++++++++++++++++++++++++++++ numbers oobject ++++++++++++++++++++++++++++
const num = 400
console.log(typeof(num))
console.log(num.toString())

const newNum = new Number(300)
console.log(newNum.toString().length)
console.log(typeof(newNum))
console.log(newNum.toFixed(3))


const otherNum = 23.8966
console.log(otherNum.toPrecision(2))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

//output: 10,00,000

//++++++++++++++++++++ maths object +++++++++++++++++++++++++++++++++ 

// console.log(Math.abs(-9))
// console.log(Math.round(5.4))
// console.log(Math.ceil(5.4))
// console.log(Math.floor(5.4))
// console.log(Math.min(3,6,1,5))
// console.log(Math.max(3,6,1,5))

console.log(Math.random())
console.log(Math.random()*10)