"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import EncryptButton from './aniboton';
import '../css/getintoch.css'


export default function GetinPage() {
 
  return (
    <div className="flex flex-col items-center justify-center h-auto bg-black-100 p-4 ">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full bg-black-100 max-w-5xl rounded-xl shadow-lg p-8 "
      >
        <div className="flex justify-center items-center flex-col">
        <h2
          className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight"
        >
          Get in
          <span className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-[#780206] to-[#061161]">
            Touch
          </span>
        </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mt-0 flex justify-center items-center flex-col bg-black-100 " id='maindd'>
           <div className=' flex justify-center items-center w-full h-[50%]'>
           <Image 
              src="https://maheshkumar77.github.io/New_portfolio_use_Nextjs/getintouch.jpg" // Make sure the image path is correct
              alt="Iron Man Image" 
              className="rounded-xl shadow-md" 
              width={400} 
              height={500} 
            />
           </div>
           <motion.div 
           initial={{opacity:0,y:100}}
           whileInView={{opacity:1,y:0}}
           transition={{duration:1.9}}
           className='flex justify-center items-center w-full h-[50%] mt-[-100px] '>
            <div className='flex justify-between w-[400px]  flex-col bg-black-200 rounded-sm px-3 h-[50%]'>
            <p className='  mb-2 mt-3  text-2xl font-bold '>Mahesh Ku. Sahu</p>
            <p className='mb-2  text-xl text-white'>Full Stack Developer</p>
            <p className='mb-2 text-white-200'>I am available for freelance work also. Connect with me via :</p>
            <div className=' flex w-full flex-row gap-1 items-center'>
            <div className='mb-2 text-white-200 '>Phone No.:-</div> <div className='  cursor-pointer' id='phon'>+91 8984986052
               
                </div>
            </div>
            <div className=' flex w-full flex-row gap-1 items-center'>
            <div className='mb-2 text-white-200 '>Email:-</div> <div className='  cursor-pointer' id='phon'>maheshkumarsahu605@gmail.com
                
                </div>
            </div>

            <div>
                <p className='mb-2 mt-3 text-xl text-white-200'></p>
            </div>
            </div>
           </motion.div>
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <div className="flex flex-col items-center p-6" id='formdiv'>
              <form>
                <div className="flex space-x-6 mb-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="fullstack"
                      
                      className="h-6 w-6 rounded-full border-2 border-gray-400 checked:bg-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-xs text-white">Fullstack Developer</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="frontend"
                      
                      className="h-6 w-6 rounded-full border-2 border-gray-400 checked:bg-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-xs text-white">Frontend Developer</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="backend"
                      
                      className="h-6 w-6 rounded-full border-2 border-gray-400 checked:bg-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-xs text-white flex">Backend Developer</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="webdev"
                      
                      className="h-6 w-6 rounded-full border-2 border-gray-400 checked:bg-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-xs text-white">Web Developer</span>
                  </label>
                </div>
                
                {/* Form fields */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="fullName">Full name</label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full px-3 py-2 border rounded-xl"
                    placeholder="Full name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border rounded-xl"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="projectCategory">Phone No.</label>
                  <input
                    type="text"
                    id="Phonenumber"
                    className="w-full px-3 py-2 border rounded-xl"
                    placeholder="Phone No."
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="budget">Subject</label>
                  <input
                    type="text"
                    id="Subject"
                    className="w-full px-3 py-2 border rounded-xl"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className="w-full px-3 py-2 border rounded-xl"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full items-center"
                >
                  <EncryptButton />
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
