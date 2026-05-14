// const exerciseTimeMins=20

// // let message=''

// // if(exerciseTimeMins<30){
// //     message='You need to try harder!'
// // }
// // else{
// //     message='Doing good'
// // }

// const message = exerciseTimeMins < 30 ? 'You need to try harder!' : 'Doing good'
// console.log(message)

// const playerGuess=3
// const correctAnswer=6

// const message = playerGuess < correctAnswer ? 'too low' 
//             : playerGuess>correctAnswer ? 'too high'       
//             : playerGuess===correctAnswer ? 'correct' 
//             : 'wrong'
// console.log(message)


// function setItem(item){
//     let price=0

//     switch(item){
//         case 'coffee':
//             price=2
//             break
//         case 'Sandwiches':
//             price=5
//             break
//         case 'salad':
//             price=4
//             break
//         case 'Lemon cake':
//             price=3
//             break
//         default:
//             return `Sorry, we don't sell the ${item}`
//     }
//     return `You selected ${item}. That will be $${price}`
// }
// console.log(setItem('coffee'))


// const favouriteFilm={
//     title:"Top Gun",
//     year:"1986",
//     genre:"action",
//     star:"Tom Cruise",
//     director:"Tony Scott"
// }

// const {title, year, genre, star, director}=favouriteFilm

// function displayTrafficLight(light){
//     console.log(light)
// }
// setTimeout(displayTrafficLight,3000,'green')

// displayTrafficLight('red')

function Answer(answer,points){
    console.log(`The answer is ${answer} of course! If you got that right, give yourself ${points} points`)
}
console.log('What is the capital of Peru?')
setTimeout(Answer,3000,'Lima','10')

