import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import SideHome from '../components/SideHome';
import '../pagestyles/Contact.css';
import { TbArrowElbowRight } from "react-icons/tb";
import Faq from '../components/Faq';
import Scrolling from '../components/Scrolling';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const navigate = useNavigate()
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7e7zpgn', 'template_9vanqbo', form.current, {
        publicKey: 'BRzxAM97lBtTFdWtc',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('your message have been sent')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      navigate('/')
    }


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
          <form ref={form} onSubmit={sendEmail}>

            <div className="formNameCon">
              <div className="formName firstName">
                <label htmlFor="username">name</label>
                <input 
                  type="text" 
                  name="user_name" 
                  id="username"
                  placeholder='Enter your name'
                  required
                />
              </div>
              <div className="formName lastName">
                <label htmlFor="formEmail">email</label>
                <input 
                  type="email" 
                  name="user_email" 
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
                  name="subject" 
                  id="formSubject" 
                  placeholder='Subject'
                />
              </div>

              <div className="formSubItem formPhone">
                <label htmlFor="formPhone">phone</label>
                <input 
                  type="tel" 
                  name="phone" 
                  id="formPhone" 
                  placeholder='Enter phone (optional)'
                />
              </div>
            </div>
            <div className="formMessageCon">
              <label htmlFor="formMessage">Message</label>
              <textarea 
                name="message" 
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
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

        <Faq/>
        <Scrolling/>
      </div>
    </div>
  )
}

export default Contact
