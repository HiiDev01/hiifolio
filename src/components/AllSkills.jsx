import React from 'react'
import s1 from '../assets/images/t1.png'
import s2 from '../assets/images/t2.png'
import s3 from '../assets/images/t3.png'
import s4 from '../assets/images/t4.png'
import s5 from '../assets/images/t5.png'
import s6 from '../assets/images/t13.png'
import s7 from '../assets/images/t7.png'
import s8 from '../assets/images/t8.png'
import s9 from '../assets/images/t14.png'
import s10 from '../assets/images/t10.png'
import s11 from '../assets/images/t11.png'
import s12 from '../assets/images/t12.png'
import '../comp_style/AllSkills.css'

const AllSkills = () => {
  const allSkills =[
    {id: 1, skill: 'html', image: s1},
    {id: 2, skill: 'CSS', image: s2},
    {id: 3, skill: 'JavaScript', image: s3},
    {id: 4, skill: 'React', image: s4},
    {id: 12, skill: 'Node JS', image: s12},
    {id: 5, skill: 'Php', image: s5 },
    {id: 6, skill: 'Supabase', image: s6},
    {id: 7, skill: 'tailwind', image: s7},
    {id: 8, skill: 'git/github', image: s8},
    {id: 9, skill: 'MongoDB', image: s9},
    {id: 10, skill: 'F-motion', image: s10},
    {id: 11, skill: 'GSAP', image: s11},
  ]

  return (
    <div className='allskills'>
      <h1>all my Acquired skills✨</h1>
      <div className="allSkillsCon">
        {allSkills.map((skills)=>(
          <div className="skills" key={skills.id}>
            <div className='skills_img_con'>
              <img src={skills.image} alt={skills.skill} />
            </div>
            <h2>{skills.skill}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllSkills
