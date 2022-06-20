import React from 'react'
import './header.css'
import CTA from './CTA'
import Sociallinks from './sociallinks'
import Mypic from '../../assets/kiranlal_pink.png'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2>Hello, I'm</h2>
        <h1>Kiranlal J</h1>
        <h5 className='text__light'>WEB DEVELOPER || UI/UX || GREPHICS DESIGN || DIGITAL MARKETING</h5>
        <CTA />
        <Sociallinks />
        <div className="my_portrait">
          <img src={ Mypic } alt="My Pic" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header