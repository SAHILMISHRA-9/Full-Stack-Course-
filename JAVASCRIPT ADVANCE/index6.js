// Hoisting

console.log(getWeather())

function getWeather(){
    return "today weather"
}

// error
// let and const needs to be initialise before using
console.log(traffic)

let traffic='All raods'

// for this code this happens that is javascipt perform this this that is move the declaration at top during compilation

// let traffic
// console,log(traffic)
// traffic="all roads"

//due to this it cant be printed or accessed