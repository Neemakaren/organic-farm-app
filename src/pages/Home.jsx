import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Banner from '../components/banner/Banner'
import Services from '../components/services/Services'
import Featured from '../components/featured/Featured'
import Grid from '../components/grid/Grid'
import AboutUs from '../components/aboutus/AboutUs'
import Best from '../components/best/Best'
import Blog from '../components/blog/Blog'
import Brands from '../components/brands/Brands'
import Footer from '../components/footer/Footer'


const Home = ({products}) => {
  
  
  return (
    <>
        <Navbar />
        <Hero />
        <Banner />
        <Services />
        <AboutUs />
        {/* <Grid /> */}
        <Featured   products={products}/>
        <Best />
        <Blog />
        <Brands />
        <Footer />
    </>
  )
}

export default Home