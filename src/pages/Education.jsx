import React, { useState } from 'react';
import EducationComponent from '../components/Education';

import { leadership } from '../data';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const Education = () => {
    const [selectedLead, setSelectedLead] = useState(null);

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
            <div className="opacity-90">
                <div className="grid grid-cols-1 gap-4">
                    {leadership.map((lead, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900/40 border border-zinc-700/50 rounded-lg p-5 flex items-center gap-4 hover:bg-zinc-900/60 hover:border-teal-500/30 transition-all duration-300 cursor-pointer"
                            onClick={() => setSelectedLead(lead)}
                        >
                            <div className="w-12 h-12 bg-white rounded-md p-1 flex-shrink-0 flex items-center justify-center">
                                <img src={lead.logo} alt={lead.company} className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="text-zinc-200 font-medium">{lead.role}</h3>
                                <p className="text-zinc-500 text-sm">{lead.company}</p>
                                {lead.date && <p className="text-zinc-600 text-xs mt-0.5">{lead.date}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedLead && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                    onClick={() => setSelectedLead(null)}
                >
                    <div
                        className="bg-zinc-900 border border-zinc-700/50 rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-md p-1 flex-shrink-0 flex items-center justify-center">
                                    <img src={selectedLead.logo} alt={selectedLead.company} className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-teal-accent">{selectedLead.company}</h3>
                                    <p className="text-zinc-400 text-sm">{selectedLead.role}</p>
                                    {selectedLead.date && <p className="text-zinc-500 text-xs">{selectedLead.date}</p>}
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedLead(null)}
                                className="text-zinc-400 hover:text-white transition-colors cursor-pointer ml-4 flex-shrink-0"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <ul className="space-y-3">
                            {selectedLead.bullets.map((bullet, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-teal-accent rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-zinc-300 text-sm">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default Education;
