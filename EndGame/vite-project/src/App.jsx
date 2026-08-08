// import { useState,useEffect,useRef } from 'react'
import './App.css'

function App() {
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
        <button>HTMl</button>
        <button>CSS</button>
        <button>Javascript</button>
        <button>React</button>
        <button>Typescript</button><br />
        <button>Node.js</button>
        <button>Python</button>
        <button>Ruby</button>
        <button>Assembly</button>
      </section>
      <section>
        <input type='character'/>
      </section>
    </main>
  )
}

export default App
