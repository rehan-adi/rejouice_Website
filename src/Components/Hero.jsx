import { motion } from 'framer-motion'
import React from 'react'

function Hero() {
  return (

    <div className='relative h-screen w-full flex flex-col justify-end'>
      <div className='absolute inset-0'>
        <video className='h-full w-full object-cover' autoPlay loop muted>
          <source src="/src/Components/Media/RJ-2.0-Video background .mp4" type="video/mp4" />
        </video>
      </div>
      <div className='relative  flex justify-center items-center text- z-10'>
        <h1 className='text-[#FFFCF1] rejoice text-[380px] font-medium '>
          <motion.span
          initial={{opacity : 0, y : 50}}
          animate={{opacity : 1, y : 0}}
          transition={{ease : 'anticipate', duration : 0.50, delay: 1}}
          >r</motion.span>
          <motion.span
            initial={{opacity : 0, y : 50}}
            animate={{opacity : 1, y : 0}}
            transition={{ease : 'anticipate', duration : 0.20, delay: 1.20}}
          >e</motion.span>
          <motion.span
          initial={{opacity : 0, y : 50}}
          animate={{opacity : 1, y : 0}}
          transition={{ease : 'anticipate', duration : 0.20, delay: 1.40}}
          >j</motion.span>
          <motion.span
          initial={{opacity : 0, y : 50}}
          animate={{opacity : 1, y : 0}}
          transition={{ease : 'anticipate', duration : 0.20, delay: 1.60}}
          >o</motion.span>
          <motion.span
          initial={{opacity : 0, y : 50}}
          animate={{opacity : 1, y : 0}}
          transition={{ease : 'anticipate', duration : 0.20, delay: 1.80}}
          >u</motion.span>
          <motion.span
          initial={{opacity : 0, y : 50}}
          animate={{opacity : 1, y : 0}}
          transition={{ease : 'anticipate', duration : 0.20, delay: 2}}
          >i</motion.span>
          <motion.span
          initial={{opacity : 0, y : 50}}
          animate={{opacity : 1, y : 0}}
          transition={{ease : 'anticipate', duration : 0.20, delay: 2.20}}
          >c</motion.span>
          <motion.span
          initial={{opacity : 0, y : 50}}
          animate={{opacity : 1, y : 0}}
          transition={{ease : 'anticipate', duration : 0.20, delay: 2.40}}
          >e</motion.span>
          </h1>
      </div>
    </div>
  )
}

export default Hero