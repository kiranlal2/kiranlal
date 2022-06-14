import React from 'react'
import './App.css'
import Header from './components/header/header'
import Navbar from './components/navbar/Nav'
import About from './components/about/about'
import Education from './components/education/education'
import Skills from './components/skills/skills'
import Experience from './components/experience/experience'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

function App() {
  return ( 
    <div className='app'>
      <Header />
      <Navbar />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div> 
   );
}

export default App;