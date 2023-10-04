import React from 'react'
import './navbar.css';
import MiniNav from '../mini-nav/Mini-nav';
import img from '../../assets/default-logo.png'
import { FaFacebook, FaInstagram, FaTwitter  } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* <div className="logo-img"> */}
      <img src={img} alt="" className='logo' />

      {/* </div> */}
      <div className="content">
      <div className='mini-content'>
        <p className='main'>523 Sylvan Ave, 5th Floor Mountain View, CA 940 USA</p>
        <p className='main2'>+1 (234) 56789, +1 987 654 3210</p>
        <p>support@company.com</p>
        <p className='socials'>
            <FaTwitter />
            <FaFacebook />
            <FaInstagram />
        </p>
    </div>
        <div className='list'>
          <ul>
            <li>Home</li>
            <li>Pages</li>
            <li>shop</li>
            <li>blog</li>
            <li>Contact</li>
          </ul>
          <div className="fonts">
          <p className='fon1'>cu</p>
          <p className='fon2'>cu</p>
          </div>
          {/* <button className='btn'>Get In Touch</button> */}
        </div>

      </div>
    </div>
  )
}

export default Navbar