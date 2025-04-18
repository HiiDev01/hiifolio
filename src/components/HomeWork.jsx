import React, { useEffect, useState } from 'react';
import '../comp_style/HomeWork.css';
import supabase from '../config/SupabaseClient';
import Skeleton from 'react-loading-skeleton'; // Import Skeleton
import 'react-loading-skeleton/dist/skeleton.css'; // Import skeleton CSS

const HomeWork = () => {
  const [experiences, setExperiences] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching data
      const { data, error } = await supabase
        .from('work_timeline')
        .select();

      if (error) {
        console.log(error);
        setFetchError('Error fetching experience');
        setLoading(false); // Set loading to false when error occurs
      } else if (data) {
        setExperiences(data);
        console.log('Experience data fetched successfully');
        setFetchError(null);
        setLoading(false); // Set loading to false when data is fetched
      }
    };

    fetchData();
  }, []);

  return (
    <div className='homework'>
      <h1>Work Experience Timeline</h1>
      <div className="ExpScrollCon">
        <div className="ExpScrollWrap">
          {fetchError && <p>{fetchError}</p>}

          {loading ? (
            <div>
              <Skeleton height={40} count={3} className='custom-skele'/>
              <Skeleton height={100} count={5}/> 
            </div>
          ) : (
            experiences && (
              <div className='scroll'>
                <ul>
                  {experiences.map(exp => (
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

                {/* Second duplicate UL */}
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
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeWork;
