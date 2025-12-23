import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ title, description, techStack, features, liveUrl, githubUrl }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Handle techStack being a string or array
  const tags = Array.isArray(techStack) ? techStack : (techStack ? techStack.split(', ') : []);
  const visibleTags = isExpanded ? tags : tags.slice(0, 6);

  return (
    <div className="flex flex-col h-full w-full bg-zinc-900/40 backdrop-blur-md border border-zinc-700/50 hover:bg-zinc-900/60 hover:border-teal-500/30 rounded-2xl p-8 shadow-2xl transition-all duration-300">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-teal-accent">
          {title}
        </h3>
      </div>

      <p className="text-lg text-zinc-300 mb-6 flex-grow">
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="space-y-3 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-teal-accent rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-zinc-300 text-sm">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2 mb-8">
        {visibleTags.map((tag, idx) => (
          <span key={idx} className="bg-teal-900/30 text-teal-200 px-3 py-1 rounded-full text-xs font-medium border border-teal-700/50">
            {tag}
          </span>
        ))}

        {tags.length > 6 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-xs font-medium border border-zinc-700 hover:bg-zinc-700 hover:text-white transition-colors cursor-pointer"
          >
            {isExpanded ? 'Show Less' : `+${tags.length - 6} more`}
          </button>
        )}
      </div>

      <div className="flex gap-6 mt-auto pt-4 border-t border-zinc-700/50">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium transition text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 hover:text-zinc-300 font-medium transition text-sm"
          >
            <Github className="w-4 h-4" />
            Source Code
          </a>
        )}
      </div>
    </div>
  );
}
