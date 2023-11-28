import React from 'react';
import Footer from '../components/footer/Footer';
import './contact.css';
import { FaEnvelopeOpenText, FaPhone } from 'react-icons/fa';
import Navbar from '../components/navbar/Navbar';

const Contact = () => {
  return (
    <section>
      <Navbar />
        <main className="page">
      <header className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className='hero-head'>Get Fresh Food From <br /> Our Agro Market</h1>
            <h4 className='hero-p' >Fully Organic</h4>
            <h4 className='hero-p' >Contact Us</h4>
            <div className="underline"></div>
          </div>
        </div>
      </header>
      <div className='contact-sec'>
        <div>
        <FaPhone className='icon' />
        <div className='content'>
            <span>PHONE</span>
            <p>+1 (234) 56789, +1 987 654 3210</p>
        </div>
        </div>
        <div>
        <FaEnvelopeOpenText className='icon'/>
        <div className='content'>
            <span>Email</span>
            <p>support@agrocompany.com</p>

        </div>
        </div>
      </div>
    </main>
        <Footer />
    </section>
  )
}

export default Contact