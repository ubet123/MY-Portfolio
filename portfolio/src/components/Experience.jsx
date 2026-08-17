import React from 'react';
import { motion as Motion, useReducedMotion } from 'framer-motion';

const highlights = [
  {
    title: 'API Configuration & Alert Systems',
    desc: 'Built configurable alert dispatch supporting REST, SOAP, and GraphQL with two-way token auth, encrypted credential storage, and LRU caching.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Admin Platform & API Management',
    desc: 'Developed multi-tab admin panels with permission mapping, rate limiting, audit logs, and optimized search across ~500 endpoints.',
    tech: ['React', 'Redux', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Attendance & Scheduling System',
    desc: 'Owned dashboard and scheduling screens with facial-recognition integration, infinite-scroll pagination, and production-ready Add-on packaging.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Node Infrastructure & Monitoring',
    desc: 'Building browser-based SSH terminals, automated node provisioning, heartbeat monitoring, and real-time system-metrics dashboards.',
    tech: ['React', 'WebSockets', 'xterm.js', 'Docker'],
    ongoing: true,
  },
];

const Experience = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="relative py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(250,204,21,0.09),transparent_36%),radial-gradient(circle_at_25%_85%,rgba(255,255,255,0.06),transparent_40%)]" />

      <div className="section-shell relative">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Work <span className="text-yellow-300">Experience</span>
          </h2>
          <p className="section-subtitle">
            Frontend Developer Intern at{' '}
            <span className="font-semibold text-yellow-300">Daten & Wissen Pvt. Ltd.</span>, Mumbai — working across the full stack on{' '}
            <span className="font-semibold text-white">NWarch AI</span>, an enterprise platform for API management, alerting, and node infrastructure.
          </p>
        </Motion.div>

        {/* Role badge */}
        <Motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="mt-8 mb-8"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2">
            <span className="inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-heading text-sm font-medium text-white">June 2026 – Present</span>
          </div>
        </Motion.div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {highlights.map((item, i) => (
            <Motion.div
              key={item.title}
              initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group glass-panel card-glow rounded-2xl p-5 md:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-heading text-base font-bold text-white transition-colors duration-300 group-hover:text-yellow-300 md:text-lg">
                  {item.title}
                </h3>
                {item.ongoing && (
                  <span className="flex-shrink-0 rounded-full border border-green-400/30 bg-green-400/10 px-2.5 py-0.5 font-heading text-[10px] font-semibold tracking-wider text-green-400 uppercase">
                    Ongoing
                  </span>
                )}
              </div>
              <p className="mt-2.5 font-body text-sm leading-relaxed text-gray-400">{item.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 font-body text-[11px] font-medium text-gray-500 transition-all duration-300 hover:border-yellow-300/20 hover:text-yellow-300/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
