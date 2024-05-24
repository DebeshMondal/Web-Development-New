// CREATE A BUISNESS NAME GENERATOR BY COMBINING LIST OF ADJECTIVES AND SHOP NAME, ANOTHOR WORD

/*
ADJECTIVES:
CRAZY
AMAZING
FIRE

SHOP NAME:
ENGINE
FOODS
GARMENTS

ANOTHER WORD:
BROS
LIMITED
HUB

*/


let rand= Math.random()
let first,second, third;
// 0 0.33 0.66 1

// lets generate the first one.
if(rand < 0.33){
    first = "crazy"
}
else if(rand > 0.66 && rand>= 0.33) {
    first = "amazing"
}
else{
    first = "Fire"
}

// lets generate the second one.
rand= Math.random()
if(rand < 0.33){
    second = "engine"
}
else if(rand > 0.66 && rand>= 0.33) {
    second = "food"
}
else{
    second = "garments"
}

// lets generate the third one.
rand= Math.random()
if(rand < 0.33){
    third = "bros"
}
else if(rand > 0.66 && rand>= 0.33) {
    third = "limited"
}
else{
    third = "hub"
}

console.log(`${first} ${second} ${third}`)
