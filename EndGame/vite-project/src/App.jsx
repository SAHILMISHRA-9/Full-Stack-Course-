import { useState,useEffect,useRef } from 'react'
import { languages } from '../assets/language'
import './App.css'

function App() {

  const [currentWord,setCurrentWord]=useState("react")
  
  const letterElements=


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
        {languages.map((label)=>(
          <button 
          style={{
            backgroundColor: label.backgroundColor,
            color: label.color,
          }}
          >
            {label.name}
          </button>
        ))}
      </section>

      <span>

      </span>
  
    </main>
  )
}

export default App
