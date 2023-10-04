import React from 'react'
import './banner.css'
import img from '../../assets/ban-1.jpg'
import img1 from '../../assets/ban-2.jpg'
import img2 from '../../assets/ban-3.jpg'

const Banner = () => {
  return (
    <div className='banner-con'>
        <img src={img} alt="" />
        <img src={img1} alt="" />
        <img src={img2} alt="" />
    </div>
  )
}

export default Banner