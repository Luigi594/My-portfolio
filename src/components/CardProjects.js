import React from 'react'
import { Icon } from '@iconify/react'

function CardProjects({ name, description, github, languages }) {
  return (
    <div className="relative flex-none max-w-sm h-80 rounded-lg border bg-[#F2F3F9] border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700
        hover:dark:bg-darkGray/[0.2] hover:bg-lightWhite transition ease-in-out duration-300">
        <div className='p-5'>
            <div className="flex items-center">
                <h2 className='flex-1 text-xl text-darkBlue dark:text-ligthGray font-semibold '>
                    {name}
                </h2>
                <a href={github} target={"_blank"} className='text-darkBlue dark:text-ligthGray hover:dark:text-darkGray
                 hover:text-darkGray transition ease-in-out duration-200' rel='noreferrer'>
                    <Icon icon={"eva:external-link-outline"} width={"25"} />
                </a>
            </div>
            <p className="mt-5 font-normal text-lightBlue dark:text-gray-400 md:p-4">
                {description}
            </p>

            <div className="flex flex-row absolute bottom-5">
                <div className='flex space-x-4 text-sm text-lightBlue dark:text-gray-300 font-normal'>
                {languages.map((language) => (
                    <p>{language}</p>
                ))}
                </div>
            </div>
        </div>              
    </div>
  )
}

export default CardProjects
