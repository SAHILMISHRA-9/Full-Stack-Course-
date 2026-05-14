// let course={
//     title: "Learn css Grid for free",
//     lessons:16,
//     creator: "Sahil Mishra",
//     length:0,
//     level:0-5,
//     isFree:true,
//     tags:["html","css"]
// }

// // console.log(course["tags"])
// console.log(course.tags)

// let arbnbcaste={
//     title:"Live like a king in my castle",
//     amount:147+"$",
//     superhost:true,
//     description:["4 guest","1 Bedroom","2 beds","Private half-bath"]
// }


// let person={
//     name:"Sahil",
//     age:22,
//     country:"India",
//     logData(){
//         return person.name+" is "+person.age+" years old and lives in "+person.country
//     }
// }

// console.log(person.logData())


// let largeCountries=["Tuvalu","india","USA","Indonesia","monoca"]
// largeCountries.shift()
// largeCountries.unshift("China")
// largeCountries.pop()
// largeCountries.push("pak")
// for(let i=0;i<largeCountries.length;i++){
//     console.log(largeCountries[i])
// }

// let hand=["rock","paper","scissor"]

// function getHand(){
//     let randomIdex=Math.floor(Math.random()*3)
//     return hand[randomIdex]
// }
// console.log(getHand())

let fruit=["🍎","🍊","🍎","🍎","🍊"]
let appleShelf=document.getElementById("apple-shelf")
let orangeShelf=document.getElementById("orange-shelf")
function setFruit(){
    for(let i=0;i<fruit.length;i++){
        if(fruit[i]==="🍎"){
            appleShelf.textContent+="🍎"
        }else if(fruit[i]==="🍊"){
            orangeShelf.textContent+="🍊"
        }
    }
}
setFruit()

// function randomFruit(){
//     return Math.floor(Math.random()*6)
// }
