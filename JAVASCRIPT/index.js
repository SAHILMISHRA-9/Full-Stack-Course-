

// let countEl=document.getElementById("count-el")
let count=0

function increment(){
    count+=1
    document.getElementById("count-el").innerText=count
    // countEl.innerText=count
}


function save(){
    document.getElementById("count-el").textContent=0
    let variable = count + " - "
    document.getElementById("save-el").textContent += variable
    count=0
    // For the spacing between the - we have used the innerHTML or textContent
}


















// document.getElementById("count-el").innerText=5
// let count = 0
// console.log(count)

// let myAge=22
// console.log(myAge)

// let myAge = 12
// let humanDogRatio = 7
// let MyDog=myAge * humanDogRatio

// console.log(MyDog)

// let count=5
// // count =3
// count+=1

// let bonusPoints =50
// console.log(bonusPoints)

// bonusPoints+=50
// console.log(bonusPoints)

// bonusPoints-=75
// console.log(bonusPoints)

// bonusPoints+=50
// console.log(bonusPoints)

// let lapcount=0

// function lap(){
//     lapcount+=1
//     console.log(lapcount)
// }
// lap()
// lap()