import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div id='about' className="min-h-screen bg-gray-50 space-y-4 p-4 drop-shadow-sm">
      <div className="max-w-7xl x-4 px-8 mx-auto items-center">
        <h1 className="text-black text-4xl sm:text-5xl my-12 font-bold text-center">
            About Me
        </h1>
        <div className="flex flex-col w">
          <p className="text-left text-2xl font-semibold text-gray-500"> 
            I'm a recent graduate with a bachelors in computer science with ambitions of becoming a Software Engineer. My most recent projects provided me with experience
            in creating applications using TypeScript and TailwindCSS. 
          </p>
          <h1 className="text-center text-2xl sm:text-5xl font-bold text-blue-400 my-4"> Technologies and Tools</h1>
          <p className="text-left text-2xl font-semibold text-gray-500"> 
            These are the technologies that I've gained experience with in the last four years using them through projects in and out of class.
            Currently I'm mainly using TypeScript or JavaScript with React to create web applications as I enjoy creating beautiful user experiences that bring joy.
          </p>
        </div>
        <div className="flex flex-wrap mt-8  items-center justify-center">
          <div data-title="C" className="box py-2 px-2 w-24 h-24 sm:w-32 sm:h-32 mx-4 my-4 hover:scale-125 hover:shadow-lg hover:shadow-blue-300 bg-gray-100 rounded-lg">
            <img alt="C" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/c/c-original.svg"/>
          </div>
          <div data-title="TypeScript" className="box py-2 px-2 w-24 h-24 sm:w-32 sm:h-32 mx-4 my-4 hover:scale-125 hover:shadow-lg hover:shadow-blue-300 bg-gray-100 rounded-lg">
            <img alt="TypeScript" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/typescript/typescript-original.svg"/>
          </div>
          <div data-title="JavaScript" className="box py-2 px-2 w-24 h-24 sm:w-32 sm:h-32 mx-4 my-4 hover:scale-125 bg-gray-100 hover:shadow-lg hover:shadow-yellow-200 rounded-lg">
            <img alt="JavaScript" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/javascript/javascript-original.svg"/>
          </div>
          <div data-title="Python" className="box py-2 px-2 w-24 h-24 sm:w-32 sm:h-32 mx-4 my-4 hover:scale-125 bg-gray-100 hover:shadow-lg hover-shadow-python rounded-lg">
            <img alt="Python" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/python/python-original.svg"/>
          </div>
          <div data-title="Java" className="box py-2 px-2 w-24 h-24 sm:w-32 sm:h-32 mx-4 my-4 hover:scale-125 hover:shadow-lg hover-shadow-java bg-gray-100 rounded-lg">
            <img alt="Java" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/java/java-original.svg"/>
          </div>
          <div data-title="HTML" className="box py-2 px-2 w-24 h-24 sm:w-32 sm:h-32 mx-4 my-4 hover:scale-125  hover:shadow-lg hover:shadow-orange-300 bg-gray-100 rounded-lg">
            <img alt="HTML" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/html5/html5-original.svg"/>
          </div>
          <div data-title="CSS" className="box py-2 px-2 w-24 h-24 sm:w-32 sm:h-32 mx-4 my-4 hover:scale-125 hover:shadow-lg hover:shadow-blue-200 bg-gray-100 rounded-lg">
            <img alt="CSS" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/css3/css3-original.svg"/>
          </div>
          <div data-title="NodeJS" className="box py-2 px-2 w-24 h-24 sm:w-32 sm:h-32 mx-4 my-4 hover:scale-125 hover:shadow-lg hover:shadow-green-300 bg-gray-100 rounded-lg">
            <img alt="NodeJS" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/nodejs/nodejs-original-wordmark.svg"/>
          </div>
          <div data-title="React" className="box py-2 px-2 w-24 h-24 sm:w-32 sm:h-32 mx-4 my-4 hover:scale-125 hover:shadow-lg hover:shadow-blue-200 bg-gray-100 rounded-lg">
            <img alt="React" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/react/react-original-wordmark.svg"/>
          </div>
          <div data-title="Tailwind" className="box py-2 px-2 w-24 h-24 sm:w-32 sm:h-32 mx-4 my-4 hover:scale-125 hover:shadow-lg hover:shadow-blue-200 bg-gray-100 rounded-lg">
            <img alt="TailWindCSS" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg"/>
          </div>
          <div data-title="Git" className="box py-2 px-2 w-24 h-24 sm:w-32 sm:h-32 mb-20  mx-4 my-4 hover:scale-125 hover:shadow-lg hover:shadow-orange-300 bg-gray-100 rounded-lg">
            <img alt="Git" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/git/git-original-wordmark.svg"/>
          </div>
          <div data-title="Angular" className="box py-2 px-2 w-24 h-24 sm:w-32 sm:h-32 mx-4 my-4 mb-20 hover:scale-125 hover:shadow-lg hover:shadow-red-400 bg-gray-100 rounded-lg">
            <img alt="Angular" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/angular/angular-original.svg"/>
          </div>
       </div>
       </div>
    </div>
  );
};

export default About;