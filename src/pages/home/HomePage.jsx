import Header from "../../components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import DronesSection from "./components/DronesSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import Footer from "../../components/Footer.jsx";
import React from "react";

const HomePage = () => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <DronesSection/>
            <AboutSection/>
            <Footer/>
        </div>
    )

}
export default HomePage;