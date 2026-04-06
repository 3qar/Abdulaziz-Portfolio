import ServiceCard from '../components/ServiceCard';
import { SERVICES } from '../constants';

export default function Services() {
  return (
    <main className="pt-32 pb-24">
      <div className="section-padding">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-brand-500 font-bold uppercase tracking-widest text-xs mb-4 block">Expertise</span>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-900 mb-6">Specialized Engineering Services</h1>
          <p className="text-xl text-brand-600 leading-relaxed">
            Providing high-end technical solutions for structural design and site engineering, ensuring safety, compliance, and optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className="mt-32 bg-brand-900 rounded-[40px] p-12 md:p-20 text-white overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Technical Standards & Codes</h2>
              <p className="text-brand-300 mb-10 leading-relaxed">
                All engineering works are performed in strict accordance with international and local building codes to ensure the highest safety standards.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  'SBC (Saudi Building Code)',
                  'ACI 318 (Concrete Design)',
                  'ASCE 7 (Loads)',
                  'AISC (Steel Design)',
                  'ASTM Standards',
                  'BS Standards'
                ].map((code) => (
                  <div key={code} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                    <span className="text-sm font-medium text-brand-200">{code}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center p-6 text-center">
                <p className="text-3xl font-bold mb-1">100%</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-400">Compliance</p>
              </div>
              <div className="aspect-square bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center p-6 text-center">
                <p className="text-3xl font-bold mb-1">0</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-400">Safety Incidents</p>
              </div>
              <div className="aspect-square bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center p-6 text-center">
                <p className="text-3xl font-bold mb-1">15%</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-400">Avg. Optimization</p>
              </div>
              <div className="aspect-square bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center p-6 text-center">
                <p className="text-3xl font-bold mb-1">24/7</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-400">Site Support</p>
              </div>
            </div>
          </div>
          
          {/* Decorative background circle */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-800 rounded-full blur-3xl opacity-20" />
        </div>
      </div>
    </main>
  );
}
