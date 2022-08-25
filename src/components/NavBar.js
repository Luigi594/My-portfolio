import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

function NavBar() {

  return (
    <Popover className="fixed top-0 left-0 right-0 z-50 shadow-md bg-darkBlue">
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='flex justify-between items-center
            py-6 md:justify-start md:space-x-10'>
                <div className='flex justify-start lg:w-0 lg:flex-1'>
                    <a href="#">
                        <Avatar size={25} color="#DCDFEE" />
                    </a>
                </div>

                {/** Burger Icon for mobile menu*/}
                <div className="md:hidden">
                    <Popover.Button className="bg-darkBlue p-2 inline-flex items-center 
                    justify-center text-ligthGray focus:outline-none">
                        
                        <MenuIcon className="h-6 w-6 text-ligthGray" aria-hidden="true"  />
                    </Popover.Button>
                </div>

                <Popover.Group as="nav" className='hidden md:flex space-x-10'>
                    
                    <a href="#" className='text-base font-medium text-lightWhite hover:text-ligthGray transition ease-in-out duration-200'>About</a>
                    <a href="#" className='text-base font-medium text-lightWhite hover:text-ligthGray transition ease-in-out duration-200'>Skills</a>
                    <a href="#" className='text-base font-medium text-lightWhite hover:text-ligthGray transition ease-in-out duration-200'>Projects</a>
                    <a href="#" className='text-base font-medium text-lightWhite hover:text-ligthGray transition ease-in-out duration-200'>Contact</a>
                </Popover.Group>

                <div className='hidden itms-center justify-end lg:w-0 space-x-4 md:flex md:flex-1'>
                    <IconButton>
                        <BedtimeIcon fontSize='medium' className='cursor-pointer dark:text-lightWhite text-darkBlue' />
                    </IconButton>

                    <IconButton>
                        <LightModeIcon fontSize='medium' className='cursor-pointer dark:text-lightWhite text-darkBlue' />
                    </IconButton>
                </div>
            </div>
        </div>

        <Transition
        
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opactiy-0 scale-95'>

                <Popover.Panel focus className='absolute top-0 inset-x-0 p-2 transition
                transform origin-top-right md:hidden'>

                    <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5
                     bg-darkBlue divide-y-2 divide-ligthGray'>

                        <div className='pt-5 pb-6 px-5'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <Avatar size={25} color="#DCDFEE" />
                                </div>

                                <div className='-mr-2'>
                                    <Popover.Button className='bg-darkBlue rounded-md p-2 inline-flex items-center justify-center
                                    text-ligthGray focus:outline-none'>

                                        <CloseIcon className='h-6 w-6 text-ligthGray' />
                                    </Popover.Button>
                                </div>
                            </div>

                            <div className='py-6 px-5 space-y-6'>
                                <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                                    <a href="#" className='text-base font-medium text-ligthGray'>About</a>
                                    <a href="#" className='text-base font-medium text-ligthGray'>Skills</a>
                                    <a href="#" className='text-base font-medium text-ligthGray'>Projects</a>
                                    <a href="#" className='text-base font-medium text-ligthGray'>Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
        </Transition>
    </Popover>
  )
}

export default NavBar
