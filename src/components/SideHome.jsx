import React from 'react';
import { IoIosTv } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { RiDownload2Fill } from "react-icons/ri";
import { AiOutlineGithub, AiFillTikTok  } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import '../comp_style/SideHome.css';

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
        <a href="#" className='sideHomeLinks'>
          <span><GoMail className='sideHomeLinkIcon'/></span>
           Email Me
        </a>
        <a href="#" className='sideHomeLinks'>
          <span><RiDownload2Fill className='sideHomeLinkIcon'/></span>
          my Resume
        </a>
      </div>
      <div className="sideSocialContainer">
        <a href="#" className='socialLink'>
          <AiOutlineGithub className='social_icon'/>
        </a>
        <a href="#" className='socialLink'>
          <FaSquareXTwitter className='social_icon'/>
        </a>
        <a href="#" className='socialLink'>
          <FaLinkedin className='social_icon'/>
        </a>
        <a href="#" className='socialLink'>
          <AiFillTikTok className='social_icon'/>
        </a>
      </div>
    </div>
  )
}

export default SideHome
