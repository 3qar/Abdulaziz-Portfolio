import { Link } from 'react-router-dom';
import { HardHat, Mail, MapPin, Phone, Linkedin, Instagram } from 'lucide-react';
import { ROUTES, CONTACT_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-white p-1.5 rounded">
                <HardHat className="w-5 h-5 text-brand-900" />
              </div>
              <span className="font-bold text-xl tracking-tight">
                ENG <span className="text-brand-400 font-light">Abdulaziz Kanaan</span>
              </span>
            </Link>
            <p className="text-brand-400 max-w-sm leading-relaxed mb-8">
              Delivering high-precision structural engineering solutions. Specialized in design optimization, code compliance, and site problem-solving.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/abdulaziz-kanaan-b1b96b378?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-brand-800 flex items-center justify-center hover:bg-white hover:text-brand-900 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-800 flex items-center justify-center hover:bg-white hover:text-brand-900 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-brand-400">
              <li><Link to={ROUTES.HOME} className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to={ROUTES.PROJECTS} className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to={ROUTES.SERVICES} className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to={ROUTES.ABOUT} className="hover:text-white transition-colors">About Me</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-brand-400">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{CONTACT_INFO.EMAIL}</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{CONTACT_INFO.LOCATION}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+966 56 330 56163</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-500 text-xs">
            © {new Date().getFullYear()} ENG Abdulaziz Kanaan. All rights reserved.
          </p>
          <div className="flex gap-6 text-brand-500 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
