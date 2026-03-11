import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion';
import profileImage from '../assets/myprof_linkedin1.png';

const techLogos = {
  'React.js': 'https://cdn-icons-png.flaticon.com/128/15772/15772797.png',
  JavaScript: 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png',
  TypeScript: 'https://cdn-icons-png.flaticon.com/128/5968/5968381.png',
  HTML5: 'https://cdn-icons-png.flaticon.com/128/5968/5968267.png',
  CSS3: 'https://cdn-icons-png.flaticon.com/128/5968/5968242.png',
  'Tailwind CSS': 'https://img.icons8.com/?size=48&id=CIAZz2CYc6Kc&format=png',
  Bootstrap: 'https://cdn-icons-png.flaticon.com/128/5968/5968672.png',
  C: 'https://cdn-icons-png.flaticon.com/128/3665/3665923.png',
  'C++': 'https://cdn-icons-png.flaticon.com/128/6132/6132222.png',
  'Node JS': 'https://cdn-icons-png.flaticon.com/128/15484/15484303.png',
  'Express JS': 'https://cdn-icons-png.flaticon.com/128/5968/5968322.png',
  MongoDb: 'https://cdn-icons-png.flaticon.com/128/919/919836.png',
  MySQL: 'https://cdn-icons-png.flaticon.com/128/4248/4248443.png',
  PostgreSQL: 'https://cdn-icons-png.flaticon.com/128/5968/5968342.png',
  Git: 'https://cdn-icons-png.flaticon.com/128/4494/4494740.png',
  GitHub: 'https://cdn-icons-png.flaticon.com/128/733/733553.png',
};

const webSkills = [
  'React.js',
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Bootstrap',
  'Node JS',
  'Express JS',
  'MongoDb',
  'MySQL',
  'PostgreSQL',
  'Git',
  'GitHub',
];

const languageSkills = ['C', 'C++'];

const aboutProjects = [
  { title: 'BharatSecure', description: 'A women safety alert platform with emergency tools.' },
  { title: 'BrightBuilds', description: 'A student showcase ecosystem mapped to SDGs.' },
  { title: 'OrgFlow', description: 'A role-based task management product for teams.' },
  { title: 'FlickHive', description: 'A movie and TV tracker with robust filtering.' },
  { title: 'Turning Tide Website', description: 'An ocean conservation and awareness platform.' },
];

const education = [
  {
    institution: 'Fr. Conceicao Rodrigues College of Engineering',
    degree: 'B.E. (Computer Engineering)',
    period: '2023-Current',
    grades: 'CGPA: 9.27',
  },
  {
    institution: 'Vidyavardhinis Annasaheb Vartak College',
    degree: 'Junior College - Science',
    period: '2021-2023',
    grades: 'HSC Percentage: 81%',
  },
  {
    institution: 'St. Joseph English School',
    degree: 'School Education',
    period: '2011-2021',
    grades: 'SSC Percentage: 97%',
  },
];

const SkillTag = ({ skill }) => (
  <div className="mx-2 inline-flex min-w-max items-center gap-2 rounded-full border border-white/15 bg-[#111318] px-3.5 py-2.5 transition-all duration-300 hover:border-yellow-300/30 hover:bg-yellow-300/5 hover:shadow-[0_0_12px_rgba(250,204,21,0.08)]">
    <img src={techLogos[skill]} alt={skill} className="h-5 w-5" loading="lazy" />
    <span className="font-body text-sm text-gray-100">{skill}</span>
  </div>
);

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const reduceMotion = useReducedMotion();

  const skillTrack = useMemo(() => [...webSkills, ...webSkills], []);

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

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <Motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <div className="glass-panel accent-ring mx-auto max-w-xs rounded-2xl p-3 transition-transform duration-500 hover:scale-[1.02] lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-xl border border-white/10">
                <img src={profileImage} alt="Serene" className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="px-2 pb-2 pt-4">
                <p className="font-heading text-xs font-medium tracking-[0.2em] text-yellow-300">FRONTEND DEVELOPER</p>
                <h3 className="mt-1 font-heading text-2xl font-bold text-white">Serene</h3>
                <div className="mt-3 h-px bg-gradient-to-r from-yellow-300/40 via-yellow-300/10 to-transparent" />
                <p className="mt-3 font-body text-sm leading-relaxed text-gray-400">
                  MERN stack developer passionate about clean, responsive interfaces.
                </p>
              </div>
            </div>
          </Motion.div>

          <div className="lg:col-span-8">
            <Motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="glass-panel rounded-2xl p-6 md:p-8"
            >
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
            </Motion.div>

            <div className="mt-8">
              <div className="glass-panel inline-flex rounded-xl p-1">
                {['skills', 'projects', 'education'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative rounded-lg px-4 py-2 font-heading text-base font-medium capitalize transition-colors ${
                      activeTab === tab ? 'text-black' : 'text-gray-300 hover:text-white'
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

              <AnimatePresence mode="wait">
                {activeTab === 'skills' && (
                  <Motion.div
                    key="skills"
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="mt-6 space-y-6"
                  >
                    <div>
                      <h3 className="mb-3 font-heading text-sm font-semibold tracking-wide uppercase text-yellow-300">Web Development</h3>
                      <div className="marquee-wrap overflow-hidden rounded-xl border border-white/10 bg-[#0c0d10] py-3">
                        <div className="marquee-track marquee-track-fast whitespace-nowrap">
                          {skillTrack.map((skill, index) => (
                            <SkillTag key={`${skill}-${index}`} skill={skill} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-3 font-heading text-sm font-semibold tracking-wide uppercase text-yellow-300">Programming Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {languageSkills.map((skill) => (
                          <SkillTag key={skill} skill={skill} />
                        ))}
                      </div>
                    </div>
                  </Motion.div>
                )}

                {activeTab === 'projects' && (
                  <Motion.div
                    key="projects"
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2"
                  >
                    {aboutProjects.map((project, i) => (
                      <Motion.article
                        key={project.title}
                        initial={reduceMotion ? {} : { opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.06 }}
                        className="card-glow rounded-xl border border-white/10 bg-[#0e1014] p-5"
                      >
                        <h4 className="font-heading text-base font-semibold text-yellow-300">{project.title}</h4>
                        <p className="mt-2 font-body text-base leading-relaxed text-gray-300">{project.description}</p>
                      </Motion.article>
                    ))}
                  </Motion.div>
                )}

                {activeTab === 'education' && (
                  <Motion.div
                    key="education"
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="mt-6 space-y-4"
                  >
                    {education.map((item, i) => (
                      <Motion.article
                        key={item.institution}
                        initial={reduceMotion ? {} : { opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: i * 0.08 }}
                        className="relative rounded-xl border border-white/10 bg-[#0e1014] p-5 md:p-6 pl-7 md:pl-8"
                      >
                        <div className="absolute left-0 top-5 bottom-5 w-px bg-gradient-to-b from-yellow-300/60 via-yellow-300/20 to-transparent" />
                        <div className="absolute left-[-3px] top-6 h-[7px] w-[7px] rounded-full bg-yellow-300 ring-2 ring-yellow-300/20" />
                        <p className="font-heading text-xs font-medium tracking-[0.15em] uppercase text-gray-400">{item.period}</p>
                        <h4 className="mt-1 font-heading text-lg font-bold text-yellow-300">{item.institution}</h4>
                        <p className="mt-1 text-sm text-gray-300">{item.degree}</p>
                        <p className="mt-2 font-heading text-sm font-semibold tracking-wide text-yellow-200/80">{item.grades}</p>
                      </Motion.article>
                    ))}
                  </Motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Motion.div>
    </section>
  );
};

export default About;

