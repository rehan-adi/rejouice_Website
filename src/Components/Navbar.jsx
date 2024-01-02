import { motion, AnimatePresence, useCycle } from 'framer-motion';
import React, { useState } from 'react';
import { IoMdPlayCircle } from "react-icons/io";

function Navbar() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <nav className='fixed top-0 left-0 z-50 right-0 flex justify-between items-center w-full text-white px-14 py-6 h-[15vh]'>
      <h1 className='text-xl font-medium'>
        <motion.span
          className='pr-1'
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.10 }}
        >The</motion.span>
        <motion.span
          className='pr-1'
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.40 }}
        >Venture</motion.span>
        <motion.span
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.70 }}
        >Agency.</motion.span>
      </h1>

      <h2 className='text-xl relative group '>
        <motion.span
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.10 }}
          className='group-hover:underline font-medium cursor-pointer underline-offset-[6px] group-hover:mt-1'
          onClick={() => toggleOpen()}
        >
          Menu
        </motion.span>
      </h2>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key='menu'
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className='fixed top-0 left-0 right-0 bottom-0 bg-[#FF5F38] px-10 h-[400px] z-40 flex items-center justify-between'
            onClick={() => toggleOpen()}
          >
            <div className='flex flex-col justify-start items-start'>
              <svg class="w:86fx h:28fx block" width="86" height="18" viewBox="0 0 86 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.184 10.736C41.184 14.912 38.304 17.336 34.992 17.336C31.68 17.336 28.8 14.936 28.8 10.736C28.8 6.56 31.68 4.184 34.992 4.184C38.304 4.184 41.184 6.536 41.184 10.736ZM0.96 17V9.968C0.96 6.008 3.72 4.376 6.288 4.376H7.536V6.44H6.24C4.296 6.44 3.072 7.736 3.072 10.136V17H0.96ZM8.016 10.736C8.016 6.632 10.632 4.136 14.112 4.184C18.12 4.232 19.968 7.304 19.968 10.376C19.968 10.736 19.944 11.072 19.896 11.432H10.224C10.416 14.192 12.168 15.392 14.232 15.392C16.176 15.392 17.328 14.504 17.736 13.04H19.896C19.464 15.56 17.352 17.336 14.184 17.336C10.848 17.336 8.016 15.152 8.016 10.736ZM10.272 9.608H17.736C17.472 7.112 15.888 6.128 14.064 6.128C12.096 6.128 10.584 7.136 10.272 9.608ZM20.472 17.144V15.08H21.768C23.712 15.08 24.936 13.784 24.936 11.384V4.52H27.048V11.552C27.048 15.512 24.288 17.144 21.72 17.144H20.472ZM24.552 1.52C24.552 0.727999 25.224 0.079999 25.992 0.079999C26.736 0.079999 27.408 0.727999 27.408 1.52C27.408 2.336 26.736 2.984 25.992 2.984C25.224 2.984 24.552 2.336 24.552 1.52ZM30.984 10.76C30.984 13.856 32.832 15.392 34.992 15.392C37.152 15.392 39 13.856 39 10.76C39 7.544 37.152 6.128 34.992 6.128C32.832 6.128 30.984 7.544 30.984 10.76ZM42.936 12.032V4.52H45.048V11.6C45.048 14.384 46.416 15.416 48.36 15.416C50.304 15.416 51.672 14.384 51.672 11.6V4.52H53.784V12.032C53.784 15.872 50.856 17.336 48.36 17.336C45.864 17.336 42.936 15.872 42.936 12.032ZM55.704 1.52C55.704 0.727999 56.376 0.079999 57.144 0.079999C57.888 0.079999 58.56 0.727999 58.56 1.52C58.56 2.336 57.888 2.984 57.144 2.984C56.376 2.984 55.704 2.336 55.704 1.52ZM56.088 17V4.52H58.2V17H56.088ZM59.952 10.736C59.952 6.56 62.808 4.184 66.12 4.184C69.216 4.184 71.736 5.792 71.976 9.2H69.84C69.552 6.896 67.968 6.128 66.072 6.128C63.936 6.128 62.136 7.544 62.136 10.76C62.136 13.856 63.912 15.392 66.096 15.392C68.016 15.392 69.528 14.264 69.84 11.96H71.976C71.736 15.416 69.264 17.336 66.144 17.336C62.784 17.336 59.952 14.936 59.952 10.736ZM73.056 10.736C73.056 6.632 75.672 4.136 79.152 4.184C83.16 4.232 85.008 7.304 85.008 10.376C85.008 10.736 84.984 11.072 84.936 11.432H75.264C75.456 14.192 77.208 15.392 79.272 15.392C81.216 15.392 82.368 14.504 82.776 13.04H84.936C84.504 15.56 82.392 17.336 79.224 17.336C75.888 17.336 73.056 15.152 73.056 10.736ZM75.312 9.608H82.776C82.512 7.112 80.928 6.128 79.104 6.128C77.136 6.128 75.624 7.136 75.312 9.608Z" fill="#2D2B2B"></path>
              </svg>
              <video className=' w-96 rounded-lg mt-4 h-56 object-cover' autoPlay loop muted>
                <source src="/src/Components/Media/RJ-2.0-Video background .mp4" type="video/mp4" />
              </video>
              <div className='flex gap-[245px] pt-3 items-center'>
                <h1 className='text-black'> <IoMdPlayCircle className='inline-block mr-2 text-xl' />Play reel</h1>
                <h1 className='text-black'>—01:18</h1>
              </div>
            </div>
            <div className='text-black flex justify-center items-start flex-col h-[350px] pr-32 bg-[#FF5F38] rounded-md'>
              <ul className=''>
                <li className='cursor-pointer text-5xl text-black'>Home</li>
                <li className='cursor-pointer text-5xl pt-[6px] text-black'>Contact</li>
                <li className='cursor-pointer pt-[6px] text-black text-5xl'>Work</li>
                <li className='cursor-pointer pt-[6px] text-black text-5xl'>Services & Models</li>
              </ul>
              <button className='px-8 py-3 mt-6 bg-transparent text-base border hover:bg-black hover:text-[#FF5F38] text-black text-opacity-90 border-black rounded-md'>Take a seat</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
