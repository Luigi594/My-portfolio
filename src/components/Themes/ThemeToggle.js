import React from 'react'
import { Icon } from '@iconify/react';
import { useThemeContext } from '../../hooks/useThemeContext'

// ic:round-dark-mode
// ic:baseline-light-mode

function ThemeToggle() {

  const { theme, setTheme } = useThemeContext();

  return (
    <div className='transition duration-700 ease-in-out'>
      {theme === 'dark' ? (
        <Icon 
            icon="ic:round-dark-mode" 
            width="40"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='cursor-pointer dark:text-lightWhite text-darkBlue'
         />
      ): (
        <Icon 
            icon="ic:baseline-light-mode" 
            width="40"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='cursor-pointer dark:text-lightWhite text-darkBlue'
         />
      )}
    </div>
  )
}

export default ThemeToggle
