import React from "react";
import portfolios from "../data/portfolios";
import { Link } from "react-router-dom";

import backgroundimg from "../assets/background.png";
import ballImg from "../assets/portfolio-o.png";
import NewNavbar from "../components/Navbar";
import Footer from "../components/Footer";

const Portfolio = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundimg})` }}
    >
      <div className="relative z-10">
        <NewNavbar />

        {/* ================= HERO ================= */}
        <section className="pt-32 md:pt-60 pb-10 px-5 md:px-10">

          {/* OUR TEXT */}
          <p className="
            text-purple-400 
            text-xl 
            md:text-4xl 
            md:ml-[18%] 
            mb-[-20px] 
            md:mb-[-50px] 
            text-center 
            md:text-left
          ">
            Our
          </p>

          <div className="flex flex-col items-center">

            {/* TITLE */}
            <h1 className="
              text-[42px] 
              sm:text-[70px] 
              md:text-[140px] 
              font-extrabold 
              tracking-widest 
              leading-none 
              text-gray-200 
              flex items-center
            ">
              PORTF

              <img
                src={ballImg}
                alt="O"
                className="
                  w-[42px] 
                  sm:w-[70px] 
                  md:w-[140px] 
                  mt-3 
                  sm:mt-6 
                  md:mt-14 
                  mx-1 
                  md:mx-2
                "
              />

              LIO
            </h1>

            {/* SUBTITLE */}
            <p
              className="
                text-purple-400 
                text-lg 
                sm:text-2xl 
                md:text-4xl 
                mt-[-15px] 
                sm:mt-[-30px] 
                md:mt-[-70px] 
                text-center 
                md:self-end 
                md:mr-[18%] 
                md:text-right
              "
              style={{ fontFamily: "splash" }}
            >
              Flow Studios
            </p>
          </div>

          {/* CTA BUTTON */}
          <div className="mt-8 flex justify-center">
            <button className="flex items-center my-14 md:my-28 gap-2 bg-white text-black px-4 py-2 rounded-xl font-medium hover:scale-105 transition">
              <img
                src="/star.png"
                alt="Star"
                className="h-8 md:h-12 w-auto object-contain"
              />
              Schedule a call ▶
            </button>
          </div>

          {/* TAGLINE */}
          <div className="max-w-4xl mx-auto text-center py-6 md:py-12 px-2">

            <p className="
              text-base 
              sm:text-xl 
              md:text-3xl 
              leading-relaxed 
              tracking-wide
            ">

              <span
                className="
                  bg-gradient-to-r from-gray-400 to-white
                  bg-clip-text text-transparent
                  drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]
                "
              >
                Explore our portfolio —
              </span>

              <span className="text-white"> real work, real results, </span>

              <span className="text-[#a8a8a8] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                real brand transformations.
              </span>

              <br />

              


            </p>
          </div>
        </section>

        {/* ================= PORTFOLIO GRID ================= */}
        <div className="max-w-7xl mx-auto px-5 md:p-10">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {portfolios.map((item) => (
              <Link to={`/portfolio/${item.id}`} key={item.id}>
                <div className="group">

                  <div className="
                    border border-white/10
                    rounded
                    overflow-hidden
                    hover:scale-[1.02]
                    transition duration-300
                  ">
                    <img
                      src={item.heroImage}
                      className="w-full aspect-square object-fit"
                      alt={item.brand}
                    />
                  </div>

                  <div className="mt-3">
                    <h2 className="text-white text-lg">
                      {item.brand}
                    </h2>

                    <p className="text-gray-400 text-sm italic">
                      Industry : {item.industry}
                    </p>
                  </div>

                </div>
              </Link>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;