import React from 'react'
import './best.css'
import img from '../../assets/feat-1.jpg'
import { HiOutlineShoppingBag} from 'react-icons/hi'
import { products } from '../../products'

const Best = () => {
  return (
    <>
    <div className='best1'>
        <h2><span>BESTSELLER </span>PRODUCTS</h2>
        <p className='best1-p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className='best-con'>
      {
        products.map((product) => (
          <div className="best-cards">
        <img src={product.image} alt="" className='best-img' />
        <div className="best-content">
          <h4 className='best-head'>{product.title}</h4>
          <p>{product.category}</p>
          <span className='best-price'>$ {product.price}</span>
          <button className='best-btn'>
            <HiOutlineShoppingBag className='best-icon' />
            Add To Cart</button>
        </div>
      </div>
        ))
      }
      
    </div>

   
    </>
  )
}

export default Best