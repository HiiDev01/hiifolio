import React from 'react';
import '../pagestyles/About.css';
import SideHome from '../components/SideHome'
import AllSkills from '../components/AllSkills';
import Testimonial from '../components/Testimonial';
import StartUpProject from '../components/StartUpProject';
import ArticleSlider from '../components/ArticleSlider';
import Scrolling from '../components/Scrolling';

const About = () => {
  return (
    <div className='about'>
      <div className="AboutSideComponentCon">
        <SideHome/>
      </div>
      <div className="AboutWrapperCon">
        <div className="aboutHeadCon">
          <div className="AboutHeadTextCon">
            <h1>hi, I'm <span>Isaac Olatimeleyin👋</span></h1>
            <p>I'm a Passionate 
              <strong> <span>Front End Developer💻 </span></strong>
                Specializing in 
              <strong><span> JavaScript </span></strong>
                 and 
              <strong><span> React </span></strong> 
              Applications. With 4years+ of Experience.
            </p>
          </div>
          <p className='aboutNotify'>
            <span className='pluse'>
              <span></span>
              <span></span>
            </span> 
            Available for Work
          </p>
        </div>
        <div className="aboutNumbCon">
          <div className="aboutNumbItem">
            <h1>05+</h1>
            <p>year of Experience</p>
          </div>
          <div className="aboutNumbItem">
            <h1>10+</h1>
            <p>completed projects</p>
          </div>
          <div className="aboutNumbItem">
            <h1>04+</h1>
            <p>happy clients</p>
          </div>
        </div>

        <div className="AboutSkillsComponent">
          <AllSkills/>
        </div>

        <div className="AboutTestifyComponent">
          <Testimonial/>
        </div>

        <div className='AboutStartUpComponent'>
          <StartUpProject/>
        </div>

        <div className='AboutBlogComponent'>
          <ArticleSlider/>
        </div>

        <div className="AboutScrollingComponent">
          <Scrolling />
        </div>

      </div>
    </div>
  )
}

export default About
