import React from "react";
import { About, HomeNavbar } from "../components";
import { Greenwashing, gw } from "../assets";
import ContentSection1 from "../components/ContentSection1";
import ContentSection2 from "../components/ContentSection2";
import { img1, img2, img3 } from "../assets/index.js";
import ContentSection3 from "../components/ContentSection3.jsx";
import { Link, Element } from "react-scroll";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="h-screen  w-full relative">
        <img
          src={Greenwashing}
          className="w-full h-screen  object-cover      
                absolute mix-blend-overlay "
        />
        <HomeNavbar />
        <div className="flex justify-between items-end lg:mt-[110px]">
          <About />
        </div>
        <div className="ml-10 absolute z-50">
          {/* <Link
            to="Information"
            className="bg-primary font-epilogue font-semibold text-[20px] leading-[26px] text-white min-h-[52px] px-4 py-4 rounded-[10px]"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Learn more
          </Link> */}
          <button
            onClick={() => navigate("/home")}
            className="bg-primary cursor-pointer font-epilogue font-semibold text-[20px] leading-[26px] text-white min-h-[52px] px-4 py-4 rounded-[10px]"
          >
            Get Started !
          </button>
        </div>
      </div>

      <Element name="Information" className="element">
        <div>
          <ContentSection1
            img={img1}
            heading="What is Greenwashing ?"
            para="Greenwashing isn't about cleaning your lawn—it's about misleading marketing. Companies use it to make you think their products are environmentally friendly when they aren't."
          />
          <ContentSection2 img={img2} heading="Why even care about it?" />
          <ContentSection3
            img={img3}
            heading="What Can We Do About It?"
            para="Be savvy shoppers, demand transparency, support ethical brands & sign petitions - together we can expose deception & drive real change!"
          />
        </div>
      </Element>
    </div>
  );
}

export default LandingPage;
