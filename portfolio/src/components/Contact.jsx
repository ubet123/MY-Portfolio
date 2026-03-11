import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import resumePDF from '../assets/SereneDmello_Resume_5.pdf';
import DownloadButton from './DownloadButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      const response = await fetch('https://my-portfolio-oscd.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setFormData({ name: '', email: '', message: '' });
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
    } catch (error) {
      setFormStatus({ isSubmitting: false, isSubmitted: false, error: error.message });
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(250,204,21,0.1),transparent_35%),radial-gradient(circle_at_88%_84%,rgba(255,255,255,0.06),transparent_40%)]" />

      <div className="section-shell relative">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <div className="mb-5 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-300/8 px-4 py-1.5 font-heading text-xs font-medium tracking-[0.15em] text-yellow-300">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              AVAILABLE FOR WORK
            </span>
          </div>
          <h2 className="section-title">
            Let&apos;s <span className="text-shimmer">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind? Let&apos;s create something focused, performant, and beautiful together.
          </p>
        </Motion.div>

        <div className="mt-14 grid grid-cols-1 gap-7 lg:grid-cols-5">
          <Motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="relative overflow-hidden glass-panel rounded-2xl p-6 md:p-7 lg:col-span-2"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-yellow-300/5 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-yellow-300/3 blur-2xl" />

            <div className="relative">
              <h3 className="font-accent text-2xl font-bold text-white">Contact Information</h3>
              <span className="mt-2 block h-0.5 w-20 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-300/20" />

              <div className="mt-8 space-y-5">
                <a href="mailto:dmelloserene08@gmail.com" className="group flex items-start gap-4 rounded-xl p-2.5 -mx-2.5 transition-all duration-300 hover:bg-white/[0.03]">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 group-hover:border-yellow-300/25 group-hover:bg-yellow-300/5">
                    <MdOutlineEmail className="text-xl text-yellow-300" />
                  </div>
                  <div>
                    <p className="font-heading text-xs font-medium uppercase tracking-wider text-gray-400">Email</p>
                    <p className="font-body text-base text-white group-hover:text-yellow-300 transition-colors duration-300">dmelloserene08@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-xl p-2.5 -mx-2.5 transition-all duration-300 hover:bg-white/[0.03]">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <FaPhoneAlt className="text-xl text-yellow-300" />
                  </div>
                  <div>
                    <p className="font-heading text-xs font-medium uppercase tracking-wider text-gray-400">Phone</p>
                    <p className="font-body text-base text-white">9309271710</p>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                <div>
                  <p className="mb-3 font-heading text-xs font-medium uppercase tracking-wider text-gray-400">Social Media</p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/ubet123"
                      target="_blank"
                      rel="noreferrer"
                      className="group/s rounded-xl border border-white/10 bg-white/5 p-3 text-gray-200 transition-all duration-300 hover:border-yellow-300/30 hover:bg-yellow-300/5 hover:text-yellow-300 hover:shadow-[0_0_15px_rgba(250,204,21,0.08)]"
                      aria-label="GitHub"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/serene-dmello-572605344/"
                      target="_blank"
                      rel="noreferrer"
                      className="group/s rounded-xl border border-white/10 bg-white/5 p-3 text-gray-200 transition-all duration-300 hover:border-yellow-300/30 hover:bg-yellow-300/5 hover:text-yellow-300 hover:shadow-[0_0_15px_rgba(250,204,21,0.08)]"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                <DownloadButton href={resumePDF} download="SereneDmello_Resume" />
              </div>
            </div>
          </Motion.aside>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative overflow-hidden glass-panel rounded-2xl p-6 md:p-8 lg:col-span-3"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-yellow-300/4 blur-3xl" />

            <div className="relative">
              <h3 className="font-accent text-2xl font-bold text-white">Send Me a Message</h3>
              <span className="mt-2 block h-0.5 w-20 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-300/20" />

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block font-heading text-xs font-medium uppercase tracking-wider text-gray-400">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-glow w-full rounded-xl border border-white/12 bg-[#101217] px-4 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-heading text-xs font-medium uppercase tracking-wider text-gray-400">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-glow w-full rounded-xl border border-white/12 bg-[#101217] px-4 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-heading text-xs font-medium uppercase tracking-wider text-gray-400">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="input-glow w-full resize-none rounded-xl border border-white/12 bg-[#101217] px-4 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-gray-500"
                  placeholder="Hello, I would like to discuss a project..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus.isSubmitting}
                className="inline-flex items-center gap-2 rounded-xl bg-yellow-300 px-7 py-3.5 font-heading text-sm font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-200 hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
              >
                {formStatus.isSubmitting ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>

              {formStatus.isSubmitted && (
                <p className="rounded-lg border border-green-400/30 bg-green-500/15 px-4 py-3 text-sm text-green-200">
                  Message sent successfully! I will get back to you soon.
                </p>
              )}

              {formStatus.error && (
                <p className="rounded-lg border border-red-400/30 bg-red-500/15 px-4 py-3 text-sm text-red-200">
                  {formStatus.error}
                </p>
              )}
            </form>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

