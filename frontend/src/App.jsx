import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import View from './Components/View'
import Add from './Components/Add'

function App() {
  const [count, setCount] = useState(0)
  //These are routes

  return (
    <>
    <h1>Welcome to React MovieApp</h1>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<View/>} ></Route>
      <Route path='/add' element={<Add person={{"name":"","Category":"","Moviedir":"","year":"" }}/>} ></Route>
      </Routes>
    </>
  )
}

export default App
