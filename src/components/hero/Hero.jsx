import './hero.css';
import { useEffect, useState } from "react";
import img from '../../assets/home-shop-1.jpg';

const Hero = () => {
  
  return (
   <>
    <main className="page">
      <header className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className='hero-head'>Get Fresh Food From <br /> Our Agro Market</h1>
            <h4 className='hero-p' >Fully Organic</h4>
          </div>
        </div>
      </header>
    </main>
   </>
  )
}

export default Hero;