import { useContext} from 'react'
import { CartContext } from '../CartContext';
import CartProduct from '../components/CartProduct';
import { Link } from 'react-router-dom';
const Cart = () => {
  const cart = useContext(CartContext)
  const productsCount = cart.items.reduce((sum,product) => sum + product.quantity, 0);
  return (
    <section>
      {
        productsCount > 0 ? 
        <>
        <p className='cart-head'>Items in your cart</p>
        <div className="underline"></div>
        {
          cart.items.map((currentProduct, idx) => (
            <>
            <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity} />
            </>
          ))
        }
        <h1 className='total-btn'>Total:{cart.getTotalCost().toFixed(2)} </h1>
        </>
        :
        <h1 className='cart-head'>there are no items in your cart</h1>
      }
     <Link to='/'className='blog-btn'>
  
  <button >Back Shopping</button>

  </Link>


    </section>
  )
}

export default Cart;