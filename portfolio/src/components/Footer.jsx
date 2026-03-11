import React from 'react';
import { motion as Motion } from 'framer-motion';

const Footer = () => {
  return (
    <Motion.footer
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="relative mt-10 bg-[#0a0b0d]"
    >
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-300/30 to-transparent" />
      <div className="section-shell py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <a href="#" className="font-heading text-lg font-bold text-white">
              <span className="text-yellow-400">S</span>erene.
            </a>
            <p className="mt-1 font-body text-sm tracking-wide text-gray-500">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 font-heading text-sm font-medium text-gray-300 transition-all duration-300 hover:border-yellow-300/40 hover:text-yellow-300"
          >
            Back to top
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" /></svg>
          </a>
        </div>
      </div>
    </Motion.footer>
  );
};

export default Footer;

