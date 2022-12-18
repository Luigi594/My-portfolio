import React from "react";
import Image from "../img/profile_2.webp";
import Title from "./Content/Title";
import { motion } from "framer-motion";
import { animations } from "../utils/animations";

function AboutMe() {
  return (
    <div className="parentContent">
      {/** This is the title */}
      <Title text={"About Me"} />

      {/** This is all the content */}
      <div
        className="flex flex-col-reverse items-center justify-evenly p-10 mt-12 mx-auto
        space-x-0 h-fit max-w-full md:space-y-0 md:flex-row md:space-x-4">
        <motion.div
          variants={animations}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="h-fit max-w-xl py-8 px-5 mt-10 rounded-md shadow-lg shadow-darkBlue/25 dark:shadow-slate-300/30 
           transition ease-in-out duration-300 hover:dark:shadow-slate-500
            bg-[#F2F3F9] dark:bg-darkBlue md:mt-0">
          <h2 className="text-2xl font-semibold pb-5">
            Get me know a{" "}
            <span className="underline decoration-lightBlue">little</span>
          </h2>

          <p className="text-base">
            Hello again, I'm Luis Martínez and I'm getting close to become a
            Computer Science Engineer. I figured out my passion to the career
            when I was on highschool, during my last year, because I realized
            how techonology has helped the world by creating amazing, successful
            and useful tools for every working field.
            <br /> <br />
            Since 2021 year, I've been pushing myself to learn more beyond my
            clasess, to improve knowledge, try to challenge me; by watching
            video tutorials, reading blogs, which has resulted in improved
            coding skills and better understanding of their applications in a
            real world scenario. My goal is to prepare myself to build reliable
            applications and provide the users the best experience.
          </p>
        </motion.div>

        {/** image */}
        <motion.div
          variants={animations}
          initial="hidden"
          whileInView={"show"}
          whileHover={{ scale: 0.9 }}
          viewport={{ once: true }}
          className="flex-shrink-0">
          <img
            className="w-60 h-60 rounded-full object-cover md:mb-0 
            md:rounded-lg md:w-80 md:h-96 xl:w-[450px] xl:h-[550px]"
            src={Image}
            alt="me"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
