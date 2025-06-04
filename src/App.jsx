import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import DronesSection from "./components/DronesSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {

  return (
    <div>
      <Header />
      <HeroSection />
      <DronesSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default App;
