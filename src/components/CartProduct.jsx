import {useContext} from 'react'
import { CartContext } from '../CartContext'
import { getProductData } from '../products'
import './CartProduct.css';

const CartProduct = (props) => {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity
    const productData = getProductData(id);


  return (
    <>
    <div className="cart-con">
        <img src={productData.image} alt=""  className='cart-img'/>
        <div className="cart-content">
        <h3>{productData.title}</h3>
        <p>{quantity} total</p>
        <p>$ {(quantity * productData.price).toFixed(2) }</p>
        <button onClick={() => cart.deleteFromCart(id)}>Remove</button>
        <button onClick={() => cart.addOneToCart(productData.id)}>+</button>
        <button onClick={() => cart.removeOneFromCart(productData.id)}>-</button>
        </div>
    </div>
    </>
  )
}

export default CartProduct