import React from 'react';
import SideHome from '../components/SideHome';
import '../pagestyles/Blog.css';
import Articles from '../components/Articles';
import Scrolling from '../components/Scrolling';

const Blog = () => {
  return (
    <div className='blog'>
      <div className="blogSideCon">
        <SideHome/>
      </div>
      <div className="blogMainCon">
        <div className='director'><a href="/">home</a> / <p>blog</p></div>
        <div className="blogHeadingCon">
          <h1>Featured Articles and <span>Publications</span></h1>
          <p>
             Exploring real-world solutions through design 
             and development, transforming ideas into interactive,
             responsive, and user-friendly experiences that 
             bridge creativity and functionality.
          </p>
        </div>
        <Articles/>
        <Scrolling/>
      </div>
        
    </div>
  )
}

export default Blog
