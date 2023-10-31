import React from 'react';
import './mini-nav.css';
import { FaFacebook, FaInstagram, FaTwitter  } from 'react-icons/fa';

const MiniNav = () => {
  return (
    <div className='mini-content'>
        <p>523 Sylvan Ave, 5th Floor Mountain View, CA 940 USA</p>
        <p>+1 (234) 56789, +1 987 654 3210</p>
        <p>support@company.com</p>
        <p className='socials'>
            <FaTwitter />
            <FaFacebook />
            <FaInstagram />
        </p>
    </div>
  )
}

export default MiniNav