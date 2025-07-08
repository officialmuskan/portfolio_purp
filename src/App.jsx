import { useState } from 'react'

import './App.css'
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import Project from './components/Project'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Timeline from './components/Timeline'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState('dark')
  const toggleStyle = (cls)=>{
    if(mode === 'dark')
    {
      document.body.style.backgroundColor = "#f5f5f5"
      setMode("light")
    }
    else{
      document.body.style.backgroundColor = "#140E1C"
      setMode('dark')
    }
  }

  return (
    <>
    <ScrollToHashElement behavior="smooth" block='start' />
      <Router>
     <Navbar mode={mode} toggleStyle={toggleStyle}/>
     <Home mode={mode} toggleStyle={toggleStyle}/>
     <Skills mode={mode} toggleStyle={toggleStyle}/> 
     <Project mode={mode} toggleStyle={toggleStyle}/>
     <Timeline mode={mode} toggleStyle={toggleStyle}/>
     <Footer mode={mode} toggleStyle={toggleStyle}/>

   </Router>
    </>
  )
}

export default App
