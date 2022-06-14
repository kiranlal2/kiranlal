import React from 'react'
import './portfolio.css'
import portoimg from '../../assets/port.jpg'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Works</h5>
      <h2>PORTFOLIO</h2>
      <div className="container portfolio__container">
        <article className='portfolio__items'>
          <div className="portfolio__item_img">
            <img src={ portoimg } alt="" />
          </div>
          <h3>Portfolio 1</h3>
          <div className="portfolio__item__cta">
            <a href="/" className='btn' target='_blank' >Github</a>
            <a href="/" className='btn btn-primary' target='_blank'>live Demo</a>
          </div>
        </article>
        <article className='portfolio__items'>
          <div className="portfolio__item_img">
            <img src={ portoimg } alt="" />
          </div>
          <h3>Portfolio 1</h3>
          <div className="portfolio__item__cta">
            <a href="/" className='btn' target='_blank' >Github</a>
            <a href="/" className='btn btn-primary' target='_blank'>live Demo</a>
          </div>
        </article>
        <article className='portfolio__items'>
          <div className="portfolio__item_img">
            <img src={ portoimg } alt="" />
          </div>
          <h3>Portfolio 1</h3>
          <div className="portfolio__item__cta">
            <a href="/" className='btn' target='_blank' >Github</a>
            <a href="/" className='btn btn-primary' target='_blank'>live Demo</a>
          </div>
        </article>
        <article className='portfolio__items'>
          <div className="portfolio__item_img">
            <img src={ portoimg } alt="" />
          </div>
          <h3>Portfolio 1</h3>
          <div className="portfolio__item__cta">
            <a href="/" className='btn' target='_blank' >Github</a>
            <a href="/" className='btn btn-primary' target='_blank'>live Demo</a>
          </div>
        </article>
        <article className='portfolio__items'>
          <div className="portfolio__item_img">
            <img src={ portoimg } alt="" />
          </div>
          <h3>Portfolio 1</h3>
          <div className="portfolio__item__cta">
            <a href="/" className='btn' target='_blank' >Github</a>
            <a href="/" className='btn btn-primary' target='_blank'>live Demo</a>
          </div>
        </article>
        <article className='portfolio__items'>
          <div className="portfolio__item_img">
            <img src={ portoimg } alt="" />
          </div>
          <h3>Portfolio 1</h3>
          <div className="portfolio__item__cta">
            <a href="/" className='btn' target='_blank' >Github</a>
            <a href="/" className='btn btn-primary' target='_blank'>live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio