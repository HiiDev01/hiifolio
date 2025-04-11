import { useEffect, useState } from 'react';
import ProjectProps from './ProjectProps';

const Home = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log("Error", err.message));
  }, [])

  return <ProjectProps projects={projects} limit={2} />;
};

export default Home;
