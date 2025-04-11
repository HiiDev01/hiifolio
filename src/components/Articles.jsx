import React, { useEffect, useState } from 'react';
import '../comp_style/Articles.css';
import { Link } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import supabase from '../config/SupabaseClient';



const Articles = () => {
  const [articles, setArticles]= useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=4&apiKey=${apiKey}`;
  useEffect(()=>{
    const fetchBlog = async ()=>{
      const {data, error} = await supabase
      .from('articles')
      .select('*')
      .order('created_at',{descending: false})


      if(error){
        console.log(error, 'error fetching blog')
      }
      if(data){
        console.log(data)
        setArticles(data)
        setIsLoading(false)
      }
    }

    fetchBlog()
  }, [])

  const shortenTitle = (title, limit = 60)=>{
    return title.length > limit ? title.slice(0, limit) + '...' : title
  }

  return (
   <div className='article'>
    {isLoading ? (
      <div>
        <Skeleton />
      </div>
    ):(
      <div className='articleCon'>
        {articles.map((blog, index)=>(
          <Link to={`/blog/${blog.id}`} key={index} className='articleLink'>
            <div className="blogItemWrap">
              <div className="blogImageWrap">
                <img src={blog.image} alt={blog.title} />
                <h4 className='articleOverlay'>{blog.author}</h4>
              </div>
              <h2>{shortenTitle(blog.title)}</h2>
            </div>
          </Link>
        ))}
      </div>
    )}
   </div>
  )
}

export default Articles
