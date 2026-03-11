import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion';
import BharatSecureImg from '../assets/project_img/bs-portfolio.webp';
import BrightBuildsImg from '../assets/project_img/brightbuilds-portfolio.avif';
import OrgFlowImg from '../assets/project_img/management-coaching-business-dealing-mentor-concept_53876-133858.avif';
import FlickHiveImg from '../assets/project_img/flickhive-portfolio.webp';
import TurningTideImg from '../assets/project_img/turningtide-portfolio.webp';

const projectsData = [
  {
    id: 1,
    title: 'BharatSecure',
    description:
      'A women safety platform featuring SOS alerts, danger zone mapping, voice commands, and live location sharing.',
    image: BharatSecureImg,
    link: 'https://bharat-secure-ochre.vercel.app/',
    color: '#FFB020',
  },
  {
    id: 2,
    title: 'BrightBuilds',
    description:
      'A student project showcase platform that maps creative coding projects to SDGs, with ratings, filters, and mentorship features.',
    image: BrightBuildsImg,
    link: 'https://bright-builds.vercel.app/',
    color: '#3ECF8E',
  },
  {
    id: 3,
    title: 'OrgFlow',
    description:
      'A task management system for organizations with role-based dashboards, task tracking, and progress monitoring.',
    image: OrgFlowImg,
    link: 'https://org-flow-six.vercel.app/',
    color: '#8E7CFF',
  },
  {
    id: 4,
    title: 'FlickHive',
    description:
      'A favorite movies and TV tracker with filtering, dark mode, and local storage persistence for a seamless experience.',
    image: FlickHiveImg,
    link: 'https://flick-hive-yg8z.vercel.app/',
    color: '#FF6B78',
  },
  {
    id: 5,
    title: 'Turning Tide Website',
    description:
      'A website promoting ocean cleanup with a pollution map, leaderboard, and eco-friendly shop.',
    image: TurningTideImg,
    link: 'https://ubet123.github.io/TurningTideFinal/',
    color: '#66D9E8',
  },
];

const Projects = () => {
  const [activeProjectId, setActiveProjectId] = useState(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!activeProjectId) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeProjectId]);

  const activeProject = projectsData.find((project) => project.id === activeProjectId);

  return (
    <section id="projects" className="relative py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(250,204,21,0.11),transparent_36%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.07),transparent_40%)]" />

      <div className="section-shell relative">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="text-yellow-300">Creative</span> Projects
          </h2>
          <p className="section-subtitle">
            A focused collection of products where I combine clean interface design, performance, and real-world utility.
          </p>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {projectsData.map((project, i) => (
            <Motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group glass-panel overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 hover:border-opacity-30 hover:-translate-y-1"
              style={{ '--project-color': project.color }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 20px 55px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04), 0 0 50px ${project.color}15`}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = ''}
            >
              <button
                type="button"
                onClick={() => setActiveProjectId(project.id)}
                className="w-full text-left"
              >
                <div className="relative h-52 overflow-hidden md:h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  <span
                    className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold tracking-wide text-black shadow-lg"
                    style={{ backgroundColor: project.color }}
                  >
                    Featured
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-heading text-xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-300">{project.title}</h3>
                  <p className="mt-2 line-clamp-3 font-body text-base leading-relaxed text-gray-300">{project.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-heading text-sm font-medium tracking-wide text-yellow-300 transition-all duration-300 group-hover:gap-2.5">
                    Click to explore
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </button>
            </Motion.article>
          ))}
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#contact"
            className="group/cta inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3 font-heading text-base font-medium text-white transition-all duration-300 hover:border-yellow-300/50 hover:bg-yellow-300/5 hover:text-yellow-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.08)]"
          >
            Let us collaborate
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </Motion.div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <Motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveProjectId(null)}
          >
            <Motion.div
              className="glass-panel max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl shadow-2xl"
              onClick={(event) => event.stopPropagation()}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-full">
                  <img src={activeProject.image} alt={activeProject.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 md:bg-gradient-to-l" />
                </div>

                <div className="p-6 md:p-8">
                  <div className="mb-4 inline-flex rounded-full px-3 py-1 text-xs font-bold tracking-wider text-black" style={{ backgroundColor: activeProject.color }}>
                    PROJECT
                  </div>
                  <h3 className="font-accent text-2xl font-bold text-white md:text-3xl" style={{ color: activeProject.color }}>
                    {activeProject.title}
                  </h3>
                  <p className="mt-4 font-body text-lg leading-relaxed text-gray-300">{activeProject.description}</p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg px-5 py-3 font-heading text-sm font-bold text-black transition-all duration-300 hover:shadow-lg"
                      style={{ backgroundColor: activeProject.color }}
                    >
                      Visit Project
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                    <button
                      type="button"
                      onClick={() => setActiveProjectId(null)}
                      className="rounded-lg border border-white/30 px-5 py-3 font-heading text-sm font-medium text-white transition-all duration-300 hover:border-yellow-300 hover:bg-white/5 hover:text-yellow-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

