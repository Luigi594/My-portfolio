import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(false);

  const handleSubmit = (e) => {

    e.preventDefault();

    const templateParams = {

        name: name, 
        to_name: 'Luis Martínez',
        email: email, 
        message: message
    }

    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_PUBLIC_KEY)
    .then((result) => {
        if(result.status === 200){
            setName('');
            setEmail('');
            setMessage('');
            setStatus(true);
        }
    })
    .catch((err) => {
        console.log(err);
    })
  }

  /** just to disappear the message when a user sent an email */
  useEffect(() => {

    if(status){
        setTimeout(() => {
            setStatus(false)
        }, 5000)
    }

    return () => {
        clearTimeout();
    }
  }, [status])


  return (
    <div className='h-auto text-darkBlue dark:text-lightWhite p-10 lg:p-14'>

        {/** This is the title */}
        <div className='flex w-full items-center justify-evenly pt-12'>
            <h1 className='italic font-[700] text-3xl md:text-center'>Contact with me</h1>
            <hr className='hidden border-1 border-[#878A99] dark:border-[#F7F8FC] w-1/2 rounded-sm md:block' />
        </div>

        {/** And from here is the rest of the content */}
        <div className='md:p-10'>
            <p className='text-xl font-normal mt-12 text-center lg:text-left'>
                Feel free to contact with me by sending me a message, I will
                answer you with all pleasure. Thanks for visiting my portafolio 🙌. 
            </p>
        </div>

        {/** Container for all the form */}
        <div className="container relative flex items-center p-5 mt-12 md:mt-8 md:p-10 rounded-lg 
            mx-auto bg-gradient-to-br dark:from-darkBlue dark:to-lightBlue from-ligthGray to-lightWhite">
            <div className="flex w-full lg:px-10 lg:w-1/2 mx-auto py-7">
                <div className="flex-col w-full">
                    <h1 className='text-3xl font-semibold pb-10 text-center'>Get In Touch</h1>

                    {/** Form to send emails */}
                    <form>
                        {status && (
                            <p className='text-base md:text-xl mb-6 font-normal animate-pulse text-slate-600 dark:text-indigo-300 text-center'>
                                Your message has been sent successfully. Thanks for contacting me 🙌
                            </p>
                        )}

                        <div className="mb-6">
                            <input type="text" name='name' className='block text-sm rounded-lg h-12 w-full px-4 bg-ligthGray dark:bg-lightBlue placeholder-darkBlue
                             dark:placeholder-ligthGray focus:outline-none' placeholder='Your name'
                             value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="mb-6">
                            <input type="email" name='email' className='block text-sm rounded-lg h-12 w-full px-4 bg-ligthGray dark:bg-lightBlue placeholder-darkBlue
                             dark:placeholder-ligthGray focus:outline-none' placeholder='Email example@gmail.com'
                             value={email} onChange={(e) => setEmail(e.target.value)}  required />
                        </div>
                        <div className="mb-6">
                            <textarea rows="4" name='message' className='block text-sm rounded-lg p-4 w-full bg-ligthGray dark:bg-lightBlue placeholder-darkBlue
                             dark:placeholder-ligthGray focus:outline-none' placeholder='Leave your message'
                             value={message} onChange={(e) => setMessage(e.target.value)} required/>
                        </div>
                        <div className="flex justify-center mb-6">
                            <button type="submit" className="focus:ring-4 focus:outline-none font-semibold rounded-lg text-base px-4 py-2.5 
                            transition ease-in-out duration-300 w-36 md:w-52 text-center text-lightWhite dark:text-darkBlue bg-darkGray
                             dark:bg-ligthGray hover:bg-lightBlue hover:text-lightWhite  hover:dark:bg-darkBlue hover:dark:text-ligthGray"
                             onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </form>                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact