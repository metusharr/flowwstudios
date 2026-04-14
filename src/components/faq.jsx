import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "How long will my project take?",
    answer:
      "Project timelines depend on the scope and complexity of the work. A standard website typically takes 3–6 weeks, while mobile app development may take 2–4 months. We provide a clear timeline after understanding your requirements and keep you updated throughout the process.",
  },
  {
    question: "What is your development process?",
    answer:
      "Our process starts with understanding your goals and requirements. We then move to planning, design (UI/UX), development, testing, and final delivery. We ensure client approval at every major stage to guarantee satisfaction.",
  },
  {
    question: " Will I be involved during the project?",
    answer:
      "Yes. We believe in transparent communication and regular updates. You will be involved in key decisions, design approvals, and feedback sessions to ensure the final product meets your expectations.",
  },
  {
    question: " Do you provide post-launch support?",
    answer:
      "Yes, we offer post-launch support and maintenance to ensure your website, app, or digital assets run smoothly. We are available for updates, improvements, and technical assistance after project delivery.",
  },
  {
    question: " What industries do you work with?",
    answer:
      "We work with startups, small businesses, and established brands across various industries. Our team adapts to your specific business needs to deliver customized digital solutions.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  // stagger
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <AnimatedSection>
      <section id="faq" className="py-24 overflow-hidden text-white">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-6"
        >
          <p className="text-purple-400 font-semibold text-2xl mb-3">
            FAQ's
          </p>

          <h2 className="text-4xl md:text-4xl font-light leading-tight">
            Quick Answers to Common <br />
            Questions
          </h2>
        </motion.div>

        {/* FAQ LIST */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="max-w-4xl mx-auto px-6 space-y-6"
        >
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className={`group relative bg-white/5 backdrop-blur-xl 
                           border border-white/10 rounded-2xl 
                           shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                           transition-all duration-300
                           ${isOpen ? "bg-white/10 border-purple-500/30" : ""}`}
              >
                {/* QUESTION */}
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="w-full flex items-center justify-between 
                             px-6 md:px-8 py-5 md:py-6 
                             text-left"
                >
                  <span
                    className={`text-sm md:text-base font-medium transition-colors
                    ${isOpen ? "text-purple-400" : "text-white"}`}
                  >
                    {faq.question}
                  </span>

                  {/* ICON */}
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`text-2xl font-extralight
                    ${isOpen ? "text-purple-400" : "text-white"}`}
                  >
                    +
                  </motion.span>
                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 md:px-8 pb-6 text-sm text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </section>
    </AnimatedSection>
  );
};

export default FAQ;