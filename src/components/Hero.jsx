import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const Hero = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const whatsappMessage = `Hey Floow Studios! 👋

I’m looking to take my business to the next level.

I’d like to explore your services and get a quote.

Could you help me with the best solution for my business?`;

  const whatsappLink = `https://wa.me/919773777618?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative w-full min-h-[650px] sm:min-h-[750px] p-7 md:min-h-[800px] lg:min-h-[calc(100vh-55px)] bg-[#fdfdfc] text-black overflow-hidden">
      {/* TOPOGRAPHIC BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/hero-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      {/* CHARACTER IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 80, scale: 0.94 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute z-20
          right-[-5%]
          bottom-[-30px]
          w-[55%]
          lg:w-[55%]
          xl:w-[53%]
          h-[95%]
          hidden sm:flex
          items-end justify-center
          pointer-events-none
        "
      >
        <img
          src="/character.png"
          alt="3D futuristic digital character"
          className="w-full h-full object-contain object-bottom"
        />
      </motion.div>

      {/* MOBILE CHARACTER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="
          absolute z-10
          bottom-[95px]
          right-[-8%]
          w-[68%]
          h-[300px]
          flex sm:hidden
          items-end justify-center
          pointer-events-none
        "
      >
        <img
          src="/character.png"
          alt="3D futuristic digital character"
          className="w-full h-full object-contain object-bottom"
        />
      </motion.div>

      {/* MAIN CONTENT */}
      <div
        className="mt-7
        max-w-[1440px] mx-auto
        min-h-[650px]
        sm:min-h-[750px]
        md:min-h-[800px]
        lg:min-h-[calc(100vh-55px)]
        flex items-start lg:items-center
        px-5 sm:px-8 md:px-10 lg:px-20
        pt-28 sm:pt-32 md:pt-36 lg:pt-0
        pb-[390px] sm:pb-28 lg:pb-24
      "
      >
        {/* LEFT CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="
            relative z-30
            w-full lg:w-[48%]
            text-left
          "
        >
          {/* LABEL */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 mb-4 sm:mb-5"
          >
            <span className="w-5 h-[3px] bg-[#bd65f5] shrink-0" />

            <span className="text-[11px] sm:text-sm md:text-[15px] font-medium text-black tracking-tight">
              Strategy. UI/UX. Branding. Development
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            variants={fadeUp}
            className="
              text-[32px]
              min-[400px]:text-[36px]
              sm:text-[42px]
              md:text-[48px]
              lg:text-[46px]
              xl:text-[52px]
              font-semibold
              leading-[1.15]
              sm:leading-[1.2]
              tracking-[-1.5px]
              sm:tracking-[-1.8px]
            "
          >
            <span className="block text-[#686868]">From bold ideas to</span>

            <span className="block text-[#686868] mt-1">Brilliant Digital</span>

            <span className="block text-black mt-1">
              Experiences for Brands
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            className="
              mt-4 sm:mt-5
              max-w-[410px]
              text-[13px] sm:text-[14px] md:text-[15px]
              leading-[1.7]
              text-[#777777]
            "
          >
            We design, develop and market experiences for teams building the
            future.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={fadeUp}
            className="
              flex flex-wrap items-center
              gap-2 sm:gap-3
              mt-5 sm:mt-7
            "
          >
            <Link to="/contact" className="max-[380px]:w-full">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="
                  flex items-center justify-center
                  bg-black text-white
                  rounded-full
                  px-5 sm:px-7
                  py-3
                  text-[12px] sm:text-[13px]
                  font-medium
                  min-w-[170px] sm:min-w-[188px]
                  w-full
                "
              >
                Book your service today
              </motion.button>
            </Link>

            <Link to="/services" className="max-[380px]:w-full">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="
                  flex items-center justify-center gap-2
                  bg-[#f2f2f2] hover:bg-[#e9e9e9]
                  text-black
                  rounded-full
                  px-5 sm:px-7
                  py-3
                  text-[12px] sm:text-[13px]
                  font-medium
                  min-w-[135px] sm:min-w-[145px]
                  w-full
                  transition-colors
                "
              >
                View Services
                <span className="text-sm">⊙</span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* BOTTOM CONTACT STRIP */}

      <div className="absolute z-10 bottom-10 left-0 w-full pointer-events-none">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="relative flex flex-col md:flex-row items-center justify-start gap-5 md:gap-10 lg:gap-14 min-h-[85px]">
            {/* CALL */}
            <a
              href="tel:+918448276790"
              className="flex items-center gap-3 group pointer-events-auto shrink-0"
            >
              <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                <Phone size={18} strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-[12px] font-semibold text-black">
                  Call India
                </p>

                <p className="text-[11px] text-gray-500">+91 8448276790</p>
              </div>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919773777618"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 pointer-events-auto shrink-0"
            >
              <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                <MessageCircle size={19} strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-[12px] font-semibold text-black">
                  India WhatsApp
                </p>

                <p className="text-[11px] text-gray-500">+91 9773777618</p>
              </div>
            </a>

            {/* RESPONSE PANEL */}
            <div className="hidden md:flex flex-1 max-w-[510px] h-[55px] items-center gap-3 px-8 bg-gradient-to-r from-purple-50 via-purple-200 to-purple-100 pointer-events-auto">
              <span className="w-3 h-3 rounded-full bg-green-500 shrink-0" />

              <p className="text-[12px] font-medium text-black whitespace-nowrap">
                We usually respond quickly
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* GET A QUOTE */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="
    fixed z-[9999]
    bottom-4 right-3
    sm:bottom-5 sm:right-6
    md:right-8
    bg-black text-white
    rounded-full
    flex items-center gap-2 sm:gap-4
    pl-2 sm:pl-3
    pr-4 sm:pr-7
    py-2
    shadow-xl
    cursor-pointer
  "
      >
        <span
          className="
      w-8 h-8 sm:w-9 sm:h-9
      rounded-full bg-white
      flex items-center justify-center
      text-green-600 text-lg
    "
        >
          <MessageCircle size={19} />
        </span>

        <span className="text-[11px] sm:text-[12px] font-medium">
          Get a quote
        </span>
      </motion.a>
    </section>
  );
};

export default Hero;
