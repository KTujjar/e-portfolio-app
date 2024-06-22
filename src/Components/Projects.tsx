import React from 'react';

const Projects: React.FC = () => {
  return (
    <div id="projects" className="min-h-screen  bg-[#1a1a1a] flex flex-col space-y-4 py-24 md:py-8 items-center font-bold drop-shadow-sm">
        <h1 className="text-gray-200  text-4xl sm:text-5xl mb-12 md:my-12">
            Projects
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 p-4">
            <div className="box sm:h-[40vh] sm:w-[50vh] h-[30vh] w-[40vh] md:h-[55vh] md:w-[65vh] hover:shadow-xl hover:shadow-indigo-400  group relative bg-[url('./assets/rocketdocs.png')] max-h-[65vh] max-w-[65vh] bg-[length:500px_380px] md:bg-cover text-white rounded-lg border-gray-600 border-2 hover:scale-110 transition-all ease-in-out delay-50 duration-300">
              <div className="bg-gray-600 opacity-0 flex flex-row justify-between md:justify-normal md:flex-col relative group-hover:opacity-95 px-4 py-4 h-1/3 rounded-b-lg top-2/3 transition-all ease-in-out delay-100 duration-300">
                <h1 className="text-indigo-400 text-xl font-bold">RocketDocs</h1>
                <p className="font-semibold text-white hidden md:flex"> RocketDocs is an AI powered code documentation generator that allows you to create and talk to your documentation. </p>
                <button className="flex relative mt-6 bg-indigo-400 w-36 rounded-md items-center justify-center md:left-48 px-2 py-4 sm:py-1 bottom-6 md:bottom-0">
                  <a
                  href="https://github.com/ryanata/rocketdocs-frontend?tab=readme-ov-file"
                  target="_blank"
                  >GitHub</a>
                </button>
              </div>
            </div>
            <div className="box sm:h-[40vh] sm:w-[50vh] h-[30vh] w-[40vh] md:h-[55vh] md:w-[65vh] group relative bg-[url('./assets/pwdly.png')] hover:shadow-xl hover:shadow-blue-400 max-h-[65vh] max-w-[65vh] bg-[length:500px_380px] md:bg-cover text-white rounded-lg border-gray-600 border-2 hover:scale-110 transition-all ease-in-out delay-50 duration-300">
              <div className="bg-gray-600 opacity-0 flex flex-row justify-between md:justify-normal md:flex-col relative group-hover:opacity-95 px-4 py-4 h-1/3 rounded-b-lg top-2/3 transition-all ease-in-out delay-100 duration-300">
                <h1 className="text-blue-400 text-xl font-bold">pwdly</h1>
                <p className="font-semibold text-white md:flex hidden"> Pwdly is a web and mobile password manager application. </p>
                <button className="flex relative mt-6 bg-blue-400 w-36 rounded-md items-center justify-center md:left-48 px-2 py-4 sm:py-1 bottom-6 md:bottom-0">
                  <a
                  href="https://github.com/ryanata/password-manager"
                  target="_blank"
                  >GitHub</a>
                </button>
              </div>
            </div>
            <div className="box  sm:h-[40vh] sm:w-[50vh] h-[30vh] w-[40vh] md:h-[55vh] md:w-[65vh] group relative bg-[url('./assets/Contact.png')] hover:shadow-xl hover:shadow-blue-500 max-h-[65vh] max-w-[65vh] bg-center bg-[length:500px_300px] md:bg-[length:800px_510px] bg-no-repeat bg-size-100% text-white rounded-lg border-gray-600 border-2 hover:scale-110 transition-all ease-in-out delay-50 duration-300">
              <div className="bg-gray-600 opacity-0 flex flex-row justify-between md:justify-normal md:flex-col relative group-hover:opacity-95 px-4 py-4 h-1/3 rounded-b-lg top-2/3 transition-all ease-in-out delay-100 duration-300">
                <h1 className="text-blue-400 text-lg font-bold">Contact Manager</h1>
                <p className="font-semibold text-white md:flex hidden"> Basic contact manager web application made using html/css, javascript, and php. </p>
                <button className="flex relative mt-6 bg-blue-400 w-36 rounded-md items-center justify-center md:left-48 px-2 py-4 sm:py-1 bottom-6 md:bottom-0">
                  <a
                  href="https://github.com/Quinn-Barber/Remote-Database"
                  target="_blank"
                  >GitHub</a>
                </button>
              </div>
            </div>
            <div className="box  sm:h-[40vh] sm:w-[50vh] h-[30vh] w-[40vh] md:h-[55vh] md:w-[65vh] group relative bg-[url('./assets/SnakeGame.gif')] hover:shadow-xl hover:shadow-green-500 max-h-[65vh] max-w-[65vh] bg-center bg-[length:370px_280px] md:bg-[length:600px_520px] bg-no-repeat bg-size-100% text-white rounded-lg border-gray-600 border-2 hover:scale-110 transition-all ease-in-out delay-50 duration-300">
              <div className="bg-gray-600 opacity-0 flex flex-row justify-between md:justify-normal md:flex-col relative group-hover:opacity-95 px-4 py-4 h-1/3 rounded-b-lg top-2/3 transition-all ease-in-out delay-100 duration-300">
                <h1 className="text-green-400 text-lg font-bold">Snake Eye Gaze</h1>
                <p className="font-semibold text-white md:flex hidden"> Classic snake game that can be controlled using the player eyes. Won best beginner hack award.  </p>
                <button className="flex relative mt-6 bg-green-500 w-36 rounded-md items-center justify-center md:left-48 px-2 py-4 sm:py-1 bottom-6 md:bottom-0">
                  <a
                  href="https://devpost.com/software/snakeeyes-hgb6kv"
                  target="_blank"
                  >Devpost</a>
                </button>
              </div>
            </div>
        </div>
    </div>
  );
};

export default Projects;