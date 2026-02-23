const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-[1600px] text-center px-4 sm:px-6 md:px-8">

        {/* HEADING */}
        <h1 className="
          text-3xl sm:text-4xl md:text-5xl lg:text-[65px]
          font-light
          leading-tight md:leading-[1.1]
          mt-32 sm:mt-36 md:mt-44 lg:mt-48
        ">
          We{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            design
          </span>
          , build, and{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text text-transparent">
            elevate
          </span>
          <br className="hidden sm:block" />
          digital brands.
        </h1>

        {/* PARAGRAPH */}
        <p className="
          mt-6
          text-sm sm:text-base md:text-lg
          font-light text-gray-300
          max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl
          mx-auto px-2
        ">
          Built by a young team that brings new perspectives, bold creativity,
          and a forward-thinking approach to designing and building digital
          brands that stand out.
        </p>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <button className="
            flex items-center gap-2
            bg-white text-black
            px-4 sm:px-5 md:px-6
            py-2 sm:py-2.5
            rounded-xl font-medium
            hover:scale-105 transition
            text-sm sm:text-base
          ">
            <span>
              <img
                src="/star.png"
                alt="Floww Studios Logo"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
              />
            </span>
            Schedule a call ▶
          </button>
        </div>

        

      </div>
    </section>
  );
};

export default Hero;
