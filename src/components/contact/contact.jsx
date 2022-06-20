import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { SiMessenger } from 'react-icons/si'
import { RiWhatsappFill } from 'react-icons/ri'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>CONTACT Me</h2>

      <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option" >
              <MdEmail className='contact__options__icon' />
              <h4>Email</h4>
              <h2>kiranlal6dx@gmail.com</h2>
              <a href="mailto:kiranlal6dx@gmail.com" target="_blank" >send a Text</a> 
            </article>

            <article className="contact__option" >
              <SiMessenger className='contact__options__icon' />
              <h4>Messenger</h4>
              <h2>Kiran lal</h2>
              <a href="https:/m.me/kiranlal6dx" target="_blank" >send a Text</a> 
            </article>

            <article className="contact__option" >
              <RiWhatsappFill className='contact__options__icon' />
              <h4>Email</h4>
              <h2>+919790652026</h2>
              <a href="https:/api.whatsapp.com/send?phone+919790652026" target="_blank" >send a Text</a> 
            </article>
          </div>
          {/* contact form */}
          <form action="">
            <input type="text" name='Your__name' placeholder='Your Full Name' required />
            <input type="email" name='Your__email' placeholder='Your @E-mail' required />
            <textarea name="Message" rows='7' placeholder='Your Message' required></textarea>
            <button type="submit" className='btn btn-primary'>Send Me</button>
          </form>
      </div>
    </section>
  )
}

export default contact