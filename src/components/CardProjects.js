import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import useResizeScreen from "../hooks/useResizeScreen";

function CardProjects({ name, description, github, languages, live }) {
  const screenResolution = useResizeScreen();

  return (
    <motion.div
      initial={{ x: 100 }}
      whileInView={{ x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className="relative flex-none max-w-xs h-96 rounded-lg border opacity-60 bg-[#F2F3F9] border-gray-200 shadow-md
       dark:bg-gray-800 dark:border-gray-700 hover:opacity-100 hover:bg-lightWhite transition 
       ease-in-out duration-300 md:max-w-md md:h-80">
      <div className="p-5">
        <div className="flex items-center">
          <h2 className="flex-1 text-xl text-darkBlue dark:text-ligthGray font-semibold ">
            {name}
          </h2>

          <div className="flex space-x-3">
            <a
              href={github}
              target={"_blank"}
              className="text-darkBlue dark:text-ligthGray hover:dark:text-darkGray
                    hover:text-darkGray transition ease-in-out duration-200"
              rel="noreferrer">
              <Icon icon={"akar-icons:github-fill"} width={"25"} />
            </a>

            {/** if the project has a live version will render this other icon */}
            {live && (
              <a
                href={live}
                target={"_blank"}
                className="text-darkBlue dark:text-ligthGray hover:dark:text-darkGray
                        hover:text-darkGray transition ease-in-out duration-200"
                rel="noreferrer">
                <Icon icon={"eva:external-link-outline"} width={"25"} />
              </a>
            )}
          </div>
        </div>

        <p className="text-base mt-3 font-normal text-lightBlue dark:text-gray-400 md:mt-2 md:p-4">
          {description}
        </p>
      </div>

      <div className="flex flex-row px-5 absolute bottom-5">
        <div className="flex items-center space-x-3 text-sm text-darkBlue dark:text-gray-300 font-normal">
          {Object.entries(languages).map(([key, value]) =>
            screenResolution.width <= 640 ? (
              <p
                key={key}
                className="underline decoration-lightBlue opacity-75 dark:decoration-ligthGray">
                {value === "Styled-components"
                  ? "Styled..."
                  : value === "React Native"
                  ? "React N..."
                  : value}
              </p>
            ) : (
              <p
                key={key}
                className="underline decoration-lightBlue opacity-75 dark:decoration-ligthGray">
                {value}
              </p>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default CardProjects;
