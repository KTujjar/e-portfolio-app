import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);


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

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

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
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          <a onClick={() => scrollToSection("home")} className={`hover:text-blue-500 ${activeSection === 'home' ? 'text-blue-500' : 'text-black'} font-bold text-lg hover:cursor-pointer`}>Home</a>
          <a onClick={() => scrollToSection("about")} className={`hover:text-blue-500 ${activeSection === 'about' ? 'text-blue-500' : 'text-black'} font-bold text-lg hover:cursor-pointer`}>About</a>
          <a onClick={() => scrollToSection("projects")} className={`hover:text-blue-500 ${activeSection === 'projects' ? 'text-blue-500' : 'text-black'} font-bold text-lg hover:cursor-pointer`}>Projects</a>
          <a onClick={() => scrollToSection("contact")} className={`hover:text-blue-500 ${activeSection === 'contact' ? 'text-blue-500' : 'text-black'} font-bold text-lg hover:cursor-pointer`}>Contact</a>
        </div>
        {/*Mobile Menu*/}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black focus:outline-none">
            {menuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
        </div>
      </div>
       {/* Mobile Menu */}
       {menuOpen && (
        <div className=" absolute bg-gray-100 mt-1 md:hidden top-16 right-0  shadow-lg w-1/3 rounded-md overflow-hidden">
          <a onClick={() => scrollToSection('home')} className={`block px-4 py-2 ${activeSection === 'home' ? 'text-blue-500' : 'text-black'} font-bold text-lg hover:cursor-pointer`}>Home</a>
          <a onClick={() => scrollToSection('about')} className={`block px-4 py-2 ${activeSection === 'about' ? 'text-blue-500' : 'text-black'} font-bold text-lg hover:cursor-pointer`}>About</a>
          <a onClick={() => scrollToSection('projects')} className={`block px-4 py-2 ${activeSection === 'projects' ? 'text-blue-500' : 'text-black'} font-bold text-lg hover:cursor-pointer`}>Projects</a>
          <a onClick={() => scrollToSection('contact')} className={`block px-4 py-2 ${activeSection === 'contact' ? 'text-blue-500' : 'text-black'} font-bold text-lg hover:cursor-pointer`}>Contact</a>
        </div>
       )}
    </nav>
  );
};

export default Navbar;