import { useEffect, useState } from "react";
import why1 from "../assets/why1.png";
import why2 from "../assets/why2.jpeg";
import why3 from "../assets/why3.jpeg";

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

  // Auto switch every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" py-10">
      <div className="max-w-[1400px] border rounded-[2.5rem] bg-white mx-auto p-14 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-purple-500 font-medium mb-2">Why us?</p>

          <h2 className="text-4xl font-semibold mb-10">
            Let us build your brand Together
          </h2>

          <div className="space-y-6">
            {items.map((item, index) => (
              <div
                key={item.id}
                onMouseEnter={() => setActive(index)}
                className={`cursor-pointer p-5 rounded-xl transition-all duration-300 border-l-4
                ${active === index
                    ? "border-purple-500 bg-purple-50"
                    : "border-transparent bg-transparent opacity-60"
                  }`}
              >
                <h3
                  className={`text-lg font-medium mb-2 ${active === index ? "text-purple-600" : "text-gray-700"
                    }`}
                >
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[600px] rounded-[2rem] overflow-hidden shadow-2xl">
          {items.map((item, index) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
              ${active === index ? "opacity-100" : "opacity-0"}`}
            />
          ))}

          {/* Overlay content (optional) */}
          <div className="absolute inset-0 bg-black/20 flex flex-col justify-center items-center text-white text-center px-8">
            <h3 className="text-2xl font-semibold mb-3">
              {items[active].title}
            </h3>
            <p className="text-sm opacity-90 max-w-md">
              {items[active].desc}
            </p>

            <button className="mt-6 bg-white text-black px-5 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition">
              ✨ Connect with us
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
