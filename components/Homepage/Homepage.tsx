import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Contact from './sections/Contact'

const Homepage = () => {
  return (
    <div className=' h-[100vh] overflow-y-scroll scroll-smooth pb-[20px] overflow-x-hidden'>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default Homepage