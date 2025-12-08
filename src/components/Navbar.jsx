import React, { useEffect, useState } from 'react';
import '../comp_style/Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { TbCards } from "react-icons/tb";
import { BsFilePerson } from "react-icons/bs";
import { BiLayer } from "react-icons/bi";
import { TbPencilHeart } from "react-icons/tb";
import { TbMessage } from "react-icons/tb";
import {TbArrowElbowRight } from "react-icons/tb";
import { TbSmartHome } from "react-icons/tb";
import { useRef } from 'react';
import ThemeToggle from './ThemeToggle';


const items = [
  {text: "home", path: "/", icon: <TbSmartHome />},
  {text: "about", path: "/ABOUT", icon: <BsFilePerson /> },
  {text: "service", path: "/SERVICES", icon: <BiLayer />},
  {text: "projects", path: "/Portfolio", icon: <TbCards />},
  {text: "blog", path: "/blog", icon: <TbPencilHeart />},
  {text: "contact", path: "/CONTACT", icon: <TbMessage />}
];

const Navbar = () => {
  const [hamburgerClick, setHamburgerClick] = useState(false);
  const navRef = useRef();

  useEffect(()=>{
    if(hamburgerClick){
      document.body.classList.add('no-scroll');
    }else{
      document.body.classList.remove('no-scroll');
    }
  }, [hamburgerClick])

  const hamburgerToggle = ()=>{
    setHamburgerClick(prev =>!prev);
  }

  const  clickOutsideHamburger = (e) =>{
    if(hamburgerClick && navRef.current && !navRef.current.contains(e.target)){
      setHamburgerClick(false)
    }
  }
  useEffect(()=>{
    document.addEventListener("mousedown", clickOutsideHamburger)
    return ()=> document.removeEventListener("mousedown", clickOutsideHamburger)
  },[hamburgerClick])
  return (
    <div className='navbar' ref={navRef}>
      <div className="logo_con">
        <div className="logo">
          <div className="logo_box"></div>
          <div className="logo_box"></div>
          <div className="logo_box"></div>
        </div>
        <h1 className='logo_name'>
          Hii<span>Folio</span>
        </h1>
      </div>
      <div className={`navlist_con ${hamburgerClick ? 'active': ''}`}>
        <div className="logo_con  side_bar_logo">
          <div className="logo">
            <div className="logo_box"></div>
            <div className="logo_box"></div>
            <div className="logo_box"></div>
          </div>
          <h1 className='logo_name'>
            Hii<span>Folio</span>
          </h1>
        </div>

        <ul className='nav_ul' >
          {items.map((list, index) => (
            <li key={index} className='nav_li'>
              <NavLink 
                to={list.path} 
                className={({isActive})=>
                isActive ? 'nav_link active' : 'nav_link'
                }
               onClick={()=> setHamburgerClick(false)}
              >
                <span className='nav_icon'>{list.icon}</span>
                {list.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="navlist_btnCon">
          <div className="toggle_component">
            <ThemeToggle setHamburgerClick={setHamburgerClick}/>
          </div>
          <Link 
             to="/CONTACT" 
             className='nav_contact_link'
             onClick={()=> setHamburgerClick(prev => !prev)}
          >
            let's talk 
            <span>
              <TbArrowElbowRight className='talk_icon' />
            </span>
            </Link>
        </div>
      </div>
      <div 
        className={`hamburger ${hamburgerClick ? 'active' : ''}`} 
        onClick={hamburgerToggle}>
        <div className="bars"></div>
        <div className="bars"></div>
        <div className="bars"></div>
      </div>
    </div>
  )
}

export default Navbar
