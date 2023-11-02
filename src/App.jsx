import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Blog from './pages/Blog';
import { Route, Routes } from 'react-router';
import { products } from './products';
import CartProvider from './CartContext';


const allCategories = ['all', ...new Set(products.map((product) => product.category))]


function App() {
  const [categories, setCategories] = useState(allCategories);
 

  const filterItems = (category) => {
    if(category === 'all') {

    }
  }
  
 
  return (
	<CartProvider>
    <Routes>
      <Route path='/' element={<Home products={products}/>}/>
      <Route path='/cart' element={ <Cart />}/>
      <Route path='/blog' element={ <Blog />} />
    </Routes>
	</CartProvider>
      
   
  )
}

export default App
