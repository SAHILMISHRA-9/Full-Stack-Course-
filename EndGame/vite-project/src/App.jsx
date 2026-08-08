import { useState,useEffect,useRef } from 'react'
import { languages } from '../assets/language'
import './App.css'

function App() {
  const [currentWord,setCurrentWord]=useState("react")

  const lanngaugeElements=languages.map(lang=>{
    return(
      <button 
        style={{
          backgroundColor: lang.backgroundColor,
          color: lang.color,
        }}
      >
        {lang.name}
      </button>
    )
  })

  const keyboards="abcefghijklmnopqrstuvxyz"

  const letterElements=currentWord.split("").map(letter=>(
    <span>{letter.toUpperCase()}</span>
  ))


  return (
    <main>

      <header className='header'>
        <h1>Assembly: EndGame</h1>
        <p>Guess the word within 8 attemot to 
          keep the program word safe from Assembly</p>
      </header>

      <section className='result'>
        <h2>Game Over!</h2>
        <p>You lose! Better start learning Assembly</p>
      </section>

      <section className='Techstack'>
        {lanngaugeElements}
      </section>

      <section className="word">
        {letterElements}
      </section>

      <section>

      </section>
    </main>
  )
}

export default App
