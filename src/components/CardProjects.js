import React from 'react'
import { Icon } from '@iconify/react'

function CardProjects({ name, description, github, languages, live }) {
  return (
    <div className="relative flex-none max-w-sm h-80 rounded-lg border bg-[#F2F3F9] border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700
        hover:dark:bg-darkGray/[0.2] hover:bg-lightWhite transition ease-in-out duration-300">
        <div className='p-5'>
            <div className="flex items-center">
                <h2 className='flex-1 text-xl text-darkBlue dark:text-ligthGray font-semibold '>
                    {name}
                </h2>
                <div className='flex space-x-3'>

                    <a href={github} target={"_blank"} className='text-darkBlue dark:text-ligthGray hover:dark:text-darkGray
                    hover:text-darkGray transition ease-in-out duration-200' rel='noreferrer'>
                        <Icon icon={"akar-icons:github-fill"} width={"25"} />
                    </a>

                    {/** if the project has a live version will render this other icon */}
                    {live && (
                        <a href={live} target={"_blank"} className='text-darkBlue dark:text-ligthGray hover:dark:text-darkGray
                        hover:text-darkGray transition ease-in-out duration-200' rel='noreferrer'>
                            <Icon icon={"eva:external-link-outline"} width={"25"} />
                        </a>
                    )}
                </div>
            </div>
            <p className="text-base mt-3 font-normal text-lightBlue dark:text-gray-400 md:mt-0 md:p-4">
                {description}
            </p>

            <div className="flex flex-row absolute bottom-5">
                <div className='flex space-x-3 text-sm text-darkBlue dark:text-gray-300 font-normal px-2'>
                    {Object.entries(languages).map(([key, value]) => (
                        <p key={key}>
                            {value}
                        </p>
                    ))}
                </div>
            </div>
        </div>              
    </div>
  )
}

export default CardProjects
