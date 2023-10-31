import React from 'react'
import './brands.css'
import { brands } from '../../products'


const Brands = () => {
  return (
    <div className='brands-con'>
        {
            brands.map((brand, idx) => (
                <div className="brands-image" key={idx}>
                    <img src={brand.image} alt='' className='brands-img'/> 
                </div>
            ))
        }
    </div>
  )
}

export default Brands