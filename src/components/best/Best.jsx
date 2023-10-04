import React from 'react'
import './best.css'
import img from '../../assets/feat-1.jpg'
import { HiOutlineShoppingBag} from 'react-icons/hi'

const Best = () => {
  return (
    <>
    <div className='best1'>
        <h2><span>BESTSELLER </span>PRODUCTS</h2>
        <p className='best1-p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className='best-con'>
      <div className="best-cards">
        <img src={img} alt="" className='best-img' />
        <div className="best-content">
          <h4 className='best-head'>Green Cabbage</h4>
          <p>vegetable</p>
          <span className='best-price'>$ 4.32</span>
          <button className='best-btn'>
            <HiOutlineShoppingBag className='best-icon' />
            Add To Cart</button>
        </div>
      </div>
      <div className="best-cards">
        <img src={img} alt="" className='best-img' />
        <div className="best-content">
          <h4 className='best-head'>Green Cabbage</h4>
          <p>vegetable</p>
          <span className='best-price'>$ 4.32</span>
          <button className='best-btn'>
            <HiOutlineShoppingBag className='best-icon' />
            Add To Cart</button>
        </div>
      </div>
      <div className="best-cards">
        <img src={img} alt="" className='best-img' />
        <div className="best-content">
          <h4 className='best-head'>Green Cabbage</h4>
          <p>vegetable</p>
          <span className='best-price'>$ 4.32</span>
          <button className='best-btn'>
            <HiOutlineShoppingBag className='best-icon' />
            Add To Cart</button>
        </div>
      </div>
      <div className="best-cards">
        <img src={img} alt="" className='best-img' />
        <div className="best-content">
          <h4 className='best-head'>Green Cabbage</h4>
          <p>vegetable</p>
          <span className='best-price'>$ 4.32</span>
          <button className='best-btn'>
            <HiOutlineShoppingBag className='best-icon' />
            Add To Cart</button>
        </div>
      </div>
      
     
      
      
    </div>

   
    </>
  )
}

export default Best