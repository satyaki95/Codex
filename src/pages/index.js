import * as React from "react";
import Header from "../Components/Header";
import "../style.css";
import Feature from "../Components/Feature";
import About from "../Components/About";
import aboutimage from "../images/Frame 19.png";
import aboutimage1 from "../images/download.png";
import Presentation from "../Components/Presentation";
import Contact from "../Components/Contact";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Feature />
      <About
        image={aboutimage}
        title="Comes with all you Need For Daily Life"
        button="Get The App"
      />
      <Presentation />
      <About
        image={aboutimage1}
        title="Download And Get The App Now"
        button="Download"
      />
      <Contact />
    </div>
  );
}
