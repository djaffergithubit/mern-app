import React from 'react'
import { motion } from 'framer-motion'

const SingleFeature = ({ feature }) => {
  return (
    <motion.div 
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: false, amount: 0.2 }} 
        className=' lg:col-span-4 sm:col-span-6 col-span-12 w-full'
    >
        {feature.icon}
        <h4 className=' text-lg font-semibold text-deepTeal mb-2'>{feature.title}</h4>
        <p className=' text-sm text-deepTeal font-light'>
            {feature.description}
        </p>
    </motion.div>
  )
}

export default SingleFeature