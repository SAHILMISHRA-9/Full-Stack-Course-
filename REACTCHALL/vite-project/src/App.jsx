// // If any static assest impport here because in simba they have not

// import { Joke } from "../components/Joke"
// export function App() {
//   return (
//     <main>
//       <Joke 
//         // setup="Why don't skeletons fight each other?"
//         punchline="Because they don't have the guts."
//         upvotes={10}
//         ispun={true}
//         comments={[
//           {author: "",text:"",title:""},
//           {author: "",text:"",title:""},
//           {author: "",text:"",title:""}
//         ]}
//       ></Joke>
//       <Joke 
//         setup="Why did the programmer quit his job?"
//         punchline="Because he didn't get arrays."
//         ispun={true}
//       ></Joke>
//       <Joke 
//         setup="Why do Java developers wear glasses?"
//         punchline="Because they don't C#."
//         ispun={true}
//       ></Joke>
//     </main>
//   )
// }

// If any static assest impport here because in simba they have not

import { Joke } from "../components/Joke"
import JokesData from "../components/JokesData"

export function App() {
  const jokeElement=JokesData.map((joke)=>{
    return <Joke setup={joke.setup} punchline={joke.punchline}/>
  })
  return (
    <main>
      {jokeElement}
    </main>
  )
}

