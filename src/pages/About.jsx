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
        <div className="space-y-8 px-10">

          <p className="text-purple-400 text-lg font-medium">
            About us
          </p>

          <h1 className="text-4xl md:text-[52px]  font-light leading-tight">
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

          <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
            We combine strategy, design, and technology to build scalable
            digital products that drive growth and engagement.
          </p>

          {/* STATS */}
          <div className="relative pt-8">

            {/* FADE OVERLAY */}
            <div className="flex gap-16 pt-8  text-4xl font-semibold">

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
        <div className="relative flex justify-center lg:justify-end">
          <img
            src={rightImage}
            alt="UI Showcase"
            className="w-4xl max-w-[1100px] object-contain translate-x-0 lg:translate-x-10"
          />
        </div>

      </div>

      {/* BOTTOM STRIP */}
      <div className="absolute w-full bottom-0 left-0  bg-black/80 border-t border-white/10">

        <div className="max-w-7xl mx-12 flex items-center">

          {/* LEFT BUTTON */}
          <div className="bg-gradient-to-r w-[210px] from-purple-400 to-purple-600 px-8 py-4 flex text-white font-medium  items-center gap-2">
            <img src="/flag.png " className="h-[20px] w-[20px]" alt="" /> Our Goal →
          </div>

          {/* MARQUEE TEXT */}
          <div className="overflow-hidden  w-full">
            <div className="whitespace-nowrap animate-marquee text-gray-300 py-5 px-6">
              Our goal is to be your trusted partner, ensuring every project is on time, user-first, and built for success.
              <span className="mx-16">
                Our goal is to be your trusted partner, ensuring every project is on time, user-first, and built for success.
              </span>
            </div>
          </div>

        </div>

      </div>

      

    </section>

    

    <AboutWhyUs/>

{/* founder image section  */}
    
<div
  className="relative bg-cover  py-24 text-white bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${bgImage})` }}>
   
     

  <div className="max-w-8xl mx-auto px-10 grid lg:grid-cols-2 gap-16 items-start">

    {/* LEFT CONTENT */}
    <div className="space-y-8">

      <p className="text-purple-400 font-medium text-lg">
        Why us?
      </p>

      <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
        Let us build your brand <br /> Together
      </h2>

      <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
        At Floow Studios, our mission is to create digital solutions that
        combine thoughtful design, modern technology, and measurable performance.
      </p>

      {/* QUOTE BOX */}
      <div className="bg-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-lg shadow-xl max-w-xl">
        <p className="text-lg leading-relaxed">
          <span className="text-white font-semibold">
            “Everything that is really great and inspiring
          </span>{" "}
          is created by{" "}
          <span className="text-purple-400 font-semibold">
            individuals who can labor in freedom”
          </span>
        </p>
      </div>

    </div>

    {/* RIGHT TEAM CARDS */}
    <div className="grid sm:grid-cols-2 gap-8">

      {/* CARD 1 */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/10">

        <img
          src="/tushar.png"
          alt="Tushar"
          className="w-full h-[420px] object-fit"
        />

        
      </div>

      {/* CARD 2 */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/10">

        <img
          src="/gurleen.png"
          alt="Gurleen"
          className="w-full h-[420px] object-fit"
        />

        
      </div>

    </div>

  </div>
</div>
    
            <CustomerReviews  />

    
    </div>
    
  );
};

export default AboutHero;