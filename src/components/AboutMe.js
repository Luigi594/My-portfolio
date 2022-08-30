import React from 'react'

function AboutMe() {
  
  return (
    <div className='h-auto text-darkBlue dark:text-lightWhite lg:p-14'>

      {/** This is the title */}
      <div className='flex w-full items-center justify-evenly pt-12'>
          <hr className='hidden border-1 border-[#878A99] dark:border-[#F7F8FC] w-1/2 rounded-sm md:block' />
          <h1 className='italic font-[700] text-3xl md:text-center'>About Me</h1>
      </div>

      {/** This is all the content */}
      <div className="grid grid-cols-1 p-10 h-fit mt-12 gap-8 md:mx-20 lg:grid-cols-2">
        
        {/** Container for my information */}
        <div className='bg-[#F2F3F9] dark:bg-gray-800 h-fit py-8 px-5 rounded-md shadow-lg transition ease-in-out duration-300 hover:dark:shadow-slate-500'>
          <h2 className='text-xl font-semibold pb-5'>Who am I?</h2>
          <p className='text-base'>
              Hello again, I'm Luis Martínez and I'm getting close to become a Computer
              Science Engineer. I figured out my passion to the career when I was on 
              highschool, my last year was definitely my call, because it has made think 
              of what can be created by using technology and how is helping the entire
              world. And it's not just programming after all, is to create solutions 
              that's what I've liked the more.

              <br /> <br />

              Lately, since 2021 year, I've been pushing myself to learn more beyond my clasess, 
              to improve knowledge, to challenge me, by watching tutorials, reading blogs, and
              all has been to be able to write better code and to understand how could I apply those concepts on a 
              real-world scenario. My focus these days is to get prepare myself to create digital solutions
              for the users and give them the better experience.
            </p>
        </div>

        {/** Container for the image */}
        <div>
          <img src={require('../img/yo.jpg')} className='max-h-full lg:h-[500px] ml-auto' alt="Imagen mia" />
        </div>
      </div>
    </div>
  )
}

export default AboutMe