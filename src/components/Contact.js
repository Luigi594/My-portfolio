import React from 'react'

function Contact() {
  return (
    <div className='h-auto text-darkBlue dark:text-lightWhite p-10 lg:p-14'>

        {/** Este es el título */}
        <div className='flex w-full items-center justify-evenly'>
            <h1 className='italic font-[700] text-3xl md:text-center'>Contact with me</h1>
            <hr className='hidden border-1 border-[#878A99] dark:border-[#F7F8FC] w-1/2 rounded-sm md:block' />
        </div>

        {/** Contenido */}
        <div className='md:p-10'>
            <p className='text-xl font-normal mt-12 text-center lg:text-left'>
                Feel free to contact with me by sending me a message, I will
                answer you with all pleasure. Thanks for visiting my portafolio 🙌. 
            </p>
        </div>

        <div className="container relative flex items-center p-5 mt-10 md:mt-8 md:p-10 rounded-lg 
            mx-auto bg-gradient-to-br dark:from-darkBlue dark:to-lightBlue from-ligthGray to-lightWhite">
            <div className="flex w-full lg:px-10 lg:w-1/2 mx-auto py-7">
                <div className="flex-col w-full">
                    <h1 className='text-3xl font-semibold pb-10 text-center'>Get In Touch</h1>
                    <form>
                        <div className="mb-6">
                            <input type="text" className='block text-sm rounded-lg h-12 w-full px-4 bg-[#d7cdd7] dark:bg-lightBlue placeholder-darkBlue dark:placeholder-ligthGray focus:outline-none' placeholder='Your name'  />
                        </div>
                        <div className="mb-6">
                            <input type="email" className='block text-sm rounded-lg h-12 w-full px-4 bg-[#d7cdd7] dark:bg-lightBlue placeholder-darkBlue dark:placeholder-ligthGray focus:outline-none' placeholder='Email example@gmail.com'  />
                        </div>
                        <div className="mb-6">
                            <textarea rows="4" className='block text-sm rounded-lg p-4 w-full bg-[#d7cdd7] dark:bg-lightBlue placeholder-darkBlue dark:placeholder-ligthGray focus:outline-none' placeholder='Leave your message'></textarea>
                        </div>
                        <div className="mb-6">
                            <button type="submit" className="focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 
                            transition ease-in-out duration-300 w-36 md:w-52 text-center text-darkBlue bg-ligthGray hover:bg-lightBlue hover:text-lightWhite  hover:dark:bg-darkBlue hover:dark:text-ligthGray">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact