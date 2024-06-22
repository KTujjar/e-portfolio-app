import React from 'react';
import me from '../assets/me2.png';
import { ReactTyped } from 'react-typed';
import resume from '../assets/resume.pdf';
import './introduction.css'
import ParticlesComponent from './ParticlesComponent';

const Introduction: React.FC = () => {


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
    <div>
        <div id='home' className="w-full md:min-h-screen top-0 z-[-2] md:h-screen flex flex-col space-y-4 p-8 items-center drop-shadow-sm bg-black overflow-hidden">
        <ParticlesComponent></ParticlesComponent>
            <div className="flex flex-col items-center justify-center min-w-full">
                <div className="flex flex-col items-center ">
                    <h1 className="text-white text-3xl md:text-5xl font-bold mt-20 md:mt-32">
                        Hi, I'm Khaled Tujjar
                    </h1>
                    <h1 className="text-[#0aff0a] text-3xl md:text-5xl font-bold mt-2">
                        <ReactTyped strings={["Front End Developer","Full Stack Developer"]} typeSpeed={50} backSpeed={50} loop/>
                    </h1>
                </div>
                <img
                    src = {me} // Update this path to your image file
                    alt="Profile"
                    className="w-64 h-64 md:w-72 md:h-72 rounded-full mt-8 grayscale"
                />  
                <ul className="flex mt-4">
                    <a href="https://github.com/KTujjar" aria-label="Github" target="_blank" rel="noopener noreferrer">
                        <img
                        src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"
                        alt="Github"
                        className="h-16 w-16 mx-2 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center grayscale"
                        />
                    </a>
                    <a href="https://stackoverflow.com/users/25458179/khaled-tujjar" aria-label="Stack Overflow" target="_blank" rel="noopener noreferrer">
                        <img
                        src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Stack_Overflow-512.png"
                        alt="Stack Overflow"
                        className="h-16 w-16 mx-2 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center grayscale"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/khaled-tujjar/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
                        alt="LinkedIn"
                        className="h-16 w-16 mx-2 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center grayscale"
                        />
                    </a>
                    <a href="https://www.instagram.com/khaledtujjar/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                        <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                        alt="Instagram"
                        className="h-16 w-16 mx-2 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center grayscale"
                        />
                    </a>
                </ul>
                <div className="flex">
                    <button className="flex justify-between items-center bg-[#0aff0a] w-36 h-12 rounded-md mt-8 md:mt-10 hover:scale-110 mx-4">
                        <a 
                            className="flex justify-between items-center mx-5 py-2 w-36"
                            href= {resume}
                            download="resume.pdf"
                        >
                            <span className="text-black font-semibold">Resume</span>
                            <img 
                            src="https://www.svgrepo.com/show/140007/download-button.svg"
                            alt="Download"
                            className="h-5 w-5 cursor-pointer flex flex-col justify-center items-center"
                            />
                        </a>
                    </button>
                    <button className="flex justify-between items-center bg-[#7dedff] w-36 h-12 rounded-md mt-8 md:mt-10 hover:scale-110 mx-4">
                        <a 
                            onClick={() => scrollToSection("contact")}
                            className="flex justify-between items-center mx-5 py-2 w-36"
                        >
                            <span className="text-black font-semibold">Contact</span>
                            <img 
                            src="https://cdn-icons-png.freepik.com/256/3095/3095583.png?semt=ais_hybrid"
                            alt="Download"
                            className="h-8 w-8 cursor-pointer flex flex-col justify-center items-center"
                            />
                        </a>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Introduction;