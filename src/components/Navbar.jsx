import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { 
          offset: 0,
          duration: 1.5, 
          easing: (t) => 1 - Math.pow(1 - t, 4) // Quartic ease out for butter smooth finish
        });
      } else {
        const y = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? 'glass py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight font-display text-faang-text relative z-[65]">
            Vanit Dantani
          </a>

          {/* Right Side: Desktop Nav & Actions */}
          <div className="flex items-center gap-4 relative z-[65]">
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8 mr-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative text-sm font-medium text-faang-text-muted hover:text-faang-text transition-colors group py-2"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-faang-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 ease-out shadow-[0_0_8px_rgba(0,112,243,0.8)] rounded-full"></span>
                </a>
              ))}
            </div>

            {/* Theme Toggle Button (Premium Squircle) */}
            <button
              className="w-10 h-10 flex items-center justify-center rounded-[12px] bg-faang-surface/50 border border-faang-border hover:border-faang-accent/50 hover:bg-faang-surface text-faang-text-muted hover:text-faang-accent transition-all duration-300 shadow-sm overflow-hidden"
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {isDarkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={18} strokeWidth={2.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={18} strokeWidth={2.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile Nav Toggle */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-[12px] bg-faang-surface/50 border border-faang-border text-faang-text hover:border-faang-accent/50 hover:text-faang-accent transition-all shadow-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <motion.div
                key={isMobileMenuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Glowing Blurry Bottom Line (Always Visible) */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-faang-accent to-transparent transition-opacity duration-500 blur-[2px] opacity-100"
        ></div>
        <div 
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-opacity duration-500 opacity-100"
        ></div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-faang-bg/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden h-[100dvh] w-screen"
          >
            <div className="flex flex-col items-center justify-center space-y-6 w-full px-8 mt-10">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-3xl sm:text-4xl font-bold tracking-tight text-faang-text hover:text-faang-accent transition-colors w-full text-center py-4 border-b border-faang-border/30 last:border-0"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
