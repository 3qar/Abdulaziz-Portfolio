import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function Contact() {
  return (
    <main className="pt-32 pb-24">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="text-brand-500 font-bold uppercase tracking-widest text-xs mb-4 block">Get in Touch</span>
            <h1 className="text-5xl md:text-6xl font-bold text-brand-900 mb-8">Let's Discuss Your Next Project</h1>
            <p className="text-xl text-brand-600 leading-relaxed mb-12">
              Whether you need a full structural design, a site inspection, or technical consultation, I'm here to provide professional engineering support.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-brand-900 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900 mb-1">Email Me</h4>
                  <p className="text-brand-600">{CONTACT_INFO.EMAIL}</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-brand-900 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900 mb-1">Call / WhatsApp</h4>
                  <p className="text-brand-600">+966 50 000 0000</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-brand-900 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900 mb-1">Location</h4>
                  <p className="text-brand-600">{CONTACT_INFO.LOCATION}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-brand-100 shadow-2xl shadow-brand-900/5">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-400">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-brand-50 border border-brand-100 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-900 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-400">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-brand-50 border border-brand-100 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-900 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-400">Subject</label>
                <select className="w-full bg-brand-50 border border-brand-100 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-900 transition-colors">
                  <option>Structural Design Inquiry</option>
                  <option>Retrofitting Consultation</option>
                  <option>Site Engineering Support</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-400">Message</label>
                <textarea
                  rows={5}
                  className="w-full bg-brand-50 border border-brand-100 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-900 transition-colors resize-none"
                  placeholder="Tell me about your project requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-900 text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-brand-800 transition-all active:scale-[0.98]"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
