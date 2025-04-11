import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../comp_style/ArticleSlider.css';
import { Link } from 'react-router-dom';
import supabase from '../config/SupabaseClient';

const ArticleSlider = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(()=>{
    const fetchSlider = async ()=>{
      const {data, error} = await supabase
      .from('articles')
      .select('*')

      if(error){
        console.log('error fetching slider blog', error)
      }
      if(data){
        console.log(data)
        setBlogs(data)
      }
    }
    fetchSlider()
  },[])
  /*useEffect(()=>{
    fetch('/data/blog.json')
    .then((res)=>{
      if(!res.ok){
        console.log(Error, "error fetching blogs")
      }
      return res.json()
    })
    .then((data)=>{
      const dataFormated = data.slice(0, 2).map((blog)=>({
        ...blog,
        title: blog.title.length > 150
        ? blog.title.slice(0, 150) + '....' : blog.title
      }));
      setBlogs(dataFormated)
    })
    .catch((err)=> console.log("Error", err.message))
  }, []);*/

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className='articleSlideCon'>
      <h1>Article and Publications</h1>
      <div className="articleSliderCon">
        <Slider {...settings}>
          {blogs.map((blog)=>(
            <Link to={`/blog/${blog.id}`} key={blog.id} className='blogLink'>
              <div className="blogItem">
                <div className="blogImageCon">
                  <img src={blog.image} alt={blog.title} />
                  <p>{blog.created_at}</p>
                </div>
                <h2 className='blogTitle'>{blog.title}</h2>
                <ul className='blogUl'>
                  <li>{blog.time_to_read}</li>
                  <li>{blog.date}</li>
                </ul>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default ArticleSlider
