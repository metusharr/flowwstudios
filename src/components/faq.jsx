import { useState } from "react";

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
  const [active, setActive] = useState(); // second item open by default

  return (
    <section id="faq" className=" py-24 overflow-hidden text-white">

      {/* HEADER */}
      <div className="text-center mb-16 px-6">
        <p className="text-purple-400 font-medium mb-3">
          FAQ's
        </p>

        <h2 className="text-4xl md:text-5xl font-light leading-tight">
          Quick Answers to Common <br />
          Questions
        </h2>
      </div>

      {/* FAQ LIST */}
      <div className="max-w-4xl mx-auto px-6 space-y-6">

        {faqs.map((faq, index) => {
          const isOpen = active === index;

          return (
            <div
              key={index}
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
                <span
                  className={`text-2xl transition-transform font-extralight duration-300
                  ${isOpen ? "rotate-45 text-purple-400" : "text-white"}`}
                >
                  +
                </span>
              </button>

              {/* ANSWER */}
              <div
                className={`grid transition-all duration-500 ease-in-out
                ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 md:px-8 pb-6 text-sm text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

      </div>

      
    </section>
  );
};

export default FAQ;
