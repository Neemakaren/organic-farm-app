import React from 'react'
import './featured.css'
import img from '../../assets/feat-1.jpg'
import { HiOutlineShoppingBag} from 'react-icons/hi'

const Featured = () => {
  return (
    <>
      <h2 className='feat-h2'>Featured Products</h2>
    <div className='featured-con'>
      <div className="featured-cards">
        <img src={img} alt="" className='feat-img' />
        <div className="feat-content">
          <h4 className='feat-head'>Green Cabbage</h4>
          <p>vegetable</p>
          <span className='feat-price'>$ 4.32</span>
          <button className='feat-btn'>
            <HiOutlineShoppingBag className='feat-icon' />
            Add To Cart</button>
        </div>
      </div>
      <div className="featured-cards">
        <img src={img} alt="" className='feat-img'/>
        <div className="feat-content">
          <h4 className='feat-head'>Green Cabbage</h4>
          <p>vegetable</p>
          <span className='feat-price'>$ 4.32</span>
          <button className='feat-btn'><HiOutlineShoppingBag className='feat-icon' />Add To Cart</button>
        </div>
      </div>
      <div className="featured-cards">
        <img src={img} alt="" className='feat-img'/>
        <div className="feat-content">
          <h4 className='feat-head'>Green Cabbage</h4>
          <p>vegetable</p>
          <span className='feat-price'>$ 4.32</span>
          <button className='feat-btn'><HiOutlineShoppingBag className='feat-icon' />Add To Cart</button>
        </div>
      </div>
      <div className="featured-cards">
        <img src={img} alt="" className='feat-img' />
        <div className="feat-content">
          <h4 className='feat-head'>Green Cabbage</h4>
          <p>vegetable</p>
          <span className='feat-price'>$ 4.32</span>
          <button className='feat-btn'><HiOutlineShoppingBag className='feat-icon' />Add To Cart</button>
        </div>
      </div>
      <div className="featured-cards">
        <img src={img} alt="" className='feat-img' />
        <div className="feat-content">
          <h4 className='feat-head'>Green Cabbage</h4>
          <p>vegetable</p>
          <span className='feat-price'>$ 4.32</span>
          <button className='feat-btn'><HiOutlineShoppingBag className='feat-icon' />Add To Cart</button>
        </div>
      </div>
      <div className="featured-cards">
        <img src={img} alt="" className='feat-img' />
        <div className="feat-content">
          <h4 className='feat-head'>Green Cabbage</h4>
          <p>vegetable</p>
          <span className='feat-price'>$ 4.32</span>
          <button className='feat-btn'><HiOutlineShoppingBag className='feat-icon' />Add To Cart</button>
        </div>
      </div>
      <div className="featured-cards">
        <img src={img} alt="" className='feat-img' />
        <div className="feat-content">
          <h4 className='feat-head'>Green Cabbage</h4>
          <p>vegetable</p>
          <span className='feat-price'>$ 4.32</span>
          <button className='feat-btn'><HiOutlineShoppingBag className='feat-icon' />Add To Cart</button>
        </div>
      </div>
      <div className="featured-cards">
        <img src={img} alt="" className='feat-img' />
        <div className="feat-content">
          <h4 className='feat-head'>Green Cabbage</h4>
          <p>vegetable</p>
          <span className='feat-price'>$ 4.32</span>
          <button className='feat-btn'><HiOutlineShoppingBag className='feat-icon' />Add To Cart</button>
        </div>
      </div>
      
    </div>
     </>
  )
}

export default Featured