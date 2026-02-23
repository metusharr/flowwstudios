import { useEffect, useRef } from "react";

// IMPORT IMAGES (Vite way)
import reactLogo from "../assets/technologies/react.png";
import figmaLogo from "../assets/technologies/figma.png";
import htmlLogo from "../assets/technologies/html.png";
// import doraLogo from "../assets/technologies/dora.png";
// import angularLogo from "../assets/technologies/angular.png";
import cssLogo from "../assets/technologies/css.png";
import jsLogo from "../assets/technologies/js.png";

const technologies = [
  { name: "React", img: reactLogo },
  { name: "Figma", img: figmaLogo },
  { name: "HTML", img: htmlLogo },
  // { name: "Dora", img: doraLogo },
  // { name: "Angular", img: angularLogo },
  { name: "CSS", img: cssLogo },
  { name: "JavaScript", img: jsLogo },
];

const Technologies = () => {
  const marqueeRef = useRef(null);

  // Continuous marquee
  useEffect(() => {
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (marqueeRef.current) {
        scrollAmount += 0.8; // slower + smoother
        marqueeRef.current.scrollLeft = scrollAmount;

        if (scrollAmount >= marqueeRef.current.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative  py-16 md:py-24 overflow-hidden">

      {/* HEADER */}
      <div className="text-center text-white mb-10 md:mb-14 px-4">
        <p className="text-purple-400 font-medium mb-2 text-sm md:text-base">
          Technologies we use
        </p>

        <h2 className="text-base sm:text-lg md:text-2xl font-light mb-4 max-w-4xl mx-auto leading-relaxed">
          We use up to date tools and technologies to buid fast, reliable and future proof products.
        </h2>
      </div>

      {/* WHITE ROUNDED CONTAINER */}
      <div className="md:max-w-350 mx-auto bg-white rounded-3xl md:rounded-[2.5rem] 
                      py-8 md:py-12 px-4 sm:px-6 md:px-10 
                      relative overflow-hidden">

        {/* FADE EDGES (OPTIONAL, PREMIUM LOOK) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10" />

        {/* MARQUEE */}
        <div
          ref={marqueeRef}
          className="flex items-center gap-4 sm:gap-6 md:gap-10 overflow-x-hidden"
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4 bg-black rounded-full 
                         px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 
                         min-w-max shadow-lg"
            >
              <img
                src={tech.img}
                alt={tech.name}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
              />

              <span className="text-white text-xs sm:text-sm md:text-base font-medium whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}

          {/* CENTER LABEL */}
          <div className="flex items-center justify-center min-w-max px-6 sm:px-10">
            <span className="text-black text-sm sm:text-lg md:text-2xl font-semibold whitespace-nowrap">
              UI/UX Designing
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Technologies;
