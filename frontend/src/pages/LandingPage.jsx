import React from 'react';
import { About, HomeNavbar } from '../components';
import { Greenwashing } from '../assets';
import ContentSection1 from '../components/ContentSection1';
import ContentSection2 from '../components/ContentSection2';
import {img1,img2,img3} from '../assets/index.js';
import ContentSection3 from '../components/ContentSection3.jsx';

function LandingPage() {
    return (
        <div>
            <div className="h-screen  w-full relative">
                <img src={Greenwashing} className="w-full h-screen  object-cover      
                absolute mix-blend-overlay"/>
                <HomeNavbar />
                <About />   
            </div>
            <div>
                <ContentSection1 img = {img1} heading ="What is Greenwashing ?" para ="Greenwashing isn't about cleaning your lawn—it's about misleading marketing. Companies use it to make you think their products are environmentally friendly when they aren't."/>  
                <ContentSection2 img = {img2} heading ="Why even care about it?" />  
                <ContentSection3 img = {img3} heading ="What Can We Do About It?" para ="Be savvy shoppers, demand transparency, support ethical brands & sign petitions - together we can expose deception & drive real change!"/>  

            </div>
        </div>

    );
}

export default LandingPage;