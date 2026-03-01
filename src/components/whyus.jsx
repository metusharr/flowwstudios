import { useEffect, useState } from "react";
import why1 from "../assets/why1.png";
import why2 from "../assets/why2.png";
import why3 from "../assets/why3.png";

const items = [
  {
    id: 0,
    title: "User-Centered Solutions",
    desc:
      "We put user experience at the heart of everything — delivering designs, marketing strategies, and development that connect, engage, and perform.",
    image: why1,
  },
  {
    id: 1,
    title: "Time-Assured Delivery",
    desc:
      "Our deadlines are our priority. We ensure every project is completed within the promised timeline without compromising on quality.",
    image: why2,
  },
  {
    id: 2,
    title: "Complete Digital Expertise",
    desc:
      "From SEO and social media marketing to UI/UX design and web & app development — we provide end-to-end solutions under one roof.",
    image: why3,
  },
];

const WhyUs = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 px-4 sm:px-6">
      <div className="
        max-w-[1400px] 
        border 
        rounded-[2.5rem] 
        bg-white 
        mx-auto 
        p-6 sm:p-8 md:p-14
        grid grid-cols-1 md:grid-cols-2 
        gap-10 md:gap-16 
        items-center
      ">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-purple-500 font-medium mb-2 text-sm sm:text-base">
            Why us?
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 md:mb-10">
            Let us build your brand Together
          </h2>

          <div className="space-y-4 md:space-y-6">
            {items.map((item, index) => (
              <div
                key={item.id}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`cursor-pointer p-4 sm:p-5 rounded-xl transition-all duration-300 border-l-4
                ${
                  active === index
                    ? "border-purple-500 bg-purple-50 opacity-100"
                    : "border-transparent bg-transparent opacity-60"
                }`}
              >
                <h3
                  className={`text-base sm:text-lg font-medium mb-2 ${
                    active === index
                      ? "text-purple-600"
                      : "text-gray-700"
                  }`}
                >
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="
          relative 
          w-full 
          h-[260px] sm:h-[350px] md:h-150 
          rounded-3xl md:rounded-4xl 
          overflow-hidden 
          shadow-xl
        ">
          {items.map((item, index) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.title}
              className={`absolute inset-0 w-full h-full object-center  border-white rounded-3xl md:rounded-4xl p-3 sm:p-6 md:p-8 transition-opacity duration-700
              ${active === index ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;