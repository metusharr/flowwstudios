import React from "react";
import { motion } from "framer-motion";
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

        {/* HERO */}
        <section className="pt-32 md:pt-60 pb-10 px-5 md:px-10">

          {/* OUR TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-purple-400 text-xl md:text-4xl md:ml-[18%] mb-[-20px] md:mb-[-50px] text-center md:text-left"
          >
            Our
          </motion.p>

          <div className="flex flex-col items-center">

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[42px] sm:text-[70px] md:text-[140px] font-extrabold tracking-widest leading-none text-gray-200 flex items-center"
            >
              PORTF

              <motion.img
                src={ballImg}
                alt="O"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="w-[42px] sm:w-[70px] md:w-[140px] mt-3 sm:mt-6 md:mt-14 mx-1 md:mx-2"
              />

              LIO
            </motion.h1>

            {/* SUBTITLE */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-purple-400 text-lg sm:text-2xl md:text-4xl mt-[-15px] sm:mt-[-30px] md:mt-[-70px] text-center md:self-end md:mr-[18%] md:text-right"
              style={{ fontFamily: "splash" }}
            >
              Flow Studios
            </motion.p>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center my-14 md:my-28 gap-2 bg-white text-black px-4 py-2 rounded-xl font-medium transition"
            >
              <img
                src="/star.png"
                alt="Star"
                className="h-8 md:h-12 w-auto object-contain"
              />
              Schedule a call ▶
            </motion.button>
          </motion.div>

          {/* TAGLINE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-4xl mx-auto text-center py-6 md:py-12 px-2"
          >
            <p className="text-base sm:text-xl md:text-3xl leading-relaxed tracking-wide">
              <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Explore our portfolio —
              </span>
              <span className="text-white"> real work, real results, </span>
              <span className="text-[#a8a8a8] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                real brand transformations.
              </span>
            </p>
          </motion.div>
        </section>

        {/* GRID */}
        <div className="max-w-7xl mx-auto px-5 md:p-10">

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {portfolios.map((item) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  show: { opacity: 1, y: 0 }
                }}
              >
                <Link to={`/portfolio/${item.id}`}>
                  <div className="group">

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="border border-white/10 rounded overflow-hidden transition duration-300"
                    >
                      <img
                        src={item.heroImage}
                        className="w-full aspect-square object-fit"
                        alt={item.brand}
                      />
                    </motion.div>

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
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Portfolio;