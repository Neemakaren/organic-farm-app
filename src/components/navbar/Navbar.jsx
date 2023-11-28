import { useContext, useRef} from 'react'
import './navbar.css';
import MiniNav from '../mini-nav/Mini-nav';
import img from '../../assets/default-logo.png'
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag} from 'react-icons/hi';
import { CartContext } from '../../CartContext';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
  const cart = useContext(CartContext);
   
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  
  const productsCount = cart.items.reduce((sum,product) => sum + product.quantity, 0)
  return (
    <>
    <MiniNav />
    <div className='navbar'>
      <div className="logo-cont">
       <img src={img} alt="" className='logo' />
      </div>
      <div className="nav-content" ref={navRef}>
          <ul className='list-main'>
            <Link to='/' className='list1' >Home</Link>
            <Link to='/blog' className='list1'>blog</Link>
            <Link to='/contact' className='list1'>Contact</Link>
          </ul>
          <div className="fonts">
            <Link to='/cart'>
              <p className='fon1'>
                <HiOutlineShoppingBag />
                ({productsCount})</p>
            </Link>
          </div>
        <button className="nav-toggle nav-close-btn"
          onClick={showNavbar}
        >
                <FaTimes />
            </button>
      </div>
        <button className="nav-toggle"
          onClick={showNavbar}
        >
                <FaBars />
            </button>
    </div>
    </>
  )
}

export default Navbar