import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import portfolios from "../data/portfolios";

import backgroundimg from "../assets/background.png";
import ballImg from "../assets/portfolio-o.png";

import NewNavbar from "../components/Navbar";

const AUTO_PLAY_TIME = 2000;

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const autoplayRef = useRef(null);

  const total = portfolios?.length || 0;

  /* =========================================================
     NEXT SLIDE
  ========================================================= */

  const nextSlide = useCallback(() => {
    if (!total) return;

    setActiveIndex((current) => {
      return (current + 1) % total;
    });
  }, [total]);

  /* =========================================================
     PREVIOUS SLIDE
  ========================================================= */

  const previousSlide = useCallback(() => {
    if (!total) return;

    setActiveIndex((current) => {
      return (current - 1 + total) % total;
    });
  }, [total]);

  /* =========================================================
     AUTOPLAY
  ========================================================= */

  useEffect(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }

    if (isHovered || total <= 1) {
      return;
    }

    autoplayRef.current = setInterval(() => {
      setActiveIndex((current) => {
        return (current + 1) % total;
      });
    }, AUTO_PLAY_TIME);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
  }, [isHovered, total]);

  /* =========================================================
     KEYBOARD CONTROLS
  ========================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      }

      if (event.key === "ArrowLeft") {
        previousSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [nextSlide, previousSlide]);

  /* =========================================================
     GET CARD POSITION
  ========================================================= */

  const getPosition = (index) => {
    let position = index - activeIndex;

    if (position > total / 2) {
      position -= total;
    }

    if (position < -total / 2) {
      position += total;
    }

    return position;
  };

  /* =========================================================
     CARD ANIMATION
  ========================================================= */

  const getCardAnimation = (position) => {
    /* CENTER */

    if (position === 0) {
      return {
        x: "-50%",
        y: "-50%",
        scale: 1,
        rotateY: 0,
        rotateZ: 0,
        opacity: 1,
        filter: "blur(0px)",
      };
    }

    /* LEFT / RIGHT */

    if (position === -1 || position === 1) {
      return {
        x: `calc(-50% + ${position * 300}px)`,
        y: "calc(-50% + 18px)",
        scale: 0.88,
        rotateY: position === -1 ? 8 : -8,
        rotateZ: position === -1 ? -1 : 1,
        opacity: 0.78,
        filter: "blur(0px)",
      };
    }

    /* FAR LEFT / FAR RIGHT */

    if (position === -2 || position === 2) {
      return {
        x: `calc(-50% + ${position * 300}px)`,
        y: "calc(-50% + 42px)",
        scale: 0.75,
        rotateY: position === -2 ? 13 : -13,
        rotateZ: position === -2 ? -2 : 2,
        opacity: 0.48,
        filter: "blur(0.5px)",
      };
    }

    return {
      x: `calc(-50% + ${position * 350}px)`,
      y: "calc(-50% + 60px)",
      scale: 0.65,
      rotateY: position < 0 ? 18 : -18,
      rotateZ: position < 0 ? -3 : 3,
      opacity: 0,
      filter: "blur(3px)",
    };
  };

  /* =========================================================
     EMPTY DATA
  ========================================================= */

  if (!total) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-white/50">
          No portfolio projects available.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
        text-white
      "
      style={{
        backgroundImage: `url(${backgroundimg})`,
      }}
    >
      {/* =====================================================
          BACKGROUND OVERLAY
      ===================================================== */}

      <div className="fixed inset-0 bg-black/35 pointer-events-none z-0" />

      {/* AMBIENT GLOW */}

      <div
        className="
          fixed
          left-1/2
          top-[42%]

          -translate-x-1/2
          -translate-y-1/2

          w-[850px]
          h-[650px]

          rounded-full

          bg-purple-700/[0.08]

          blur-[160px]

          pointer-events-none
        "
      />

      <div
        className="
          fixed
          left-1/2
          top-[65%]

          -translate-x-1/2
          -translate-y-1/2

          w-[500px]
          h-[320px]

          rounded-full

          bg-purple-500/[0.06]

          blur-[120px]

          pointer-events-none
        "
      />

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <div className="relative z-[100]">
        <NewNavbar />
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          z-10

          pt-32
          md:pt-56

          pb-8

          px-5
          md:px-10
        "
      >
        {/* OUR */}

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            text-purple-400

            text-xl
            md:text-4xl

            md:ml-[18%]

            mb-[-18px]
            md:mb-[-48px]

            text-center
            md:text-left
          "
        >
          Our
        </motion.p>

        {/* TITLE */}

        <div className="flex flex-col items-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: 70,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              text-[42px]
              sm:text-[72px]
              md:text-[140px]

              font-extrabold

              tracking-[0.06em]

              leading-none

              text-gray-200

              flex
              items-center

              select-none
            "
          >
            PORTF

            <motion.img
              src={ballImg}
              alt="O"
              initial={{
                scale: 0,
                rotate: -180,
              }}
              animate={{
                scale: 1,
                rotate: 0,
              }}
              transition={{
                delay: 0.3,
                type: "spring",
                stiffness: 160,
                damping: 12,
              }}
              className="
                w-[42px]
                sm:w-[72px]
                md:w-[140px]

                mt-3
                sm:mt-6
                md:mt-14

                mx-1
                md:mx-2
              "
            />

            LIO
          </motion.h1>

          {/* SUBTITLE */}

          <motion.p
            initial={{
              opacity: 0,
              x: 35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
            className="
              text-purple-400

              text-lg
              sm:text-2xl
              md:text-4xl

              mt-[-15px]
              sm:mt-[-30px]
              md:mt-[-70px]

              text-center

              md:self-end
              md:mr-[18%]

              md:text-right
            "
            style={{
              fontFamily: "splash",
            }}
          >
            Floow Studios
          </motion.p>
        </div>

        {/* CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.7,
            duration: 0.6,
          }}
          className="
            flex
            justify-center

            mt-10
          "
        >
          <motion.button
            whileHover={{
              scale: 1.06,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
              group

              relative

              flex
              items-center
              gap-3

              bg-white
              text-black

              px-5
              py-3

              rounded-xl

              font-semibold

              shadow-[0_20px_60px_rgba(255,255,255,0.12)]

              overflow-hidden
            "
          >
            <span
              className="
                absolute
                inset-0

                bg-gradient-to-r
                from-transparent
                via-black/[0.04]
                to-transparent

                -translate-x-full

                group-hover:translate-x-full

                transition-transform
                duration-700
              "
            />

            <img
              src="/star.png"
              alt="Star"
              className="
                relative

                h-8
                md:h-10

                w-auto
                object-contain
              "
            />

            <span className="relative">
              Schedule a call
            </span>

            <span className="relative">
              ↗
            </span>
          </motion.button>
        </motion.div>

        {/* TAGLINE */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.9,
            duration: 0.6,
          }}
          className="
            max-w-4xl
            mx-auto

            text-center

            pt-12
            md:pt-20

            pb-8
          "
        >
          <p
            className="
              text-base
              sm:text-xl
              md:text-3xl

              leading-relaxed

              tracking-wide
            "
          >
            <span
              className="
                bg-gradient-to-r
                from-gray-400
                via-white
                to-gray-400

                bg-clip-text
                text-transparent
              "
            >
              Explore our portfolio —
            </span>

            <span className="text-white">
              {" "}
              real work, real results,
            </span>

            <span className="text-white/40">
              {" "}
              real brand transformations.
            </span>
          </p>
        </motion.div>
      </section>

      {/* =====================================================
          PORTFOLIO CAROUSEL
      ===================================================== */}

      <section
        className="
          relative
          z-10

          pt-8
          md:pt-14

          pb-28
          md:pb-40
        "
      >
        {/* SECTION LABEL */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            text-center

            mb-8
            md:mb-10
          "
        >
          <p
            className="
              text-[10px]
              md:text-xs

              uppercase

              tracking-[0.45em]

              text-white/35
            "
          >
            Selected Projects
          </p>

          <div
            className="
              w-12
              h-px

              bg-purple-400/60

              mx-auto

              mt-4
            "
          />
        </motion.div>

        {/* ===================================================
            CAROUSEL AREA

            Hover ONLY pauses the cards
        =================================================== */}

        <div
          className="
            relative

            w-full

            h-[470px]
            sm:h-[540px]
            md:h-[600px]

            overflow-hidden

            [perspective:1800px]
          "
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          {/* FLOOR GLOW */}

          <div
            className="
              absolute

              left-1/2
              top-[57%]

              -translate-x-1/2
              -translate-y-1/2

              w-[900px]
              h-[220px]

              rounded-[50%]

              bg-purple-600/[0.07]

              blur-[100px]

              pointer-events-none
            "
          />

          {/* FLOOR LINE */}

          <div
            className="
              absolute

              left-1/2
              top-[79%]

              -translate-x-1/2

              w-[700px]
              max-w-[70%]

              h-px

              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent

              pointer-events-none
            "
          />

          {/* =================================================
              CARDS
          ================================================= */}

          <div
            className="
              absolute
              inset-0

              flex
              items-center
              justify-center
            "
          >
            {portfolios.map((item, index) => {
              const position = getPosition(index);

              // Only show 5 cards
              if (Math.abs(position) > 2) {
                return null;
              }

              const isActive = position === 0;

              return (
                <motion.div
                  key={item.id}
                  className="
                    absolute

                    left-1/2
                    top-1/2

                    will-change-transform
                  "
                  initial={false}
                  animate={getCardAnimation(position)}
                  transition={{
                    type: "spring",
                    stiffness: 145,
                    damping: 24,
                    mass: 0.9,
                  }}
                  style={{
                    zIndex:
                      50 - Math.abs(position),

                    transformStyle:
                      "preserve-3d",
                  }}
                  drag={isActive ? "x" : false}
                  dragConstraints={{
                    left: 0,
                    right: 0,
                  }}
                  dragElastic={0.12}
                  onDragEnd={(event, info) => {
                    if (
                      Math.abs(info.offset.x) >
                      70
                    ) {
                      if (info.offset.x > 0) {
                        previousSlide();
                      } else {
                        nextSlide();
                      }
                    }
                  }}
                >
                  <motion.article
                    whileHover={
                      isActive
                        ? {
                            y: -8,
                          }
                        : {}
                    }
                    className="
                      group

                      relative

                      w-[220px]
                      h-[320px]

                      sm:w-[245px]
                      sm:h-[355px]

                      md:w-[285px]
                      md:h-[405px]

                      overflow-hidden

                      rounded-[20px]
                      md:rounded-[26px]

                      bg-[#101010]

                      border
                      border-white/[0.13]

                      shadow-[0_35px_100px_rgba(0,0,0,0.65)]

                      select-none
                    "
                  >
                    {/* =================================================
                        MAIN CARD CLICK
                    ================================================= */}

                    {item.websiteUrl ? (
                      <a
                        href={item.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          absolute
                          inset-0
                          z-10
                        "
                        aria-label={`Visit ${item.brand} website`}
                      />
                    ) : (
                      <Link
                        to={`/portfolio/${item.id}`}
                        className="
                          absolute
                          inset-0
                          z-10
                        "
                        aria-label={`View ${item.brand} portfolio`}
                      />
                    )}

                    {/* =================================================
                        IMAGE
                    ================================================= */}

                    <motion.img
                      src={item.heroImage}
                      alt={item.brand}
                      draggable="false"
                      animate={{
                        scale: isActive
                          ? 1
                          : 1.04,
                      }}
                      whileHover={
                        isActive
                          ? {
                              scale: 1.06,
                            }
                          : {}
                      }
                      transition={{
                        duration: 0.8,
                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      }}
                      className="
                        absolute
                        inset-0

                        w-full
                        h-full

                        object-cover

                        pointer-events-none
                      "
                    />

                    {/* IMAGE OVERLAY */}

                    <div
                      className="
                        absolute
                        inset-0

                        bg-gradient-to-b
                        from-black/5
                        via-black/10
                        to-black
                      "
                    />

                    {/* =================================================
                        TOP INFO
                    ================================================= */}

                    <div
                      className="
                        absolute

                        top-3
                        left-3
                        right-3

                        flex
                        items-center
                        justify-between

                        z-20
                      "
                    >
                      {/* NUMBER */}

                      <div
                        className="
                          flex
                          items-center
                          justify-center

                          h-7
                          min-w-7

                          px-2

                          rounded-full

                          bg-black/30

                          backdrop-blur-xl

                          border
                          border-white/10

                          text-[9px]

                          text-white/65
                        "
                      >
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </div>

                      {/* STATUS */}

                      {item.websiteUrl ? (
                        <div
                          className="
                            flex
                            items-center
                            gap-1.5

                            px-2.5
                            py-1.5

                            rounded-full

                            bg-black/40

                            backdrop-blur-xl

                            border
                            border-white/10

                            text-[8px]

                            uppercase

                            tracking-wider

                            text-white/70
                          "
                        >
                          <span
                            className="
                              w-1.5
                              h-1.5

                              rounded-full

                              bg-green-400

                              shadow-[0_0_8px_rgba(74,222,128,0.7)]
                            "
                          />

                          Live Website
                        </div>
                      ) : (
                        <div
                          className="
                            px-2.5
                            py-1.5

                            rounded-full

                            bg-black/30

                            backdrop-blur-xl

                            border
                            border-white/10

                            text-[8px]

                            uppercase

                            tracking-wider

                            text-white/45
                          "
                        >
                          Case Study
                        </div>
                      )}
                    </div>

                    {/* =================================================
                        ACTIVE BORDER
                    ================================================= */}

                    {isActive && (
                      <>
                        <div
                          className="
                            absolute
                            inset-0

                            rounded-[20px]
                            md:rounded-[26px]

                            ring-1
                            ring-white/25

                            pointer-events-none

                            z-30
                          "
                        />

                        <div
                          className="
                            absolute
                            inset-0

                            rounded-[20px]
                            md:rounded-[26px]

                            shadow-[inset_0_0_70px_rgba(255,255,255,0.055)]

                            pointer-events-none

                            z-30
                          "
                        />
                      </>
                    )}

                    {/* =================================================
                        BOTTOM CONTENT
                    ================================================= */}

                    <div
                      className="
                        absolute

                        bottom-0
                        left-0
                        right-0

                        p-4
                        md:p-5

                        z-20
                      "
                    >
                      {/* INDUSTRY */}

                      <p
                        className="
                          text-purple-300

                          text-[8px]
                          md:text-[9px]

                          uppercase

                          tracking-[0.3em]

                          mb-1.5
                        "
                      >
                        {item.industry}
                      </p>

                      {/* BRAND */}

                      <h3
                        className="
                          text-xl
                          md:text-2xl

                          font-semibold

                          tracking-tight

                          text-white

                          truncate
                        "
                      >
                        {item.brand}
                      </h3>

                      {/* =================================================
                          ACTION BUTTONS
                      ================================================= */}

                      <div
                        className="
                          flex
                          items-center
                          gap-2

                          mt-3
                          pt-3

                          border-t
                          border-white/10
                        "
                      >
                        {/* VIEW PORTFOLIO */}

                        <Link
                          to={`/portfolio/${item.id}`}
                          onClick={(event) => {
                            event.stopPropagation();
                          }}
                          className="
                            relative
                            z-40

                            flex
                            items-center
                            justify-center

                            flex-1

                            h-8

                            rounded-lg

                            border
                            border-white/10

                            bg-white/[0.04]

                            text-[9px]

                            uppercase

                            tracking-wider

                            text-white/55

                            hover:bg-white
                            hover:text-black
                            hover:border-white

                            transition-all
                            duration-300
                          "
                        >
                          View Portfolio
                        </Link>

                        {/* LIVE WEBSITE */}

                        {item.websiteUrl && (
                          <a
                            href={item.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(event) => {
                              event.stopPropagation();
                            }}
                            className="
                              relative
                              z-40

                              flex
                              items-center
                              justify-center

                              w-9
                              h-8

                              rounded-lg

                              bg-white

                              text-black

                              text-sm

                              hover:scale-105

                              transition
                            "
                            aria-label={`Visit ${item.brand} website`}
                          >
                            ↗
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.article>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            CONTROLS
        ===================================================== */}

        <div
          className="
            relative
            z-50

            flex
            items-center
            justify-center

            gap-5

            mt-1
          "
        >
          {/* PREVIOUS */}

          <motion.button
            type="button"
            onClick={previousSlide}
            whileHover={{
              scale: 1.08,
              x: -3,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="
              w-10
              h-10

              md:w-11
              md:h-11

              rounded-full

              border
              border-white/10

              bg-white/[0.035]

              backdrop-blur-xl

              flex
              items-center
              justify-center

              text-white/55

              hover:text-white
              hover:bg-white/[0.08]
              hover:border-white/20

              transition
            "
            aria-label="Previous project"
          >
            ←
          </motion.button>

          {/* DOTS */}

          <div
            className="
              flex
              items-center

              gap-1.5
            "
          >
            {portfolios.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveIndex(index);
                }}
                className="p-1"
                aria-label={`Project ${
                  index + 1
                }`}
              >
                <motion.span
                  animate={{
                    width:
                      index === activeIndex
                        ? 28
                        : 5,

                    opacity:
                      index === activeIndex
                        ? 1
                        : 0.2,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    block

                    h-[5px]

                    rounded-full

                    bg-white
                  "
                />
              </button>
            ))}
          </div>

          {/* NEXT */}

          <motion.button
            type="button"
            onClick={nextSlide}
            whileHover={{
              scale: 1.08,
              x: 3,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="
              w-10
              h-10

              md:w-11
              md:h-11

              rounded-full

              border
              border-white/10

              bg-white/[0.035]

              backdrop-blur-xl

              flex
              items-center
              justify-center

              text-white/55

              hover:text-white
              hover:bg-white/[0.08]
              hover:border-white/20

              transition
            "
            aria-label="Next project"
          >
            →
          </motion.button>
        </div>

        

        {/* COUNTER */}

        <div
          className="
            text-center

            mt-4

            text-[9px]

            uppercase

            tracking-[0.35em]

            text-white/20
          "
        >
          {String(activeIndex + 1).padStart(
            2,
            "0"
          )}

          <span className="mx-2 text-white/10">
            /
          </span>

          {String(total).padStart(2, "0")}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;