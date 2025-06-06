import React from "react";
import { motion } from "framer-motion";
import {floatAnimation} from "../util/animations.js";
import "../styles/hero.css";


const HeroSection = () => (
  <section id="hero" className="hero">
    <motion.h2
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Nasza misja
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
Tworzymy innowacyjne drony szkoleniowe, które rewolucjonizują treningi ASG i wojskowe, zwiększając ich realizm i efektywność. Naszym celem jest stać się liderem w nowoczesnych rozwiązaniach treningowych, łączących technologię z praktycznymi potrzebami użytkowników.    </motion.p>
  </section>
);

export default HeroSection;
