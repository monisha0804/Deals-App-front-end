import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'


const Home = () => {
    return (
        <div>
           <Announcement />
           <Navbar />
           <Slider />
           <h1> Category </h1>
           <Categories />
           <h1>Coupons List </h1>
            <Products/> 
           <Newsletter/>
           <Footer/>
        </div>
    )
}

export default Home
