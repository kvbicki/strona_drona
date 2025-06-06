import Navbar from "../../components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import DronesSection from "./components/DronesSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import Footer from "../../components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import React from "react";
import FlipCard from "./components/FlipCard.jsx";

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <DronesSection/>
            <AboutSection/>
            <Contact/>
            <Footer/>
            <FlipCard/>
        </div>
    )

}
export default HomePage;