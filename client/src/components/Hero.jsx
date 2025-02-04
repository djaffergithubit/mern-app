import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className=' grid grid-cols-12 place-items-center h-full min-h-[450px]'>
         <motion.div 
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className='col-span-6 mt-20'
        >
            <h1 className=' text-5xl text-deepTeal font-bold leading-none tracking-wider'>Land Your Dream Job with AI-Powered Resumes</h1>
            <br />
            <p className=' text-sm text-gray-500 leading-6'>Optimize your resume, generate tailored cover letters, and track job applications—all with AI. Stand out to recruiters and beat the ATS system effortlessly!</p>
            <br />
            <a href='#' className=' w-full h-[70px] flex items-end justify-start'>
                <button className=' bg-forestJade px-3 py-2 text-base font-bold text-white shadow-md rounded-md'>Analyze Your Resume</button>
            </a>
         </motion.div>
         <motion.div 
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className=' col-span-6 w-full'
        >
            <img src="/resume_analyzer.png" className=' w-full h-full' alt="" />
         </motion.div>
    </section>
  )
}

export default Hero