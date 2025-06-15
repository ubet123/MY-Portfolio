import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImage from '../assets/Serene passport size.jpg';

// Tech stack logos - replace these import paths with your actual logo paths
const techLogos = {
  "React.js": "https://cdn-icons-png.flaticon.com/128/15772/15772797.png",
  "JavaScript": "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
  "TypeScript": "https://cdn-icons-png.flaticon.com/128/5968/5968381.png",
  "HTML5": "https://cdn-icons-png.flaticon.com/128/5968/5968267.png",
  "CSS3": "https://cdn-icons-png.flaticon.com/128/5968/5968242.png",
  "Tailwind CSS": "https://img.icons8.com/?size=48&id=CIAZz2CYc6Kc&format=png",
  "Bootstrap": "https://cdn-icons-png.flaticon.com/128/5968/5968672.png",
  "C": "https://cdn-icons-png.flaticon.com/128/3665/3665923.png",
  "C++": "https://cdn-icons-png.flaticon.com/128/6132/6132222.png",
  "Python": "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
  "Node JS":'https://cdn-icons-png.flaticon.com/128/15484/15484303.png',
  "Express JS":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIrq4Je7z6sTWiUmCy2ROVBWjrkv67wBxhDA&s',
   "MongoDb":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMRzP2i8h_xIFrtbyJvXy29eTCtyUpwIrzg&s', 
   "MySQL":'https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png',
    "PostgreSQL":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHhYIgLQICyLdxxt1uEcA4mTUM8-kNrMMMQA&s',
     "Git":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBWj5xZ0pzCAmQ5nosGj2iMgdGylvthmgoaA&s', 
     "GitHub":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmrGmeBv3SOLSKz6OlTVlVYkfH9_W3BBgdrA&s'
};

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const frontendSliderRef = useRef(null);
  const programmingSliderRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        duration: 0.8 
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  // Auto-scroll for tech stack sliders with infinite effect
  useEffect(() => {
    if (activeTab === 'skills' && frontendSliderRef.current) {
      const frontendSlider = frontendSliderRef.current;
      let frontendScrollAmount = 0;
      const maxScroll = frontendSlider.scrollWidth / 2;
      
      const frontendSlideTimer = setInterval(() => {
        if (frontendScrollAmount >= maxScroll) {
          frontendSlider.scrollLeft = 0;
          frontendScrollAmount = 0;
        } else {
          frontendSlider.scrollLeft += 1;
          frontendScrollAmount += 1;
        }
      }, 8);
      
      return () => clearInterval(frontendSlideTimer);
    }
  }, [activeTab, isInView]);

  // Auto-scroll for programming languages slider
  useEffect(() => {
    if (activeTab === 'skills' && programmingSliderRef.current) {
      const programmingSlider = programmingSliderRef.current;
      let programmingScrollAmount = 0;
      const maxScroll = programmingSlider.scrollWidth / 2;
      
      const programmingSlideTimer = setInterval(() => {
        if (programmingScrollAmount >= maxScroll) {
          programmingSlider.scrollLeft = 0;
          programmingScrollAmount = 0;
        } else {
          programmingSlider.scrollLeft += 1;
          programmingScrollAmount += 1;
        }
      }, 40); // Slightly different speed for variation
      
      return () => clearInterval(programmingSlideTimer);
    }
  }, [activeTab, isInView]);

  // Observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const SkillTag = ({ skill }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-full whitespace-nowrap min-w-max"
    >
      <img 
        src={techLogos[skill] || "/logos/default.svg"} 
        alt={skill} 
        className="w-5 h-5"
      />
      <span className="font-poppins text-sm">{skill}</span>
    </motion.div>
  );

  const ProjectCard = ({ title, description }) => (
    <motion.div 
      variants={itemVariants}
      whileHover={{ scale: 1.03 }}
      className="bg-gray-800 p-4 rounded-lg mb-4"
    >
      <h3 className="font-orbitron text-yellow-400 text-lg mb-2">{title}</h3>
      {description && <p className="font-poppins text-sm text-gray-300">{description}</p>}
    </motion.div>
  );

  const EducationCard = ({ institution, degree, period, grades }) => (
    <motion.div 
      variants={itemVariants}
      className="mb-6 border-l-2 border-yellow-400 pl-4"
    >
      <h3 className="font-rajdhani font-bold text-yellow-400">{institution}</h3>
      <p className="font-poppins text-sm text-white/90">{degree}, {period}</p>
      {grades && <p className="font-poppins text-xs text-gray-300 mt-1">{grades}</p>}
    </motion.div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'skills':
        return (
          <motion.div
            key="skills"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mt-8"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="font-rajdhani text-lg font-bold mb-3 text-yellow-400">Web Development</h3>
              <div 
                ref={frontendSliderRef} 
                className="flex gap-3 overflow-x-auto py-2 scrollbar-hide"
                style={{ scrollBehavior: 'smooth' }}
              >
                {["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap" , "Node JS","Express JS", "MongoDb", "MySQL", "PostgreSQL", "Git", "GitHub"].map((skill) => (
                  <SkillTag key={skill} skill={skill} />
                ))}
                {/* Duplicate for continuous scrolling effect */}
                {["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"].map((skill) => (
                  <SkillTag key={`${skill}-duplicate`} skill={skill} />
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="font-rajdhani text-lg font-bold mb-3 text-yellow-400">Programming Languages</h3>
              <div 
                ref={programmingSliderRef}
                className="flex gap-3 overflow-x-auto py-2 scrollbar-hide"
                style={{ scrollBehavior: 'smooth' }}
              >
                {["C", "C++", "Python"].map((skill) => (
                  <SkillTag key={skill} skill={skill} />
                ))}
                {/* Duplicate for continuous scrolling effect */}
                {/* {["C", "C++", "Python"].map((skill) => (
                  <SkillTag key={`${skill}-duplicate`} skill={skill} />
                ))} */}
              </div>
            </motion.div>
          </motion.div>
        );
      case 'projects':
        return (
          <motion.div
            key="projects"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <ProjectCard title="BharatSecure" description="A women safety alert system." />
            <ProjectCard title="BrightBuilds" description="A student project showcase platform." />
            <ProjectCard title="OrgFlow" description="An employee task manager." />
            <ProjectCard title="FlickHive" description="A movie recommendation platform" />
            <ProjectCard title="Turning The Tide Website" description="Environmental conservation platform" />
            
            
            
          </motion.div>
        );
      case 'education':
        return (
          <motion.div
            key="education"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mt-8"
          >
            <EducationCard 
              institution="Fr. Conceicao Rodrigues College of Engineering"
              degree="B.Tech (Computer Engineering)"
              period="2023-Current"
              grades="CGPA: 9.5"
            />
            <EducationCard 
              institution="Vidyavardhinis Annasaheb Vartak College"
              degree="Junior College - Science"
              period="2021-2023"
              grades="HSC Percentage: 81%"
            />
            <EducationCard 
              institution="St. Joseph English School"
              degree="School Education"
              period="2011-2021"
              grades="SSC Percentage: 97%"
            />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="relative py-24 px-4 sm:px-8 md:px-16 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-16 right-0 w-64 h-64 rounded-full bg-yellow-400/5 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        className="absolute bottom-16 left-0 w-96 h-96 rounded-full bg-yellow-400/5 blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-center font-special-gothic text-5xl md:text-6xl mb-16 text-yellow-400"
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Profile image with animated border - Moving more to the left */}
          <motion.div 
            variants={itemVariants}
            className="relative lg:col-span-4 lg:sticky lg:top-24 lg:self-start mx-auto lg:ml-0 lg:mr-8 w-full max-w-xs"
          >
            <motion.div 
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500"
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl overflow-hidden m-1 shadow-2xl bg-gray-800"
            >
              <img 
                src={profileImage} 
                alt="Serene" 
                className="w-full object-cover aspect-square" 
              />
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6"
              >
                <p className="font-pressstart text-xs text-yellow-400">Frontend Developer</p>
                <h3 className="font-orbitron text-2xl text-white">Serene</h3>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <div className="lg:col-span-8">
            {/* Bio section */}
            <motion.div 
              variants={itemVariants}
              className="mb-12"
            >
             <p className="font-dosis text-lg leading-relaxed">
  I'm a <span className="text-yellow-400 font-bold">MERN stack developer</span> currently pursuing 
  <span className="text-yellow-400 font-bold"> B.E. in Computer Engineering</span> at 
  <span className="text-yellow-400 font-bold"> Fr. CRCE</span>, with a strong foundation in full-stack web development and a particular depth in frontend engineering.
  <br /><br />
  While I’ve worked across 
  <span className="text-yellow-400 font-bold"> React</span>, 
  <span className="text-yellow-400 font-bold"> Node.js</span>, 
  <span className="text-yellow-400 font-bold"> Express</span>, and 
  <span className="text-yellow-400 font-bold"> MongoDB</span> to build complete web applications, my core expertise lies in crafting responsive, scalable, and well-structured user interfaces using 
  <span className="text-yellow-400 font-bold"> React</span>, 
  <span className="text-yellow-400 font-bold"> TypeScript</span>, 
  <span className="text-yellow-400 font-bold"> JavaScript</span>, and 
  <span className="text-yellow-400 font-bold"> Tailwind CSS</span>.
  <br /><br />
  I’ve explored and refined these skills through hands-on projects such as: 
  <span className="text-yellow-400 font-bold"> BharatSecure</span>, 
  <span className="text-yellow-400 font-bold"> BrightBuilds</span>, 
  <span className="text-yellow-400 font-bold"> OrgFlow</span>, 
  <span className="text-yellow-400 font-bold"> FlickHive</span> and many more.
  <br /><br />
  These projects have strengthened my ability to think in terms of both 
  <span className="text-yellow-400 font-bold">user experience</span> and 
  <span className="text-yellow-400 font-bold">system architecture</span>, while reinforcing clean integration between frontend and backend.
  I enjoy building interfaces that are both functional and maintainable — and I’m eager to contribute to teams that value 
  <span className="text-yellow-400 font-bold">thoughtful design</span> and 
  <span className="text-yellow-400 font-bold">solid engineering practices</span>.
</p>

            </motion.div>

            {/* Tabs navigation */}
            <motion.div 
              variants={itemVariants}
              className="relative mb-6"
            >
              <div className="flex justify-between border-b border-gray-700">
                {['skills', 'projects', 'education'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative py-2 px-4 text-lg font-orbitron capitalize font-medium transition-colors duration-300 ${
                      activeTab === tab ? 'text-yellow-400' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Content area */}
            <AnimatePresence mode="wait">
              {renderContent()}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
      
      {/* Add custom scrollbar hide style */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default About;