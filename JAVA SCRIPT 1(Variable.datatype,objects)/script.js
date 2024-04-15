// console.log("HELLO")

// var a = 5;
// var b = 6;
// var c ="DEB"
// var _d = 2;
// var 56v= 9; ---> INVALID

// console.log(a+b);
// console.log(typeof a,typeof b, typeof c);/

//const b1= 7; // to store constant value
// b1=8 --> ERROR

// use let instead  of var for block scope

// let a = 5;
// // a=a+1;
// let b = 6;
// let c ="DEB"
// let _d = 2;
// {
//     let a=45;
//     console.log(a)
// }
// console.log(a)

//IF WE USE VAR
// var a = 5;
// {
//     var a=45;
//     console.log(a)
// }
// console.log(a)


//PRIMITAVE DATA TYPE
let x="DEB";
let y = 22;
let z= 3.34;
const p =true;
let q= undefined;
let r =null;

console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);


//OBJECTS
let o ={
    "name": "Deb",
    "job code" : 5645,
    "age" : 20,
    "is_handsome": true,
}
console.log(o);
o.salary="20lakh"
// delete o.age;
console.log(o);
o.salary="60lakh"
console.log(o);