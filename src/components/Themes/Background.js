import React from 'react'

function Background({ children }) {
  return (
    <main className='bg-lightWhite dark:bg-darkBlue transition-all'>
      { children }
    </main>
  )
}

export default Background
