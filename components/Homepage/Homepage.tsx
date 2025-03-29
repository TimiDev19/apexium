import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Partnerships from './sections/Partnerships'

const Homepage = () => {
  return (
    <div className=' h-[100vh] overflow-y-scroll scroll-smooth pb-[20px] overflow-x-hidden'>
      <Hero />
      <About />
      <Services />
      <Partnerships />
      <Contact />
    </div>
  )
}

export default Homepage