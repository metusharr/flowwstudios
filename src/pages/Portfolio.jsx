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

const AUTO_PLAY_TIME = 4000;
const DESKTOP_BREAKPOINT = 768;

const Portfolio = () => {
  /* =========================================================
     SAFE PORTFOLIO DATA
  ========================================================= */

  const portfolioData = Array.isArray(portfolios)
    ? portfolios.filter(Boolean)
    : [];

  const total = portfolioData.length;

  /* =========================================================
     STATE
  ========================================================= */

  const [activeIndex, setActiveIndex] = useState(0);

  const [isDesktop, setIsDesktop] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);

  /* =========================================================
     REFS
  ========================================================= */

  const autoplayRef = useRef(null);

  const touchStartX = useRef(null);

  const touchEndX = useRef(null);

  /* =========================================================
     INITIAL LOAD
  ========================================================= */

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  /* =========================================================
     DESKTOP DETECTION
     IMPORTANT:
     No window usage during initial render
  ========================================================= */

  useEffect(() => {
    const checkScreen = () => {
      if (typeof window === "undefined") {
        return;
      }

      setIsDesktop(
        window.innerWidth >= DESKTOP_BREAKPOINT
      );
    };

    checkScreen();

    window.addEventListener(
      "resize",
      checkScreen
    );

    return () => {
      window.removeEventListener(
        "resize",
        checkScreen
      );
    };
  }, []);

  /* =========================================================
     KEEP INDEX SAFE
  ========================================================= */

  useEffect(() => {
    if (!total) {
      setActiveIndex(0);
      return;
    }

    if (activeIndex >= total) {
      setActiveIndex(0);
    }
  }, [total, activeIndex]);

  /* =========================================================
     NEXT
  ========================================================= */

  const nextSlide = useCallback(() => {
    if (total <= 1) {
      return;
    }

    setActiveIndex((current) => {
      return (current + 1) % total;
    });
  }, [total]);

  /* =========================================================
     PREVIOUS
  ========================================================= */

  const previousSlide = useCallback(() => {
    if (total <= 1) {
      return;
    }

    setActiveIndex((current) => {
      return (
        (current - 1 + total) % total
      );
    });
  }, [total]);

  /* =========================================================
     DESKTOP AUTOPLAY ONLY
  ========================================================= */

  useEffect(() => {
    /*
      Always clear previous interval first.
    */

    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }

    /*
      Mobile = NO AUTOPLAY
    */

    if (!isDesktop) {
      return;
    }

    /*
      Don't autoplay while hovering.
    */

    if (isHovered) {
      return;
    }

    /*
      Nothing to autoplay.
    */

    if (total <= 1) {
      return;
    }

    autoplayRef.current = window.setInterval(() => {
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
  }, [
    isDesktop,
    isHovered,
    total,
  ]);

  /* =========================================================
     KEYBOARD
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

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    nextSlide,
    previousSlide,
  ]);

  /* =========================================================
     TOUCH START
  ========================================================= */

  const handleTouchStart = (event) => {
    if (!event.touches?.length) {
      return;
    }

    touchStartX.current =
      event.touches[0].clientX;

    touchEndX.current =
      event.touches[0].clientX;
  };

  /* =========================================================
     TOUCH MOVE
  ========================================================= */

  const handleTouchMove = (event) => {
    if (!event.touches?.length) {
      return;
    }

    touchEndX.current =
      event.touches[0].clientX;
  };

  /* =========================================================
     TOUCH END
  ========================================================= */

  const handleTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchEndX.current === null
    ) {
      return;
    }

    const distance =
      touchStartX.current -
      touchEndX.current;

    const minimumSwipe = 60;

    if (Math.abs(distance) >= minimumSwipe) {
      if (distance > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  /* =========================================================
     CARD POSITION
  ========================================================= */

  const getPosition = (index) => {
    if (!total) {
      return 0;
    }

    let position =
      index - activeIndex;

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

  const getCardAnimation = (
    position
  ) => {
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

    /* IMMEDIATE SIDES */

    if (
      position === -1 ||
      position === 1
    ) {
      return {
        x: `calc(-50% + ${
          position * 300
        }px)`,

        y: "calc(-50% + 18px)",

        scale: 0.88,

        rotateY:
          position < 0 ? 8 : -8,

        rotateZ:
          position < 0 ? -1 : 1,

        opacity: 0.78,

        filter: "blur(0px)",
      };
    }

    /* SECONDARY SIDES */

    if (
      position === -2 ||
      position === 2
    ) {
      return {
        x: `calc(-50% + ${
          position * 300
        }px)`,

        y: "calc(-50% + 42px)",

        scale: 0.75,

        rotateY:
          position < 0 ? 13 : -13,

        rotateZ:
          position < 0 ? -2 : 2,

        opacity: 0.45,

        filter: "blur(0.5px)",
      };
    }

    /* HIDDEN */

    return {
      x: `calc(-50% + ${
        position * 350
      }px)`,

      y: "calc(-50% + 60px)",

      scale: 0.65,

      rotateY:
        position < 0 ? 18 : -18,

      rotateZ:
        position < 0 ? -3 : 3,

      opacity: 0,

      filter: "blur(3px)",
    };
  };

  /* =========================================================
     SAFE WEBSITE URL
  ========================================================= */

  const getWebsiteUrl = (item) => {
    if (!item) {
      return null;
    }

    const rawUrl = item.websiteUrl;

    if (
      typeof rawUrl !== "string" ||
      !rawUrl.trim()
    ) {
      return null;
    }

    const cleanUrl = rawUrl.trim();

    if (
      cleanUrl.startsWith("http://") ||
      cleanUrl.startsWith("https://")
    ) {
      return cleanUrl;
    }

    return `https://${cleanUrl}`;
  };

  /* =========================================================
     LOADING STATE
  ========================================================= */

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black" />
    );
  }

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
        bg-black
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

      <div
        className="
          fixed
          inset-0

          bg-black/35

          pointer-events-none

          z-0
        "
      />

      {/* =====================================================
          AMBIENT LIGHT
      ===================================================== */}

      <div
        className="
          fixed

          left-1/2
          top-[42%]

          -translate-x-1/2
          -translate-y-1/2

          w-[850px]
          h-[650px]

          max-w-[100vw]

          rounded-full

          bg-purple-700/[0.07]

          blur-[160px]

          pointer-events-none
        "
      />

      <div
        className="
          fixed

          left-1/2
          top-[70%]

          -translate-x-1/2

          w-[500px]
          h-[300px]

          max-w-[100vw]

          rounded-full

          bg-purple-500/[0.05]

          blur-[130px]

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
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.55,
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
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
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
              text-[42px]
              sm:text-[70px]
              md:text-[140px]

              font-extrabold

              tracking-[0.05em]

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
              draggable="false"
              initial={{
                scale: 0,
                rotate: -180,
              }}
              animate={{
                scale: 1,
                rotate: 0,
              }}
              transition={{
                delay: 0.25,
                type: "spring",
                stiffness: 160,
                damping: 12,
              }}
              className="
                w-[42px]
                sm:w-[70px]
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
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.45,
              duration: 0.65,
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
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.65,
            duration: 0.55,
          }}
          className="
            mt-10

            flex
            justify-center
          "
        >
          <motion.button
            type="button"
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
              flex
              items-center
              gap-2

              bg-white
              text-black

              px-5
              py-3

              rounded-xl

              font-semibold

              shadow-[0_20px_60px_rgba(255,255,255,0.1)]
            "
          >
            <img
              src="/star.png"
              alt=""
              draggable="false"
              className="
                h-8
                md:h-10

                w-auto

                object-contain
              "
            />

            <span>
              Schedule a call
            </span>

            <span>
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
            delay: 0.8,
            duration: 0.6,
          }}
          className="
            max-w-4xl
            mx-auto

            text-center

            pt-12
            md:pt-20

            pb-8

            px-2
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
          PORTFOLIO
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
        {/* SECTION TITLE */}

        <div
          className="
            text-center

            mb-7
            md:mb-10
          "
        >
          <p
            className="
              text-[9px]
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
        </div>

        {/* ===================================================
            CAROUSEL AREA
        =================================================== */}

        <div
          className="
            relative

            w-full

            h-[470px]
            sm:h-[530px]
            md:h-[600px]

            overflow-hidden

            [perspective:1800px]

            touch-pan-y

            select-none
          "
          onMouseEnter={() => {
            if (isDesktop) {
              setIsHovered(true);
            }
          }}
          onMouseLeave={() => {
            if (isDesktop) {
              setIsHovered(false);
            }
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
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
              max-w-[100vw]

              h-[220px]

              rounded-[50%]

              bg-purple-600/[0.06]

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
              max-w-[75vw]

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
            {portfolioData.map(
              (item, index) => {
                const position =
                  getPosition(index);

                /*
                  Only keep five cards mounted.
                  This reduces mobile load.
                */

                if (
                  Math.abs(position) > 2
                ) {
                  return null;
                }

                const isActive =
                  position === 0;

                const websiteUrl =
                  getWebsiteUrl(item);

                return (
                  <motion.div
                    key={
                      item.id ||
                      `portfolio-${index}`
                    }
                    className="
                      absolute

                      left-1/2
                      top-1/2

                      will-change-transform
                    "
                    initial={false}
                    animate={getCardAnimation(
                      position
                    )}
                    transition={{
                      type: "spring",

                      stiffness: 140,

                      damping: 24,

                      mass: 0.9,
                    }}
                    style={{
                      zIndex:
                        50 -
                        Math.abs(
                          position
                        ),

                      transformStyle:
                        "preserve-3d",
                    }}
                  >
                    {/* =================================================
                        CARD
                    ================================================= */}

                    <motion.article
                      whileHover={
                        isActive && isDesktop
                          ? {
                              y: -7,
                            }
                          : undefined
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

                        shadow-[0_30px_90px_rgba(0,0,0,0.65)]
                      "
                    >
                      {/* =================================================
                          IMAGE
                      ================================================= */}

                      {item.heroImage ? (
                        <img
                          src={item.heroImage}
                          alt={
                            item.brand ||
                            "Portfolio project"
                          }
                          draggable="false"
                          loading={
                            isActive
                              ? "eager"
                              : "lazy"
                          }
                          decoding="async"
                          className="
                            absolute
                            inset-0

                            w-full
                            h-full

                            object-cover

                            pointer-events-none

                            transition-transform
                            duration-700

                            group-hover:scale-[1.04]
                          "
                        />
                      ) : (
                        <div
                          className="
                            absolute
                            inset-0

                            bg-neutral-900

                            flex
                            items-center
                            justify-center
                          "
                        >
                          <span
                            className="
                              text-white/20
                              text-sm
                            "
                          >
                            No preview
                          </span>
                        </div>
                      )}

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

                            bg-black/35

                            backdrop-blur-xl

                            border
                            border-white/10

                            text-[9px]

                            text-white/65
                          "
                        >
                          {String(
                            index + 1
                          ).padStart(
                            2,
                            "0"
                          )}
                        </div>

                        {/* STATUS */}

                        {websiteUrl ? (
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

                            Live
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
                        <div
                          className="
                            absolute
                            inset-0

                            rounded-[20px]
                            md:rounded-[26px]

                            ring-1
                            ring-white/20

                            pointer-events-none

                            z-30
                          "
                        />
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

                          z-40
                        "
                      >
                        {/* INDUSTRY */}

                        <p
                          className="
                            text-purple-300

                            text-[8px]
                            md:text-[9px]

                            uppercase

                            tracking-[0.28em]

                            mb-1.5

                            truncate
                          "
                        >
                          {item.industry ||
                            "Creative Project"}
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
                          {item.brand ||
                            "Portfolio"}
                        </h3>

                        {/* =================================================
                            BUTTONS
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
                          {/* PORTFOLIO */}

                          <Link
                            to={`/portfolio/${
                              item.id || ""
                            }`}
                            onClick={(event) => {
                              event.stopPropagation();
                            }}
                            className="
                              relative
                              z-50

                              flex
                              items-center
                              justify-center

                              flex-1

                              h-8

                              rounded-lg

                              border
                              border-white/10

                              bg-white/[0.05]

                              text-[9px]

                              uppercase

                              tracking-wider

                              text-white/65

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

                          {websiteUrl && (
                            <a
                              href={websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(event) => {
                                event.stopPropagation();
                              }}
                              className="
                                relative
                                z-50

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
                              aria-label={`Visit ${
                                item.brand ||
                                "client"
                              } website`}
                            >
                              ↗
                            </a>
                          )}
                        </div>
                      </div>

                      {/* =================================================
                          CLICK AREA
                      ================================================= */}

                      {websiteUrl ? (
                        <a
                          href={websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${
                            item.brand ||
                            "client"
                          } website`}
                          className="
                            absolute

                            inset-0

                            z-10
                          "
                        />
                      ) : (
                        <Link
                          to={`/portfolio/${
                            item.id || ""
                          }`}
                          aria-label={`View ${
                            item.brand ||
                            "client"
                          } portfolio`}
                          className="
                            absolute

                            inset-0

                            z-10
                          "
                        />
                      )}
                    </motion.article>
                  </motion.div>
                );
              }
            )}
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

            gap-4

            mt-1
          "
        >
          {/* PREVIOUS */}

          <motion.button
            type="button"
            onClick={previousSlide}
            whileHover={{
              scale: 1.08,
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
              gap-1
            "
          >
            {portfolioData.map(
              (item, index) => (
                <button
                  key={
                    item.id ||
                    `dot-${index}`
                  }
                  type="button"
                  onClick={() => {
                    setActiveIndex(
                      index
                    );
                  }}
                  className="p-1"
                  aria-label={`Go to project ${
                    index + 1
                  }`}
                >
                  <motion.span
                    animate={{
                      width:
                        index ===
                        activeIndex
                          ? 26
                          : 5,

                      opacity:
                        index ===
                        activeIndex
                          ? 1
                          : 0.2,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      block

                      h-[5px]

                      rounded-full

                      bg-white
                    "
                  />
                </button>
              )
            )}
          </div>

          {/* NEXT */}

          <motion.button
            type="button"
            onClick={nextSlide}
            whileHover={{
              scale: 1.08,
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

              transition
            "
            aria-label="Next project"
          >
            →
          </motion.button>
        </div>

        {/* =====================================================
            DESKTOP AUTOPLAY
        ===================================================== */}

        {isDesktop && (
          <div
            className="
              mt-6

              flex
              flex-col
              items-center

              gap-2
            "
          >
            <div
              className="
                relative

                w-[120px]
                md:w-[150px]

                h-[2px]

                rounded-full

                bg-white/10

                overflow-hidden
              "
            >
              {!isHovered && (
                <motion.div
                  key={activeIndex}
                  initial={{
                    width: "0%",
                  }}
                  animate={{
                    width: "100%",
                  }}
                  transition={{
                    duration:
                      AUTO_PLAY_TIME /
                      1000,

                    ease: "linear",
                  }}
                  className="
                    absolute

                    left-0
                    top-0
                    bottom-0

                    bg-white/60

                    rounded-full
                  "
                />
              )}
            </div>

            <p
              className="
                text-[8px]

                uppercase

                tracking-[0.35em]

                text-white/20
              "
            >
              {isHovered
                ? "Paused"
                : "Auto play"}
            </p>
          </div>
        )}

        {/* =====================================================
            MOBILE
        ===================================================== */}

        {!isDesktop && (
          <div className="mt-6 text-center">
            <p
              className="
                text-[8px]

                uppercase

                tracking-[0.35em]

                text-white/20
              "
            >
              Swipe to explore
            </p>
          </div>
        )}

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
          {String(
            activeIndex + 1
          ).padStart(2, "0")}

          <span className="mx-2 text-white/10">
            /
          </span>

          {String(total).padStart(
            2,
            "0"
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;