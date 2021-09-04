import React from 'react';
import Navbar from './navbar';
import Fetch from '../data/fetchme';
import Category from '../data/category';
import Electronics from '../data/electronics';
import Jwellery from '../data/jwellery';
import HomeBanner from '../data/homebanner';
import Footer from './footer';


function Home(){
    return[
        <>
            <Navbar />
            <div class="banner"></div>
            <Category />
            <Electronics />
            <HomeBanner />
            <Jwellery />
            <Footer />
        </>
    ]
}

export default Home;