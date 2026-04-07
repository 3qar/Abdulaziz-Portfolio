import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, HardHat, LogIn, LogOut, User as UserIcon } from 'lucide-react';
import { ROUTES, CONTACT_INFO } from '../constants';
import { cn } from '../lib/utils';
import { auth, googleProvider, signInWithPopup, onAuthStateChanged, User } from '../firebase';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      if (error.code === 'auth/popup-closed-by-user') {
        // User closed the popup, no need to log as error
        console.log("Login popup was closed by the user.");
      } else {
        console.error("Login failed: ", error);
        alert("Login failed. Please try again or check your connection.");
      }
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };

  const navLinks = [
    { name: 'Home', path: ROUTES.HOME },
    { name: 'Projects', path: ROUTES.PROJECTS },
    { name: 'Services', path: ROUTES.SERVICES },
    { name: 'About', path: ROUTES.ABOUT },
    { name: 'Contact', path: ROUTES.CONTACT },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-white/90 backdrop-blur-md border-bottom border-brand-200 py-3 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-brand-900 p-1.5 rounded group-hover:bg-brand-800 transition-colors">
            <HardHat className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-brand-900">
            ENG <span className="text-brand-500 font-light">Abdulaziz Kanaan</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-all hover:text-brand-900 relative group/link',
                location.pathname === link.path ? 'text-brand-900' : 'text-brand-500'
              )}
            >
              {link.name}
              <span className={cn(
                'absolute -bottom-1 left-0 h-0.5 bg-brand-900 transition-all duration-300',
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover/link:w-full'
              )} />
            </Link>
          ))}
          {user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-brand-50 px-3 py-1.5 rounded-lg border border-brand-100">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || ''} className="w-6 h-6 rounded-full" />
                ) : (
                  <UserIcon className="w-4 h-4 text-brand-500" />
                )}
                <span className="text-xs font-bold text-brand-900 hidden lg:block">{user.displayName?.split(' ')[0]}</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-brand-500 hover:text-brand-900 transition-colors p-2"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="text-brand-500 hover:text-brand-900 transition-colors p-2 flex items-center gap-2"
              title="Login"
            >
              <LogIn className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest hidden lg:block">Admin Login</span>
            </button>
          )}
          <a
            href={CONTACT_INFO.WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-900 text-white px-5 py-2 rounded text-sm font-semibold hover:bg-brand-800 transition-all active:scale-95"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-brand-100 shadow-xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg font-medium py-3 px-2 rounded-lg transition-colors',
                    location.pathname === link.path ? 'bg-brand-50 text-brand-900' : 'text-brand-500 hover:bg-brand-50'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              {user ? (
                <button
                  onClick={() => { handleLogout(); setIsOpen(false); }}
                  className="flex items-center gap-3 text-lg font-medium py-3 px-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => { handleLogin(); setIsOpen(false); }}
                  className="flex items-center gap-3 text-lg font-medium py-3 px-2 rounded-lg text-brand-900 hover:bg-brand-50 transition-colors"
                >
                  <LogIn className="w-5 h-5" />
                  Admin Login
                </button>
              )}
              <a
                href={CONTACT_INFO.WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-900 text-white text-center py-3 rounded-lg font-semibold mt-4"
              >
                WhatsApp Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
