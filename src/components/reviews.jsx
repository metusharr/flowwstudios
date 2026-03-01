import { useEffect, useRef, useState } from "react";
import backgroundimg from "../assets/background.png";


const reviews = [
  {
    date: "10.01.2026",
    text:
      "They designed our food website very nicely. The layout and overall look was very clean and easy to use.",
    name: "Mrs. Manjeet Kaur",
    role: "Owner",
    stars: 4,
  },
  {
    date: "10.01.2026",
    text:
      "The team was really good and understanding. They focused on our thought process and delivered good results",
    name: "GMG Infratech.",
    role: "Company",
    stars: 5,
  },
  {
    date: "10.01.2026",
    text:
      "I was worried about timeline. The quality was not compromised and work was very good.",
    name: "Mr. Anuj Prasad",
    role: "Influencer",
    stars: 4,
  },
  {
    date: "10.01.2026",
    text:
      "The team was supporting and professional. It was very easy to communicate with them throughout the project. They understood our requirements very well.",
    name: "Mr. Vinay Kumar",
    role: "Business",
    stars: 4,
  },
];

const CustomerReviews = () => {
  const marqueeRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && marqueeRef.current) {
        scrollRef.current += 0.6;
        marqueeRef.current.scrollLeft = scrollRef.current;

        if (scrollRef.current >= marqueeRef.current.scrollWidth / 2) {
          scrollRef.current = 0;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="relative bg-repeat bg-cover  bg-[center_-3000px]   "
      style={{ backgroundImage: `url(${backgroundimg})` }}
      id="reviews" relative py-10 sm:py-12 md:py-14 overflow-hidden text-white>

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
      flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-0 mb-10 md:mb-16">

        <div className="text-center md:text-left">
          <p className="text-purple-400 text-base sm:text-lg md:text-xl font-medium mb-2">
            Customer Reviews
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">
            What they Say?
          </h2>
        </div>

        {/* RATING */}
        <div className="flex flex-col items-center md:items-start gap-2 sm:gap-3">

          {/* STARS */}
          <div className="flex gap-1 text-yellow-400 text-2xl sm:text-3xl md:text-4xl">
            {"★★★★★".split("").map((star, i) => (
              <span key={i}>{star}</span>
            ))}
          </div>

          {/* FADE TEXT */}
          <div className="relative">
            <span className="text-gray-300 text-base sm:text-xl md:text-2xl font-medium fade-edges">
              + 30 Reviews
            </span>
          </div>

        </div>
      </div>

      {/* MARQUEE */}
      <div
        className="relative px-4 sm:px-8 md:px-12 lg:px-18 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={marqueeRef}
          className="flex gap-6 sm:gap-8 md:gap-10 rounded-3xl overflow-x-hidden"
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="
              min-w-[260px]
              sm:min-w-[300px]
              md:min-w-[340px]
              lg:min-w-[380px]

              bg-purple-500/10 backdrop-blur-xl 
              border border-white/20 rounded-2xl 
              p-5 sm:p-6 md:p-8
              shadow-[0_8px_30px_rgba(0,0,0,0.25)]
              "
            >
              <p className="text-[10px] sm:text-xs text-gray-400 mb-3 sm:mb-4">
                {review.date}
              </p>

              <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed mb-4 sm:mb-6">
                {review.text}
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm md:text-base font-medium">
                    {review.name}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-400">
                    {review.role}
                  </p>
                </div>

                <div className="flex gap-1 text-yellow-400 text-sm sm:text-base">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {i < review.stars ? "★" : "☆"}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default CustomerReviews;
