import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full bg-gray-900 py-6 text-center relative overflow-hidden border-t border-gray-800"
    >
      {/* Glowing gradient border top */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD166] to-transparent origin-left"
      />
      
      <div className="container mx-auto px-4">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="inline-block"
        >
          <span className="text-gray-400 font-light text-sm tracking-wider">
            © {new Date().getFullYear()}{' '}
          </span>
          <motion.span 
            initial={{ color: "#FFFFFF" }}
            whileHover={{ 
              color: "#FFD166",
              textShadow: "0 0 8px rgba(255, 209, 102, 0.4)"
            }}
            transition={{ duration: 0.3 }}
            className="font-normal text-white cursor-pointer font-special-gothic text-xl tracking-tight"
            
          >
            Serene
          </motion.span>
        </motion.div>

        {/* Subtle floating dots */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: -10,
              opacity: [0, 0.4, 0],
              transition: {
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "linear"
              }
            }}
            className="absolute rounded-full bg-[#FFD166]"
            style={{
              width: `${Math.random() * 20 + 2}px`,
              height: `${Math.random() * 22 + 2}px`,
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 15 + 5}%`,
              filter: "blur(0.5px)"
            }}
          />
        ))}
      </div>
    </motion.footer>
  );
};

export default Footer;