import React from 'react';
import ExperienceTimeline from '../components/ExperienceTimeline';
import { experiences } from '../data';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto px-4 sm:px-8 py-12 md:py-20 min-h-screen text-zinc-400"
        >
            {/* Header Content */}

            {/* Header Content */}

            <div className="mb-16">
                <h2 className="text-2xl font-light text-zinc-400 mb-12 text-center tracking-wide">
                    <span className="border-b border-teal-accent/30 pb-2">Experience</span>
                </h2>
                <ExperienceTimeline experiences={experiences} />
            </div>
        </motion.div>
    );
};

export default Experience;
