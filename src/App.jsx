import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
      document.body.style.backgroundColor = "#E0E0E1"
      setMode("light")
    }
    else{
      document.body.style.backgroundColor = "#252746"
      setMode('dark')
    }
  }

  return (
    <>
    <ScrollToHashElement behavior="smooth" block='start' />
      <Router>
     <Navbar mode={mode} toggleStyle={toggleStyle}/>
     <Home mode={mode}/>
     <Skills mode={mode}/> 
     <Project mode={mode}/>
     <Timeline mode={mode}/>
     <Footer mode={mode}/>

   </Router>
    </>
  )
}

export default App
