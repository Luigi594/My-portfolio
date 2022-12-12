import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import Title from "./Content/Title";

function Contact() {
  const [status, setStatus] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "Must be at least 5 characters or more")
        .required("Field name is required")
        .matches(/^[a-zA-Z\s]*$/, "Name must be only contain letters"),

      email: Yup.string()
        .email("Invalid email format")
        .required("Field email is required"),

      message: Yup.string()
        .min(10, "Must be at least 10 characters or more")
        .required("Field is required"),
    }),
    onSubmit: (values) => {
      submitForm(values.name, values.email, values.message);
      values.name = "";
      values.email = "";
      values.message = "";
    },
  });

  const submitForm = (name, email, message) => {
    const templateParams = {
      name: name,
      to_name: "Luis Martínez",
      email: email,
      message: message,
    };

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then((result) => {
        if (result.status === 200) setStatus(true);
      })
      .catch((err) => {});
  };

  /** just to disappear the message when a user sent an email */
  useEffect(() => {
    if (status) {
      setTimeout(() => {
        setStatus(false);
      }, 5000);
    }

    return () => {
      clearTimeout();
    };
  }, [status]);

  return (
    <div className="parentContent mt-16 lg:mt-0">
      {/** This is the title */}
      <Title
        direccionLeft={true}
        text={"Contact with me"}
        subtext={`
              Feel free to contact with me by sending me a message, I will answer
          you with all pleasure. Thanks for visiting my portafolio 🙌.
        `}
      />

      {/** Container for all the form */}
      <div
        className="relative flex items-center p-5 mt-12 md:mt-8 md:p-10 rounded-lg 
            mx-auto bg-gradient-to-br dark:from-darkBlue dark:to-lightBlue from-ligthGray to-lightWhite">
        <div className="flex w-full lg:px-10 lg:w-1/2 mx-auto py-7">
          <div className="flex-col w-full">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, type: "spring", delay: 0.8 }}
              className="text-3xl font-semibold pb-10 text-center">
              Get In Touch
            </motion.h1>

            {/** Form to send emails */}
            <form>
              {status && (
                <p className="text-base md:text-xl mb-6 font-normal animate-pulse text-slate-600 dark:text-indigo-300 text-center">
                  Your message has been sent successfully. Thanks for contacting
                  me 🙌
                </p>
              )}

              <div className="mb-6">
                <motion.input
                  initial={{ y: 50 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 1.2, ease: [0, 0.71, 0.2, 1.01] }}
                  type="text"
                  name="name"
                  className="block text-sm rounded-lg h-12 w-full px-4 bg-ligthGray dark:bg-lightBlue placeholder-darkBlue
                            dark:placeholder-ligthGray focus:outline-none"
                  placeholder="Your name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />

                {formik.touched.name && formik.errors.name ? (
                  <p className="mt-2 pl-1 text-base text-darkBlue dark:text-lightWhite">
                    {formik.errors.name}
                  </p>
                ) : null}
              </div>

              <div className="mb-6">
                <motion.input
                  initial={{ y: 60 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 1.2, ease: [0, 0.71, 0.2, 1.01] }}
                  type="email"
                  name="email"
                  className="block text-sm rounded-lg h-12 w-full px-4 bg-ligthGray dark:bg-lightBlue placeholder-darkBlue
                            dark:placeholder-ligthGray focus:outline-none"
                  placeholder="Email example@gmail.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />

                {formik.touched.name && formik.errors.email ? (
                  <p className="mt-2 pl-1 text-base text-darkBlue dark:text-lightWhite">
                    {formik.errors.email}
                  </p>
                ) : null}
              </div>

              <div className="mb-6">
                <motion.textarea
                  initial={{ y: 70 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 1.2, ease: [0, 0.71, 0.2, 1.01] }}
                  rows="4"
                  name="message"
                  className="block text-sm rounded-lg p-4 w-full bg-ligthGray dark:bg-lightBlue placeholder-darkBlue
                     dark:placeholder-ligthGray focus:outline-none"
                  placeholder="Leave your message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}></motion.textarea>

                {formik.touched.name && formik.errors.message ? (
                  <p className="mt-2 pl-1 text-base text-darkBlue dark:text-lightWhite">
                    {formik.errors.message}
                  </p>
                ) : null}
              </div>
              <div className="flex justify-center mb-6">
                <motion.button
                  initial={{ y: 80 }}
                  whileInView={{ y: 0 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                    duration: 0.2,
                  }}
                  type="submit"
                  className="focus:outline-none font-semibold rounded-lg text-base px-4 py-2.5 
                         w-36 md:w-52 text-center text-lightWhite dark:text-darkBlue bg-darkGray
                        dark:bg-ligthGray hover:bg-lightBlue hover:text-lightWhite  hover:dark:bg-darkBlue hover:dark:text-ligthGray"
                  onClick={formik.handleSubmit}>
                  Submit
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
