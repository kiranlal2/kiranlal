import React from 'react'
import './about.css'
import Mypic from '../../assets/kiranlal_porto.png'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>ABOUT</h2>

      <div className="container about__container">
        <div className="about__me">
           <div className="about__img">
             <img src={ Mypic } alt="My Img" />
           </div>
        </div>
        <div className="about__content">
          <p>
            Accomplished Creative Thinker, Designer, and Problem Solver. I have designed user experiences for products, 
            services, and marketing initiatives for many different organizations/ clients/ brands, design agencies.
            Experienced Design Specialist with a demonstrated history of working in the information technology and services 
            industry. Skilled in Graphic Design and Web Developer. Strong arts and design professional with a Bachelor's degree 
            focused in Digital Communication and Media/Multimedia from ICAT Design & Media College.
          </p>
        </div>
      </div>
    </section>
  )
}

export default about 