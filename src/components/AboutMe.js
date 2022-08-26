import React from 'react'

function AboutMe() {
  
  return (
    <div className='h-auto text-darkBlue dark:text-lightWhite lg:p-14'>

      {/** Este es el título */}
      <div className='flex w-full items-center justify-evenly pt-12'>
          <hr className='hidden border-1 border-[#878A99] dark:border-[#F7F8FC] w-1/2 rounded-sm md:block' />
          <h1 className='italic font-[700] text-3xl md:text-center'>About Me</h1>
      </div>

      {/** Este es el contenido */}
      <div className="grid grid-cols-1 p-10 h-fit mt-12 gap-8 md:mx-20 lg:grid-cols-2">
        <div className='dark:bg-gray-800 h-fit py-8 px-5 rounded-md shadow-lg transition ease-in-out duration-300 hover:dark:shadow-slate-500'>
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
        <div>
          <img src={require('../img/yo.jpg')} className='max-h-full lg:h-[500px] ml-auto' alt="Imagen mia" />
        </div>
      </div>
    </div>
  )
}

export default AboutMe