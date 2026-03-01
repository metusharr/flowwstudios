import React from "react";
import bgImage from "../assets/background.png";   // star background
import rightImage from "../assets/purple-ui.png"; // right purple image
import AboutWhyUs from "../components/aboutwhyus";
import CustomerReviews from "../components/reviews";

const AboutHero = () => {
  return (

    <div>

      <section
        className="relative min-h-screen bg-cover bg-center flex items-center text-white overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-8xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8 px-4 lg:px-10 pt-16 lg:pt-0">

            <p className="text-purple-400 text-2xl font-medium">
              About us
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-[52px] font-light leading-tight">
              We{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                design
              </span>
              , build, and <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                elevate
              </span>{" "}
              digital brands.
            </h1>

            <p className="text-gray-300 text-base lg:text-lg max-w-xl leading-relaxed">
              We combine strategy, design, and technology to build scalable
              digital products that drive growth and engagement.
            </p>

            {/* STATS */}
            <div className="relative pt-4 lg:pt-8">

              <div className="flex gap-8 lg:gap-16 pt-4 lg:pt-8 text-2xl lg:text-4xl font-semibold flex-wrap">

                <div className="bg-gradient-to-r from-white/40 via-white to-white/40 
                  bg-clip-text text-transparent">
                  + 10 clients
                </div>

                <div className="bg-gradient-to-r from-white/40 via-white to-white/40 
                  bg-clip-text text-transparent">
                  + 20 Projects
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden lg:flex relative justify-end mt-0">
            <img
              src={rightImage}
              alt="UI Showcase"
              className="w-full max-w-[500px] lg:w-4xl lg:max-w-[1100px] object-contain translate-x-0 lg:translate-x-10"
            />
          </div>

        </div>

        {/* BOTTOM STRIP */}
        <div className="absolute w-full bottom-0 left-0 bg-black/80 border-t border-white/10">

          <div className="max-w-7xl mx-4 lg:mx-12 flex items-center">

            {/* LEFT BUTTON */}
            <div className="bg-gradient-to-r w-[140px] lg:w-[210px] from-purple-400 to-purple-600 px-4 lg:px-8 py-3 lg:py-4 flex text-white font-medium text-sm lg:text-base items-center gap-2 shrink-0">
              <img src="/flag.png" className="h-[16px] w-[16px] lg:h-[20px] lg:w-[20px]" alt="" /> Our Goal →
            </div>

            {/* MARQUEE TEXT */}
            <div className="overflow-hidden w-full">
              <div className="whitespace-nowrap animate-marquee text-gray-300 text-md lg:text-lg py-3 lg:py-5 px-4 lg:px-6">
                Our goal is to be your trusted partner, ensuring every project is on time, user-first, and built for success.
                <span className="mx-8 lg:mx-16">
                  Our goal is to be your trusted partner, ensuring every project is on time, user-first, and built for success.
                </span>
              </div>
            </div>

          </div>

        </div>



      </section>



      <AboutWhyUs />

      {/* founder image section  */}

      <div
        className="relative bg-cover py-16 lg:py-24 text-white bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}>



        <div className="max-w-8xl mx-auto px-4 lg:px-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-6 lg:space-y-8">

            <p className="text-purple-400 font-medium text-2xl">
             Our Edge
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Let us build your brand <br /> Together
            </h2>

            <p className="text-gray-300 text-base lg:text-lg max-w-xl leading-relaxed">
              Thoughtful design, modern tech, and measurable results — all in one place.
            </p>

            {/* QUOTE BOX */}
            <div className="bg-white/5 border border-white/20 rounded-2xl p-6 lg:p-8 backdrop-blur-lg shadow-xl max-w-xl">
              <p className="text-base lg:text-lg leading-relaxed">
                <span className="text-white font-semibold">
                  "Everything that is really great and inspiring
                </span>{" "}
                is created by{" "}
                <span className="text-purple-400 font-semibold">
                  individuals who can labor in freedom"
                </span>
              </p>
            </div>

          </div>

          {/* RIGHT TEAM CARDS */}
          <div className="grid grid-cols-2 gap-4 lg:gap-8">

            {/* CARD 1 */}
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/10">

              <img
                src="/tushar.png"
                alt="Tushar"
                className="w-full h-[220px] sm:h-[320px] lg:h-[420px] object-fit"
              />


            </div>

            {/* CARD 2 */}
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/10">

              <img
                src="/gurleen.png"
                alt="Gurleen"
                className="w-full h-[220px] sm:h-[320px] lg:h-[420px] object-fit"
              />


            </div>

          </div>

        </div>
      </div>

      <CustomerReviews />


    </div>

  );
};

export default AboutHero;
