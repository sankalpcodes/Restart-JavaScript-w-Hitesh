// comparison = "2" > 1
// console.log(comparison)
// console.log(typeof comparison)

console.log(null>0) // false
console.log(null>=0) // true
console.log(null==0) // false
console.log(null<0) // false
console.log(null<=0) // true

// the reason is the equality checks == and comparators >, <, >=, <= works differently.
//comparisons convert null to a number, treating it as 0 

console.log("separator")

console.log(undefined>0)  // false
console.log(undefined>=0) //false
console.log(undefined==0) //false
console.log(undefined<0) //false
console.log(undefined<=0) //false

//undefined always gave the value as "false", unlike null, where it si "true" only under two conditions
