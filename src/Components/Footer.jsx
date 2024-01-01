import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Footer() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView1) {
      controls.start({ y: 0, opacity: 1, transition: { duration: 3, delay: 0.40 } });
    }
  }, [inView1, controls]);

  useEffect(() => {
    if (inView2) {
      controls.start({ y: 0, opacity: 1, transition: { duration: 3, delay: 0.80 } });
    }
  }, [inView2, controls]);

  useEffect(() => {
    if (headerInView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.80, ease: 'backInOut' } });
    }
  }, [headerInView, controls]);

  return (
    <div className='h-[115vh] text-[#FFFCF1] px-14 py-8 w-auto bg-black'>
      <div className='flex z-50 justify-between'>
        <div>
          <motion.h1
            className='text-2xl font-normal'
            initial={{ opacity: 0, y: 50, }}
            animate={controls}
            transition={{delay : 1}}
            ref={ref1}>
            Relax. We got you.
          </motion.h1>
          <button className='px-7 py-3 bg-transparent hover:bg-white hover:text-black duration-200 mt-5 rounded-lg border'>
            Take a seat
          </button>
        </div>
        <div className='flex gap-16'>
          <motion.ul
            className='text-[#FFFCF1] relative group text-base font-medium'
            initial={{ opacity: 0, y: 50}}
            animate={controls}
            transition={{delay : 1}}
            ref={ref2}>
            <li>Home</li>
            <li>Work</li>
            <li> About</li>
            <li> Services & Models</li>
            <li>Contact</li>
          </motion.ul>
          <motion.ul
            className='text-[#FFFCF1] text-base font-medium'
            initial={{ opacity: 0, y: 50 }}
            transition={{delay : 1}}
            animate={controls}>
            <li> X→</li>
            <li>Instagram→</li>
            <li>LinkedIn</li>
          </motion.ul>
        </div>
      </div>
      <div className='flex z-50 items-end pt-40 justify-between'>
        <div>
          <motion.h1
            className='text-base font-medium text-[#FFFCF1]'
            initial={{ opacity: 0, y: 150 }}
            animate={controls}>
            San Diego—California
          </motion.h1>
          <motion.h1
            className='text-[#FFFCF1] text-base font-medium'
            initial={{ opacity: 0, y: 150 }}
            animate={controls}>
            Paris—France
          </motion.h1>
        </div>
        <div className='flex gap-16'>
          <motion.h1
            className='text-[#FFFCF1] relative group text-base font-medium'
            initial={{ opacity: 0, y: 150 }}
            animate={controls}>
            <span className='group-hover:underline cursor-pointer underline-offset-[6px] group-hover:mt-1'>
              biz@rejouice.com
            </span>
          </motion.h1>
          <motion.h1
            className='text-[#FFFCF1] text-base font-medium'
            initial={{ opacity: 0, y: 150 }}
            animate={controls}>
            ©2023 legal
          </motion.h1>
        </div>
      </div>
      <div className='flex justify-center z-1 items-center'>
        <motion.h1
          initial={{ opacity: 0, y: -250 }}
          animate={controls}
          transition={{ duration: 0.80, ease: 'backInOut' }}
          ref={headerRef}
          className='text-[#FFFCF1] rejoice text-[360px] font-medium '>
          <span>r</span>
          <span>e</span>
          <span>j</span>
          <span>o</span>
          <span>u</span>
          <span>i</span>
          <span>c</span>
          <span>e</span>
        </motion.h1>
      </div>
    </div>
  );
}

export default Footer;
