import React from 'react';
import me from '../assets/me2.png';
import { ReactTyped } from 'react-typed';
import resume from '../assets/resume.pdf';
import './introduction.css'
import ParticlesComponent from './ParticlesComponent';

const Introduction: React.FC = () => {
  return (
    <div>
        <div id='home' className="min-h-screen top-0 z-[-2] h-screen flex flex-col space-y-4 p-8 items-center drop-shadow-sm bg-gray-800">
        <ParticlesComponent></ParticlesComponent>
            <div className="flex flex-col items-center justify-center min-w-full">
                <div className="flex flex-col items-center ">
                    <h1 className="text-gray-300 text-5xl font-bold mt-32">
                        Hi, I'm Khaled Tujjar
                    </h1>
                    <h1 className="text-blue-400 text-5xl font-bold mt-2">
                        <ReactTyped strings={["Front End Developer","Full Stack Developer"]} typeSpeed={50} backSpeed={50} loop/>
                    </h1>
                </div>
                <img
                    src = {me} // Update this path to your image file
                    alt="Profile"
                    className="w-72 h-72 rounded-full mt-8"
                />  
                <ul className="flex mt-4">
                    <a href="https://github.com/KTujjar" aria-label="Github" target="_blank" rel="noopener noreferrer">
                        <img
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        alt="Github"
                        className="h-14 w-14 mx-2 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                        />
                    </a>
                    <a href="https://stackoverflow.com/users/25458179/khaled-tujjar" aria-label="Stack Overflow" target="_blank" rel="noopener noreferrer">
                        <img
                        src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Stack_Overflow-512.png"
                        alt="Stack Overflow"
                        className="h-14 w-14 mx-2 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/khaled-tujjar/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
                        alt="LinkedIn"
                        className="h-14 w-14 mx-2 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                        />
                    </a>
                    <a href="https://www.instagram.com/khaledtujjar/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                        <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                        alt="Instagram"
                        className="h-14 w-14 mx-2 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                        />
                    </a>
                </ul>
                <div className="flex">
                    <button className="flex justify-between items-center bg-blue-500 w-36 rounded-md mt-10 hover:scale-110">
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
                </div>
            </div>
        </div>
    </div>
  );
};

export default Introduction;