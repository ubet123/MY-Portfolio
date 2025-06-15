import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, { once: false, amount: 0.2 });

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeProject]);

  const projectsData = [
    {
      id: 1,
      title: "BharatSecure",
      description: "A women safety platform featuring SOS alerts, danger zone mapping, voice commands, and live location sharing.",
      image: "https://cdn-ilbcdcb.nitrocdn.com/MeIeCSkEMhiSeDZskUUpnJqKXJDTuHPy/assets/images/optimized/rev-8cf0ce9/www.rescusaveslives.com/wp-content/uploads/2024/03/AdobeStock_583020072.jpeg",
      link: "https://github.com/BharatSecure/TechFiesta25",
      color: "#FF8A00"
    },
    {
      id: 2,
      title: "BrightBuilds",
      description: "A student project showcase platform that maps creative coding projects to SDGs, with ratings, filters, and mentorship features.",
      image: "https://img.freepik.com/free-vector/light-bulb-people-discussing-ideas-working_1262-19265.jpg?ga=GA1.1.330429559.1727962465&semt=ais_hybrid&w=740",
      link: "https://bright-builds.vercel.app/",
      color: "#00C853"
    },
    {
      id: 3,
      title: "OrgFlow",
      description: "A task management system for organizations with role-based dashboards, task tracking, and progress monitoring.",
      image: "https://img.freepik.com/free-photo/management-coaching-business-dealing-mentor-concept_53876-133858.jpg?ga=GA1.1.330429559.1727962465&semt=ais_hybrid&w=740",
      link: "https://github.com/ubet123/OrgFlow",
      color: "#6A1AFF"
    },
    {
      id: 4,
      title: "FlickHive",
      description: "The Favorite Movies/TV Shows Tracker lets users manage and filter their favorite movies and TV shows by genre. It includes dark mode and stores preferences using local storage for a seamless experience.",
      image: "https://images.freecreatives.com/wp-content/uploads/2017/10/flat-clapperboard-icon_1063-38.jpg",
      link: "https://flick-hive-yg8z.vercel.app/",
      color: "#FF004F"
    },
    {
      id: 5,
      title: "Turning Tide Website",
      description: "A website promoting ocean cleanup with a pollution map, leaderboard, and eco-friendly shop.",
      image: "https://cdn.unenvironment.org/s3fs-public/styles/article_billboard_image/public/2018-04/wave-1913559_1920.jpg?itok=evWJpAot",
      link: "https://ubet123.github.io/TurningTideFinal/",
      color: "#00BCD4"
    }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const detailsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  const toggleProject = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section ref={projectsRef} className="py-20 px-6 md:px-12 lg:px-24 bg-black text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="relative mb-16"
      >
        <h2 id="projects" className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold tracking-wider">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff004f] to-[#ffd401]">Creative</span> Projects
        </h2>
        <p className="mt-4 font-dosis text-lg md:text-xl text-gray-300 max-w-2xl">
          A collection of my most innovative work, pushing boundaries and solving real-world problems.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative"
      >
        <div className="flex flex-col md:flex-row flex-wrap relative z-10">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="w-full md:w-1/2 lg:w-1/3 p-4 relative z-10"
            >
              <motion.div
                className="group cursor-pointer relative h-64 md:h-80 rounded-xl overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${project.color}40, ${project.color})` }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                onClick={() => toggleProject(project.id)}
              >
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-30">
                  <motion.h3 
                    className="font-winky-rough text-sm md:text-3xl mb-2"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.div
                    className="w-16 h-1 bg-white rounded mb-3"
                    initial={{ width: "16px" }}
                    whileHover={{ width: "40px" }}
                  />
                  <motion.p 
                    className="font-rajdhani text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Click to explore
                  </motion.p>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"
                  whileHover={{ opacity: 0.8 }}
                />
                <motion.div 
                  className="absolute top-4 right-4 w-10 h-10 bg-transparent rounded-full flex items-center justify-center text-black"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                >
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-40 p-4 md:p-8"
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                variants={detailsVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto z-50"
                onClick={(e) => e.stopPropagation()}
              >
                {projectsData.filter(p => p.id === activeProject).map(project => (
                  <div key={project.id} className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 h-64 md:h-auto">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full md:w-1/2 p-6 md:p-8">
                      <h2 className="font-special-gothic text-2xl md:text-3xl mb-4" style={{ color: project.color }}>
                        {project.title}
                      </h2>
                      <p className="font-poppins text-gray-300 mb-6">
                        {project.description}
                      </p>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <motion.button 
                          className="px-6 py-3 rounded-lg font-horizon text-white flex items-center gap-2"
                          style={{ backgroundColor: project.color }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Visit Project
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </motion.button>
                      </a>
                      <button 
                        onClick={() => setActiveProject(null)}
                        className="mt-4 text-black font-poppins bg-green-400 hover:bg-green-700 rounded-lg px-4 py-3 ml-2 hover:text-white transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 flex justify-center"
      >
        <motion.a
          href="#contact"
          className="relative inline-flex items-center px-8 py-4 overflow-hidden font-horizon text-lg tracking-wider text-white bg-transparent rounded-lg group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Collaborate
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Projects;