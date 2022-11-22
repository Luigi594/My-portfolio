import React from "react";
import CVSpanish from "../pdf/CVMartínez.pdf";
import CvEnglish from "../pdf/CV-Martinez-English.pdf";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div className="pt-32 h-auto text-darkBlue dark:text-lightWhite lg:p-14 lg:pt-32">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full p-10 md:text-left sm:text-center">
        <h2>
          <span className="block text-2xl pb-5">Hi there 👋 my name is</span>
          <span className="text-slate-600 dark:text-indigo-300 block text-5xl font-[700] pb-5">
            Luis Martínez
          </span>
        </h2>
        <p className="text-base md:text-lg">
          I’m a Computer Science Engineer who has been passionate about the web
          application development
          <span className="sm:block">
            {" "}
            and applying myself with the self-taught throughout my career.
          </span>
        </p>

        <div className="flex flex-col w-fit mt-4 mx-auto justify-center space-x-0 space-y-3 md:space-y-0 md:mx-0 md:flex-row md:space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "just", stiffness: 400, damping: 10 }}
            className="bg-gray-700 dark:bg-indigo-200 text-indigo-200 dark:text-gray-800 p-3 rounded-lg
            dark:hover:bg-gray-800 hover:bg-indigo-200 hover:text-gray-800 dark:hover:text-indigo-200 shadow-md dark:hover:shadow-md hover:shadow-indigo-300">
            <a href={CVSpanish} target="_blank" rel="noreferrer">
              My resume in Spanish
            </a>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-gray-700 dark:bg-indigo-200 text-indigo-200 dark:text-gray-800 p-3 rounded-lg
            dark:hover:bg-gray-800 hover:bg-indigo-200 hover:text-gray-800 dark:hover:text-indigo-200 shadow-md dark:hover:shadow-md hover:shadow-indigo-300">
            <a href={CvEnglish} target="_blank" rel="noreferrer">
              My resume in English
            </a>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
