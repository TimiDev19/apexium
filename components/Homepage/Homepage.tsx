import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'

const Homepage = () => {
  return (
    <div className=' h-[100vh] overflow-y-scroll scroll-smooth'>
      <Hero/>
      <About/>
      <Services/>
    </div>
  )
}

export default Homepage