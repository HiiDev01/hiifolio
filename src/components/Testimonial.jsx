import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";
import '../comp_style/Testimonial.css';

const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const testimony = [
    {
      id: 1, 
      name: 'isaac', 
      role: "web developer",
      link: 'google.com',
      content: 'Exceptional work! Isaac delivered a clean, responsive, and visually stunning & user friendly website that has significantly improved our online presence.  great job and Highly recommended!'
    },
    {
      id: 2, 
      name: 'isaac', 
      role: "web developer",
      link: 'google.com',
      content: 'Collaborating with Isaac during the internship was a rewarding experience. They consistently demonstrated strong teamwork, problem-solving abilities, and a proactive attitude.'
    },
    {
      id: 3, 
      name: 'isaac', 
      role: "web developer",
      link: 'google.com',
      content: 'Outstanding service and results! Isaac delivered a responsive, visually appealing website that has enhanced our client engagement. A true professional with exceptional skills'
    }
  ]
  return (
    <div className='testimonial'>
      <h1>Testimonial from Client & Team</h1>
      <div className="testimonialSliderCon">
        <Slider {...settings}>
          {testimony.map((testimonial)=>(
            <div key={testimonial.id} className='testify_item'>
              <div className="TestifyHead">
               <p className='rating'>
                <span><FaStar /></span>
                <span><FaStar /></span>
                <span><FaStar /></span>
                <span><FaStar /></span>
                <span><FaStar /></span>
               </p>
               <a href="#">{testimonial.link} <LuArrowUpRight /></a>
              </div>
              <p className='testifyContent'>{testimonial.content}</p>
              <h4 className='Testifier'>
                <span className='TestifierName'>{testimonial.name}</span>
                
                <span className='TestifierRole'>-- {testimonial.role}</span>
              </h4>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Testimonial
