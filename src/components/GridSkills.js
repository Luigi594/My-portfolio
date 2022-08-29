import React from 'react'
import { Icon } from '@iconify/react';

function GridSkills({ textIcon }) {
  return (
    <div className='mx-auto pb-7 transition ease-in-out duration-200  hover:scale-110'>
        {textIcon && (
          <Icon icon={textIcon} width="80" className={`${textIcon} === 'logos:mongodb-icon' ? h-20 : '' `} />
        )}
    </div>
  )
}

export default GridSkills