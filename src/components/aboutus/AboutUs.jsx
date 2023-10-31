import React from 'react'
import './aboutus.css'
import img from '../../assets/img_1.png'

const AboutUs = () => {
  return (
    <div className='about-con'>
      <div className="con-1">
        <div className="about-content">
            <h3 className='about-head'><span>ABOUT AGRO</span> <br /> FARM COMPANY</h3>
            <div className="underline-1"></div>
        </div>
        <img src={img} alt="" className='about-img' />
        <div className="about-main">
        <p className='about-p'>Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Similique cupiditate 
            laudantium inventore nihil labore minus 
            optio quos fuga asperiores dolore aperiam 
            fugit sit itaque, et enim odio libero ex. 
            </p>
        <p className='about-p'>Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Similique cupiditate 
            laudantium inventore nihil labore minus 
            optio quos fuga asperiores dolore aperiam 
            fugit sit itaque, et enim odio libero ex. 
            Optio, alias? Debitis minus reprehenderit 
            architecto minima! Modi ut quaerat odit quasi 
            </p>

        </div>

      </div>
    </div>
  )
}

export default AboutUs