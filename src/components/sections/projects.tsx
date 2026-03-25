"use client";

import { projects } from "@/data/portfolio";
import Image from "next/image";
import { useState } from "react";
import { Github, ExternalLink } from "lucide-react"; 

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] -z-10" />

      {/* Changed to max-w-6xl for better centering and breathing room */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group flex flex-col h-full rounded-2xl border border-gray-800 bg-[#0B0F1A] overflow-hidden transition-all duration-300 hover:border-blue-500/50">
      <div className="relative aspect-video w-full overflow-hidden border-b border-gray-800">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-900 text-gray-700 text-[10px]">
            Preview Coming Soon
          </div>
        )}
      </div>

      {/* Reduced padding from p-6 to p-5 */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title: Changed text-3xl to text-xl */}
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        {/* Description: text-sm to text-xs with relaxed leading for readability */}
        <p className={`text-gray-400 text-xs leading-relaxed mb-1 ${!isExpanded ? 'line-clamp-3' : ''}`}>
          {project.description}
        </p>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 hover:text-blue-400 text-[10px] font-bold uppercase tracking-wider mb-4 text-left"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>

        {/* Tech Stack - Smaller badges and text */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack?.slice(0, 5).map((tech: string) => (
            <span key={tech} className="bg-blue-500/5 px-2 py-0.5 rounded border border-blue-500/10 text-blue-400/80 text-[9px] font-medium uppercase">
              {tech}
            </span>
          ))}
          {project.techStack?.length > 5 && (
            <span className="text-[9px] text-gray-600 self-center">+{project.techStack.length - 5}</span>
          )}
        </div>

        {/* Action Buttons - Scaled text to text-xs */}
        <div className="mt-auto flex items-center gap-2">
          <a
            href={project.link.url}
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all active:scale-95"
          >
            {project.link.label} <ExternalLink className="w-3.5 h-3.5" />
          </a>
          
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="p-2 text-gray-400 bg-gray-800/50 rounded-lg hover:text-white transition-all border border-gray-700 active:scale-95"
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}