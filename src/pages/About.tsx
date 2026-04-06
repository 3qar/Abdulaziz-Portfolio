import { motion } from 'motion/react';
import { Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import { SKILLS } from '../constants';

export default function About() {
  return (
    <main className="pt-32 pb-24">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <span className="text-brand-500 font-bold uppercase tracking-widest text-xs mb-4 block">About Me</span>
            <h1 className="text-5xl md:text-6xl font-bold text-brand-900 mb-8">Engineering Precision with a Practical Edge</h1>
            <p className="text-xl text-brand-600 leading-relaxed mb-8">
              I am a Civil Engineer dedicated to the art and science of structural design. My approach combines rigorous mathematical analysis with deep on-site experience to deliver solutions that are not only safe but also buildable and cost-effective.
            </p>
            <p className="text-brand-600 leading-relaxed mb-10">
              Over the past 5 years, I have worked on a diverse range of projects, from high-end residential villas to complex commercial retrofitting. I believe that every structural challenge has an optimal solution waiting to be engineered.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-brand-50 px-6 py-4 rounded-2xl border border-brand-100">
                <p className="text-3xl font-bold text-brand-900 mb-1">30+</p>
                <p className="text-xs text-brand-500 font-bold uppercase tracking-widest">Projects</p>
              </div>
              <div className="bg-brand-50 px-6 py-4 rounded-2xl border border-brand-100">
                <p className="text-3xl font-bold text-brand-900 mb-1">5+</p>
                <p className="text-xs text-brand-500 font-bold uppercase tracking-widest">Years</p>
              </div>
              <div className="bg-brand-50 px-6 py-4 rounded-2xl border border-brand-100">
                <p className="text-3xl font-bold text-brand-900 mb-1">100%</p>
                <p className="text-xs text-brand-500 font-bold uppercase tracking-widest">Success</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] bg-brand-200 rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000"
                alt="Engineer Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-brand-900 rounded-full flex items-center justify-center text-white text-center p-3 sm:p-4 shadow-2xl">
              <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest">Certified Structural Engineer</p>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-900 mb-4">Technical Stack</h2>
            <p className="text-brand-600">The tools and methodologies I use to deliver excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl border border-brand-100 shadow-sm">
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-brand-900" />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-6">Software Proficiency</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.SOFTWARE.map(s => (
                  <span key={s} className="bg-brand-50 text-brand-600 px-3 py-1.5 rounded-lg text-sm font-medium">{s}</span>
                ))}
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-brand-100 shadow-sm">
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-brand-900" />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-6">Engineering Core</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.ENGINEERING.map(s => (
                  <span key={s} className="bg-brand-50 text-brand-600 px-3 py-1.5 rounded-lg text-sm font-medium">{s}</span>
                ))}
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-brand-100 shadow-sm">
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-brand-900" />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-6">Site Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.SITE.map(s => (
                  <span key={s} className="bg-brand-50 text-brand-600 px-3 py-1.5 rounded-lg text-sm font-medium">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h2 className="text-4xl font-bold text-brand-900 mb-16 text-center">Professional Journey</h2>
          <div className="max-w-3xl mx-auto space-y-12">
            {[
              {
                year: '2022 — Present',
                role: 'Senior Structural Engineer',
                company: 'Leading Engineering Firm',
                desc: 'Leading structural design for multi-story residential and commercial projects. Managing site inspections and retrofitting consultations.'
              },
              {
                year: '2019 — 2022',
                role: 'Structural Design Engineer',
                company: 'Design & Consultancy Group',
                desc: 'Specialized in post-tensioned slab design and seismic analysis for high-rise buildings.'
              },
              {
                year: '2018 — 2019',
                role: 'Site Engineer',
                company: 'Construction Contracting Co.',
                desc: 'Supervised execution of structural elements on-site, ensuring strict adherence to shop drawings and quality standards.'
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-8 relative">
                <div className="w-full sm:w-24 shrink-0 text-brand-400 font-bold text-sm pt-1">{item.year}</div>
                <div className="relative pb-8 sm:pb-0">
                  <div className="hidden sm:block absolute top-2 -left-[41px] w-4 h-4 rounded-full bg-brand-900 border-4 border-white shadow-sm z-10" />
                  <div className="hidden sm:block absolute top-2 -left-[33px] w-px h-[calc(100%+48px)] bg-brand-100" />
                  <h4 className="text-xl font-bold text-brand-900 mb-1">{item.role}</h4>
                  <p className="text-brand-500 font-medium text-sm mb-4">{item.company}</p>
                  <p className="text-brand-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
