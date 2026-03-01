const services = [
  {
    title: "UI/UX Designing",
    desc:
      "Intuitive, user-focused interfaces that deliver seamless digital experiences.",
    icon: "🎨",
  },
  {
    title: "Web & App Development",
    desc:
      "Fast, scalable websites and apps built to perform and grow.",
    icon: "💻",
  },
  {
    title: "Photography & Video Editing",
    desc:
      "High-impact visuals and cinematic edits that tell your story.",
    icon: "📷",
  },
  {
    title: "Graphic Design",
    desc:
      "Bold, modern designs that make your brand instantly recognizable.",
    icon: "🖌️",
  },
  {
    title: "Packaging Design",
    desc:
      "Eye-catching packaging that stands out on every shelf.",
    icon: "🚀",
  },
  {
    title: "Social Media Marketing",
    desc:
      "Strategic content and campaigns that grow your online presence.",
    icon: "📣",
  },
];

const Services = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-24">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">

        {/* HEADER */}
        <p className="text-purple-400 text-center font-semibold text-xl sm:text-2xl md:text-2xl mb-6">
          Services we provide
        </p>

        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-4 md:mb-6 px-2">
          “Where Ideas Turn Into <span className="text-white">Clicks</span> and
          Clients. Social Media and{" "}
          <span className="text-white">Websites</span> that work.
        </h2>

        <p className="text-center text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-12 md:mb-16 px-2">
          Our services cover everything from brand identity & ui/ux to development —
          built for impact and scalability.
        </p>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">

          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/4 border border-white/10 rounded-2xl 
              p-6 sm:p-7 md:p-8 shadow-xl transition-all duration-300 
              hover:scale-105 hover:bg-white hover:text-black"
            >
              {/* ICON + TITLE */}
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 
                flex items-center justify-center rounded-xl 
                bg-purple-500/20 text-xl sm:text-2xl shrink-0">
                  {service.icon}
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-light leading-snug">
                  {service.title}
                </h3>
              </div>

              {/* DESC */}
              <p className="text-xs sm:text-sm md:text-base text-gray-300 group-hover:text-black leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;
