import React from 'react'
import './experience.css'
import Experience from '../../assets/experience2.svg'

const experience = () => {
  return (
    <section id='experience'>
      <h2>EXPERIENCE</h2>
      <div className="container experience__container">
        <div className="experience__content">
          <div className="experience__myschool">
            <h5>2 years</h5>
            <h2>Tech I.S.</h2>
            <h6>Banglore</h6>
          </div>
          <div className="experience__myschool">
            <h5>1 year</h5>
            <h2>Musubi Management</h2>
            <h6>Banglore</h6>
          </div>
          <div className="experience__myschool">
            <h5>6 month</h5>
            <h2>Annciya Estates</h2>
            <h6>Banglore</h6>
          </div>
          <div className="experience__myschool">
            <h5>1 year</h5>
            <h2>Renaissance Technologies</h2>
            <h6>Banglore</h6>
          </div>
        </div>
        <img src={ Experience } alt="" />
      </div>
    </section>
  )
}

export default experience