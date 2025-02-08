import React from 'react'
import TimeLine from './TimeLine'

const WorkPipeline = () => {
  return (
    <section className=' sm:px-16 px-4 py-16 flex flex-col items-center justify-center'>
        <h3 className=' text-2xl font-bold text-deepTeal text-center'>Let's See How It Works?</h3>
        <span className=' text-sm text-gray-400 mt-1'>Our Ai Solution Will Help You From Start To Finish</span>
        <br />
        <TimeLine />
    </section>
  )
}

export default WorkPipeline