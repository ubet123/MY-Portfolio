import React, { useState } from 'react';
import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion';
import profileImage from '../assets/myprof_linkedin1.png';

/* ─── Skill icons ─── */
const skillIcons = {
  'C++': 'https://cdn-icons-png.flaticon.com/128/6132/6132222.png',
  'JavaScript': 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png',
  'React.js': 'https://cdn-icons-png.flaticon.com/128/15772/15772797.png',
  'HTML': 'https://cdn-icons-png.flaticon.com/128/5968/5968267.png',
  'CSS': 'https://cdn-icons-png.flaticon.com/128/5968/5968242.png',
  'Tailwind CSS': 'https://img.icons8.com/?size=48&id=CIAZz2CYc6Kc&format=png',
  'Zustand': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvZGKzE-EdY23PZe5h6-6ele0MYB73WhcGhhpZ6tE2IOk57X2dG1wYW3H&s=10',
  'Node.js': 'https://cdn-icons-png.flaticon.com/128/15484/15484303.png',
  'Express.js': 'https://cdn-icons-png.flaticon.com/128/5968/5968322.png',
  'REST APIs': 'https://cdn-icons-png.flaticon.com/128/17335/17335208.png',
  'JWT Authentication': 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/4/jwt-icon-138bxvrhijus263d2f2wur.png/jwt-icon-aqjx58uyj3lrxtborzgyg.png?_a=DATAiZAAZAA0',
  'Socket.IO': 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/socket.io-vtiqggzua1cqzpc603m6j8.png/socket.io-szic8qj6mzlufm30sd14p.png?_a=DATAiZAAZAA0',
  'MongoDB': 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/4/mongodb-icon-qfb2w72fsgmue21n54x2ar.png/mongodb-icon-tzouctvl9mlat5c2vx39sg.png?_a=DATAiZAAZAA0',
  'MySQL': 'https://cdn-icons-png.flaticon.com/128/4248/4248443.png',
  'PostgreSQL': 'https://cdn-icons-png.flaticon.com/128/5968/5968342.png',
  'Git': 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/git-icon-8q586zkd4wh37xs9in39sb.png/git-icon-ua1ejgt0kyhuc1lw1amdph.png?_a=DATAiZAAZAA0',
  'GitHub': 'https://cdn-icons-png.flaticon.com/128/733/733553.png',
  'Postman': 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/postman-icon-vis2s6mumso1l99r2sl4i.png/postman-icon-r1svcbhv3fhqh0e0dscfr.png?_a=DATAiZAAZAA0',
  'Vercel': 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/5/vercel-icon-1e44161oavq1mzuypoj9i7.png/vercel-icon-orebx5wd0vr5kk8w161dla.png?_a=DATAiZAAZAA0',
  'Render': 'https://zonalogo.com/assets/render-logo-png-svg.webp',
  'MongoDB Atlas': 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/4/mongodb-icon-qfb2w72fsgmue21n54x2ar.png/mongodb-icon-tzouctvl9mlat5c2vx39sg.png?_a=DATAiZAAZAA0',
  'Cloudinary': 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/cloudinary-icon-ug0qqy8ms6ozyzy6cntbll.png/cloudinary-icon-hz05evx1htrghud89kpab4.png?_a=DATAiZAAZAA0',
};

const skillCategories = [
  {
    label: 'Programming Languages',
    color: '#facc15',
    skills: ['C++', 'JavaScript'],
  },
  {
    label: 'Frontend',
    color: '#3ECF8E',
    skills: ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'Zustand'],
  },
  {
    label: 'Backend',
    color: '#8E7CFF',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Socket.IO'],
  },
  {
    label: 'Databases',
    color: '#FF6B78',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    label: 'Tools',
    color: '#66D9E8',
    skills: ['Git', 'GitHub', 'Postman', 'Vercel', 'Render', 'MongoDB Atlas', 'Cloudinary'],
  },
];

const experienceHighlights = [
  'Built configurable alert dispatch systems supporting REST, SOAP, and GraphQL protocols with two-way token authentication and end-to-end validation.',
  'Developed multi-tab admin panels with full CRUD, live API integration, consumer-to-endpoint permission mapping, and rate limiting.',
  'Owned scheduling and dashboard screens integrating facial-recognition data, with infinite-scroll pagination and debounced search.',
  'Built a browser-based SSH terminal using xterm.js + WebSockets for live remote node management with encrypted credential storage.',
  'Designed automated node-provisioning flows and implemented heartbeat monitoring with real-time system-metrics dashboards.',
  'Implemented encrypted credential storage with LRU caching, optimized search across ~500 API endpoints, and ran structured regression testing.',
];

const education = [
  {
    institution: 'Fr. Conceicao Rodrigues College of Engineering',
    degree: 'B.E. - Computer Engineering',
    period: '2023-Current',
    grades: 'CGPA: 9.22',
  },
  {
    institution: 'Vidyavardhinis Annasaheb Vartak College',
    degree: 'Junior College - Science - HSC',
    period: '2021-2023',
    grades: 'HSC Percentage: 80.67%',
  },
  {
    institution: 'St. Joseph English School',
    degree: 'School Education - SSC',
    period: '2011-2021',
    grades: 'SSC Percentage: 97.2%',
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,rgba(250,204,21,0.08),transparent_36%),radial-gradient(circle_at_82%_80%,rgba(255,255,255,0.06),transparent_40%)]" />

      <Motion.div
        className="section-shell relative"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-center">
          About <span className="text-yellow-300">Me</span>
        </h2>

        {/* ─── Top Row: Profile Card + Bio Content aligned ─── */}
        <div className="mt-14 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Profile Card */}
          <Motion.div
            className="flex flex-col lg:col-span-4"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <div className="glass-panel accent-ring mx-auto flex h-full w-full max-w-sm flex-col rounded-2xl p-4 transition-transform duration-500 hover:scale-[1.02]">
              <div className="overflow-hidden rounded-xl border border-white/10">
                <img src={profileImage} alt="Serene" className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col justify-center px-2 pb-2 pt-4">
                <p className="font-heading text-xs font-medium tracking-[0.2em] text-yellow-300">FRONTEND DEVELOPER</p>
                <h3 className="mt-1 font-heading text-2xl font-bold text-white">Serene</h3>
                <div className="mt-3 h-px bg-gradient-to-r from-yellow-300/40 via-yellow-300/10 to-transparent" />
                <p className="mt-3 font-body text-sm leading-relaxed text-gray-400">
                  MERN stack developer passionate about clean, responsive interfaces.
                </p>
              </div>
            </div>
          </Motion.div>

          {/* Bio Description Box */}
          <Motion.div
            className="flex flex-col lg:col-span-8"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="glass-panel flex h-full flex-col justify-center rounded-2xl p-6 md:p-9">
              <p className="font-body text-lg leading-relaxed text-gray-200 md:text-xl">
                I am a <span className="font-semibold text-yellow-300">MERN stack developer</span> currently pursuing
                <span className="font-semibold text-yellow-300"> B.E. in Computer Engineering</span> at
                <span className="font-semibold text-yellow-300"> Fr. CRCE</span>, with strong full-stack foundations and
                deeper frontend focus.
                <br />
                <br />
                I have worked across <span className="font-semibold text-yellow-300">React</span>,
                <span className="font-semibold text-yellow-300"> Node.js</span>,
                <span className="font-semibold text-yellow-300"> Express</span>, and
                <span className="font-semibold text-yellow-300"> MongoDB</span> to build complete web applications, while
                specializing in scalable, responsive interfaces using
                <span className="font-semibold text-yellow-300"> React</span>,
                <span className="font-semibold text-yellow-300"> TypeScript</span>,
                <span className="font-semibold text-yellow-300"> JavaScript</span>, and
                <span className="font-semibold text-yellow-300"> Tailwind CSS</span>.
                <br />
                <br />
                I enjoy translating product ideas into clean UX with reliable engineering, and I am eager to contribute to
                teams that value thoughtful design and maintainable code.
              </p>
            </div>
          </Motion.div>
        </div>

        {/* ─── Bottom Section: Skills, Experience, Education Tabs (Full Width) ─── */}
        <Motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          {/* Tab Switcher Buttons */}
          <div className="flex justify-center">
            <div className="glass-panel inline-flex rounded-xl p-1.5 shadow-lg">
              {['skills', 'experience', 'education'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative rounded-lg px-6 py-2.5 font-heading text-sm font-semibold capitalize tracking-wide transition-colors ${activeTab === tab ? 'text-black' : 'text-gray-300 hover:text-white'
                    }`}
                >
                  {activeTab === tab && (
                    <Motion.span
                      layoutId="activeAboutTab"
                      transition={{ type: 'spring', stiffness: 500, damping: 36 }}
                      className="absolute inset-0 -z-10 rounded-lg bg-yellow-300"
                    />
                  )}
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Panels */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              {/* ─── SKILLS TAB ─── */}
              {activeTab === 'skills' && (
                <Motion.div
                  key="skills"
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-5"
                >
                  {skillCategories.map((cat, catIdx) => (
                    <Motion.div
                      key={cat.label}
                      initial={reduceMotion ? {} : { opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: catIdx * 0.07 }}
                      className="rounded-xl border border-white/[0.08] bg-[#0c0d10]/70 p-5 md:p-6"
                    >
                      {/* Category header */}
                      <div className="flex items-center gap-2.5 mb-4">
                        <span
                          className="h-2.5 w-2.5 rounded-full shadow-[0_0_8px_var(--cat-color)]"
                          style={{ backgroundColor: cat.color, '--cat-color': cat.color }}
                        />
                        <h3 className="font-heading text-xs font-bold tracking-[0.14em] uppercase" style={{ color: cat.color }}>
                          {cat.label}
                        </h3>
                        <div className="flex-1 h-px bg-gradient-to-r from-white/[0.06] to-transparent ml-2" />
                      </div>

                      {/* Skill chips */}
                      <div className="flex flex-wrap gap-3">
                        {cat.skills.map((skill, i) => (
                          <Motion.div
                            key={skill}
                            initial={reduceMotion ? {} : { opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.28, delay: catIdx * 0.07 + i * 0.04 }}
                            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-[#111318]/90 px-4 py-2.5 transition-all duration-300 hover:border-yellow-300/30 hover:bg-yellow-300/[0.05] hover:shadow-[0_0_20px_rgba(250,204,21,0.08)] hover:-translate-y-0.5"
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] transition-all duration-300 group-hover:border-yellow-300/20 group-hover:bg-yellow-300/[0.08]">
                              <img
                                src={skillIcons[skill]}
                                alt={skill}
                                className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                                loading="lazy"
                              />
                            </div>
                            <span className="font-body text-sm font-medium text-gray-200 transition-colors duration-300 group-hover:text-yellow-200">
                              {skill}
                            </span>
                          </Motion.div>
                        ))}
                      </div>
                    </Motion.div>
                  ))}
                </Motion.div>
              )}

              {/* ─── EXPERIENCE TAB ─── */}
              {activeTab === 'experience' && (
                <Motion.div
                  key="experience"
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="rounded-xl border border-white/10 bg-[#0e1014] p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <div>
                        <h4 className="font-heading text-xl font-bold text-white">Frontend Developer Intern</h4>
                        <p className="mt-1 font-body text-sm text-gray-400">
                          Daten & Wissen Pvt. Ltd. — <span className="font-semibold text-yellow-300/80">NWarch AI</span>
                        </p>
                      </div>
                      <span className="ml-auto rounded-full border border-green-400/30 bg-green-400/10 px-3.5 py-1 font-heading text-xs font-semibold tracking-wider text-green-400 uppercase">
                        June 2026 – Present
                      </span>
                    </div>
                    <div className="h-px bg-gradient-to-r from-yellow-300/20 via-white/[0.06] to-transparent mb-6" />
                    <ul className="space-y-3.5">
                      {experienceHighlights.map((point, i) => (
                        <Motion.li
                          key={i}
                          initial={reduceMotion ? {} : { opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="flex items-start gap-3.5 font-body text-sm leading-relaxed text-gray-300 md:text-base"
                        >
                          <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-300/60 shadow-[0_0_6px_rgba(250,204,21,0.4)]" />
                          {point}
                        </Motion.li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'WebSockets', 'Docker', 'Git'].map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1 font-body text-xs text-gray-400 transition-colors hover:border-yellow-300/20 hover:text-yellow-300/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Motion.div>
              )}

              {/* ─── EDUCATION TAB ─── */}
              {activeTab === 'education' && (
                <Motion.div
                  key="education"
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-4"
                >
                  {education.map((item, i) => (
                    <Motion.article
                      key={item.institution}
                      initial={reduceMotion ? {} : { opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: i * 0.08 }}
                      className="relative rounded-xl border border-white/10 bg-[#0e1014] p-6 md:p-7 pl-8 md:pl-9 transition-all duration-300 hover:border-yellow-300/20"
                    >
                      <div className="absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-yellow-300/60 via-yellow-300/20 to-transparent" />
                      <div className="absolute left-[-3px] top-7 h-[7px] w-[7px] rounded-full bg-yellow-300 ring-2 ring-yellow-300/20" />
                      <p className="font-heading text-xs font-medium tracking-[0.15em] uppercase text-gray-400">{item.period}</p>
                      <h4 className="mt-1 font-heading text-xl font-bold text-yellow-300">{item.institution}</h4>
                      <p className="mt-1 font-body text-sm text-gray-300 md:text-base">{item.degree}</p>
                      <p className="mt-2 font-heading text-sm font-semibold tracking-wide text-yellow-200/80">{item.grades}</p>
                    </Motion.article>
                  ))}
                </Motion.div>
              )}
            </AnimatePresence>
          </div>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default About;
