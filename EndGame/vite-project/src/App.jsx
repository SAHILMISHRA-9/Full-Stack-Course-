import { useState ,useEffect} from 'react'
import { languages } from '../assets/language'
import './App.css'
import {clsx} from 'clsx'
import { getFarewellText } from '../assets/getFarewellText'
import { randomWord } from '../assets/getFarewellText'
import Confetti from "react-confetti"

function App() {
  // State values
  const [time,setTime]=useState(60)
  const [gameStarted,setGameStarted]=useState(false)
  const [currentWord,setCurrentWord]=useState(()=> randomWord())
  const [guessedletter,setGuessedLetter]=useState([])

  // Derived value
  const numGuessLeft=languages.length-1
 
  const wrongGuessCount= guessedletter.filter(letter =>
    !currentWord.includes(letter)
  ).length
  const isGameWon=currentWord.split("").every(letter=>guessedletter.includes(letter))
  const isGameLost=wrongGuessCount>=languages.length-1 || time===0
  const isGameOver= isGameLost || isGameWon
  const lastGuessedLetter=guessedletter[guessedletter.length-1]
  const lastGuessIncorrect=!currentWord.includes(lastGuessedLetter)
  const attemptLeft=languages.length-1 -wrongGuessCount


  // static values
  const alphabets="abcdefghijklmnopqrstuvwxyz"
   
  // UseEffect value
  useEffect(()=>{
    if(time===0 || isGameOver || !gameStarted) return

    const timer= setInterval(()=>{
      setTime(prevTime=>prevTime-1)
    },1000)

    return ()=> clearInterval(timer)
  },[gameStarted,time,isGameOver])


  // function to get the random farewell message
  // func to add letters from keyboard to guess
  function addGuessedLetter(key){
    setGameStarted(true)
    setGuessedLetter(prevkeys =>{
      return prevkeys.includes(key) ? prevkeys : [...prevkeys,key]
      // const keySet=new Set(prevkeys)
      // keySet.add(key)
      // return Array.from(keySet)
  })
  }

  // use to fetch the languages from the .js file along with the property
  const lanngaugeElements=languages.map((lang,index)=>{
    const isLost=wrongGuessCount>index
    const className=clsx("chip",isLost && "lost")
    return(
      <button
        className={className}
        key={lang.name}
        style={{
          backgroundColor: lang.backgroundColor,
          color: lang.color,
        }}
      >
        {lang.name}
      </button>
    )
  })

  // use to fetch the currentword and split it in single uppercase character
  // and also now only display if the letter guessed is correct
  const letterElements=currentWord.split("").map((letter,index)=>{
    const shouldrevealLetter=isGameLost || guessedletter.includes(letter)
    const letterClassName=clsx(
      isGameLost && !guessedletter.includes(letter) && "missed-letter"
    )
    return(
      <span key={index} className={letterClassName}>
        {shouldrevealLetter ? letter.toUpperCase() : null}
      </span>
    )
  })

  // use to fetch and display the keybords character seperatly 
  // and also display green and red color respective to the correct and wrong guess
  const keyboardElements=alphabets.split("").map(key=>{
    const isGuessed = guessedletter.includes(key)
    const isCorrect = isGuessed && currentWord.includes(key)
    const isWrong = isGuessed && !currentWord.includes(key)
    const className= clsx({
      correct:isCorrect,
      wrong:isWrong
    })
    return(
      <button
        disabled={isGameOver}
        aria-disabled={guessedletter.includes(key)}
        aria-label={`Letter ${key}`}
        className={className}
        key={key}
        onClick={()=>addGuessedLetter(key)}
      >
        {key.toUpperCase()}
    </button>
    )
  })

  // clsx for game status
  const gameResult=clsx('result',{
    won:isGameWon,
    lost:isGameLost,
    farewell: !isGameOver && lastGuessIncorrect && lastGuessedLetter
  })

  function renderGameResult(){
    if(!isGameOver && lastGuessIncorrect && lastGuessedLetter){
      return(
        <p 
          className='farewell'
        >
            {getFarewellText(languages[wrongGuessCount-1].name)}
        </p>
      )
    }

    if(isGameWon){
      return(
        <>
          <h1>You Won</h1>
          <p>Well DOne !</p>
        </>
      )
    }
    if(isGameLost){
      return(
        <>
          <h2>Game Over!</h2>
          <p>You lose! Better start learning Assembly</p>
        </> 
      )
    }
  }

  function startNewGame(){
    setCurrentWord(randomWord())
    setGuessedLetter([])
    setTime(60)
  }

  

  return (
    <main>
      {
        isGameWon && 
            <Confetti
              recycle={false}
              numberOfPieces={1000}
            />
      }

      <header className='header'>
        <h1>Assembly: EndGame</h1>
        <p>Guess the word within 8 attemot to 
          keep the program word safe from Assembly</p>
      </header>

      <section aria-live="polite" role="status" className={gameResult}>
        {renderGameResult()}
      </section>

      <section className='Techstack'>
        {lanngaugeElements}
      </section>

      <section className="word">
        {letterElements}
      </section>

      {/* visally hidden section fot aria updates */}
      <section 
        className='sr-only' 
        aria-live='polite' 
        role="status"
        >
          <p>
            {currentWord.includes(lastGuessedLetter) ?
              `Correct! The letter ${lastGuessedLetter} is in the word.` :
              `Incorrect! The letter ${lastGuessedLetter} is not in the word.`
            }
            You have {numGuessLeft} attempt left
          </p>
          <p>Current word: {currentWord.split("").map(letter=>
          guessedletter.includes(letter) ? letter + "." : "blank.")
          .join(" ")}
        </p>
      </section>

      <section className='keyboard'>
        {keyboardElements}
      </section>

      <section className='newgame'>
        {isGameOver==true ? <button onClick={startNewGame}>New Game</button> : ""}
      </section>

      <section className='guessleft'><p>You have {attemptLeft} left!</p></section>
      <section className="timer">
        <p>00:{time.toString().padStart(2, "0")}</p>
      </section>
    </main>
  )
}

export default App
