import React, { useEffect, useRef, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Header = () => {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [drop,setDrop]=useState(false)

  const socialLinks = [
    { icon: <FaGithub className="text-black text-xl " />, url: 'https://github.com/ubet123/' },
    { icon: <FaLinkedin className="text-black text-xl" />, url: 'https://www.linkedin.com/in/serene-dmello-572605344/' },
    
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; 
      setScrolled(isScrolled);
      
      if (navRef.current) {
        if (isScrolled) {
          navRef.current.classList.add('bg-opacity-65', 'backdrop-blur-xl');
          navRef.current.classList.remove('bg-opacity-100');
        } else {
          navRef.current.classList.remove('bg-opacity-35', 'backdrop-blur-xl');
          navRef.current.classList.add('bg-opacity-100');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dropdown=()=>{
    setDrop(!drop)

  }

  return (
    <div id="header" 
      className="w-full h-screen bg-center bg-no-repeat bg-cover bg-fixed" 
      style={{ backgroundImage: `url(https://images.unsplash.com/photo-1644677656410-c6ffa3f8fa6d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
    >
      {/* Navigation Bar */}
      <div 
        ref={navRef}
        className="flex flex-row justify-between items-center py-4 bg-[rgba(3,3,3,0.966)] w-full px-6 md:px-10 lg:px-14 xl:pr-40 shadow-md fixed top-0 z-40 transition-all duration-300"
      >
        <div className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
          <span className="text-yellow-400">S</span>erene.
        </div>
        
        {/* Mobile menu button */}
        <div onClick={dropdown} className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/*Dropdown navbar*/}
        {drop?(<div className={`
  flex fixed top-20 left-6
  transition-height duration-300 ease-in-out 
  ${drop ? 'h-44 translate-y-0' : 'h-0 -translate-y-2'} 
  flex-col  rounded-lg
  bg-gray-900/95 backdrop-blur-sm  
  text-yellow-400 border border-gray-800 
  
  items-center
  justify-center gap-4 font-rajdhani font-bold text-lg
  w-80
`}>
        <a href="#"><div className='cursor-pointer'>Home</div></a>  
        <a href="#about"><div className='cursor-pointer'>About</div></a>  
        <a href="#projects"><div className='cursor-pointer'>Projects</div></a>  
         <a href="#contact"><div className='cursor-pointer'>Contact</div></a> 
        </div>):''}
        
        
        {/* Desktop navigation */}
        <ul className="hidden md:flex flex-row list-none justify-around gap-4 lg:gap-8 text-base lg:text-xl font-semibold font-rajdhani">
          {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
            <li key={index} className="cursor-pointer relative group">
              <a 
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`} 
                className="text-white no-underline px-2 py-1 transition-colors duration-300"
              >
                {item}
                <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-yellow-400 transition-all duration-300 rounded-full group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Hero Section - Adjusted positioning based on scroll */}
      <div className={`animate-appear absolute left-1/2 top-1/2 transform -translate-x-1/2 ${scrolled ? '-translate-y-[70%]' : '-translate-y-[60%]'} w-4/5 md:w-auto text-center -mt-16 transition-all duration-300`}>
  {/* Enhanced frontend developer text */}
  <div className="relative mb-2">
    <div className="font-dosis uppercase tracking-widest text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-300 mb-2">
      Front-end Developer
    </div>
    <div className="absolute left-1/2 -translate-x-1/2 -top-2 font-dosis uppercase tracking-widest text-2xl md:text-3xl font-bold text-gray-800 opacity-20 blur-sm">
      Front-end Developer
    </div>
  </div>
  
  {/* Enhanced typewriter effect */}
  <div className="font-special-gothic text-3xl md:text-4xl lg:text-5xl pt-2 lg:pt-5 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    <Typewriter
      options={{
        strings: [
          "Hi, I'm Serene",
          "I build web experiences",
          "I create digital solutions",
          "Welcome to my portfolio!"
        ],
        autoStart: true,
        loop: true,
        delay: 50,
        deleteSpeed: 20,
        wrapperClassName: "text-yellow-400",
        cursorClassName: "text-yellow-400"
      }}
    />
  </div>
  
  
</div>
      {/* Decorative elements */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-3">
        <div className="w-3 h-8 rounded-full bg-black animate-bounce"></div>
        <div className="w-3 h-8 rounded-full bg-black animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-3 h-8 rounded-full bg-black animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>
      
      {/* Social media links */}
      <div className="hidden md:flex flex-col absolute right-6 bottom-1/3 gap-4 z-40">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white hover:bg-yellow-400 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;