import React from 'react'
import './education.css'

const education = () => {
  return (
    <section id='education'>
      <h2>EDUCATION</h2>
      <div className="container education__container">
        <div className="education__content">
          <div className="education__myschool">
            <h5>School</h5>
            <h2>St.Lawrence Higher Secondary School</h2>
          </div>
          <div className="education__myschool">
            <h5>College</h5>
            <h2>ICAT Design & Media College</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default education