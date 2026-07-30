import React from 'react'
import './App.css'
import PadsData from '../component/pad.js'
import Pad from '../component/Pad.jsx'
export default function App() {
  const [pads, setPads]=React.useState(PadsData)

  function toggle(id){
    // map over the pads array and if the current items has 
    // the same id as the one pass to this function flip 
    // its "on" value
    setPads(prevPads=> prevPads.map(item=> {
      return item.id===id ? {...item,on:!item.on} : item
    }))
    // now the lower button which turns off all the pads will work easily earlier
    // it was not working becuse the funciton was built individually in the PAd.jsx check 
    // the public/ss image for clearity

  }

  // function turnAllPadsOff(){
  //   setPads(prevPads=>prevPads.map(pad=>({
  //     ...pad,
  //     on: false
  //   })))
  // }
  const buttonElements=pads.map(pad=>(
    <Pad toggle={toggle} id={pad.id} on={pad.on} color={pad.color} key={pad.id} />
  ))

  return (
    <main>
      <div className='pad-container'>
        {buttonElements}
      </div>
      {/* <button className="all off" onClick={turnAllPadsOff}>Turn All Off</button> */}
    </main>
  )
}

