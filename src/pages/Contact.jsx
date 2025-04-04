import React from 'react';
import SideHome from '../components/SideHome';
import '../pagestyles/Contact.css';
import { TbArrowElbowRight } from "react-icons/tb";
import Faq from '../components/Faq';
import Scrolling from '../components/Scrolling';

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contactSideCon">
        <SideHome/>
      </div>
      <div className="contact_main">
        <div className="contact_heading">
          <h1>Let’s👋 create together🎯</h1>
          <p>Whether you have a project in mind or 
            just want to say hello, I’d love to hear
            from you. Let’s connect and explore how
            we can collaborate!
          </p>
        </div>
        <div className="formCon">
          <form action="">

            <div className="formNameCon">
              <div className="formName firstName">
                <label htmlFor="formName">name</label>
                <input 
                  type="text" 
                  name="formName" 
                  id="formName"
                  placeholder='Enter your name'
                  required
                />
              </div>
              <div className="formName lastName">
                <label htmlFor="formEmail">email</label>
                <input 
                  type="email" 
                  name="formEmail" 
                  id="formEmail" 
                  placeholder='Enter your email'
                  required
                />
              </div>
            </div>

            <div className="formSubjectCon">
              <div className="formSubItem formSubject">
                <label htmlFor="formSubject">subject</label>
                <input 
                  type="text" 
                  name="formSubject" 
                  id="formSubject" 
                  placeholder='Subject'
                />
              </div>

              <div className="formSubItem formPhone">
                <label htmlFor="formPhone">phone</label>
                <input 
                  type="tel" 
                  name="formPhone" 
                  id="formPhone" 
                  placeholder='Enter phone (optional)'
                />
              </div>
            </div>
            <div className="formMessageCon">
              <label htmlFor="formMessage">Message</label>
              <textarea 
                name="formMessage" 
                id="formMessage"
                rows={5}
                placeholder='Feel free to leave me a detailed message.'
              >

              </textarea>
            </div>
            <div className="formSubmit">
              <button type="submit">
                send message 
                <TbArrowElbowRight className='formIcon' />
              </button>
            </div>
          </form>
        </div>

        <div className="mapCon">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.63648020243!2d3.1191438072276583!3d6.548028243711569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1734540512414!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{border: '0px'}} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <Faq/>
        <Scrolling/>
      </div>
    </div>
  )
}

export default Contact
