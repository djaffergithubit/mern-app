import React from 'react'
import SingleFeature from './SingleFeature'
import { MdEditDocument } from "react-icons/md";  
import { HiOutlineMail } from "react-icons/hi";  
import { BsFileEarmarkCheck } from "react-icons/bs";  
import { GiArtificialIntelligence } from "react-icons/gi"
import { BiBarChartAlt2 } from "react-icons/bi";
import { TbChecklist } from "react-icons/tb";

const AllFeatures = [
    {
        id: 1,
        title: 'AI Resume Optimization',    
        description: 'Improve your resume with AI-powered suggestions on grammar, keywords, and formatting to boost your chances of getting hired.',
        icon: <MdEditDocument className='text-[#007BFF] text-4xl mb-2' /> // Blue
    },

    {
        id: 2,
        title: 'AI-Powered Cover Letter Generator',
        description: 'Generate personalized, job-specific cover letters in seconds, tailored to your resume and job description.',
        icon: <HiOutlineMail className='text-[#FF8C00] text-4xl mb-2' /> // Orange
    },
    
    {
        id: 3,
        title: 'ATS-Friendly Formatting',
        description: 'Ensure your resume passes through Applicant Tracking Systems (ATS) by using AI-optimized layouts and keyword enhancements.',
        icon: <BsFileEarmarkCheck className='text-[#28A745] text-4xl mb-2' /> // Green
    },

    {
        id: 4,
        title: 'AI Job Match & Recommendations',
        description: 'Find the best job opportunities based on your skills and experience, powered by AI-driven job search insights.',
        icon: <GiArtificialIntelligence className='text-[#6F42C1] text-4xl mb-2' /> // Purple
    },

    {
        id: 5,
        title: 'Resume Score & Instant Feedback',
        description: 'Get a detailed resume score and actionable insights to improve your chances of landing an interview.',
        icon: <BiBarChartAlt2 className='text-[#DC3545] text-4xl mb-2' /> // Red
    },

    {
        id: 6,
        title: 'Job Application Tracker',
        description: 'Keep track of your applications with an intuitive dashboard—monitor saved jobs, applications, and interview progress in one place.',
        icon: <TbChecklist className='text-[#FFC107] text-4xl mb-2' /> // Yellow
    }
]

const Features = () => {
  return (
    <main className=' sm:px-16 px-6 py-16 bg-powderBlue flex flex-col items-center justify-center'>
        <h3 className=' text-2xl font-bold text-deepTeal text-center'>Features</h3>
        <br />
        <section className=' grid grid-cols-12 place-items-start w-full gap-6'>
            {AllFeatures.map((feature, index) => (
                <SingleFeature key={index} feature={feature} />
            ))}
        </section>
    </main>
  )
}

export default Features