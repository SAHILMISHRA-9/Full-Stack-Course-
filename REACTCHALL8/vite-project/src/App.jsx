import { useState } from 'react'
import './App.css'
import WindowTracker from '../component/WindowTracker'

function App() {
    const [show ,setShow]=useState(true)

    function Toggle(){
      setShow(prevShow=>!prevShow)
    }
    return(
      <main className='container'>
        <button onClick={Toggle}>
          Toggle WindoTracker
        </button>
        {show ? <WindowTracker/> : null  }
      </main>
    )
}

export default App
