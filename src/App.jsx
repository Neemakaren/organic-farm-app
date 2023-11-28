import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router';
import { products } from './products';
import CartProvider from './CartContext';




function App() {
 
  
 
  return (
	<CartProvider>
    <Routes>
      <Route path='/' element={<Home products={products}/>}/>
      <Route path='/cart' element={ <Cart />}/>
      <Route path='/blog' element={ <Blog />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
	</CartProvider>
      
   
  )
}

export default App
