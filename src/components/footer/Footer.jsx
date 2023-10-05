import React from 'react'
import './footer.css'
import img from '../../assets/default-logo.png'
import { FaFacebook, FaInstagram, FaTwitter  } from 'react-icons/fa'


const Footer = () => {
  return (
    <>
    <div className='footer-con'>
        <div className="footer-sec1">
            <img src={img} alt="" className='footer-img'/>
        </div>
        <div className="footer-sec2">
            <ul className='footer-ul'>
                <li className='footer-li'>Home</li>
                <li className='footer-li'>About</li>
                <li className='footer-li'>Pages</li>
                <li className='footer-li'>Gallery</li>
                <li className='footer-li'>Blog</li>
            </ul>
        </div>
        <div className="footer-sec3">
            <ul className='footer-ul'>
                <li className='footer-li'>Partners</li>
                <li className='footer-li'>Customer Servive</li>
                <li className='footer-li'>Vegetables</li>
                <li className='footer-li'>Fruits</li>
                <li className='footer-li'>Organic Food</li>
                <li className='footer-li'>Privacy Policy</li>
            </ul> 
        </div>
        <div className="footer-sec3">
            <ul className='footer-ul'>
                <li className='footer-li'>Partners</li>
                <li className='footer-li'>Customer Servive</li>
                <li className='footer-li'>Vegetables</li>
                <li className='footer-li'>Fruits</li>
                <li className='footer-li'>Organic Food</li>
                <li className='footer-li'>Privacy Policy</li>
            </ul> 
        </div>

    </div>
    <div className="footer-sec4">
        <div className='footer-sm'>
            <span>Email</span>
            <p>support@agrocompany.com</p>
        </div>
        <div className='footer-sm'>
            <span>PHONE</span>
            <p>+1 (234) 56789, +1 987 654 3210</p>
        </div>
            <div className="sec4-icons">
            <FaTwitter />
            <FaFacebook />
            <FaInstagram />
            </div>
        </div>
    </>
  )
}

export default Footer