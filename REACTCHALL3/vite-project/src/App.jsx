// starting from above now


import React from "react";
import avatar from "../public/user.png"

export default function App(){
  const [contact, setContact]=React.useState({
    firstName: "Sahil",
    lastName: "Mishra",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  });

  const starIcon = contact.isFavorite
    ? "/star-filled.png"
    : "/star-empty.png"

  function toggleFavorite(){
    setContact(prevContact=>({
      ...prevContact,
      isFavorite:!prevContact.isFavorite,
    }))
  }
  return(
    <main>
      <article className="card">
        <img 
          src={avatar} 
          className="User"
          alt="User profile picture of Sahil"
        />
        <img
          src={starIcon}
          className="favorite"
          alt={contact.isFavorite? "Empty star icon" : "Filled star icon"}
          onClick={toggleFavorite}
          aria-label={contact.isFavorite? "Remove from favorite" : "Add to Favorite"}
        />

        <h1>{contact.firstName} {contact.lastName}</h1>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
      </article>
    </main>
  )

}



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








// import React from "react";

// export default function App(){
//   const [myFav, setMyFav]=React.useState([])

//   const allFav = [
//   "🐋🌺",
//   "🐱",
//   "💡🤍",
//   "🔥🌿",
//   "🏀🎁",
//   "🦉",
//   "🍎🍊",
//   "📔🔔",
//   "🥾🔔",
//   "🥩🍳"];

//   const thingElements=myFav.map(thing => <p key={thing}>{thing}</p>)

//   function addFav(){
//     setMyFav(
//       prevFav=>[
//         ...prevFav,
//         allFav[prevFav.length]
//       ]
//     )
//   }
//   return (
//     <main>
//       <button onClick={addFav}>Add</button>
//       <section>{thingElements}</section>
//     </main>
//   )
// }
