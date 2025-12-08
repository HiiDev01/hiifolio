import React from 'react'
import { useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useParams } from 'react-router-dom';
import '../pagestyles/SingleBlog.css'
import supabase from '../config/SupabaseClient';



const SignleBlog = () => {
  const [singleBlog, setSingleBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  
  useEffect(()=>{
    const fetchSingleArticle = async () =>{
      const {data, error} = await supabase
      .from('articles')
      .select()
      .eq('id', id)
      .single()
            

      if (error) {
        console.error('Error fetching blog:', error);
        setIsLoading(false);
        return;
      }

      setSingleBlog(data);
      setIsLoading(false);
    }
    fetchSingleArticle();
  },[id])


  return (
    <div className='singleBlog'>
      {isLoading ? (
        <div>
          <Skeleton className='article-skele' />
        </div>
      ): singleBlog ? (
          <div className='wrap'>
            <div className='director'><a href="/BLOG">back to blog/</a> <p></p></div>
            <div className='img-wrap'>
              <img src={singleBlog.image} alt={singleBlog.title} />
            </div>
            <p className='bd'>{new Date(singleBlog.created_at).toLocaleDateString()}</p>
            <h2 className='bh'>{singleBlog.title}</h2>
            <p className='bd'>{singleBlog.description}</p>
            {singleBlog.content.sections.map((det, idx)=>(
              <div key={idx}>
                <h3 className='dh'>{det.heading}</h3>
                <p className='bA'>{det.content}</p>
              </div>
            ))}
          </div>  
      ):(
        <p>Blog not found.</p>
      )}
    </div>
  )
}

export default SignleBlog
