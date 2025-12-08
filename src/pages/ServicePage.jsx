import React from 'react'
import { MdOutlineWebStories } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { GrOptimize, GrHostMaintenance } from "react-icons/gr";
import { PiBrowsersThin } from "react-icons/pi";
import { AiOutlineLayout } from "react-icons/ai";
import { MdAnimation } from "react-icons/md";
import { MdMobileFriendly } from "react-icons/md";
import SideHome from '../components/SideHome';
import '../pagestyles/ServicePage.css';
import ServiceProp from '../components/ServiceProp';
import AllSkills from '../components/AllSkills';
import Testimonial from '../components/Testimonial';
import StartUpProject from '../components/StartUpProject';
import Faq from '../components/Faq';
import Scrolling from '../components/Scrolling';
import PageImg from '../assets/images/bigImage.png';

const ServicePage = () => {
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
    <div className='servicepage'>
      <div className="servicepageSideCompoCon">
        <SideHome/>
      </div>
      <div className="servicepageWrapCon">
        <div className='director'><a href="/">home</a> / <p>service</p></div>
        <div className="ServicepageHeadCon">
          <div className="ServicePageHeadTextCon">
            <h1>Services I <span>Offered</span></h1>
            <p>Focusing on user needs to deliver exceptional
              <strong> <span>digital solutions </span></strong>
               that are visually appealing
              <strong><span> highly functional </span></strong>
                & tailored to enhance
              <strong><span> user experience. </span></strong> 
               
            </p>
          </div>
          <p className='SericePageNotify'>
            <span className='pluse'>
              <span></span>
              <span></span>
            </span> 
            Available for Work
          </p>
        </div>

        <div className="servicePageItemCon">
          <ServiceProp serviceList={serviceList} showAll={true}/>
        </div>

        <div className="servicePageImgCon">
          <div className="servicePageImgWrap">
            <img src={PageImg} alt="image" />
          </div>
        </div>

        <div className="servicePageSkillsCon">
          <AllSkills/>
        </div>

        <div className="servicePageTestifyCon">
          <Testimonial/>
        </div>

        <div className="servicePageStartupCon">
          <StartUpProject/>
        </div>

        <div className="servicePageFaqCon">
          <Faq/>
        </div>

        <div className="servicePageScrollinfCon">
          <Scrolling/>
        </div>


      </div>
    </div>
  )
}

export default ServicePage
