import Footer from '../Footer'
import Header from '../Header'
import Features from './Features'
import Hero from './Hero'

import { useState, useEffect } from 'react';

function HomePage() {


    return(
        <div className="Home">
            <Header/>
            <Hero/>
            <Features/>
            <Footer/>
        </div>
    )
}

export default HomePage