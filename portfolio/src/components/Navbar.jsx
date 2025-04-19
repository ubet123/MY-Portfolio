import React from 'react'

const Navbar = () => {
  return (
    <header className="w-full bg-black bg-opacity-90 shadow-md fixed top-0 z-50">
      <div className="flex justify-between items-center px-10 py-4">
        <div className="text-3xl font-bold text-white">
          <span className="text-yellow-400">S</span>erene.
        </div>
        <nav>
          <ul className="flex gap-8 text-lg font-semibold text-white">
            <li className="hover:text-yellow-400 transition"><a href="#">Home</a></li>
            <li className="hover:text-yellow-400 transition"><a href="#about">About</a></li>
            <li className="hover:text-yellow-400 transition"><a href="#projects">Projects</a></li>
            <li className="hover:text-yellow-400 transition"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar