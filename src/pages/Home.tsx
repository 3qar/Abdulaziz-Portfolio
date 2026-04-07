import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import { PROJECTS, SERVICES, ROUTES } from '../constants';

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Featured Projects Section */}
      <section className="section-padding">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <span className="text-brand-500 font-bold uppercase tracking-widest text-xs mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-900">Featured Projects</h2>
          </div>
          <Link
            to={ROUTES.PROJECTS}
            className="group flex items-center gap-2 text-brand-900 font-bold hover:text-brand-600 transition-colors"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-brand-900 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="text-brand-400 font-bold uppercase tracking-widest text-xs mb-4 block">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Engineering Services</h2>
            <p className="text-brand-400 max-w-2xl mx-auto">
              Specialized technical solutions for complex structural challenges, ensuring safety and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-500 font-bold uppercase tracking-widest text-xs mb-4 block">Value Proposition</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-900 mb-8">Why Partner With Me?</h2>
            
            <div className="space-y-8">
              {[
                {
                  title: 'Data-Driven Design',
                  desc: 'Utilizing advanced modeling software for precise analysis and optimization.'
                },
                {
                  title: 'Strict Code Compliance',
                  desc: 'Adhering to SBC, ACI, and ASCE standards for maximum safety and reliability.'
                },
                {
                  title: 'Practical Site Experience',
                  desc: 'Bridging the gap between theoretical design and on-site execution realities.'
                },
                {
                  title: 'Cost-Efficient Solutions',
                  desc: 'Optimizing material usage without compromising structural integrity.'
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-brand-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-900 mb-1">{item.title}</h4>
                    <p className="text-brand-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-brand-100 rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000"
                alt="Engineering Site"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-4 sm:-left-8 bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-brand-100 max-w-[240px] sm:max-w-xs">
              <p className="text-brand-900 font-bold text-base sm:text-lg mb-2 italic">"Engineering is not just about calculations; it's about solving real-world problems efficiently."</p>
              <p className="text-brand-500 text-[10px] font-bold uppercase tracking-widest">— ENG Abdulaziz Kanaan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-50 py-24 border-y border-brand-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-900 mb-8">Have a project in mind? Let's discuss the engineering solutions.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={ROUTES.CONTACT}
              className="bg-brand-900 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-brand-800 transition-all shadow-xl shadow-brand-900/20 active:scale-95"
            >
              Start a Conversation
            </Link>
            <a
              href="mailto:Abdulazizkanan@hotmail.com"
              className="bg-white text-brand-900 border border-brand-200 px-10 py-4 rounded-lg font-bold text-lg hover:bg-brand-50 transition-all active:scale-95"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
