import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import resumePDF from '../assets/Serene_New_Resume.pdf'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";


const Contact = () => {
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(contactRef, { once: false, amount: 0.2 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
  
    try {
      const response = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }
  
      setFormData({ name: '', email: '', message: '' });
      setFormStatus({ 
        isSubmitting: false, 
        isSubmitted: true, 
        error: null 
      });
  
    } catch (error) {
      setFormStatus({ 
        isSubmitting: false, 
        isSubmitted: false, 
        error: error.message 
      });
    }
  };

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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    idle: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(255, 212, 1, 0.2)"
    },
    tap: { scale: 0.95 }
  };

  return (
    <section 
      ref={contactRef} 
      id="contact" 
      className="py-24 px-6 md:px-12 lg:px-24 bg-black text-white overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="relative mb-16 text-center"
      >
        <h2 className="text-3xl md:text-6xl lg:text-7xl font-rajdhani font-bold tracking-wider mb-4">
          <div className='flex flex-row justify-center items-center gap-3 md:gap-5'>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff9b1] to-[#ffd8a1]">Connect</span> With Me 
          <FaRegPaperPlane />
          </div>
         
        </h2>
        <p className="mt-4 font-dosis text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Have a project in mind? Let's create something amazing together.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto"
      >
        {/* Contact Information */}
        <motion.div 
          variants={itemVariants}
          className="lg:w-2/5 p-6 md:p-8 bg-gray-900 rounded-2xl border border-gray-800"
        >
          <h3 className="font-special-gothic text-2xl mb-8 relative">
            Contact Information
            <span className="absolute bottom-0 left-0 w-20 h-1 bg-[#ff004f]"></span>
          </h3>
          
          <motion.div 
            variants={itemVariants}
            className="mb-8 flex items-start"
          >
            <div className="p-3 bg-gray-800 rounded-xl mr-4">
              <MdOutlineEmail className='bx bx-envelope text-[#ffd401] text-xl'/>
            </div>
            <div>
              
              <h4 className="font-rajdhani text-gray-400 text-sm mb-1">Email</h4>
              <p className="font-poppins md:text-base text-sm">dmelloserene08@gmail.com</p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mb-8 flex items-start"
          >
            <div className="p-3 bg-gray-800 rounded-xl mr-4">
              <FaPhoneAlt  className='bx bx-phone text-[#ffd401] text-xl'/>
            </div>
            <div>
              <h4 className="font-rajdhani text-gray-400 text-sm mb-1">Phone</h4>
              <p className="font-poppins">9309271710</p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mb-8"
          >
            <h4 className="font-rajdhani text-gray-400 text-sm mb-3">Social Media</h4>
            <div className="flex gap-4">
              <motion.a 
                href="https://github.com/ubet123" 
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-gray-800 rounded-xl text-gray-300 hover:text-[#ffd401] hover:bg-gray-700"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                
                <FaGithub className='text-xl'/>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/serene-dmello-572605344/" 
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-gray-800 rounded-xl text-gray-300 hover:text-[#ffd401] hover:bg-gray-700"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <FaLinkedin className='text-xl'/>
              </motion.a>
             
            </div>
          </motion.div>
          
          <motion.a
            href={resumePDF}
            download
            variants={buttonVariants}
            initial="idle"
            whileHover="hover"
            whileTap="tap"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-yellow-300 hover:border-black hover:border-4 text-black font-poppins font-bold text-lg"
          >
            Download CV
            <i className='bx bx-download ml-2'></i>
          </motion.a>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          variants={itemVariants}
          className="lg:w-3/5 p-6 md:p-8 bg-gray-900 rounded-2xl border border-gray-800"
        >
          <h3 className="font-special-gothic text-2xl mb-8 relative">
            Send Me a Message
            <span className="absolute bottom-0 left-0 w-20 h-1 bg-[#ff004f]"></span>
          </h3>
          
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block font-rajdhani text-gray-400 text-sm mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-[#ffd401] focus:outline-none transition-colors duration-300"
                placeholder="John Doe"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block font-rajdhani text-gray-400 text-sm mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-[#ffd401] focus:outline-none transition-colors duration-300"
                placeholder="john@example.com"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block font-rajdhani text-gray-400 text-sm mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full p-4 rounded-xl bg-gray-800 text-white border border-gray-700 focus:border-[#ffd401] focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Hello, I'm interested in discussing a project..."
              ></textarea>
            </motion.div>
            
            <motion.div variants={itemVariants} className="pt-2">
              <motion.button
                type="submit"
                disabled={formStatus.isSubmitting}
                variants={buttonVariants}
                initial="idle"
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-4 rounded-xl bg-yellow-300  text-black font-poppins text-lg relative overflow-hidden"
              >
                {formStatus.isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : "Send Message"}
              </motion.button>
              
              {formStatus.isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 p-3 bg-green-900 text-green-200 rounded-lg"
                >
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}
              
              {formStatus.error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 p-3 bg-red-900 text-red-200 rounded-lg"
                >
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                    </svg>
                    {formStatus.error}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;