import React from 'react'

function HeroSection() {
  return (
    <div className='pt-32 h-auto text-darkBlue dark:text-lightWhite lg:p-14 lg:pt-32'>
      <div className='w-full p-10 md:text-left sm:text-center'>
          <h2>
              <span className='block text-2xl pb-5'>Hi there 👋 my name is</span>
              <span className='text-slate-600 dark:text-indigo-300 block text-5xl font-[700] pb-5'>Luis Martínez</span>
          </h2>
          <p className='text-base md:text-lg'>
              I’m a Computer Science Engineer who has been 
              passionate about the web application development 
              <span className='sm:block'> and applying myself with the
              self-taught throughout my career.</span>
          </p>
      </div>
    </div>
  )
}

export default HeroSection
