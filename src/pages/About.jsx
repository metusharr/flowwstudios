import React from "react";
import { motion } from "framer-motion";

import bgImage from "../assets/background.png";
import rightImage from "../assets/purple-ui.webp";

import AboutWhyUs from "../components/aboutwhyus";
import CustomerReviews from "../components/reviews";



const AboutHero = () => {
  return (
    <div>

      {/* HERO */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center text-white overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-8xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 px-4 lg:px-10 pt-16 lg:pt-0"
          >

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-purple-400 text-2xl font-medium"
            >
              About us
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-[52px] font-light leading-tight"
            >
              We{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                design
              </span>
              , build, and <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                elevate
              </span>{" "}
              digital brands.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-300 text-base lg:text-lg max-w-xl leading-relaxed"
            >
              We combine strategy, design, and technology to build scalable
              digital products that drive growth and engagement.
            </motion.p>

            {/* STATS */}
            <div className="relative pt-4 lg:pt-8">
              <div className="flex gap-8 lg:gap-16 pt-4 lg:pt-8 text-2xl lg:text-4xl font-semibold flex-wrap">

                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="bg-gradient-to-r from-white/40 via-white to-white/40 bg-clip-text text-transparent"
                >
                  + 10 clients
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                  className="bg-gradient-to-r from-white/40 via-white to-white/40 bg-clip-text text-transparent"
                >
                  + 20 Projects
                </motion.div>

              </div>
            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hidden lg:flex relative justify-end mt-0"
          >
            <img
              src={rightImage}
              alt="UI Showcase"
              className="w-full max-w-[500px] lg:w-[700px] lg:max-w-[1100px] object-contain translate-x-0 lg:translate-x-10"
            />
          </motion.div>

        </div>

        {/* BOTTOM STRIP */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute w-full bottom-0 left-0 bg-black/80 border-t border-white/10"
        >
          <div className="max-w-7xl mx-4 lg:mx-12 flex items-center">

            <div className="bg-gradient-to-r w-[140px] lg:w-[210px] from-purple-400 to-purple-600 px-4 lg:px-8 py-3 lg:py-4 flex text-white font-medium text-sm lg:text-base items-center gap-2 shrink-0">
              <img src="/flag.png" className="h-[16px] w-[16px] lg:h-[20px] lg:w-[20px]" alt="" /> 
              Our Goal →
            </div>

            <div className="overflow-hidden w-full">
              <div className="whitespace-nowrap animate-marquee text-gray-300 text-md lg:text-lg py-3 lg:py-5 px-4 lg:px-6">
                Our goal is to be your trusted partner, ensuring every project is on time, user-first, and built for success.
                <span className="mx-8 lg:mx-16">
                  Our goal is to be your trusted partner, ensuring every project is on time, user-first, and built for success.
                </span>
              </div>
            </div>

          </div>
        </motion.div>

      </section>

      <AboutWhyUs />

      {/* FOUNDER SECTION */}
      {/* TEAM SECTION */}
<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative overflow-hidden py-20 lg:py-28 text-white"
  style={{ backgroundImage: `url(${bgImage})` }}
>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/75"></div>

  {/* BACKGROUND GLOW */}
  <div className="absolute top-20 left-0 w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full"></div>

  <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-500/10 blur-[140px] rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

    {/* TOP CONTENT */}
    <div className="text-center max-w-3xl mx-auto mb-20">

      <p className="text-purple-400 font-medium text-xl lg:text-2xl mb-4">
        Our Edge
      </p>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
        Let us build your brand{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Together
        </span>
      </h2>

      <p className="text-gray-300 text-lg leading-relaxed mt-6">
        Thoughtful design, modern tech, and measurable results — all in one place.
      </p>

    </div>

    {/* TEAM GRID */}
    <div className="overflow-hidden">

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.18,
        },
      },
    }}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-start"
  >

    {/* CARD 1 */}
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          x: -180,
          rotate: -8,
          scale: 0.8,
        },
        visible: {
          opacity: 1,
          x: 0,
          rotate: 0,
          scale: 1,
        },
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -15,
        scale: 1.02,
      }}
      className="group relative"
    >

      <div className="relative overflow-hidden rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

        {/* IMAGE */}
        <div className="overflow-hidden">

          <img
            src="/tushar.png"
            alt="Tushar"
            className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
          />

        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

        {/* HOVER GLOW */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-purple-500/10"></div>

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 p-6">

          <p className="text-purple-400 uppercase tracking-[3px] text-xs mb-2">
            Founder / Developer
          </p>

          <h3 className="text-2xl font-semibold text-white">
            Tushar
          </h3>

        </div>

      </div>

    </motion.div>

    {/* CARD 2 */}
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 180,
          scale: 0.8,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -15,
        scale: 1.02,
      }}
      className="group relative lg:mt-10"
    >

      <div className="relative overflow-hidden rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

        <div className="overflow-hidden">

          <img
            src="/gurleen.jpeg"
            alt="Gurleen"
            className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
          />

        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-purple-500/10"></div>

        <div className="absolute bottom-0 left-0 p-6">

          <p className="text-purple-400 uppercase tracking-[3px] text-xs mb-2">
            Founder / Designer
          </p>

          <h3 className="text-2xl font-semibold text-white">
            Gurleen
          </h3>

        </div>

      </div>

    </motion.div>

    {/* CARD 3 */}
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -180,
          scale: 0.8,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -15,
        scale: 1.02,
      }}
      className="group relative"
    >

      <div className="relative overflow-hidden rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

        <div className="overflow-hidden">

          <img
            src="/akash.jpeg"
            alt="Akash"
            className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
          />

        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-purple-500/10"></div>

        <div className="absolute bottom-0 left-0 p-6">

          <p className="text-purple-400 uppercase tracking-[3px] text-xs mb-2">
            Marketing
          </p>

          <h3 className="text-2xl font-semibold text-white">
            Akash
          </h3>

        </div>

      </div>

    </motion.div>

    {/* CARD 4 */}
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          x: 180,
          rotate: 8,
          scale: 0.8,
        },
        visible: {
          opacity: 1,
          x: 0,
          rotate: 0,
          scale: 1,
        },
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -15,
        scale: 1.02,
      }}
      className="group relative lg:mt-10"
    >

      <div className="relative overflow-hidden rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

        <div className="overflow-hidden">

          <img
            src="/kriti.png"
            alt="Kriti"
            className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
          />

        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-purple-500/10"></div>

        <div className="absolute bottom-0 left-0 p-6">

          <p className="text-purple-400 uppercase tracking-[3px] text-xs mb-2">
            Developer
          </p>

          <h3 className="text-2xl font-semibold text-white">
            Kriti
          </h3>

        </div>

      </div>

    </motion.div>

  </motion.div>

</div>

    {/* QUOTE CARD */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="mt-20 max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[30px] p-7 lg:p-10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
    >

      <p className="text-lg lg:text-2xl leading-relaxed text-center text-gray-200">

        <span className="text-white font-semibold">
          “Everything that is really great and inspiring
        </span>{" "}
        is created by{" "}
        <span className="text-purple-400 font-semibold">
          individuals who can labor in freedom.”
        </span>

      </p>

    </motion.div>

  </div>

</motion.section>
      <CustomerReviews />

    </div>
  );
};

export default AboutHero;