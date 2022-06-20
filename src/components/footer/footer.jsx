import React from 'react'
import './footer.css'
import { FaGithubSquare, FaLinkedin, FaFacebookSquare, FaWhatsappSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'

const footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>Kiranlal J</a>

      <ul className='permalinks' >
        <li><a href="#">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#education">EDUCATION</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>

      <div className="footer__social">
        <a href="https://github.com/kiranlal2"><FaGithubSquare/></a>
        <a href="https://www.linkedin.com/in/kiran-lal/"><FaLinkedin /></a>
        <a href="https://www.facebook.com/kiranlal6dx/"><FaFacebookSquare /></a>
        <a href="https://api.whatsapp.com/send?phone=919790652026&text=Hi!%20Buddy%20Thanks%20for%20contacting%20Me,%20How%20do%20I%20help%20You."><FaWhatsappSquare /></a>
        <a href="https://www.instagram.com/kiranlal_2/"><FaInstagramSquare /></a>
        <a href="https://twitter.com/kiranlal2_"><FaTwitterSquare /></a>
      </div>
      <hr />
      <div className="footer__copyright"><small>&copy;Kiran lal J. All Rights Reserved.</small></div>
    </footer>
  )
}

export default footer