import React, { useState } from 'react';
import '../comp_style/Faq.css';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index)=>{
    if(activeFaq === index){
      return setActiveFaq(null);
    }
    setActiveFaq(index)
  }

  const faqList = [
    {
      question: "What technologies and tools do you specialize in?",
      answer: "I specialize in HTML, CSS, JavaScript, and modern frameworks like React.js. I also have experience with tools such as Git, Webpack, Tailwind CSS, Bootstrap, and API integrations to deliver responsive and dynamic web applications."
    },
    {
      question: "Can you make designs responsive for all devices?",
      answer: "Yes! I focus on creating responsive and user-friendly designs that adapt seamlessly across devices, including desktops, tablets, and smartphones, using CSS Media Queries, Flexbox, and Grid."
    },
    {
      question: "What type of projects have you worked on?",
      answer: "I have worked on a variety of projects, including portfolio websites, admin dashboards, e-commerce platforms, interactive components, and SaaS products. I aim to deliver clean, scalable, and maintainable code."
    },
    {
      question: "How can I get in touch with you for a project?",
      answer: "You can reach me through the contact form on my website, email me at olatimeleyinIsaac@gmail.com or connect with me on LinkedIn/GitHub. I’m always open to exciting new opportunities and collaborations!"
    }
  ];

  return (
    <div className='faq'>
      <h1>frequently asked question <span>(FAQ)</span></h1>
      {faqList.map((faqItem, index) =>(
        <div className='faqCon' key={index}>
          <div className="faqTitle" onClick={()=> toggleFaq(index)}>
            <h3>{faqItem.question}</h3>
            <span>
              {activeFaq === index ? 
                <FaMinus style={{
                  color: 'var(--primary)', 
                  backgroundColor: 'var(--accordionbg-color)',
                  padding: '5px',
                  fontSize: '1.5rem',
                  borderRadius: '3px'
                 }} /> : 
                <FaPlus 
                  style={{
                    color: 'var(--primary)', 
                    backgroundColor: 'var(--accordionbg-color)',
                    padding: '5px',
                    fontSize: '1.5rem',
                    borderRadius: '3px'
                  }}
                />
              }
            </span>
          </div>
          <div className={activeFaq === index ? 'faqContent show' : 'faqContent'}>
            <p>{faqItem.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )

  
}

export default Faq
