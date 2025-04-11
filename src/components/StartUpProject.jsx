import React, { useEffect, useState } from 'react';
import '../comp_style/StartUpProject.css';
import { SlBadge } from "react-icons/sl";
import { LuArrowUpRight } from "react-icons/lu";
import supabase from '../config/SupabaseClient';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';

const StartUpProject = () => {
  const [startUp, setStartUp] = useState([])
  const [fetcError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const fetchData = async ()=>{
      setTimeout(async ()=>{
        const {data, error} = await supabase
        .from('work_timeline')
        .select()
  
        if(error){
          console.log(error)
          setFetchError('error fetching start up')
          setStartUp(null)
          setIsLoading(true)
        }
        if(data){
          setStartUp(data)
          console.log('data startup data fetch successfully')
          setFetchError(null)
          setIsLoading(false)
        }
  
      }, 1000)  
    }
    fetchData()

  },[])
  


  return (
    <div className='startupproject'>
      <h1>StartUp & Collaboration Projects</h1>
      <div className="startupcon">
       {setFetchError &&(<p>{fetcError}</p>)}
        <ul>
         {isLoading ? (
            <div>
              <Skeleton className='custom-skele'/>
            </div>
         ):(
          startUp.map((list)=>(
            <li key={list.id}>
              <div className="startupItemDetCon">
                <div className="sta_up_Imgcon">
                  <img src={list.image} alt={list.name} />
                </div>
                <div className="sta_up_headingCon">
                  <h4>{list.company}</h4>
                  <p>{list.date}</p>
                </div>
              </div>
  
              <p className='sta_up_type'>
                <SlBadge className='sta_up_icon'/> {list.badge}
              </p>
  
              <div className="sta_up_link_con">
                <Link to={list.link} target="_blank" className='sta_up_link'>{list.link}<LuArrowUpRight /></Link>
              </div>
            </li>
          ))
         )}
        </ul>
      </div>
    </div>
  )
}

export default StartUpProject
