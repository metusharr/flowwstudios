// pages/Services.js - Dynamic services page
import React from 'react';

const ServicesPage = () => {
  const servicesData = [
    {
      title: 'UI/UX Design',
      description: 'Pixel-perfect designs that delight users and drive conversions.',
      features: ['Wireframing', 'Prototyping', 'User Testing', 'Responsive Design']
    },
    {
      title: 'Web Development',
      description: 'Modern, scalable web applications built with React and Next.js.',
      features: ['React.js', 'Tailwind CSS', 'Headless CMS', 'Performance Optimization']
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven strategies to grow your online presence.',
      features: ['SEO', 'PPC Advertising', 'Social Media', 'Content Marketing']
    }
  ];

  return (
    <div className="min-h-screen pt-16 px-4">
      <div className="max-w-7xl mx-auto py-24">
        <div className="text-center mb-24">
          <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            Complete digital solutions from design to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-md rounded-3xl p-10 border border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
              <h2 className="text-3xl font-bold text-white mb-6">{service.title}</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
