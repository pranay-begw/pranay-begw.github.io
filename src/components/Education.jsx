import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap } from 'lucide-react';

const Education = () => {
  const educationData = {
    logo: '/gt.png',
    school: 'Georgia Institute of Technology',
    location: 'Atlanta, GA',
    degrees: [
      {
        degree: 'Masters of Science',
        major: 'Machine Learning',
        years: '2024 - 2025'
      },
      {
        degree: 'Bachelors of Science',
        major: 'Computer Science',
        years: '2021 - 2024'
      }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-20"
    >
      <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-700/50 rounded-2xl p-8 hover:border-teal-500/30 transition-colors duration-300">
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Logo Section */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-white rounded-xl p-2 flex items-center justify-center shadow-lg">
              <img
                src={educationData.logo}
                alt={educationData.school}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-grow w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-zinc-700/50 pb-4">
              <div>
                <h2 className="text-2xl font-bold text-zinc-100 mb-1">{educationData.school}</h2>
                <div className="flex items-center text-zinc-400 text-sm">
                  <MapPin className="w-4 h-4 mr-1 text-teal-500/80" />
                  {educationData.location}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {educationData.degrees.map((item, index) => (
                <div key={index} className="flex items-start p-4 rounded-xl bg-zinc-800/30 border border-zinc-700/30 hover:bg-zinc-800/50 transition-colors">
                  <GraduationCap className="w-5 h-5 text-teal-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-200">{item.degree}</h3>
                    <p className="text-zinc-400 text-sm">{item.major}</p>
                    <span className="text-xs text-zinc-500 mt-1 block font-mono">{item.years}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
