import React from 'react';
import SideHome from '../components/SideHome';
import HomeWork from '../components/HomeWork';
import '../pagestyles/Home.css';
import Skills from '../components/Skills';
import HomeProject from '../components/HomeProject';
import Service from '../components/Service';

const Home = () => {
  return (
    <div className='home'>
      <div className="HomeWrapper">
        <div className="home1">
          <SideHome/>
        </div>
        <div className="home2">
          <div className="home2Container">
  
            <div className="homeWrap hm_item">
             <HomeWork/>  
            </div>
  
            <div className="projectWrap hm_item">
              <HomeProject/>
            </div>
  
            <div className="skillWrap hm_item">
              <Skills/>
            </div>
  
          </div>
  
        </div>
      </div>
      <Service/>
    </div>
  )
}

export default Home
