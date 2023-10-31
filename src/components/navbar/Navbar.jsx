import { useContext, useState } from 'react'
import './navbar.css';
import MiniNav from '../mini-nav/Mini-nav';
import img from '../../assets/default-logo.png'
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag} from 'react-icons/hi';
import { CartContext } from '../../CartContext';
import { FaBars } from 'react-icons/fa';


const Navbar = () => {
  const cart = useContext(CartContext);


  const [showLinks, setShowLinks] = useState(false);
    const toggleLinks = () => {
        setShowLinks(!showLinks)
    }

  const productsCount = cart.items.reduce((sum,product) => sum + product.quantity, 0)
  return (
    <>
    <MiniNav />
    <div className='navbar'>
      <div className="logo-cont">
       <img src={img} alt="" className='logo' />
      </div>
      <div className="nav-content">
          <ul className='list-main'>
            <li className='list1' >Home</li>
            <li className='list1'>Pages</li>
            <li className='list1'>shop</li>
            <li className='list1'>blog</li>
            <li className='list1'>Contact</li>
          </ul>
          <div className="fonts">
            <Link to='/cart'>
              <p className='fon1'>
                <HiOutlineShoppingBag />
                ({productsCount})</p>
            </Link>
          </div>
        <button className="nav-toggle" onClick={toggleLinks}>
                {/* <FaBars/> */}
            </button>
      </div>
    </div>
    </>
  )
}

export default Navbar