import React from 'react'
import './blog.css';
import img from '../assets/blog-1.jpg'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import img1 from '../assets/blog-2.jpg'
import img2 from '../assets/blog-3.jpg'

const Blog = () => {
  return (
    <>
    <Navbar/>
 <main className="page">
      <header className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className='hero-head'>Get Fresh Food From <br /> Our Agro Market</h1>
            <h4 className='hero-p' >Fully Organic</h4>
            <h4 className='hero-p' >Blog Posts</h4>
            <div className="underline"></div>
          </div>
        </div>
      </header>
    </main>
<Link to='/'className='blog-btn'>
  
    <button >Back Home</button>

    </Link>

    <div className='blog-con'>
        <div className="blog-cards stacked">
        <img src={img} alt="" className='blog-img' />
        <div className="blog-content">
            <span>DIET / TIPS & GUIDES</span>
            <h3>Tips for Ripening your Fruit</h3>
        </div>

        </div>
        <div className="blog-cards stacked">
        <img src={img1} alt="" className='blog-img' />
        <div className="blog-content">
            <span>HEALTH BENEFITS OF RAW FOOD</span>
            <h3>Tips for Ripening your Fruit</h3>
        </div>

        </div>
        <div className="blog-cards stacked">
        <img src={img2} alt="" className='blog-img' />
        <div className="blog-content">
            <span>SUPERFOODS YOU SHOULD BE EATING</span>
            <h3>Tips for Ripening your Fruit</h3>
        </div>

        </div>
    </div>
   

    <Footer />
</>
  )
}

export default Blog