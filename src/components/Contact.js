import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Contact() {

  const [status, setStatus] = useState(false); 

  const formik = useFormik({
    initialValues: {
        name: '',
        email: '',
        message: ''
    },
    validationSchema: Yup.object({

        name: Yup.string()
        .min(5, 'Must be at least 5 characters or more')
        .required('Field name is required'),

        email: Yup.string()
        .email('Invalid email format')
        .required('Field email is required'),

        message: Yup.string()
        .min(10, 'Must be at least 10 characters or more')
        .required('Field is required')
    }),
    onSubmit: values => {
        submitForm(values.name, values.email, values.message)
        values.name = ''
        values.email = ''
        values.message = ''
    }
  })

  const submitForm = (name, email, message) => {

    const templateParams = {

        name: name, 
        to_name: 'Luis Martínez',
        email: email, 
        message: message
    }

    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_PUBLIC_KEY)
    .then((result) => {

        if(result.status === 200) setStatus(true);  
    })
    .catch((err) => {
        
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
    <div className='parentContent'>

        {/** This is the title */}
        <div className='titleContent'>
            <h1 className='textContent'>Contact with me</h1>
            <hr className='lineContent' />
        </div>

        {/** And from here is the rest of the content */}
        <div className='contentDescription'>
            <p className='textDescription'>
                Feel free to contact with me by sending me a message, I will
                answer you with all pleasure. Thanks for visiting my portafolio 🙌. 
            </p>
        </div>

        {/** Container for all the form */}
        <div className="relative flex items-center p-5 mt-12 md:mt-8 md:p-10 rounded-lg 
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
                            
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />

                            {formik.touched.name && formik.errors.name ? (
                                <p className='mt-2 pl-1 text-base text-darkBlue dark:text-lightWhite'>{formik.errors.name}</p>
                            ) : null}
                        </div>

                        <div className="mb-6">
                            <input type="email" name='email' className='block text-sm rounded-lg h-12 w-full px-4 bg-ligthGray dark:bg-lightBlue placeholder-darkBlue
                             dark:placeholder-ligthGray focus:outline-none' placeholder='Email example@gmail.com'
                            
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />

                            {formik.touched.name && formik.errors.email ? (
                                <p className='mt-2 pl-1 text-base text-darkBlue dark:text-lightWhite'>{formik.errors.email}</p>
                            ) : null}
                        </div>

                        <div className="mb-6">
                            <textarea rows="4" name='message' className='block text-sm rounded-lg p-4 w-full bg-ligthGray dark:bg-lightBlue placeholder-darkBlue
                             dark:placeholder-ligthGray focus:outline-none' placeholder='Leave your message'
                            
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                            ></textarea>

                            {formik.touched.name && formik.errors.message ? (
                                <p className='mt-2 pl-1 text-base text-darkBlue dark:text-lightWhite'>{formik.errors.message}</p>
                            ) : null}
                        </div>
                        <div className="flex justify-center mb-6">
                            <button type="submit" className="focus:ring-4 focus:outline-none font-semibold rounded-lg text-base px-4 py-2.5 
                            transition ease-in-out duration-300 w-36 md:w-52 text-center text-lightWhite dark:text-darkBlue bg-darkGray
                             dark:bg-ligthGray hover:bg-lightBlue hover:text-lightWhite  hover:dark:bg-darkBlue hover:dark:text-ligthGray"
                             onClick={formik.handleSubmit}>
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