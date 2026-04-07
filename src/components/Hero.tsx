import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden technical-grid">
      {/* Background Visuals */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-900/5 -skew-x-12 transform translate-x-1/4 z-0" />
      
      <div className="section-padding relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold tracking-widest uppercase mb-6">
              Structural & Site Engineering
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-brand-900 leading-[1.1] tracking-tight mb-8">
              Civil Engineer Specialized in <span className="text-brand-600">Structural Design</span> & Site Solutions
            </h1>
            <p className="text-xl text-brand-600 leading-relaxed mb-10 max-w-2xl">
              Delivering safe, optimized, and cost-efficient structural systems for residential, commercial, and industrial projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={ROUTES.PROJECTS}
                className="group bg-brand-900 text-white px-8 py-4 rounded font-bold flex items-center justify-center gap-2 hover:bg-brand-800 transition-all shadow-lg shadow-brand-900/10 active:scale-95"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={ROUTES.CONTACT}
                className="bg-white text-brand-900 border border-brand-200 px-8 py-4 rounded font-bold flex items-center justify-center gap-2 hover:bg-brand-50 transition-all active:scale-95"
              >
                Contact Me
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 flex items-center gap-8 border-t border-brand-200 pt-8"
          >
            <div>
              <p className="text-3xl font-bold text-brand-900">1+</p>
              <p className="text-xs text-brand-500 uppercase tracking-wider font-semibold">Year Experience</p>
            </div>
            <div className="w-px h-10 bg-brand-200" />
            <div>
              <p className="text-3xl font-bold text-brand-900">100%</p>
              <p className="text-xs text-brand-500 uppercase tracking-wider font-semibold">Code Compliance</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 aspect-square border-l border-t border-brand-200 rounded-tl-[100px] -mr-20 opacity-50" />
    </section>
  );
}
