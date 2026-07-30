import React from 'react'
import './App.css'
import Body from '../component/Body'
import Header from '../component/Header'

export default function App() {
  const [userName,serUserName]=React.useState("BOB")
  return (
    <>
    <Header userName={userName}></Header>
    <Body userName={userName}></Body>
    </>
    
  )
}


