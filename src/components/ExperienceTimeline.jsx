import React from 'react';
import { motion } from 'framer-motion';

const ExperienceTimeline = ({ experiences }) => {
  return (
    <div className="relative max-w-5xl mx-auto py-10 px-4">
      {/* Central Line (Desktop) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-accent/20 hidden md:block" />

      {/* Left Line (Mobile) */}
      <div className="absolute left-6 top-10 h-full w-1 bg-teal-accent/20 md:hidden" />

      <div className="space-y-12 md:space-y-24">
        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`relative flex flex-col md:flex-row md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Mobile Node */}
              <div className="absolute left-[1.5rem] -translate-x-1/2 flex items-center justify-center md:hidden z-10 w-12 h-12 bg-dark-bg border-2 border-teal-accent rounded-full p-1 shadow-lg">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-full h-full object-contain rounded-full bg-white p-0.5"
                />
              </div>

              {/* Content Card (Left or Right) */}
              <div className="w-full pl-16 md:pl-0 md:w-5/12 mb-8 md:mb-0 relative">
                <div
                  className="bg-zinc-900/40 backdrop-blur-md p-6 rounded-xl border border-zinc-700/50 shadow-lg hover:border-teal-500/30 transition-all duration-300 text-left"
                >
                  <h3 className="text-xl font-bold text-teal-accent mb-1">{exp.role}</h3>
                  <h4 className="text-lg text-zinc-200 mb-2">{exp.company}</h4>
                  <p className="text-sm text-zinc-400 mb-4">{exp.location} | {exp.date}</p>

                  <ul className="space-y-2 text-zinc-300 text-sm list-none items-start flex flex-col">
                    {Array.isArray(exp.details) ? (
                      exp.details.map((detail, idx) => (
                        <li key={idx} className="relative">
                          {detail}
                        </li>
                      ))
                    ) : (
                      <li>{exp.details}</li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Center Logo Node (Desktop Only) */}
              <div className="w-full md:w-2/12 hidden md:flex justify-center items-center my-4 md:my-0 relative z-10">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-teal-accent/20 rounded-full blur-md" />

                  <div className="relative w-20 h-20 bg-dark-bg border-4 border-teal-accent rounded-full flex items-center justify-center p-2 shadow-xl hover:scale-110 transition-transform duration-300">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-contain rounded-full bg-white p-1"
                    />
                  </div>
                </div>
              </div>

              {/* Empty Space for the other side */}
              <div className="w-full md:w-5/12 hidden md:block" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceTimeline;


