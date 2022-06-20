import React from 'react'
import './about.css'
import Mypic from '../../assets/kiranlal_pink.png'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>Me</h2>

      <div className="container about__container">
        <div className="about__me">
           <div className="about__img">
             <img src={ Mypic } alt="My Img" />
           </div>
        </div>
        <div className="about__content">
          <p>
          I enjoy my work and consider myself to be a creative thinker, designer, and problem solver. I enjoy making my designs unique yet user-friendly for products, services, and marketing initiatives for many different organizations, clients, brands, and design agencies. I have extensive experience as an innovative and creative Design Specialist working in the information technology and services industry. 
          <br /><br />
          My forte is UI/UX, Digital Marketing, Graphic Design, and Web Development with strong art and design sensibility to tell a unique story with each design. My educational background is Bachelor’s in Digital Communication and Media/Multimedia from ICAT Design & Media College.
          </p>
        </div>
      </div>
    </section>
  )
}

export default about 