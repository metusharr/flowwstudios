import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

const ServicesPage = () => {
  const servicesData = [
    {
      title: "UI/UX Design",
      description:
        "Pixel-perfect designs that delight users and drive conversions.",
      features: [
        "Wireframing",
        "Prototyping",
        "User Testing",
        "Responsive Design",
      ],
    },
    {
      title: "Web Development",
      description:
        "Modern, scalable web applications built with React and Next.js.",
      features: [
        "React.js",
        "Tailwind CSS",
        "Headless CMS",
        "Performance Optimization",
      ],
    },
    {
      title: "Digital Marketing",
      description:
        "Data-driven strategies to grow your online presence.",
      features: [
        "SEO",
        "PPC Advertising",
        "Social Media",
        "Content Marketing",
      ],
    },
  ];

  // 🔥 stagger animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <AnimatedSection>
      <div className="min-h-screen pt-16 px-4">
        <div className="max-w-7xl mx-auto py-24">

          {/* HEADER */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={container}
            className="text-center mb-24"
          >
            <motion.h1
              variants={fadeUp}
              className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
            >
              Our Services
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto"
            >
              Complete digital solutions from design to deployment.
            </motion.p>
          </motion.div>

          {/* CARDS */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="grid md:grid-cols-3 gap-8"
          >
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-slate-900/50 backdrop-blur-md rounded-3xl p-10 border border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold text-white mb-6"
                >
                  {service.title}
                </motion.h2>

                <p className="text-gray-400 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <span className="text-green-400 mr-3">✓</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServicesPage;