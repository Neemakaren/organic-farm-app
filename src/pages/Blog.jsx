import React from 'react'
import './blog.css';
import img from '../assets/blog-1.jpg'
// import img1 from '../assets/blog-2.jpg'
// import img2 from '../assets/blog-3.jpg'

const Blog = () => {
  return (
//     <main className="page">
//     <header className="hero">
//       <div className="hero-container">
//         <div className="hero-text">
//           <h1 className='hero-head'>Get Fresh Food From <br /> Our Agro Market</h1>
//           <h4 className='hero-p' >Fully Organic</h4>
//         </div>
//       </div>
//     </header>
//   </main>
<>
<main className="sec-blog">
<header className="sec-hero">
  <div className="sec-cont">
    <div className="sec-text">
      <h1>Our Blog</h1>
    </div>
  </div>
</header>
</main>
    <div className='blog-page'>
        <div className="page-cards stack">
        <img src={img} alt="" className='page-img' />
        <div className="page-content">
            <span>DIET / TIPS & GUIDES</span>
            <h4>Tips for Ripening your Fruit</h4>
        </div>
        </div>
        <div className="page-cards stack">
        <img src={img} alt="" className='page-img' />
        <div className="page-content">
            <span>DIET / TIPS & GUIDES</span>
            <h4>Tips for Ripening your Fruit</h4>
        </div>
        </div>
        <div className="page-cards stack">
        <img src={img} alt="" className='page-img' />
        <div className="page-content">
            <span>DIET / TIPS & GUIDES</span>
            <h4>Tips for Ripening your Fruit</h4>
        </div>
        </div>
        <div className="page-cards stack">
        <img src={img} alt="" className='page-img' />
        <div className="page-content">
            <span>DIET / TIPS & GUIDES</span>
            <h4>Tips for Ripening your Fruit</h4>
        </div>
        </div>
        <div className="page-cards stack">
        <img src={img} alt="" className='page-img' />
        <div className="page-content">
            <span>DIET / TIPS & GUIDES</span>
            <h4>Tips for Ripening your Fruit</h4>
        </div>
        </div>
        <div className="page-cards stack">
        <img src={img} alt="" className='page-img' />
        <div className="page-content">
            <span>DIET / TIPS & GUIDES</span>
            <h4>Tips for Ripening your Fruit</h4>
        </div>
        </div>
        <div className="page-cards stack">
        <img src={img} alt="" className='page-img' />
        <div className="page-content">
            <span>DIET / TIPS & GUIDES</span>
            <h4>Tips for Ripening your Fruit</h4>
        </div>
        </div>
    </div>
</>
  )
}

export default Blog