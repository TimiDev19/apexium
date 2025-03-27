import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'

const Homepage = () => {
  return (
    <div className=' h-[100vh] overflow-y-scroll scroll-smooth'>
      <Hero/>
      <About/>
    </div>
  )
}

export default Homepage