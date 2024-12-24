//we no more use + to concatenate strings, instead now we use `..` - back ticks used for string interpolation

const name = "Sankalp-hc"
const repoCount = 200

console.log(`this is my name ${name}, with a repo count of ${repoCount}`)

const gameName = new String('Sankalp');

console.log(gameName.indexOf('n'))
console.log(gameName.toUpperCase())

const newString = gameName.substring(0,4)
console.log(newString)

const split = gameName.slice(-8,5)
console.log(split)

const url = "https://sankalp.com%20chauhan"

console.log(url.replace('%20', '-')) 

console.log(url.includes("chai"))

console.log(gameName.split('-'))


 