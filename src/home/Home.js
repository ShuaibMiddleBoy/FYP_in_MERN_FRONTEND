import React, { useEffect } from 'react'
import Navbar from '../Components/navbar/Navbar';
import Hero from '../Components/hero/Hero';
import PopularProperties from '../Components/popularProperties/PopularProperties';
import FeaturedProperties from '../Components/featuredProperties/FeaturedProperties';
import NewsLetter from '../Components/newsLetter/NewsLetter';
import Footer from '../Components/footer/Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        navigate("/");
    },[])
  return (
    <>
        <Navbar />
                <Hero />
                <PopularProperties />
                <FeaturedProperties />
                <NewsLetter />
                <Footer />
    </>
  )
}

export default Home