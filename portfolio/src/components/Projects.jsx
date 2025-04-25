import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, { once: false, amount: 0.2 });

  const projectsData = [
    {
      id: 1,
      title: "FlickHive",
      description: "The Favorite Movies/TV Shows Tracker lets users manage and filter their favorite movies and TV shows by genre. It includes dark mode and stores preferences using local storage for a seamless experience.",
      image: "https://images.freecreatives.com/wp-content/uploads/2017/10/flat-clapperboard-icon_1063-38.jpg",
      link: "https://flick-hive-yg8z.vercel.app/",
      color: "#FF004F"
    },
    {
      id: 2,
      title: "WorkSync",
      description: "A platform for task tracking, performance monitoring, and role-based access, with real-time updates and admin dashboards for seamless workflows.",
      image: "https://plus.unsplash.com/premium_photo-1720032304925-b79e6d46e771?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://sereneproject.vercel.app/",
      color: "#4F00FF"
    },
    {
      id: 3,
      title: "BharatSecure",
      description: "My team and I are developing BharatSecure, a website for incident reporting and response, focused on Women and Child Safety, featuring real-time reporting, heatmaps, and emergency notifications to improve public safety.",
      image: "https://cdn-ilbcdcb.nitrocdn.com/MeIeCSkEMhiSeDZskUUpnJqKXJDTuHPy/assets/images/optimized/rev-8cf0ce9/www.rescusaveslives.com/wp-content/uploads/2024/03/AdobeStock_583020072.jpeg",
      link: "https://github.com/Shane-Dias/TechFiesta25",
      color: "#FF8A00"
    },
    {
      id: 4,
      title: "Ettarra Coffee Website",
      description: "A sleek, coffee-themed platform for users to explore coffee options and join community events, designed for an engaging experience.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4Qn3LryFISqpFq1q1KszCXYT3U6iysAbEA&s",
      link: "https://ettarra-coffee.vercel.app/",
      color: "#00C853"
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

  // Toggle project details
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
        {/* Project Showcase */}
        <div className="flex flex-col md:flex-row flex-wrap">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="w-full md:w-1/2 lg:w-1/3 p-4"
            >
              <motion.div
                className="group cursor-pointer relative h-64 md:h-80 rounded-xl overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${project.color}40, ${project.color})` }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                onClick={() => toggleProject(project.id)}
              >
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
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
                  {/* <span className="text-lg">+</span> */}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-48 p-4 md:p-8"
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                variants={detailsVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
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
          className="relative inline-flex items-center px-8 py-4 overflow-hidden font-horizon text-lg tracking-wider text-white bg-transparent b rounded-lg group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* <span className="absolute left-0 block w-full h-0 transition-all bg-[#ff004f] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span> */}
          {/* <span className="relative">Let's Collaborate</span> */}
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Projects;