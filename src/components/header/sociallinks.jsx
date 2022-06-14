import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { FaDribbbleSquare } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'

const sociallinks = () => {
  return (
    <div className='sociallink'>
        <a href=""><FaLinkedin /></a>
        <a href=""><FaGithubSquare /></a>
        <a href=""><FaDribbbleSquare /></a>
        <a href=""><FaFacebookSquare /></a>
        <a href=""><FaInstagramSquare /></a>
        <a href=""><FaTwitterSquare /></a>
    </div>
  )
}

export default sociallinks