import React from "react";
import { Icon } from "@iconify/react";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import { descriptionAndFooterAnimation } from "../utils/animations";

function Footer() {
  return (
    <div className="h-full lg:p-14">
      <motion.hr
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="border-1 border-[#878A99] dark:border-[#F7F8FC] rounded-sm"
      />

      <motion.footer
        variants={descriptionAndFooterAnimation}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
        className="p-4 px-11 md:px-6 md:py-8">
        <div className="flex flex-row md:flex-row items-center justify-between pb-20">
          {/** Div for the github and linkedin icon */}
          <div className="flex flex-wrap items-center space-x-5 mb-6 sm:mb-0">
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              transition={{
                type: "keyframes",
                stiffness: 400,
                damping: 17,
                duration: 0.2,
              }}
              href="https://github.com/Luigi594"
              target={"_blank"}
              className="text-darkBlue dark:text-ligthGray hover:cursor-pointer"
              rel="noreferrer">
              <Icon icon={"akar-icons:github-fill"} width={"45"} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              transition={{
                type: "keyframes",
                stiffness: 400,
                damping: 17,
                duration: 0.2,
              }}
              href="https://www.linkedin.com/in/luis-martinez-padilla/"
              target={"_blank"}
              className="text-darkBlue dark:text-ligthGray hover:cursor-pointer"
              rel="noreferrer">
              <Icon icon={"bi:linkedin"} width={"45"} />
            </motion.a>
          </div>

          {/** Scroll to top icon */}
          <motion.span
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{
              type: "keyframes",
              stiffness: 400,
              damping: 17,
              duration: 0.2,
            }}>
            <Link
              to={"#"}
              className="flex items-center mb-4 sm:mb-0 hover:scale-110 hover:cursor-pointer transition ease-in-out duration-300">
              <Icon
                icon={"akar-icons:circle-chevron-up-fill"}
                className="text-darkBlue dark:text-ligthGray"
                width={"45"}
              />
            </Link>
          </motion.span>
        </div>

        <span className="block text-sm text-gray-700  text-center dark:text-gray-400">
          © 2022 Luis Martínez. All Rights Reserved.
        </span>
      </motion.footer>
    </div>
  );
}

export default Footer;
