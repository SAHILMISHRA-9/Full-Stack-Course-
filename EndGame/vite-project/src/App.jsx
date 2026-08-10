import { useState,useEffect,useRef } from 'react'
import { languages } from '../assets/language'
import './App.css'
import {clsx} from 'clsx'

function App() {
  // State values
  const [currentWord,setCurrentWord]=useState("react")
  const [guessedletter,setGuessedLetter]=useState([])

  // Derived value
  const wrongGuessCount= guessedletter.filter(letter =>
    !currentWord.includes(letter)
  ).length
  const isGameWon=currentWord.split("").every(letter=>guessedletter.includes(letter))
  const isGameLost=wrongGuessCount>=languages.length-1
  const isGameOver= isGameLost || isGameWon

  // static values
  const alphabets="abcdefghijklmnopqrstuvwxyz"
   
  // func to add letters from keyboard to guess
  function addGuessedLetter(key){
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
  const letterElements=currentWord.split("").map((letter,index)=>(
    <span key={index}>{guessedletter.includes(letter) ? letter.toUpperCase() : null}</span>
  ))

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
  })

  function renderGameResult(){
    if(!isGameOver) return null

    if(isGameWon){
      return(
        <>
          <h1>You Won</h1>
          <p>Well DOne !</p>
        </>
      )
    }else{
      return(
        <>
          <h2>Game Over!</h2>
          <p>You lose! Better start learning Assembly</p>
        </> 
      )
    }
  }

  return (
    <main>

      <header className='header'>
        <h1>Assembly: EndGame</h1>
        <p>Guess the word within 8 attemot to 
          keep the program word safe from Assembly</p>
      </header>

      <section className={gameResult}>
        {renderGameResult()}
      </section>

      <section className='Techstack'>
        {lanngaugeElements}
      </section>

      <section className="word">
        {letterElements}
      </section>

      <section className='keyboard'>
        {keyboardElements}
      </section>

      <section className='newgame'>
        {isGameOver==true && <button>New Game</button>}
      </section>
    </main>
  )
}

export default App
