import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/miniai.to?igsh=dnpydmc3aGQwY2Fr',
      label: 'Instagram'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/mini-ai/',
      label: 'LinkedIn'
    }
  ];

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'mission', label: 'Message' },
    { id: 'executives', label: 'Executives' },
    { id: 'partners', label: 'Partners' },
    { id: 'events', label: 'Events' }
  ];

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${
      isScrolled || isMenuOpen ? 'bg-black/90 backdrop-blur-xl py-2 border-b border-white/10' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center gap-4">
          <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2">
            <img
              src="/miniAIhorizontal.png"
              alt="MiniAI"
              className="h-14 md:h-16"
              loading="lazy"
            />
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-green-400 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-green-400 transition-colors capitalize"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://miniai-learn.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-green-400 text-black font-semibold hover:bg-green-300 transition-colors"
            >
              Start Learning
            </a>
            <div className="flex items-center space-x-4 border-l border-green-400/20 pl-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={`md:hidden absolute top-full left-0 right-0 bg-black border-t border-green-400/20 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="flex flex-col space-y-4 px-4 py-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-green-400 transition-colors capitalize text-left py-2"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://miniai-learn.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-green-400 text-black font-semibold hover:bg-green-300 transition-colors"
            >
              Start Learning
            </a>
            <div className="flex items-center space-x-6 pt-4 border-t border-green-400/20">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-400 transition-colors flex items-center space-x-2"
                >
                  <social.icon size={20} />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
