import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features/Features'
import WorkPipeline from './components/WorkPipeline'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=''>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <WorkPipeline />
      <Footer />
    </div>
  )
}

export default App