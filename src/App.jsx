import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import './App.css'
import Intro from './pages/Intro'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>{
      <Route path='/' element={<Intro/>}/>
    }
    </Routes>
    </BrowserRouter>
  )
}

export default App
