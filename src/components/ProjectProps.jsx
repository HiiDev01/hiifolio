import { useState } from 'react';
import '../comp_style/HomeProject.css';
import { FaArrowRight } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Project = ({ projects, limit = null, showHeader = true }) => {
  const [overlayImage, setOverlayImage] = useState(null);


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
          <Link to="/Portfolio" className='allProjectLnk'>
            All Projects
            <FaArrowRight />
          </Link>
        </div>
      )}
      <div className="projectListWrapper">
        {displayedProjects.map((projectItem) => (
          <div key={projectItem.id} className='projectItemCon'>
            <img 
              src={projectItem.images} 
              alt={projectItem.name} 
              className='projectImg' 
            />
            <button 
              onClick={() => openOverlay(projectItem.images[0])} 
              className='projectImgZoom'
            >
              <FiPlus className='zoomicon' />
            </button>
            <Link 
              to={projectItem.websiteLink} 
              className='projectHeadingType'
              target="_blank"
              rel="noopener noreferrer"
            >
              {projectItem.name}
            </Link>
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
