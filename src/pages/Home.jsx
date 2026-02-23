import React from "react";
import backgroundimg from "../assets/background.png";
import NewNavbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyUs from "../components/whyus";
import Services from "../components/swp";
import Technologies from "../components/technology";
import CustomerReviews from "../components/reviews";
import FAQ from "../components/faq";

function Home() {
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
