import './featured.css'
import img from '../../assets/feat-1.jpg'
import { HiOutlineShoppingBag} from 'react-icons/hi';
import { CartContext } from '../../CartContext';
import { useContext } from 'react';




const Featured = ({products}) => {
  const cart = useContext(CartContext)
  const productQuantity = cart.getProductQuantity(products.id)
  
 
  return (
    <>
      <h2 className='feat-h2'> <span>Featured</span>  Products</h2>
      <div className="underline"></div>
    <div className='featured-con'>
      {
        products.map((product, idx) => (
          <div className="featured-cards" key={idx}>
        <img src={product.image} alt="" className='feat-img' />
        <div className="feat-content">
          <h4 className='feat-head'>{product.title}</h4>
          <p>{product.category}</p>
          <span className='feat-price'>$ {product.price}</span>
          <button className='feat-btn'
          onClick={() => cart.addOneToCart(product.id)}
          >
            <HiOutlineShoppingBag  />
            Add To Cart</button>
        </div>
      </div>
        ))
      }
      
    </div>
     </>
  )
}

export default Featured