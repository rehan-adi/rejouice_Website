import { motion } from 'framer-motion'
import React from 'react'

function Navbar() {
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
        className='group-hover:underline font-medium cursor-pointer underline-offset-[6px] group-hover:mt-1'>Menu
        </motion.span>

      </h2>

    </nav>
  )
}

export default Navbar