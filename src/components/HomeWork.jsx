import React, { useEffect, useState, } from 'react';
import '../comp_style/HomeWork.css';
import supabase from '../config/SupabaseClient';

const HomeWork = () => {
  const  [experiences, setExperiences]= useState(null);
  const [fetcError, setFetchError] = useState(null);

  useEffect(()=>{
    const fetchData = async ()=>{
      const {data, error} = await supabase
      .from('work_timeline')
      .select()

      if(error){
        console.log(error)
        setFetchError('error fetching exp')
      }
      if(data){
        setExperiences(data)
        console.log('data exp data fetch successfully')
        setFetchError(null)
      }
    }
    fetchData()

  },[])
  


  return (
    <div className='homework'>
      <h1>Work Experience Timeline</h1>
      <div className="ExpScrollCon">
        <div className="ExpScrollWrap">
          {setFetchError &&(<p>{fetcError}</p>)}
           {experiences &&(
            <div className='scroll'>
              <ul>
                {experiences.map(exp=>(
                  <li className='exp_con' key={exp.id}>
                    <h3 className='exp_h3'>{exp.date}</h3>
  
                    <div className='exp_itemCon'>
                      <div className='expImgcon'>
                        <img src={exp.image} alt={exp.name} />
                      </div>
                      <div className='exp_itemtitlecon'>
                        <h4>{exp.company}</h4>
                        <p>{exp.type}</p>
                      </div>
                    </div>
  
                  </li>
                ))}
              </ul>
  
              <ul aria-hidden="true" className='experience-list'>
                {experiences.map((exp, index) => (
                  <li key={`dup-${index}`} className='exp_con'>
                    <h3 className='exp_h3'>{exp.date}</h3>
                    <div className='exp_itemCon'>
                      <div className='expImgcon'>
                        <img src={exp.image} alt={exp.name} />
                      </div>
                      <div className='exp_itemtitlecon'>
                        <h4>{exp.company}</h4>
                        <p>{exp.type}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
          </div>

          )}
        </div>
      </div>
    </div>
  )

}

export default HomeWork
