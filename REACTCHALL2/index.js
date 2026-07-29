// Given an array of strings, return an array
// where each number is sqaured
const nums=[1,2,3,4,5]

// const square =nums.map(function(num){
//     return num*num
// })
const square =nums.map(function(num){
    return num*num
})
// Given an array of strings, return an array
// where the first letter of each string is capitalized

const names=["alice","bob","charlie","danielle"]

// const Names=names.map((names)=>{
//     return names[0].toUpperCase() + names.slice(1)
// })
const Names=names.map((names)=> names[0].toUpperCase() + names.slice(1))

// Given an array of string return an array of string that wraps each
// of the original strings in an HTML-like <p></p> tag.
// Eg. given: ["<p>Bulbasaur</p>"]

const pokemon=["Bulbasaur","Charmandar","Squirtle"]

// const para = pokemon.map((pokemon)=>{
//     return `<p>${pokemon}</p>`
// })
const para = pokemon.map((pokemon)=> `<p>${pokemon}</p>`)
console.log(para)