import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    type: string;
    problem: string;
    solution: string;
    tools: string[];
    result: string;
    image: string;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white border border-brand-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-brand-900/90 backdrop-blur text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
            {project.type}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-brand-900 mb-4 group-hover:text-brand-600 transition-colors">
          {project.title}
        </h3>
        
        <div className="space-y-4 mb-8 flex-grow">
          <div>
            <p className="text-[10px] font-bold text-brand-400 uppercase tracking-widest mb-1">Challenge</p>
            <p className="text-sm text-brand-600 leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-brand-400 uppercase tracking-widest mb-1">Solution</p>
            <p className="text-sm text-brand-600 leading-relaxed font-medium">{project.solution}</p>
          </div>
        </div>

        <div className="pt-6 border-t border-brand-50 mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tools.map((tool) => (
              <span key={tool} className="text-[10px] font-mono bg-brand-50 text-brand-500 px-2 py-1 rounded">
                {tool}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="bg-green-50 text-green-700 px-3 py-1 rounded text-xs font-bold">
              {project.result}
            </div>
            <button className="text-brand-900 hover:text-brand-600 transition-colors">
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
