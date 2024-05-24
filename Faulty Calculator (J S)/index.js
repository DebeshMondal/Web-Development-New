/*
Create a faulty calculator which does the following :

1. Takes two no. from user
2. It performs wrong operation as follows:

+  -----> -
-  -----> /
*  -----> +
/  -----> **  

It performs wrong operation 10% of the time

*/



let random = Math.random()
console.log(random)
let a = prompt("Enter first no.")
let c = prompt("Enter operation")
let b = prompt("Enter second no.")


let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}


if (random > 0.1) {
  //perform correct calculation
  console.log(`The result is ${a} ${c} ${b}`)
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
  }

else {
    //performinf wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}