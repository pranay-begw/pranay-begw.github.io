import React from 'react';
import Hero from '../components/Hero';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pb-24"
        >
            <section id="hero">
                <Hero />
            </section>

            <section id="experience" className="py-20">
                <Experience />
            </section>

            <section id="projects" className="py-20">
                <Projects />
            </section>

            <section id="education" className="py-20">
                <Education />
            </section>
        </motion.div>
    );
};

export default Home;
