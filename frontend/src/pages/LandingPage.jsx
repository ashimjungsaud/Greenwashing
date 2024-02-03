import React from 'react';
import { About, HomeNavbar } from '../components';
import { Greenwashing } from '../assets';


function LandingPage() {
    return (
        <div className="h-auto w-full relative">
            <img src={Greenwashing} className="w-full h-screen object-cover absolute mix-blend-overlay"/>
            <HomeNavbar />
            <About />
        </div>
    );
}

export default LandingPage