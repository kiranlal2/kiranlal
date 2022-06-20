import React from 'react'
import './skills.css'
import Imaginative from '../../assets/skills.svg'
import Html5 from '../../assets/web_html5.svg'
import Css3 from '../../assets/web_css3.svg'
import Js from '../../assets/web_js.svg'
import Reactlogo from '../../assets/web_react.svg'
import Php from '../../assets/web_php.svg'
import Wordpress from '../../assets/wordpress.svg'
import Sketch from '../../assets/sketch.svg'
import Xd from '../../assets/adobe_xd.svg'
import Figma from '../../assets/figma.svg'
import Ps from '../../assets/adobe_photoshop.svg'
import Il from '../../assets/adobe_illustrator.svg'
import An from '../../assets/adobe_animate.svg'
import Pr from '../../assets/adobe_premier_pro.svg'
import Ae from '../../assets/adobe_after_aftereffects.svg'

const skills = () => {
  return (
    <section id='skills'>
      <h2>Skills</h2>
      <div className="container skills__container">
        <img src={ Imaginative } alt="Imaginative" className='imaginative'/>
        <div className="skills__content">
          <article className="skills__mine">
            <h2>Web Development</h2>
            <div className="skills__some">
              <img src={ Html5 } alt="html5" />
              <img src={ Css3 } alt="css3" />
              <img src={ Js } alt="js" />
              <img src={ Reactlogo } alt="react" />
              <img src={ Php } alt="php" />
              <img src={ Wordpress } alt="wordpress" />
            </div>
          </article>
          <article className="skills__mine">
            <h2>UI/UX</h2>
            <div className="skills__some">
              <img src={ Sketch } alt="Sketch" />
              <img src={ Xd } alt="Xd" />
              <img src={ Figma } alt="Figma" />
            </div>
          </article>
          <article className="skills__mine">
            <h2>Graphics Design</h2>
            <div className="skills__some">
              <img src={ Ps } alt="photoshop" />
              <img src={ Il } alt="illustrator" />
              <img src={ An } alt="animate" />
              <img src={ Pr } alt="premier pro" />
              <img src={ Ae } alt="after aftereffects" />
            </div>
          </article>
          <article className="skills__mine">
            <h2>Digital Marketing</h2>
            <ul className="skills__some skills__some2">
                <li>Social media marketing</li>
                <li>Analytics tools</li>
                <li>Email marketing tools</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default skills