import React from 'react'
import CV from '../../assets/kiranlal_cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a className='btn' href={ CV } download>Download CV</a>
        <a className='btn btn_primary' href="#contact">Let's Talk</a>
    </div>
  )
}

export default CTA