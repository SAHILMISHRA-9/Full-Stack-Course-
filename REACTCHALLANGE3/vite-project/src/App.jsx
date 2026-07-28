// import React from "react";

// export default function App(){
//     const [count, setCount] =React.useState(0)


//     // function add(){
//     //   setCount(count+1)
//     // }

//     /**
//  * Note: if you ever need the old value of state
//  * to help you determine the new value of state,
//  * you should pass a callback function to your
//  * state setter function instead of using
//  * state directly. This callback function will
//  * receive the old value of state as its parameter,
//  * which you can then use to determine your new
//  * value of state.
//  */

//     // Callback function method
//     // function add(){
//     //   setCount(function(prevCount){
//     //     return prevCount +1
//     //   })
//     // }
//     function add(){
//       setCount(prevCount => prevCount+1)
//     }

//     // function sub(){
//     //   setCount(count-1)
//     // }

//     function sub(){
//       setCount(prevCount => prevCount-1)
//     }

//     return(
//       <main className="container">
//         <h1>How many times will BOB say "states" in this section?</h1>
//         <div className="counter">
//           <button onClick={sub} className="minus">-</button>
//           <h2 className="count"> Ans: {count}</h2>
//           <button onClick={add} className="plus">+</button>
//         </div>
//       </main>
//     )
// }


// Ternary operator
// export default function App(){
//   const isout=true
//   const answer = isout ? "yes" : "No"

//   return(
//     <main>
//       <h1 className="ttile">Do I feel like going out?</h1>
//       <button className="value">{answer}</button>
//     </main>
//   )
// }

// export default function App(){
//   const isout=true

//   return(
//     <main>
//       <h1 className="ttile">Do I feel like going out?</h1>
//       <button className="value">Ans :{isout ? "yes" : "No"}</button>
//     </main>
//   )
// }




// Toggling state
// import React from "react"

// export default function App(){

//   const [isout,setisout] = React.useState(false)

//   function change(){
//     setisout(prev=>!prev)
//   }
//   return(
//     <main>
//       <h1 className="title">Do I feel like going out?</h1>
//       <button 
//         onClick={change} 
//         className="value">{isout? "yes": "no"}
//       </button>
//     </main>
//   )
  
//   // return(
//   //   <main>
//   //     <h1 className="title">Do I feel like going out?</h1>
//   //     <button onClick={()=> {setisout(!isout)}} className="value">{isout? "yes": "no"}</button>
//   //   </main>
//   // )
// }



