import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SideHome from '../components/SideHome'
import supabase from '../config/SupabaseClient'
import { useNavigate } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';
import { LuArrowUpRight } from "react-icons/lu";
import { BiLinkExternal } from "react-icons/bi";
import 'react-loading-skeleton/dist/skeleton.css';
import '../pagestyles/SingleProject.css'

const SingleProject = () => {
  const [project, setProject] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    const fetchSingle = async () =>{
     setTimeout(async ()=>{
      const {data, error} = await supabase
      .from("projects")
      .select('*')
      .eq('id', id)
      .single();

      if(error){
        setFetchError('error fetching single project')
        console.log(error, 'error fetching single data');
        setProject(null)
        setIsLoading(true)
        navigate('/')
      }
      if(data){
        console.log('single project fetch successfully')
        setProject(data)
        setFetchError(null)
        setIsLoading(false)
      }
     }, 1000)
    }

    fetchSingle()

  },[id])

  
  return (
    <div>
      <div className="singleWrapper">

        <div className="singleMain">
          {setFetchError && <p>{fetchError}</p>}
          {isLoading ? (
            <div>
              <Skeleton className='custom-skele-head'/>
              <Skeleton count={0} className='custom-skele-body'/>
            </div>
          ):(
              project && (
                <div key={project.id}>
                  <h2 className='title'>{project.name}</h2>
                  <p className='para'>{project.heading}</p>
                  <div className="linkCon">
                    <a href={project.link} className='visit-lk'><BiLinkExternal /> visit the website</a>
                  </div>
                  <div className="imgCon">
                    <img src={project.images} alt={project.image}/>
                  </div>
                  <div className="detCon">
                    <h2 className='abt-title'>About this project</h2>
                    <p className='abt-para'>{project.about}</p>
                    <h2 className='abt-subtitle'>Technical Sheet</h2>
                    <p className='abt-subpara'>code technologies used while working on this project</p>
                    <ul className='tech-ul'>
                      {project.info?.technologies?.map((tech, idx) => (
                        <li key={idx}>
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <h2 className='res'>Resources</h2>
                    <p className='res-para'>this project is live on <span><Link to={project.link}>{project.link}<LuArrowUpRight /></Link> </span></p>
                 </div>
                </div>
              )
            )}

        </div>
      </div>
    </div>
  )
}

export default SingleProject
