import { motion } from 'motion/react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';

export default function Projects() {
  return (
    <main className="pt-32 pb-24">
      <div className="section-padding">
        <div className="mb-16">
          <span className="text-brand-500 font-bold uppercase tracking-widest text-xs mb-4 block">Case Studies</span>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-900 mb-6">Engineering Portfolio</h1>
          <p className="text-xl text-brand-600 max-w-2xl leading-relaxed">
            A selection of structural design and site engineering projects demonstrating technical precision and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
          
          {/* Placeholder for more projects */}
          <div className="bg-brand-50 border border-dashed border-brand-200 rounded-xl flex flex-col items-center justify-center p-12 text-center min-h-[400px]">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
              <span className="text-2xl font-bold text-brand-300">+</span>
            </div>
            <h3 className="text-lg font-bold text-brand-400 mb-2">More Projects Coming Soon</h3>
            <p className="text-sm text-brand-400 max-w-[200px]">Currently documenting recent structural retrofitting works.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
