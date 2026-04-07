import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, Wrench, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: string;
    title: string;
    type: string;
    problem: string;
    solution: string;
    tools: string[];
    result: string;
    image: string;
    additionalImages?: string[];
    details?: string;
    location?: string;
    date?: string;
    design?: 'classic' | 'modern' | 'gallery';
  } | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  const design = project.design || 'classic';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-900/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="absolute top-6 right-6 z-10">
              <button
                onClick={onClose}
                className="p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all hover:scale-110 active:scale-95"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="overflow-y-auto flex-grow custom-scrollbar">
              {/* Hero Image */}
              <div className="relative h-[40vh] sm:h-[50vh]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-500 text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                    {project.type}
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-6 text-brand-200 text-sm">
                    {project.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </div>
                    )}
                    {project.date && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {project.date}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Content based on design */}
              <div className="p-8 sm:p-12">
                <div className={cn(
                  "grid gap-12",
                  design === 'modern' ? "grid-cols-1 lg:grid-cols-3" : "grid-cols-1 lg:grid-cols-2"
                )}>
                  <div className={cn(design === 'modern' ? "lg:col-span-2" : "")}>
                    <section className="mb-12">
                      <h3 className="text-xl font-bold text-brand-900 mb-4 flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-brand-500 rounded-full" />
                        Project Overview
                      </h3>
                      <p className="text-brand-600 leading-relaxed text-lg">
                        {project.details || "No detailed description provided."}
                      </p>
                    </section>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100">
                        <h4 className="font-bold text-brand-900 mb-3 uppercase tracking-widest text-xs">The Challenge</h4>
                        <p className="text-sm text-brand-600 leading-relaxed">{project.problem}</p>
                      </div>
                      <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100">
                        <h4 className="font-bold text-brand-900 mb-3 uppercase tracking-widest text-xs">The Solution</h4>
                        <p className="text-sm text-brand-600 leading-relaxed font-medium">{project.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-white p-8 rounded-2xl border border-brand-100 shadow-sm">
                      <h4 className="font-bold text-brand-900 mb-6 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        Key Result
                      </h4>
                      <div className="text-2xl font-bold text-brand-900 mb-2">
                        {project.result}
                      </div>
                      <p className="text-sm text-brand-500">Achieved through rigorous analysis and site supervision.</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-brand-900 mb-4 uppercase tracking-widest text-xs">Technical Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span key={tool} className="bg-brand-50 text-brand-600 px-3 py-1.5 rounded-lg text-sm font-medium border border-brand-100">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Images */}
                {project.additionalImages && project.additionalImages.length > 0 && (
                  <div className="mt-16">
                    <h3 className="text-xl font-bold text-brand-900 mb-8">Project Gallery</h3>
                    <div className={cn(
                      "grid gap-4",
                      design === 'gallery' ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"
                    )}>
                      {project.additionalImages.map((img, i) => (
                        <div key={i} className="aspect-video rounded-2xl overflow-hidden bg-brand-100">
                          <img
                            src={img}
                            alt={`${project.title} gallery ${i}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
