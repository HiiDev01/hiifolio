import { useEffect, useState } from 'react';
import ProjectProps from './ProjectProps';
import supabase from '../config/SupabaseClient';

const Home = () => {
  const [projects, setProjects] = useState([]);

  const handleFetchProject = async() =>{
    try {
      const {data, error} = await supabase
      .from("projects")
      .select("*")
      .order("name", {ascending: false})

      if(error){
        throw new Error
      }
      console.log(data)
      setProjects(data)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(()=>{
    handleFetchProject()
  }, [])
  
/*  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log("Error", err.message));
  }, [])*/

  return <ProjectProps projects={projects} limit={2} />;
};

export default Home;
