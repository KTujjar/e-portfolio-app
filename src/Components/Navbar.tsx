import React from 'react';
import { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ['home', 'about', 'projects', 'contact']; // Replace with IDs of your sections
      let active = '';

      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          active = sectionId;
        }
      });

      setActiveSection(active);
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Clean up event listener on component unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <nav className="bg-white p-4 fixed top-0 w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-xl font-bold">
          Khaled Tujjar
        </div>
        <div className="space-x-12">
          <a onClick={() => scrollToSection("home")} className={`hover:text-blue-500 ${activeSection === 'home' ? 'text-blue-500' : 'text-black'} font-bold text-lg hover:cursor-pointer`}>Home</a>
          <a onClick={() => scrollToSection("about")} className={`hover:text-blue-500 ${activeSection === 'about' ? 'text-blue-500' : 'text-black'} font-bold text-lg hover:cursor-pointer`}>About</a>
          <a onClick={() => scrollToSection("projects")} className={`hover:text-blue-500 ${activeSection === 'projects' ? 'text-blue-500' : 'text-black'} font-bold text-lg hover:cursor-pointer`}>Projects</a>
          <a onClick={() => scrollToSection("contact")} className={`hover:text-blue-500 ${activeSection === 'contact' ? 'text-blue-500' : 'text-black'} font-bold text-lg hover:cursor-pointer`}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;