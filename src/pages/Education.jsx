import React from 'react';
import EducationComponent from '../components/Education';

import { leadership } from '../data';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto px-4 sm:px-8 py-12 md:py-20 min-h-screen text-zinc-400"
        >
            {/* Header Content */}
            <h2 className="text-2xl font-light text-zinc-400 mb-12 text-center tracking-wide">
                <span className="border-b border-teal-accent/30 pb-2">Education & Leadership</span>
            </h2>

            {/* Education Section */}
            <EducationComponent />

            {/* Leadership Section */}
            {/* Leadership Section - Reduced Prominence */}
            <div className="opacity-90">
                <div className="grid grid-cols-1 gap-4">
                    {leadership.map((lead, index) => (
                        <div key={index} className="bg-zinc-900/40 border border-zinc-700/50 rounded-lg p-5 flex items-center gap-4 hover:bg-zinc-900/60 hover:border-teal-500/30 transition-all duration-300">
                            <div className="w-12 h-12 bg-white rounded-md p-1 flex-shrink-0 flex items-center justify-center">
                                <img src={lead.logo} alt={lead.company} className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="text-zinc-200 font-medium">{lead.role}</h3>
                                <p className="text-zinc-500 text-sm">{lead.company}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Education;
