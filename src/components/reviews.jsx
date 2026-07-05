import { useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
  useMotionValueEvent,
  animate,
} from "framer-motion";
import AnimatedSection from "./AnimatedSection";

import backgroundimg from "../assets/background.png";

const baseReviews = [
  {
    date: "10.01.2026",
    text:
      "They designed our food website very nicely. The layout and overall look was very clean and easy to use.",
    name: "Mrs. Manjeet Kaur",
    role: "Owner",
    stars: 4,
    accent: ["#e879f9", "#a855f7"],
  },
  {
    date: "10.01.2026",
    text:
      "The team was really good and understanding. They focused on our thought process and delivered good results",
    name: "GMG Infratech.",
    role: "Company",
    stars: 5,
    accent: ["#818cf8", "#6366f1"],
  },
  {
    date: "10.01.2026",
    text:
      "I was worried about timeline. The quality was not compromised and work was very good.",
    name: "Mr. Anuj Prasad",
    role: "Influencer",
    stars: 4,
    accent: ["#f472b6", "#c026d3"],
  },
  {
    date: "10.01.2026",
    text:
      "The team was supporting and professional. It was very easy to communicate with them throughout the project. They understood our requirements very well.",
    name: "Mr. Vinay Kumar",
    role: "Business",
    stars: 4,
    accent: ["#a78bfa", "#7c3aed"],
  },
];

// duplicated for a fuller ring — 8 panels, 45° apart
const reviews = [...baseReviews, ...baseReviews];
const COUNT = reviews.length;
const SEGMENT = 360 / COUNT;

/* ---------- helpers ---------- */

const initials = (name) =>
  name
    .replace(/^(Mr\.|Mrs\.|Ms\.)\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

/* responsive stage geometry */
function useStageGeometry() {
  const [size, setSize] = useState({ 
    radius: 380, 
    cardW: 300, 
    cardH: 310, 
    stage: 520,
    perspective: 1600,
    isMobile: false
  });

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setSize({ 
          radius: 0, 
          cardW: 0, 
          cardH: 0, 
          stage: 0, 
          perspective: 0,
          isMobile: true 
        });
      } else if (w < 640) {
        setSize({ 
          radius: 0, 
          cardW: 0, 
          cardH: 0, 
          stage: 0, 
          perspective: 0,
          isMobile: true 
        });
      } else if (w < 768) {
        setSize({ 
          radius: 0, 
          cardW: 0, 
          cardH: 0, 
          stage: 0, 
          perspective: 0,
          isMobile: true 
        });
      } else if (w < 1024) {
        setSize({ radius: 260, cardW: 240, cardH: 280, stage: 450, perspective: 1300, isMobile: false });
      } else if (w < 1280) {
        setSize({ radius: 340, cardW: 280, cardH: 300, stage: 500, perspective: 1500, isMobile: false });
      } else {
        setSize({ radius: 380, cardW: 300, cardH: 310, stage: 520, perspective: 1600, isMobile: false });
      }
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return size;
}

const norm180 = (a) => ((a % 360) + 540) % 360 - 180;

function targetForIndex(index, current) {
  const base = -index * SEGMENT;
  const diff = norm180(base - current);
  return current + diff;
}

function frontIndexFromRotation(rotation) {
  const idx = Math.round(-rotation / SEGMENT) % COUNT;
  return ((idx % COUNT) + COUNT) % COUNT;
}

/* count-up, once in view */
function CountUp({ to = 30, suffix = "", duration = 1.4 }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started || !ref.current) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return () => controls.stop();
  }, [started, to, suffix, duration]);

  return <span ref={ref}>0{suffix}</span>;
}

/* Mobile Card View - Beautiful & Clean */
function MobileCard({ review, isActive, onFocus, index }) {
  return (
    <motion.div
      className="w-full max-w-sm mx-auto px-3"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.85,
        y: isActive ? 0 : 20
      }}
      transition={{ 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }}
      style={{
        pointerEvents: isActive ? 'auto' : 'none'
      }}
    >
      <div
        className="relative w-full rounded-2xl overflow-hidden
        bg-gradient-to-br from-white/[0.08] to-white/[0.02]
        backdrop-blur-2xl border border-white/10
        shadow-[0_25px_60px_-15px_rgba(30,10,60,0.7)] p-5 sm:p-6
        flex flex-col min-h-[280px] sm:min-h-[320px]"
        style={{
          boxShadow: `0 0 0 1px rgba(255,255,255,0.06), 0 25px 60px -15px rgba(30,10,60,0.7)`,
        }}
      >
        {/* Gradient background accent */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 30% 20%, ${review.accent[0]}33, transparent 70%)`,
          }}
        />

        {/* Border glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-40"
          style={{
            background: `linear-gradient(140deg, ${review.accent[0]}55, transparent 45%)`,
          }}
        />

        {/* Quote mark */}
        <span
          aria-hidden
          className="absolute -top-2 right-3 text-[80px] sm:text-[100px] font-serif text-white/[0.05] leading-none select-none"
        >
          &rdquo;
        </span>

        {/* Date */}
        <div className="relative flex-shrink-0">
          <p className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-purple-300/60 mb-2 sm:mb-3 font-medium">
            {review.date}
          </p>
        </div>

        {/* Review Text */}
        <div className="relative flex-1 min-h-0">
          <p className="text-sm sm:text-base text-gray-100 leading-relaxed line-clamp-4 sm:line-clamp-5">
            {review.text}
          </p>
        </div>

        {/* Footer */}
        <div className="relative flex items-center justify-between pt-3 sm:pt-4 mt-2 border-t border-white/5">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <div
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full text-white text-xs sm:text-sm font-semibold ring-1 ring-white/20 flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${review.accent[0]}, ${review.accent[1]})`,
                boxShadow: `0 4px 14px ${review.accent[1]}66`,
              }}
            >
              {initials(review.name)}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm sm:text-base text-white font-medium leading-tight truncate">
                {review.name}
              </p>
              <p className="text-[11px] sm:text-xs text-gray-400 truncate">
                {review.role}
              </p>
            </div>
          </div>

          <div className="flex gap-0.5 text-xs sm:text-sm flex-shrink-0 ml-2">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={i < review.stars ? "text-yellow-400" : "text-white/15"}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Progress indicator on active card */}
        {isActive && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-purple-500 rounded-full"
            style={{ width: '100%', transformOrigin: 'left' }}
          />
        )}
      </div>
    </motion.div>
  );
}

/* Mobile Navigation */
function MobileNavigation({ currentIndex, total, onPrevious, onNext, onDotClick }) {
  return (
    <div className="flex flex-col items-center gap-4 mt-6 sm:mt-8">
      {/* Dot Indicators */}
      <div className="flex items-center justify-center gap-2 sm:gap-2.5">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onDotClick(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === currentIndex ? 24 : 8,
              height: i === currentIndex ? 3 : 8,
              background: i === currentIndex
                ? "linear-gradient(90deg, #e879f9, #a855f7)"
                : "rgba(255,255,255,0.15)",
            }}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-4">
        <button
          onClick={onPrevious}
          className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
          aria-label="Previous review"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <span className="text-xs text-gray-400 font-medium">
          {currentIndex + 1} / {total}
        </span>

        <button
          onClick={onNext}
          className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
          aria-label="Next review"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* single orbiting glass panel - Desktop */
function OrbitCard({ review, index, rotation, radius, cardW, cardH, onFocus }) {
  const baseAngle = index * SEGMENT;

  const transform = useTransform(rotation, (r) => {
    const a = norm180(baseAngle + r);
    const t = (Math.cos((a * Math.PI) / 180) + 1) / 2;
    const s = 0.68 + 0.34 * t ** 1.4;
    return `rotateY(${baseAngle}deg) translateZ(${radius}px) scale(${s})`;
  });
  const opacity = useTransform(rotation, (r) => {
    const a = norm180(baseAngle + r);
    const t = (Math.cos((a * Math.PI) / 180) + 1) / 2;
    return 0.12 + 0.88 * t ** 2;
  });
  const blur = useTransform(rotation, (r) => {
    const a = norm180(baseAngle + r);
    const t = (Math.cos((a * Math.PI) / 180) + 1) / 2;
    const blurAmount = Math.max(0, (1 - t) * 7);
    return `blur(${blurAmount}px) brightness(${0.45 + 0.55 * t})`;
  });
  const zIndex = useTransform(rotation, (r) => {
    const a = norm180(baseAngle + r);
    return Math.round(Math.cos((a * Math.PI) / 180) * 100);
  });

  return (
    <motion.div
      onClick={() => onFocus(index)}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: cardW,
        height: cardH,
        marginLeft: -cardW / 2,
        marginTop: -cardH / 2,
        transform,
        opacity,
        filter: blur,
        zIndex,
        transformStyle: "preserve-3d",
      }}
      className="cursor-pointer"
    >
      <div
        className="relative w-full h-full rounded-[20px] overflow-hidden
        bg-white/[0.08] backdrop-blur-2xl border border-white/10
        shadow-[0_25px_60px_-15px_rgba(30,10,60,0.7)] p-5
        flex flex-col"
        style={{
          boxShadow: `0 0 0 1px rgba(255,255,255,0.06), 0 25px 60px -15px rgba(30,10,60,0.7)`,
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-[20px] opacity-40"
          style={{
            background: `linear-gradient(140deg, ${review.accent[0]}55, transparent 45%)`,
          }}
        />

        <span
          aria-hidden
          className="absolute -top-1 right-2 text-[60px] font-serif text-white/[0.05] leading-none select-none"
        >
          &rdquo;
        </span>

        <div className="relative flex-shrink-0">
          <p className="text-[9px] tracking-[0.15em] uppercase text-purple-300/60 mb-2 font-medium">
            {review.date}
          </p>
        </div>

        <div className="relative flex-1 min-h-0">
          <p className="text-xs text-gray-200 leading-relaxed line-clamp-4">
            {review.text}
          </p>
        </div>

        <div className="relative flex items-center justify-between pt-3 mt-2 border-t border-white/5">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <div
              className="flex items-center justify-center w-8 h-8 rounded-full text-white text-[10px] font-semibold ring-1 ring-white/20 flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${review.accent[0]}, ${review.accent[1]})`,
                boxShadow: `0 4px 14px ${review.accent[1]}66`,
              }}
            >
              {initials(review.name)}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-white font-medium leading-tight truncate">
                {review.name}
              </p>
              <p className="text-[10px] text-gray-400 truncate">
                {review.role}
              </p>
            </div>
          </div>

          <div className="flex gap-0.5 text-[10px] flex-shrink-0 ml-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={i < review.stars ? "text-yellow-400" : "text-white/15"}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const CustomerReviews = () => {
  const reducedMotion = useReducedMotion();
  const { radius, cardW, cardH, stage, perspective, isMobile } = useStageGeometry();

  const rotation = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  const draggingRef = useRef(false);
  const dragStartX = useRef(0);
  const dragStartRotation = useRef(0);

  const rotationSpeed = useRef(9);

  useEffect(() => {
    const handleResize = () => {
      rotationSpeed.current = window.innerWidth < 1024 ? 6 : 9;
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useAnimationFrame((_, delta) => {
    if (reducedMotion || isPaused || draggingRef.current || isMobile) return;
    rotation.set(rotation.get() + (delta / 1000) * rotationSpeed.current);
  });

  useMotionValueEvent(rotation, "change", (latest) => {
    const idx = frontIndexFromRotation(latest);
    setActiveIndex((prev) => (prev === idx ? prev : idx));
  });

  const snapToNearest = useCallback(() => {
    const idx = frontIndexFromRotation(rotation.get());
    animate(rotation, targetForIndex(idx, rotation.get()), {
      type: "spring",
      stiffness: 120,
      damping: 18,
    });
  }, [rotation]);

  const focusIndex = useCallback(
    (i) => {
      setHasInteracted(true);
      animate(rotation, targetForIndex(i, rotation.get()), {
        type: "spring",
        stiffness: 110,
        damping: 16,
      });
    },
    [rotation]
  );

  const onPointerDown = (e) => {
    if (isMobile) return;
    draggingRef.current = true;
    setHasInteracted(true);
    dragStartX.current = e.clientX;
    dragStartRotation.current = rotation.get();
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };
  const onPointerMove = (e) => {
    const dx = e.clientX - dragStartX.current;
    rotation.set(dragStartRotation.current + dx * 0.35);
  };
  const onPointerUp = () => {
    draggingRef.current = false;
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
    snapToNearest();
  };

  const onKeyDown = (e) => {
    if (isMobile) {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        setMobileActiveIndex((prev) => (prev + 1) % baseReviews.length);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setMobileActiveIndex((prev) => (prev - 1 + baseReviews.length) % baseReviews.length);
      }
      return;
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      focusIndex((activeIndex + 1) % COUNT);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      focusIndex((activeIndex - 1 + COUNT) % COUNT);
    }
  };

  const goToReview = (index) => {
    if (isMobile) {
      setMobileActiveIndex(index);
    } else {
      focusIndex(index);
    }
  };

  // Mobile View - Beautiful & Clean
  if (isMobile) {
    return (
      <AnimatedSection>
        <section
          className="relative overflow-hidden text-white bg-[#0a0712] py-12 sm:py-16"
          style={{ backgroundImage: `url(${backgroundimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0712]/50 to-[#0a0712]" />
          <div className="absolute -top-40 -left-32 w-64 h-64 rounded-full bg-fuchsia-600/20 blur-[80px]" />
          <div className="absolute top-1/2 -right-24 w-56 h-56 rounded-full bg-indigo-700/20 blur-[80px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-10"
            >
              <span className="inline-flex items-center gap-2 text-purple-300 text-xs font-medium mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
                Customer Reviews
              </span>

              <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
                What they{" "}
                <span className="font-semibold bg-gradient-to-r from-fuchsia-400 via-purple-300 to-white bg-clip-text text-transparent">
                  say
                </span>
                ?
              </h2>

              <p className="mt-2 text-gray-400 text-xs">
                <CountUp to={30} suffix="+ reviews" duration={1.6} /> · swipe to explore
              </p>
            </motion.div>

            {/* Cards */}
            <div className="relative max-w-md mx-auto" style={{ minHeight: '340px' }}>
              {baseReviews.map((review, index) => (
                <div
                  key={index}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    pointerEvents: mobileActiveIndex === index ? 'auto' : 'none'
                  }}
                >
                  <MobileCard
                    review={review}
                    isActive={mobileActiveIndex === index}
                    onFocus={() => setMobileActiveIndex(index)}
                    index={index}
                  />
                </div>
              ))}
            </div>

            {/* Navigation */}
            <MobileNavigation
              currentIndex={mobileActiveIndex}
              total={baseReviews.length}
              onPrevious={() => setMobileActiveIndex((prev) => (prev - 1 + baseReviews.length) % baseReviews.length)}
              onNext={() => setMobileActiveIndex((prev) => (prev + 1) % baseReviews.length)}
              onDotClick={(index) => setMobileActiveIndex(index)}
            />
          </div>
        </section>
      </AnimatedSection>
    );
  }

  // Desktop/Tablet view with 3D carousel
  return (
    <AnimatedSection>
      <section
        className="relative bg-repeat bg-cover bg-[center_-3000px] py-16 md:py-20 lg:py-28
        overflow-hidden text-white bg-[#0a0712]"
        style={{ backgroundImage: `url(${backgroundimg})` }}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-40 -left-32 w-[300px] md:w-[420px] h-[300px] md:h-[420px] rounded-full bg-fuchsia-600/20 blur-[80px] md:blur-[120px]"
          animate={reducedMotion ? {} : { x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute top-1/3 -right-24 w-[280px] md:w-[360px] h-[280px] md:h-[360px] rounded-full bg-indigo-700/20 blur-[80px] md:blur-[110px]"
          animate={reducedMotion ? {} : { x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-14 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-purple-300 text-sm sm:text-base md:text-lg font-medium mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
            Customer Reviews
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
            What they{" "}
            <span className="font-semibold bg-gradient-to-r from-fuchsia-400 via-purple-300 to-white bg-clip-text text-transparent">
              say
            </span>
            ?
          </h2>

          <p className="mt-2 sm:mt-3 md:mt-4 text-gray-400 text-xs sm:text-sm md:text-base">
            <CountUp to={30} suffix="+ reviews" duration={1.6} /> · drag the wheel to explore
          </p>
        </motion.div>

        <div
          className="relative mx-auto select-none touch-none px-2 sm:px-4"
          style={{ 
            height: stage, 
            maxWidth: 1100, 
            perspective: perspective 
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onPointerDown={onPointerDown}
          onKeyDown={onKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Customer testimonials, use arrow keys or drag to browse"
        >
          <motion.div
            className="absolute inset-0"
            style={{
              transformStyle: "preserve-3d",
              rotateY: rotation,
            }}
          >
            {reviews.map((review, i) => (
              <OrbitCard
                key={i}
                index={i}
                review={review}
                rotation={rotation}
                radius={radius}
                cardW={cardW}
                cardH={cardH}
                onFocus={focusIndex}
              />
            ))}
          </motion.div>

          {!hasInteracted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              className="pointer-events-none absolute bottom-1 md:bottom-2 left-1/2 -translate-x-1/2 text-[8px] sm:text-[10px] md:text-xs text-gray-400 tracking-wide whitespace-nowrap"
            >
              ← drag to spin →
            </motion.p>
          )}
        </div>

        <div className="relative mt-4 sm:mt-6 md:mt-8 flex items-center justify-center gap-1.5 md:gap-2 px-4">
          {baseReviews.map((_, i) => (
            <button
              key={i}
              aria-label={`Show review ${i + 1}`}
              onClick={() => focusIndex(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: activeIndex % baseReviews.length === i ? 18 : 6,
                background:
                  activeIndex % baseReviews.length === i
                    ? "linear-gradient(90deg,#e879f9,#a855f7)"
                    : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default CustomerReviews;