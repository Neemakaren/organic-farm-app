import React from 'react'
import './brands.css'
import { brands } from '../../products'


const Brands = () => {
  return (
    <div className='brands-con'>
        {
            brands.map((brand) => (
                <div className="brands-image">
                    <img src={brand.image} alt='' className='brands-img'/> 
                </div>
            ))
        }
        <img src="" alt="" />
    </div>
  )
}

export default Brands