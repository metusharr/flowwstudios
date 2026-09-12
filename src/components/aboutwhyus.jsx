import React, { useState } from "react";
import bgImage from "../assets/background.png";

import missionImg from "../assets/mission.png";
import visionImg from "../assets/vision.png";
import valuesImg from "../assets/values.png";


const content = {
  mission: {
    title: "Our Mission",
    paragraphs: [
      "Our mission is to build scalable digital products that solve real-world problems and create measurable business impact.",
      "We focus on combining design excellence with modern technology to craft experiences that users genuinely love.",
      "Every project we take on is driven by strategy, performance, and long-term growth."
    ],
    quote: "We build with purpose, precision, and performance."
  },

  vision: {
    title: "Our Vision",
    paragraphs: [
      "Our vision is to become a trusted digital partner for brands worldwide.",
      "We aim to lead innovation by blending creativity, technology, and marketing intelligence.",
      "We envision a future where digital experiences feel effortless, powerful, and human."
    ],
    quote: "Innovation today. Impact tomorrow."
  },

  values: {
    title: "Our Values",
    paragraphs: [
      "01 — Bold Clarity",
      "02 — Young Energy",
      "03 — Purpose Over Noise",
      "04 — Design with Intelligence",
      "05 — Ownership Mindset",
      "06 — Growth-Driven Decisions",
      "07 — Long-Term Vision",
    ],
    quote: []
  }
};


const AboutWhyUs = () => {
  const [active, setActive] = useState("mission");

  const images = {
    mission: missionImg,
    vision: visionImg,
    values: valuesImg,
  };

  const titles = {
    mission: "Our Mission",
    vision: "Our Vision",
    values: "Our Values",
  };

  return (
    <section
      className="relative py-16 md:py-20 min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-8xl mx-auto px-5 md:px-10 w-full">

        {/* HEADER */}
        <p className="text-purple-400 font-medium mb-3 md:mb-4 text-sm md:text-base">
          Why us?
        </p>

        <h2 className="text-3xl md:text-5xl font-semibold mb-8 md:mb-12 text-white">
          Let us build your brand Together
        </h2>

        {/* TABS */}
        <div className="
          flex flex-col sm:flex-row 
          gap-4 sm:gap-0 
          sm:justify-between 
          sm:items-center 
          text-lg md:text-xl 
          mb-6
          md:ml-28 md:max-w-6xl
        ">
          {["mission", "vision", "values"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`
                font-medium tracking-wide
                transition-colors duration-300
                ${active === tab
                  ? "text-purple-400"
                  : "text-gray-400 hover:text-white"}
              `}
            >
              {titles[tab]}
            </button>
          ))}
        </div>

        {/* PROGRESS STROKE */}
        <div className="
          relative 
          h-[3px] 
          border border-gray-600 
          rounded-full 
          mb-10 md:mb-12 
          overflow-hidden
          md:ml-28 md:max-w-6xl
        ">
          <div
            className="absolute top-0 left-0 h-full bg-purple-500 rounded-full transition-all duration-500 ease-in-out"
            style={{
              width: "33.333%",
              transform:
                active === "mission"
                  ? "translateX(0%)"
                  : active === "vision"
                    ? "translateX(100%)"
                    : "translateX(200%)",
            }}
          />
        </div>

        {/* CONTENT CARD */}
        <div className="
          bg-[#e9e9e9] 
          rounded-3xl md:rounded-4xl 
          p-6 md:p-10
          grid grid-cols-1 md:grid-cols-2 
          gap-8 md:gap-12 
          items-center 
          shadow-2xl 
          min-h-auto md:min-h-[520px]
        ">

          {/* LEFT IMAGE */}
          <div className="
            rounded-3xl 
            overflow-hidden 
            w-full 
            h-[250px] sm:h-[350px] md:h-[450px]
          ">
            <img
              key={active}
              src={images[active]}
              alt={active}
              className="w-full h-full object-cover rounded-3xl animate-fade"
            />
          </div>

          {/* RIGHT TEXT */}
          <div key={active} className="text-black animate-slideUp">

            

            <h3 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4 md:mb-6">
              {content[active].title}
            </h3>

            {content[active].paragraphs.map((para, index) => (
              <p
                key={index}
                className="text-base md:text-lg leading-relaxed mb-4 md:mb-6"
              >
                {para}
              </p>
            ))}

            <p className="text-lg md:text-xl font-semibold mt-4 md:mt-6">
              {content[active].quote}
            </p>

          </div>
        </div>

      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fade {
            from { opacity: 0; transform: scale(1.05); }
            to { opacity: 1; transform: scale(1); }
          }

          @keyframes slideUp {
            from { opacity: 0; transform: translateY(25px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fade {
            animation: fade 0.6s ease forwards;
          }

          .animate-slideUp {
            animation: slideUp 0.6s ease forwards;
          }
        `}
      </style>

    </section>
  );
};

export default AboutWhyUs;