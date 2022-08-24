import React from 'react'

function Projects() {
  return (
    <div className='h-auto bg-darkBlue text-lightWhite p-14'>

      {/** Este es el título */}
      <div className='flex w-full items-center justify-evenly'>
          <hr className='hidden border-1 border-[#F7F8FC] w-1/2 rounded-sm md:block' />
          <h1 className='italic font-[700] text-3xl md:text-center'>My Projects</h1>
      </div>

       {/** Contenido */}
       <div className='flex items-center md:p-10'>
        <p className='text-xl font-normal mt-12 text-center lg:text-left'>
            Here you will find some of my projects I built throughout my career.
            Also many of them were built from my own for self-taught and to
            increase my knowledge.
        </p>
      </div>
    </div>
  )
}

export default Projects
