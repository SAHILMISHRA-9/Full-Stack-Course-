// const getSpendAlert=function(amount){
//     return `Warning! You just spent $${amount}`
// }

const getSpendAlert = amount =>{
    return`Warning! You just spent $${amount}`
}
console.log(getSpendAlert(150))

const getNewspend = () =>{
    return `Warning you spent a lot`
}

const spending = (amount,salary)=>{
    `You spent $${amount} from your ${salary}`
}
console.log(spending(200,3000))

const sppending = (name,amount)=>
    `Warning! see we can also write like this`

const neww = amount => `Warning have you seen this one`


const speedWarning = (speed,speedlimit) =>{
    if(speed>speedlimit) return `Warning you are going over the speed limit`
}

const distaneTravelledMiles=[256,245,345,567,789]

const distancetravelledKm=distaneTravelledMiles.map( distance =>{
    return  Math.round(distance*1.6)
})
console.log(distancetravelledKm)