import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [headlineIndex, setHeadlineIndex] = useState(0);

  const headlines = useMemo(
    () => [
      'I build web experiences with precision.',
      'I craft clean, responsive product interfaces.',
      'I turn ideas into elegant front-end systems.',
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const id = window.setInterval(() => {
      setHeadlineIndex((current) => (current + 1) % headlines.length);
    }, 2800);

    return () => window.clearInterval(id);
  }, [headlines.length]);

  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <header id="header" className="relative min-h-screen overflow-hidden bg-[#050506]">
      {/* Background image — dark abstract light streaks */}
      {/* Background image — dark dev setup with code on screens */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1920&auto=format&fit=crop)',
        }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/55" />
      {/* Warm accent gradient washes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(250,204,21,0.13),transparent_50%),radial-gradient(ellipse_at_75%_70%,rgba(250,204,21,0.09),transparent_50%)]" />
      {/* Film grain texture */}
      <div className="hero-noise absolute inset-0 opacity-[0.025]" />
      {/* Edge vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,5,6,0.9)_100%)]" />

      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#060607]/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="section-shell flex h-20 items-center justify-between">
          <a href="#" className="font-accent text-3xl font-extrabold tracking-tight text-white transition-all duration-300 hover:scale-[1.04] md:text-4xl">
            <span className="text-yellow-400">S</span>erene<span className="text-yellow-400">.</span>
          </a>

          <div className="hidden md:flex">
            <div className="flex items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.04] px-1.5 py-1.5 backdrop-blur-md">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                  className="relative rounded-full px-4 py-1.5 font-heading text-[13px] font-medium text-gray-300 transition-all duration-300 hover:bg-white/[0.08] hover:text-yellow-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="rounded-full border border-white/15 bg-white/[0.04] p-2.5 text-white backdrop-blur-md transition-all duration-300 hover:border-yellow-300/30 hover:bg-white/[0.08] md:hidden"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="section-shell pb-4 md:hidden">
            <div className="rounded-2xl border border-white/10 bg-[#0a0b0e]/95 p-4 backdrop-blur-2xl">
              <ul className="space-y-1 font-heading text-[15px] text-white">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-xl px-4 py-2.5 transition-all duration-200 hover:bg-white/[0.06] hover:text-yellow-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>

      <div className="section-shell relative z-10 flex min-h-screen items-center pt-24">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-300/35 bg-yellow-300/10 px-4 py-2 font-heading text-xs font-medium tracking-[0.15em] text-yellow-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-yellow-300 animate-pulse" />
            FRONTEND DEVELOPER
          </p>

          <h1 className="font-accent text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I am <span className="text-shimmer">Serene</span>
          </h1>

          <div className="mt-5 min-h-[3rem] overflow-hidden">
            <AnimatePresence mode="wait">
              <Motion.p
                key={headlineIndex}
                initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-body text-xl text-gray-200 md:text-2xl"
              >
                {headlines[headlineIndex]}
              </Motion.p>
            </AnimatePresence>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="accent-ring rounded-xl bg-yellow-300 px-7 py-3.5 font-heading text-sm font-semibold tracking-wide text-black transition-all duration-300 hover:scale-[1.03] hover:bg-yellow-200 hover:shadow-[0_0_24px_rgba(250,204,21,0.25)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/30 px-7 py-3.5 font-heading text-sm font-medium tracking-wide text-white transition-all duration-300 hover:border-yellow-300/60 hover:bg-yellow-300/5 hover:text-yellow-200"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <a
              href="https://github.com/ubet123/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:border-yellow-300 hover:bg-yellow-300/15 hover:text-yellow-300 hover:shadow-[0_0_18px_rgba(250,204,21,0.15)]"
              aria-label="GitHub"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/serene-dmello-572605344/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:border-yellow-300 hover:bg-yellow-300/15 hover:text-yellow-300 hover:shadow-[0_0_18px_rgba(250,204,21,0.15)]"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-lg" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <a href="#about" className="animate-scroll-hint inline-flex flex-col items-center gap-1 text-white/50 transition-colors hover:text-yellow-300" aria-label="Scroll down">
          <span className="font-heading text-[10px] font-medium tracking-[0.2em] uppercase">Scroll</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
