import React from 'react'
import '../comp_style/Skills.css';
import t1 from '../assets/images/t1.png'
import t2 from '../assets/images/t2.png'
import t3 from '../assets/images/t3.png'
import t4 from '../assets/images/t4.png'
import t5 from '../assets/images/t7.png'
import t6 from '../assets/images/t12.png'
import { FaArrowRight} from "react-icons/fa";
import { Link } from 'react-router-dom';


const Skills = () => {

  const techSkills =[
    {id: 1,stack: 'html5',imgUrl: t1},
    {id: 2,stack: 'CSS',imgUrl: t2},
    {id: 3,stack: 'JavaScript',imgUrl: t3},
    {id: 4,stack: 'React',imgUrl: t4},
    {id: 5,stack: 'Tailwind CSS',imgUrl: t5 },
    {id: 6,stack: 'Node Js',imgUrl: t6}
  ]

  return (
    <div className='skills'>
      <h1>My Tech Stack <span><Link to="/ABOUT">all skills <FaArrowRight /></Link></span></h1>
      <div className="skillsCon">
        {techSkills.slice(0, 6).map((tech)=>(
          <div key={tech.id} className='skills_item'>
            <div className='skills_img_con'>
              <img src={tech.imgUrl} alt={tech.stack} />
            </div>
            <h2>{tech.stack}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
