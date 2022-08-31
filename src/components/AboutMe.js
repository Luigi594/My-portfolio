import React from 'react'
function AboutMe() {
  
  return (
    <div className='parentContent'>

      {/** This is the title */}
      <div className='titleContent'>
          <hr className='lineContent' />
          <h1 className='textContent'>About Me</h1>
      </div>

      {/** This is all the content */}
      <div className="grid grid-cols-1 p-10 h-fit mt-12 gap-8 md:mx-20 lg:grid-cols-2">
        
        {/** Container for my information */}
        <div className='bg-[#F2F3F9] dark:bg-gray-800 h-fit py-8 px-5 rounded-md shadow-lg transition ease-in-out duration-300 hover:dark:shadow-slate-500'>
          <h2 className='text-xl font-semibold pb-5'>Get to know me a little</h2>
          <p className='text-base'>
              Hello again, I'm Luis Martínez and I'm getting close to become a Computer
              Science Engineer. I figured out my passion to the career when I was on 
              highschool, during my last year, because I realized how techonology has helped
              the world by creating amazing, successful and useful tools for every
              working field.

              <br /> <br />

              Since 2021 year, I've been pushing myself to learn more beyond my clasess, 
              to improve knowledge, try to challenge me; by watching video tutorials, reading blogs, 
              which has resulted in improved coding skills and better understanding of their
              applications in a real world scenario. My goal is to prepare myself to build reliable 
              applications and provide the users the best experience.
            </p>
        </div>

        {/** Container for the image */}
        <div>
          <img src={require('../img/profile_2.webp')} className='rounded-sm lg:h-[500px] ml-auto' alt="Imagen mia" />
        </div>
      </div>
    </div>
  )
}

export default AboutMe