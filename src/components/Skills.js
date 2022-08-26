import React from 'react'
import { Icon } from '@iconify/react';

function Skills() {

  const stacks = [
    
    { icon: "vscode-icons:file-type-html" },
    { icon: "vscode-icons:file-type-css" },
    { icon: "vscode-icons:file-type-js-official" },
    { icon: "logos:react" },
    { icon: "logos:tailwindcss-icon" },
    { icon: "logos:nodejs-icon" },
    { icon: "logos:firebase" },
    { icon: "logos:mysql" },
    { icon: "logos:mongodb-icon" },
    { icon: "akar-icons:github-fill" },
    { icon: "vscode-icons:file-type-sql" },
  ]

  return (
    <div className='h-auto text-darkBlue dark:text-lightWhite lg:p-14'>

      {/** Este es el título */}
      <div className='flex w-full items-center justify-evenly mt-10'>
          <h1 className='italic font-[700] text-3xl md:text-center'>My Skills</h1>
          <hr className='hidden border-1 border-[#878A99] dark:border-[#F7F8FC] w-1/2 rounded-sm md:block' />
      </div>

      {/** Contenido */}
      <div className='flex items-center p-10'>
        <h2 className='text-xl font-normal mt-12 text-center lg:text-left'>These are some technologies I've worked with:</h2>
      </div>

      {/** Tecnologías */}
      <div className="grid grid-cols-2 p-10 gap-5 md:grid-cols-4">

          {stacks.map((stack) => (

            <div className='mx-auto pb-7 transition ease-in-out duration-200  hover:scale-110'>
              <Icon icon={stack.icon} width="80" className={`${stack.icon} === 'logos:mongodb-icon' ? h-20 : '' `} />
            </div>
          ))}
        </div>
    </div>
  )
}

export default Skills
