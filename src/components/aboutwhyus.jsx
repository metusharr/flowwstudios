import React, { useState } from "react";
import bgImage from "../assets/background.png";

import missionImg from "../assets/mission.png";
import visionImg from "../assets/vision.png";
import valuesImg from "../assets/values.png";

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
              {titles[active]}
            </h3>

            <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              We combine strategy, design, and technology to build scalable digital
              products that drive growth and engagement.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              At Floow Studios, our mission is to create digital solutions that
              combine thoughtful design, modern technology, and measurable performance.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              We work closely with our clients to understand their vision and transform
              it into scalable, reliable, and impactful digital products.
            </p>

            <p className="text-lg md:text-xl font-semibold mt-4 md:mt-6">
              “We don’t just build digital products — we build
              momentum for brands ready to lead.”
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