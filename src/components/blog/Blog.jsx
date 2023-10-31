import React from 'react'
import './blog.css'
import img from '../../assets/blog-1.jpg'
import img1 from '../../assets/blog-2.jpg'
import img2 from '../../assets/blog-3.jpg'

const Blog = () => {
  return (
    <>
    <div className="blog-head">
    <h2 className='blog-head-h2'> <span>Blog</span> Posts</h2>
    <div className="underline"></div>
    <p className='blog-head-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eum.</p>

    </div>
    <div className='blog-con'>
        <div className="blog-cards stacked">
        <img src={img} alt="" className='blog-img' />
        <div className="blog-content">
            <span>DIET / TIPS & GUIDES</span>
            <h3>Tips for Ripening your Fruit</h3>
            <p>The generated Lorem Ipsum is therefore always 
                free from repetition injected humour, or 
                non-characteristic words etc.</p>
        </div>

        </div>
        <div className="blog-cards stacked">
        <img src={img1} alt="" className='blog-img' />
        <div className="blog-content">
            <span>HEALTH BENEFITS OF RAW FOOD</span>
            <h3>Tips for Ripening your Fruit</h3>
            <p>The generated Lorem Ipsum is therefore always 
                free from repetition injected humour, or non-characteristic words etc.</p>
        </div>

        </div>
        <div className="blog-cards stacked">
        <img src={img2} alt="" className='blog-img' />
        <div className="blog-content">
            <span>SUPERFOODS YOU SHOULD BE EATING</span>
            <h3>Tips for Ripening your Fruit</h3>
            <p>The generated Lorem Ipsum is therefore always 
                free from repetition injected humour, or 
                non-characteristic words etc.</p>
        </div>

        </div>
    </div>
    </>

  )
}

export default Blog