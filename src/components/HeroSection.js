import React from 'react'

function HeroSection() {
  return (
    <div className='mt-32 h-auto text-lightWhite lg:p-14'>
      <div className='w-full p-10 md:text-left sm:text-center'>
          <h2>
              <span className='block text-2xl pb-5'>Hi there 👋 my name is</span>
              <span className='text-indigo-300 block text-5xl font-[700] pb-5'>Luis Martínez</span>
          </h2>
          <p className='text-base md:text-lg'>
              I’m a Computer Science Engineer who has been 
              passionate about full stack development 
              <span className='sm:block'>and 
              self-taught throughout the career.</span>
          </p>
      </div>
    </div>
  )
}

export default HeroSection
