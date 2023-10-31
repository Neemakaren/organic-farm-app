import { useContext }from 'react'
import './best.css'
import img from '../../assets/feat-1.jpg'
import { HiOutlineShoppingBag} from 'react-icons/hi'
import { products } from '../../products'
import { CartContext } from '../../CartContext';


const Best = () => {
  const cart = useContext(CartContext)
  const productQuantity = cart.getProductQuantity(products.id)


  return (
    <>
    <div className='best1'>
        <h2><span>BESTSELLER </span>PRODUCTS</h2>
        <div className="underline"></div>
        {/* <p className='best1-p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p> */}
    </div>
    <div className='best-con'>
      {
        products.map((product, idx) => (
          <div key={idx} className="best-cards">
        <img src={product.image} alt="" className='best-img' />
        <div className="best-content">
          <header>
          <h4 className='best-head'>{product.title}</h4>
          {/* <p>{product.category}</p> */}
          <span className='best-price'>$ {product.price}</span>
          </header>
          <button className='best-btn' onClick={() => cart.addOneToCart(product.id)}>
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