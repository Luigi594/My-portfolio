import React from 'react'

function AboutMe() {
  
  return (
    <div className='h-auto bg-darkBlue text-lightWhite p-14'>

      {/** Este es el título */}
      <div className='flex w-full items-center justify-evenly'>
          <hr className='hidden border-1 border-[#F7F8FC] w-1/2 rounded-sm md:block' />
          <h1 className='italic font-[700] text-3xl md:text-center'>About Me</h1>
      </div>

      {/** Este es el contenido */}
      <div className="container flex flex-col mx-auto items-center mt-12 space-y-10 lg:p-10 md:flex-row">

        {/** About me */}
        <div className='flex flex-col dark:bg-gray-800 rounded-md md:mx-20 md:w-1/2'>
          <div className='flex-col h-fit py-6 px-4 shadow-lg'>
            <h2 className='text-xl font-semibold pb-5'>A little bit about me</h2>
            <p className='text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, 
              veritatis praesentium vitae magni neque recusandae at et sapiente, 
              natus repellat enim explicabo laboriosam, dolorem ducimus voluptatibus!
              Sunt tempore aliquid omnis.

              <br /> <br />

              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, 
              veritatis praesentium vitae magni neque recusandae at et sapiente, 
              natus repellat enim explicabo laboriosam, dolorem ducimus voluptatibus!
              Sunt tempore aliquid omnis.
            </p>
          </div>
        </div>

        {/** Imagen */}
        <div className='md:w-1/2'>
          <img src={require('../img/yo.jpg')} className='max-h-full lg:h-[500px] mx-auto' alt="Imagen mia" />
        </div>
      </div>
    </div>
  )
}

export default AboutMe