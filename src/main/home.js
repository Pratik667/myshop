import React from 'react';
import Navbar from './navbar';
import Fetch from '../data/fetchme';

function Home(){
    return[
        <>
            <Navbar />
           <Fetch />
        </>
    ]
}

export default Home;