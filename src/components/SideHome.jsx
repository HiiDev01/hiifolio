import React from 'react';
import { IoIosTv } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { RiDownload2Fill } from "react-icons/ri";
import { AiOutlineGithub, AiFillTikTok  } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import '../comp_style/SideHome.css';
import { Link } from 'react-router-dom';

const SideHome = () => {
  return (
    <div className='sidehome'>
      <div className="sideImageContainer"></div>
      <div className="sideHomeTextContainer">
        <h1 className='name'>Olatimeleyin Isaac <span>👋</span></h1>
        <p className='intro_paragraph'>
          I'm a Passionate <strong> <span className='para_span'>Front End Developer💻 </span></strong>
           Specializing in 
          <strong> JavaScript </strong>
           and 
          <strong> React </strong>  
          Applications. With <strong>4years<span>	
          &#43;</span></strong>  Experience.
        </p>
      </div>
      <div className="sideHomeLinksContainer">
        <Link 
          to="mailto:olatimeleyinisaac@example.com" 
          target='_blank'
          className='sideHomeLinks'>
          <span><GoMail className='sideHomeLinkIcon'/></span>
           Email Me
        </Link>
        <a href="#" className='sideHomeLinks'>
          <span><RiDownload2Fill className='sideHomeLinkIcon'/></span>
          my Resume
        </a>
      </div>
      <div className="sideSocialContainer">
        <Link 
          to="https://github.com/HiiDev01"
          className='socialLink'
          target='_blank'
        >
          <AiOutlineGithub className='social_icon'/>
        </Link>
        <Link 
          to="https://x.com/hiidev01?s=09" 
          target='_blank' 
          className='socialLink'
        >
          <FaSquareXTwitter className='social_icon'/>
        </Link>
        <Link 
          to="https://www.linkedin.com/in/olatimehin-isaac-b23427260?"
          target='_blank' 
          className='socialLink'>
          <FaLinkedin className='social_icon'/>
        </Link>
        <Link 
          to="https://www.tiktok.com/@hii.dev?_t=ZS-8vPy6wEkALQ&_r=1" 
          target='_blank' 
          className='socialLink'
        >
          <AiFillTikTok className='social_icon'/>
        </Link>
      </div>
    </div>
  )
}

export default SideHome
