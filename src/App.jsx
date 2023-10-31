import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
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
    </Routes>
	</CartProvider>
      
   
  )
}

export default App
