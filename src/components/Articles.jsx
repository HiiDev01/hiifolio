import React, { useEffect, useState } from 'react';
import '../comp_style/Articles.css';
import { Link } from 'react-router-dom';


const Articles = () => {
  const [articles, setArticles]= useState([]);


  useEffect(()=>{
    fetch('/data/blog.json')
    .then((res)=> res.json())
    .then((data)=> setArticles(data));
  },[]) 
  return (
    <div className='article'>
      <div className="articleCon">
        {
         articles.map((article)=>(
          <Link className='articleLink'>
            <div className="blogItemWrap" key={article.id}>
              <div className="blogImageWrap">
                <img src={article.image} alt="" />
                <h4 className='articleOverlay'>{article.feild}</h4>
              </div>
                
              <div className="blogtitlehead">
                <h2>{article.title}</h2>
                <div className="publishCon">
                  <ul>
                    <li>{article.time_to_read}</li>
                    <li>{article.date}</li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Articles
