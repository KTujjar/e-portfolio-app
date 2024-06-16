import React from 'react';

const Projects: React.FC = () => {
  return (
    <div id="projects" className="min-h-screen  bg-gray-200 flex flex-col space-y-4 p-4 items-center font-bold drop-shadow-sm">
        <h1 className="text-black text-5xl my-12">
            Projects
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 p-4">
            <div className="box h-[55vh] w-[65vh] hover:shadow-xl hover:shadow-indigo-400  group relative bg-[url('./assets/rocketdocs.png')] max-h-[65vh] max-w-[65vh] bg-cover text-white rounded-lg border-gray-400 border-2 hover:scale-110 transition-all ease-in-out delay-50 duration-300">
              <div className="bg-gray-600 opacity-0 flex flex-col relative group-hover:opacity-95 px-4 py-4 h-1/3 rounded-b-lg top-2/3 transition-all ease-in-out delay-100 duration-300">
                <h1 className="text-indigo-400 text-xl font-bold">RocketDocs</h1>
                <p className="font-semibold text-white"> RocketDocs is an AI powered code documentation generator that allows you to create and talk to your documentation. </p>
                <button className="flex relative mt-6 bg-indigo-400 w-36 rounded-md items-center justify-center left-48 px-2 py-1">
                  <a
                  href="https://github.com/ryanata/rocketdocs-frontend?tab=readme-ov-file"
                  target="_blank"
                  >GitHub</a>
                </button>
              </div>
            </div>
            <div className="box h-[55vh] w-[65vh] group relative bg-[url('./assets/pwdly.png')] hover:shadow-xl hover:shadow-blue-400 max-h-[65vh] max-w-[65vh] bg-cover text-white rounded-lg border-gray-400 border-2 hover:scale-110 transition-all ease-in-out delay-50 duration-300">
              <div className="bg-gray-600 opacity-0 flex flex-col relative group-hover:opacity-95 px-4 py-4 border-black h-1/3 rounded-b-lg top-2/3 transition-all ease-in-out delay-100 duration-300">
                <h1 className="text-blue-400 text-xl font-bold">pwdly</h1>
                <p className="font-semibold text-white"> Pwdly is a web and mobile password manager application. </p>
                <button className="flex relative mt-6 bg-blue-400 w-36 rounded-md items-center justify-center left-48 px-2 py-1">
                  <a
                  href="https://github.com/ryanata/password-manager"
                  target="_blank"
                  >GitHub</a>
                </button>
              </div>
            </div>
            <div className="box h-[55vh] w-[65vh] group relative bg-[url('./assets/Contact.png')] hover:shadow-xl hover:shadow-blue-500 max-h-[65vh] max-w-[65vh] bg-center bg-[length:800px_510px] bg-no-repeat bg-size-100% text-white rounded-lg border-gray-400 border-2 hover:scale-110 transition-all ease-in-out delay-50 duration-300">
              <div className="bg-gray-600 opacity-0 flex flex-col relative group-hover:opacity-95 px-4 py-4 border-black h-1/3 rounded-b-lg top-2/3 transition-all ease-in-out delay-100 duration-300">
                <h1 className="text-blue-400 text-xl font-bold">Contact Manager</h1>
                <p className="font-semibold text-white"> Basic contact manager web application made using html/css, javascript, and php. </p>
                <button className="flex relative mt-6 bg-blue-400 w-36 rounded-md items-center justify-center left-48 px-2 py-1">
                  <a
                  href="https://github.com/Quinn-Barber/Remote-Database"
                  target="_blank"
                  >GitHub</a>
                </button>
              </div>
            </div>
            <div className="box h-[55vh] w-[65vh] group relative bg-[url('./assets/SnakeGame.gif')] hover:shadow-xl hover:shadow-green-500 max-h-[65vh] max-w-[65vh] bg-center bg-[length:600px_520px] bg-no-repeat bg-size-100% text-white rounded-lg border-gray-400 border-2 hover:scale-110 transition-all ease-in-out delay-50 duration-300">
              <div className="bg-gray-600 opacity-0 flex flex-col relative group-hover:opacity-95 px-4 py-4 border-black h-1/3 rounded-b-lg top-2/3 transition-all ease-in-out delay-100 duration-300">
                <h1 className="text-green-400 text-xl font-bold">Snake Eye Gaze</h1>
                <p className="font-semibold text-white"> Classic snake game that can be controlled using the player eyes. Won best beginner hack award.  </p>
                <button className="flex relative mt-6 bg-green-500 w-36 rounded-md items-center justify-center left-48 px-2 py-1">
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