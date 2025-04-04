import { useState } from 'react';
import '../comp_style/HomeProject.css';
import { FaArrowRight } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Project = ({ projects, limit = null, showHeader = true }) => {
  const [overlayImage, setOverlayImage] = useState(null);

  // Determine whether to slice the projects
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  const openOverlay = (image) => {
    setOverlayImage(image);
  };
  const closeOverlay = () => {
    setOverlayImage(null);
  };

  return (
    <div className='project'>
      {showHeader && (
        <div className="p_header">
          <h1>Recent Projects</h1>
          <a href="#" className='allProjectLnk'>
            All Projects
            <FaArrowRight />
          </a>
        </div>
      )}
      <div className="projectListWrapper">
        {displayedProjects.map((projectItem) => (
          <div key={projectItem.id} className='projectItemCon'>
            <img 
              src={projectItem.images[0]} 
              alt={projectItem.name} 
              className='projectImg' 
            />
            <button 
              onClick={() => openOverlay(projectItem.images[0])} 
              className='projectImgZoom'
            >
              <FiPlus className='zoomicon' />
            </button>
            <a 
              href={projectItem.websiteLink} 
              className='projectHeadingType'
            >
              {projectItem.heading}
            </a>
          </div>
        ))}
      </div>

      {overlayImage && (
        <div className='overlayCon'>
          <div className='overlayWrap'>
            <button onClick={closeOverlay} className='closeOverlaybtn'>
              <IoClose />
            </button>
            <img src={overlayImage} alt="Zoomed" className='overlayImage' />
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
