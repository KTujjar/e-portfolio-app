import React from 'react';
import { useRef, useState } from 'react';
import  emailjs from '@emailjs/browser';


const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const templateParamaters = {
        from_name: name,
        from_email: email,
        to_name: 'Khaled',
        message: message,
    };

    const form = useRef<HTMLFormElement | null>(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    
    const templateId  = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;

    const publicKey  = import.meta.env.VITE_EMAILJS_USER_ID!;

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if(form.current){
            emailjs
            .send(serviceId, templateId, templateParamaters, publicKey)
            .then(() => {
                console.log('SUCCESS!');
                setName('');
                setEmail('');
                setMessage('');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message. Please try again.');
            });
        }
        
    }


    return (
        <div id='contact' className="min-h-screen bg-[#0d0d0d] p-4 ">
            <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-6 px-4">
                <h1 className="text-gray-200  text-4xl sm:text-5xl my-12 text-center font-bold">
                    Contact
                </h1>
                <h1 className="text-left text-3xl  font-semibold text-[#11c511]">Let's Connect</h1>
                <h1 className="text-left text-xl font-semibold text-white">If you have any feedback, opportunities, or if you would just like to </h1>
                <h1 className="text-left text-xl  font-semibold text-white">say hello, send me a message. I'd love to hear from you.</h1>
                <div className="flex justify-between items-center md:items-stretch flex-col md:flex-row pb-24 ">
                    <div className="w-full md:pr-8">
                        <form ref={form} onSubmit={sendEmail}>
                            <h1 className="text-gray-200 text-left text-xl font-semibold my-6"> Name</h1>
                            <input  onChange={(e) => setName(e.target.value)} type="text" name="user_name" className="h-12 block w-full  mt-4 rounded-md bg-gray-300  placeholder-black pl-4 my-6 outline-none" placeholder='Enter your name'></input>
                            <h1 className="text-gray-200 text-left text-xl  font-semibold mt-8"> Email</h1>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" className="h-12 block w-full  mt-4 rounded-md bg-gray-300  placeholder-black pl-4  outline-none" placeholder='Enter your E-mail'></input>
                            <h1 className="text-gray-200 text-left text-xl  font-semibold mt-8"> Message</h1>
                            <input  onChange={(e) => setMessage(e.target.value)} name="message" className="h-36 block w-full  mt-4 rounded-md bg-gray-300  placeholder-black pl-4 pb-24 outline-none" placeholder='Enter your message'></input>
                            <div className="flex justify-center ">
                                <button type="submit" className="bg-[#11c511] text-white px-6 py-2 w-48 rounded-md hover:bg-[#13dd13] mt-6 outline-gray-500">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="w-full flex flex-col mt-12 md:mt-6 md:items-end">
                        <h1 className="text-gray-200 text-3xl  text-whitetext-3xl font-bold">Email</h1>
                        <a href="mailto:khaledtujjar2002@gmail.com" className="mb-12 text-xl mt-4 font-semibold text-[#13dd13] block uppercase">khaledtujjar2002@gmail.com</a>
                        <h1 className="text-gray-200 text-3xl font-bold">Phone</h1>
                        <a href="tel:4075905575" className="mb-12 text-2xl mt-4 font-semibold text-[#13dd13] block uppercase">407-590-5575</a>
                        <h1 className="text-gray-200 text-3xl font-bold">Social</h1>
                        <ul className="flex">
                            <a href="https://github.com/KTujjar" aria-label="Github" target="_blank" rel="noopener noreferrer">
                                <img
                                src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"
                                alt="Github"
                                className="h-12 w-12 md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center grayscale"
                                />
                            </a>
                            <a href="https://stackoverflow.com/users/25458179/khaled-tujjar" aria-label="Stack Overflow" target="_blank" rel="noopener noreferrer">
                                <img
                                src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Stack_Overflow-512.png"
                                alt="Stack Overflow"
                                className="h-12 w-12 md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                                />
                            </a>
                            <a href="https://www.linkedin.com/in/khaled-tujjar/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
                                alt="LinkedIn"
                                className="h-12 w-12 md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                                />
                            </a>
                            <a href="https://www.instagram.com/khaledtujjar/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                                alt="Instagram"
                                className="h-12 w-12 md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                                />
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;