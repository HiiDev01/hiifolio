import React from 'react'
import { MdOutlineWebStories } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { GrOptimize, GrHostMaintenance } from "react-icons/gr";
import { PiBrowsersThin } from "react-icons/pi";
import { AiOutlineLayout } from "react-icons/ai";
import { MdAnimation } from "react-icons/md";
import { MdMobileFriendly } from "react-icons/md";
import { FaArrowRight} from "react-icons/fa";
import { TbArrowElbowRight } from "react-icons/tb";
import ServiceProp from './ServiceProp';
import '../comp_style/Service.css'
import { Link } from 'react-router-dom';


const Service = () => {
  const serviceList = [
    {id: 1, name: "website dev", icon: <CgWebsite />},
    {id: 2, name: "webapp dev", icon: <MdOutlineWebStories />},
    {id: 3, name: "Web design", icon: <AiOutlineLayout />},
    {id: 4, name: "SE0", icon: <GrOptimize />},
    {id: 5, name: "interactive", icon: <MdAnimation />},
    {id: 6, name: "compatibility", icon: <PiBrowsersThin />},
    {id: 7, name: "Maintenance", icon: <GrHostMaintenance />},
    {id: 8, name: "PWA", icon: <MdMobileFriendly />}
  ]
  return (
    <div className='service'>
      <div className="service_con_one">
        <div className="ser_heading">
          <h1>service i Offered</h1>
          <Link to="/SERVICES">see all service <FaArrowRight /></Link>
        </div>
        <ServiceProp serviceList={serviceList} showAll={false}/>
      </div>

      <div className="service_con_two">
        <div className="serviceScrollingCon">
          <ul>
            <li>
              <span className='sp2'>💻</span>
              <span className='sp1'>open to work</span>
            </li>

            <li>
              <span className='sp2'>🎨</span>
              <span className='sp1'>Code. Create. Inspire.</span>
            </li>

            <li>
              <span className='sp2'>👋</span>
              <span className='sp1'>Let’s Build Something Amazing Together!</span>
            </li>
          </ul>
        </div>
        <h2 className='letsTalk'>Let's👋 <br /> work together</h2>
        <Link to="/CONTACT"  className='letsTalkLink'>let's talk <TbArrowElbowRight /></Link>
      </div>
    </div>
  )
}

export default Service
