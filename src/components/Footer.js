import React from 'react'
import { Icon } from '@iconify/react'

function Footer() {
  return (
    <div className='h-full lg:p-14'>
      <hr className='border-1 border-[#F7F8FC] rounded-sm' />

      <footer class="p-4 px-11 md:px-6 md:py-8">
        <div class="flex flex-row md:flex-row items-center justify-between pb-20">
            <div class="flex flex-wrap items-center space-x-5 mb-6 sm:mb-0">
                <Icon icon={"akar-icons:github-fill"} className='text-darkBlue dark:text-ligthGray hover:scale-110 hover:cursor-pointer transition ease-in-out duration-300' width={"45"}  />
                <Icon icon={"bi:linkedin"} className='text-darkBlue dark:text-ligthGray hover:scale-110 hover:cursor-pointer transition ease-in-out duration-300' width={"45"} />
            </div>

            <a href='#' class="flex items-center mb-4 sm:mb-0 hover:scale-110 hover:cursor-pointer transition ease-in-out duration-300">
                <Icon icon={"akar-icons:circle-chevron-up-fill"} className='text-darkBlue dark:text-ligthGray' width={"45"} />
            </a>
        </div>
        
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022 Luis Martínez. All Rights Reserved.
        </span>
    </footer>
      
    </div>
  )
}

export default Footer
