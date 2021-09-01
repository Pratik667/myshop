import React from 'react';
import Navbar from './navbar';
import Fetch from '../data/fetchme';
import Category from '../data/category';

function Home(){
    return[
        <>
            <Navbar />
            <div class="banner"></div>
            <Category />
        </>
    ]
}

export default Home;