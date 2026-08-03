import { useState,useEffect } from 'react'
import './App.css'

function App(props) {
  const [starWarsData,setStarWarsData]=useState(null)
  const [count, setCount]= useState(1)

  console.log("rendered")
  useEffect(function(){
    fetch("https://swapi.py4e.com/api/people/1")
    .then(res=>res.json())
    .then(data=> setStarWarsData(data))
  }, [count])

  return(
    <div>
      <pre>{JSON.stringify(starWarsData,null,2)}</pre>
    </div>
  )
}

export default App















// import { useState,useEffect } from 'react'
// import './App.css'

// function App(props) {
//   const [starWarsData,setStarWarsData]=useState(null)

  
//   // Get the data
//   // Save the data in state
//   // console.log("rendered")-infinte loop

//   // fetch("https://swapi.py4e.com/api/people/1")
//   //   .then(res=>res.json())
//   //   .then(data=> setstarWarsData(data))

//   // sideEffect - useEffect 
//   // (the Code inside it are run after the react has 
//   // mounted you element to the DOM or in simple terms painted 
//   // you elememt 
//   // from the code to your pade)

//   // useEffect(function(){
//   //   fetch("https://swapi.py4e.com/api/people/1")
//   //   .then(res=>res.json())
//   //   // .then(data=> setstarWarsData(data))- this again give us 
//   //   infinte loop because we did not use the second input
//   //    fot useSata which is dependcies 
//   // })

//   useEffect(function(){
//     fetch("https://swapi.py4e.com/api/people/1")
//     .then(res=>res.json())
//     .then(data=> setStarWarsData(data))
//   }, [])

//   return(
//     <div>
//       <pre>{JSON.stringify(starWarsData,null,2)}</pre>
//     </div>
//   )
// }

// export default App
