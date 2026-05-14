const exerciseTimeMins=40;

// let message= exerciseTimeMins<30 ? 'You need to try harder' : 'Doing good';

const message = exerciseTimeMins<30 ? 'You need to try harder' : exerciseTimeMins<60 ? 'Doing good' : 'Excellet'
console.log(message)


const playerGuess=3
const correctAnswer=6

const newmessage=playerGuess===correctAnswer? 'corrrect' : playerGuess>correctAnswer ? 'too high' : 'too low'
console.log(newmessage)

