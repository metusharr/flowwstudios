import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";


import backgroundimg from "../assets/background.png";
import NewNavbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyUs from "../components/whyus";
import Services from "../components/swp";
import Technologies from "../components/technology";
import CustomerReviews from "../components/reviews";
import FAQ from "../components/faq";

function Home() {
const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX - window.innerWidth / 2);
    mouseY.set(clientY - window.innerHeight / 2);
  };

  return (
    <div
      className="relative min-h-screen bg-cover  "
      style={{ backgroundImage: `url(${backgroundimg})` }}
    >
      
      <div className="relative z-10 ">
        <NewNavbar />
        <Hero />
        <WhyUs/>
        <Services/>
        <Technologies/>
        <CustomerReviews/>
        <FAQ/>
      </div>
    </div>
  );
}

export default Home;
