import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    const navItems = [
        { label: 'Experience', to: 'experience' },
        { label: 'Projects', to: 'projects' },
        { label: 'Education', to: 'education' },
    ];

    return (
        <div className="min-h-screen flex flex-col justify-center items-center md:items-start px-4 sm:px-8 max-w-4xl mx-auto h-[90vh]">
            <div className="space-y-6 flex flex-col items-center text-center md:items-start md:text-left">
                {/* Header Info */}
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-teal-accent tracking-tight rounded-full">
                        Pranay Begwani
                    </h1>
                </div>

                {/* Navigation Links */}
                <nav className="py-8">
                    <ul className="space-y-4 flex flex-col items-center md:items-start">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <Link
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    className="group flex items-center space-x-4 text-zinc-400 hover:text-teal-accent transition-colors duration-300 cursor-pointer"
                                >
                                    <span className="h-px w-8 bg-zinc-600 group-hover:w-16 group-hover:bg-teal-accent transition-all duration-300"></span>
                                    <span className="text-lg uppercase tracking-widest font-bold">
                                        {item.label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Social Links */}
                <div className="flex gap-6 pt-4 justify-center md:justify-start">
                    <a href="https://github.com/pranay-begw" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-teal-accent transition-colors">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://linkedin.com/in/pranay-begwani" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-teal-accent transition-colors">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://x.com/PranayBegwani" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-teal-accent transition-colors">
                        <Twitter className="w-6 h-6" />
                    </a>
                    <a href="mailto:pranaybegwani@gmail.com" className="text-zinc-400 hover:text-teal-accent transition-colors">
                        <Mail className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
