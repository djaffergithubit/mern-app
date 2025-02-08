import { useState } from "react";
import { motion } from "framer-motion";

const Pricing = () => {

    const [currentPlan,  setCurrentPlan] = useState(0);

    const plans = [
        {
            name: "Premium",
            desc: "Unlock full AI customization, expert resume reviews, and advanced job matching.",
            price: 24.99,
            isMostPop: true,
            features: [
                "AI-Powered Resume & Cover Letter Customization",
                "One-on-One Resume Review (AI + Human Expert)",
                "Personalized AI Job Matching with Smart Filters",
                "Exclusive Resume Templates (Premium Designs)",
                "LinkedIn Profile Optimization",
                "Dedicated Support & Faster AI Processing",
            ],
        },
        {
            name: "Pro",
            desc: "Advanced AI resume optimization, unlimited cover letters, and full job tracking.",
            price: 12.99,
            isMostPop: false,
            features: [
                "AI Resume Optimization (Advanced)",
                "Unlimited AI Cover Letters",
                "ATS Optimization with Keyword Enhancements",
                "Job Application Tracker (Unlimited Jobs)",
                "Priority AI Job Recommendations",
                "Resume Score with AI Feedback",
            ],
        },
        {
            name: "Free",
            desc: "Get started with basic AI resume checks and limited job application tracking.",
            price: 0,
            isMostPop: false,
            features: [
                "AI Resume Check (Basic)",
                "AI Cover Letter Generator (Limited)",
                "ATS Optimization Suggestions",
                "Job Application Tracker (Up to 5 Jobs)",
                "Resume Score (Basic Insights)",
            ],
        },
    ];    

    return (
        <section className='relative py-14 bg-gray-900 sm:px-16 px-4'>
            <div className='absolute inset-0 blur-[118px] max-w-lg h-[800px] sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
            <div className="relative max-w-screen-xl mx-auto text-gray-300 sm:px-4 md:px-8">
                <div className='max-w-xl mx-auto space-y-3 px-4 sm:text-center sm:px-0'>
                    <h3 className="text-cyan-400 font-semibold">
                        Pricing
                    </h3>
                    <p className='text-white text-3xl font-semibold sm:text-4xl'>
                        Pay as you grow
                    </p>
                    <div className='max-w-xl'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur consequat nunc.
                        </p>
                    </div>
                </div>
                <div className='mt-16 grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-start gap-4'>
                    {
                        plans.map((item, idx) => (
                            <motion.div 
                                key={idx} 
                                className={`relative flex-1 flex items-stretch flex-col mt-6 border-2 sm:mt-0 sm:rounded-xl sm:max-w-md ${idx === currentPlan ? "bg-gray-900 border-cyan-400 border-x-0 sm:border-x-2" : "border-transparent"} cursor-pointer`} 
                                onClick={() => setCurrentPlan(idx)}
                                initial={{ opacity: 0, y: 120 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.7 }}
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <div 
                                    className="p-4 py-8 space-y-4 border-b border-gray-700 md:p-8"
                                    
                                >
                                    <span className='text-gray-200 font-medium'>
                                        {item.name}
                                    </span>
                                    <div className='text-cyan-400 text-3xl font-semibold'>
                                        ${item.price} <span className="text-xl font-normal">/mo</span>
                                    </div>
                                    <p className="text-gray-400">
                                        {item.desc}
                                    </p>
                                    <button className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700'>
                                        Get Started
                                    </button>
                                </div>
                                <ul className='p-4 py-8 space-y-3 md:p-8'>
                                    {
                                        item.features.map((featureItem, idx) => (
                                            <li key={idx} className='flex items-center gap-5'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className={`h-5 w-5 ${item.isMostPop ? "text-cyan-600" : ""}`}
                                                    viewBox='0 0 20 20'
                                                    fill='currentColor'>
                                                    <path
                                                        fill-rule='evenodd'
                                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                        clip-rule='evenodd'></path>
                                                </svg>
                                                {featureItem}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Pricing;