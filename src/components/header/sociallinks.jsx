import React from 'react'
import { FaLinkedin, FaGithubSquare, FaBehanceSquare, FaWhatsappSquare, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'

const sociallinks = () => {
  return (
    <div className='sociallink'>
        <a href="https://github.com/kiranlal2"><FaGithubSquare/></a>
        <a href="https://www.behance.net/kiranlalJ"><FaBehanceSquare /></a>
        <a href="https://www.linkedin.com/in/kiran-lal/"><FaLinkedin /></a>
        <a href="https://www.facebook.com/kiranlal6dx/"><FaFacebookSquare /></a>
        <a href="https://api.whatsapp.com/send?phone=919790652026&text=Hi!%20Buddy%20Thanks%20for%20contacting%20Me,%20How%20do%20I%20help%20You."><FaWhatsappSquare /></a>
        <a href="https://www.instagram.com/kiranlal_2/"><FaInstagramSquare /></a>
        <a href="https://twitter.com/kiranlal2_"><FaTwitterSquare /></a>
    </div>
  )
}

export default sociallinks