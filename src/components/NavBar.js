import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import ThemeToggle from "./Themes/ThemeToggle";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

function NavBar() {
  return (
    <Popover className="fixed top-0 left-0 right-0 z-50 shadow-md bg-lightWhite dark:bg-darkBlue">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0, 0.71, 0.2, 1.01] }}
        className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="flex justify-between items-center
            py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to={"#"}>
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                transition={{
                  type: "keyframes",
                  stiffness: 400,
                  damping: 17,
                  duration: 0.2,
                }}
                className="w-12 h-12 rounded-full object-cover"
                src={require("../img/profile_2.webp")}
                alt="profile"
              />
            </Link>
          </div>

          {/** Burger Icon for mobile menu*/}
          <div className="md:hidden">
            <Popover.Button
              className="bg-lightWhite dark:bg-darkBlue rounded-md p-2 inline-flex items-center justify-center
                    text-darkBlue dark:text-ligthGray focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 font-extrabold">
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </Popover.Button>
          </div>

          <Popover.Group
            as="nav"
            className="hidden md:flex space-x-10 text-lg text-darkBlue dark:text-lightWhite">
            <Link
              to={"#about-me"}
              className="font-medium  hover:text-darkGray hover:scale-95 transition ease-in-out duration-200">
              About
            </Link>
            <Link
              to={"#skills"}
              className="font-medium  hover:text-darkGray hover:scale-95 transition ease-in-out duration-200">
              Skills
            </Link>
            <Link
              to={"#projects"}
              className="font-medium  hover:text-darkGray hover:scale-95 transition ease-in-out duration-200">
              Projects
            </Link>
            <Link
              to={"#contact"}
              className="font-medium  hover:text-darkGray hover:scale-95 transition ease-in-out duration-200">
              Contact
            </Link>
          </Popover.Group>

          <div className="hidden items-center justify-end lg:w-0 md:flex md:flex-1">
            <ThemeToggle />
          </div>
        </div>
      </motion.div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opactiy-0 scale-95">
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition
                transform origin-top-right md:hidden">
          <div
            className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5
                     bg-lightWhite dark:bg-darkBlue divide-y-2 divide-ligthGray">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link to={"#"}>
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src={require("../img/profile_2.webp")}
                      alt="profile"
                    />
                  </Link>
                </div>

                <div className="-mr-2">
                  <Popover.Button
                    className="bg-lightWhite dark:bg-darkBlue rounded-md p-2 inline-flex items-center justify-center
                                    text-darkBlue dark:text-ligthGray focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 font-semibold">
                      <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Popover.Button>
                </div>
              </div>

              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-center justify-items-center  text-darkBlue dark:text-lightWhite">
                  <Link
                    to={"#about-me"}
                    className="font-medium  hover:text-darkGray transition ease-in-out duration-200">
                    About
                  </Link>
                  <Link
                    to={"#skills"}
                    className="font-medium  hover:text-darkGray transition ease-in-out duration-200">
                    Skills
                  </Link>
                  <Link
                    to={"#projects"}
                    className="font-medium  hover:text-darkGray transition ease-in-out duration-200">
                    Projects
                  </Link>
                  <Link
                    to={"#contact"}
                    className="font-medium  hover:text-darkGray transition ease-in-out duration-200">
                    Contact
                  </Link>

                  <div className="items-center col-span-2 pt-5">
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default NavBar;
