import React, { useEffect, useState } from 'react';
import '../pagestyles/Project.css';
import SideHome from '../components/SideHome';
import { LuArrowUpRight } from "react-icons/lu";
import supabase from '../config/SupabaseClient';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [fetcError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const fetchData = async ()=>{
      setTimeout(async()=>{
        const {data, error} = await supabase
        .from('projects')
        .select()
  
        if(error){
          console.log(error)
          setFetchError('error fetching projects')
          setAllProjects(null)
          setIsLoading(true)
        }
        
        if(data){
          console.log('projects fetch success')
          setFetchError(null)
          setAllProjects(data)
          setIsLoading(false)
        }
      }, 1000)
    }

    fetchData()
  },[])
  

  
  return (
    <div className='projects'>
      <div className="projectSideCon">
        <SideHome/>
      </div>

      <div className="projectsMainContainer">
        <div className="projectsHeadingCon">
          <h1>My Projects & <span>Case Studies</span></h1>
          <p>
             Exploring real-world solutions through design 
             and development, transforming ideas into interactive,
             responsive, and user-friendly experiences that 
             bridge creativity and functionality.
          </p>
        </div>
        <div className="projectsListCon">  
          {setFetchError &&(<p>{fetcError}</p>)}
          {isLoading ? (
            <div>
              <Skeleton className='custom-skele-title'/>
              <Skeleton count={0} className='custom-skele-descrip' />
            </div>
          ): (
            allProjects.map((project)=>(
              <div className="projectsItem" key={project.id}>
                <div className="projectsImageContainers">
                  <img src={project.images} alt={project.name} />
                </div>
                <div className="projectsDetail">
                  <div className="projectLinkTitle">
                    <Link to={`/Portfolio/${project.id}`}><h4>{project.name}</h4></Link>
                    <p>{project.type}</p>
                  </div>
                  <Link to={ `/Portfolio/${project.id}`} className='siteLink'>visit site <LuArrowUpRight /></Link>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  )
}


export default Projects



 
