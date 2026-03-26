import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import CeoMessage from './sections/CeoMessage';
import Mission from './sections/Mission';
import Executives from './sections/Executives';
import Partners from './sections/Partners';
import Events from './sections/Events';

const CTASection = ({ id }: { id: string }) => (
  <section id={id} className="py-10 md:py-14 bg-black/95 border-y border-white/10" data-reveal>
    <div className="container mx-auto px-4 text-center">
      <a
        href="https://learn.miniai.ca"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-green-400 text-black font-semibold hover:bg-green-300 transition-colors duration-300"
      >
        Start Learning
      </a>
    </div>
  </section>
);

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -35% 0px' }
    );

    const revealElements = document.querySelectorAll('[data-reveal], .reveal');
    revealElements.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const next = total > 0 ? (window.scrollY / total) * 100 : 0;
      setScrollProgress(next);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="fixed top-0 left-0 z-[60] h-1 bg-green-400/90 transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
      <Navbar />
      <main className="overflow-hidden">
        <Home />
        <CTASection id="cta-after-hero" />
        <Mission />
        <CTASection id="cta-after-product" />
        <CeoMessage />
        <Executives />
        <CTASection id="cta-midway" />
        <Partners />
        <Events />
        <CTASection id="cta-before-footer" />
      </main>

      <a
        href="https://learn.miniai.ca"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-4 left-4 right-4 z-50 py-3 text-center rounded-full bg-green-400 text-black font-semibold shadow-lg shadow-green-400/25"
      >
        Start Learning
      </a>

      <Footer />
    </div>
  );
}

export default App;
