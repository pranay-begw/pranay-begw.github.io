import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';
import { motion } from 'framer-motion';

const Projects = () => {
    // Animation variants for container and children
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto px-4 sm:px-8 py-12 md:py-20 min-h-screen text-zinc-400"
        >
            <h2 className="text-2xl font-light text-zinc-400 mb-12 text-center tracking-wide">
                <span className="border-b border-teal-accent/30 pb-2">Featured Projects</span>
            </h2>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            >
                {projects.map((project, index) => (
                    <motion.div key={index} variants={item}>
                        <ProjectCard
                            title={project.title}
                            techStack={project.techStack}
                            description={project.description}
                            features={project.features}
                            liveUrl={project.liveUrl}
                            githubUrl={project.githubUrl}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Projects;
