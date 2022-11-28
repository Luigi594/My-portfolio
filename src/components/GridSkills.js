import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

function GridSkills({ textIcon, title, direcctionLeft }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: !direcctionLeft ? 100 : -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className="mx-auto pb-10">
      {textIcon && (
        <>
          <Icon
            icon={textIcon}
            width="80"
            className={`
            transition ease-in-out duration-150 hover:scale-110
            ${textIcon} === 'logos:mongodb-icon' ? h-20 : '' `}
          />
          <p className="text-center pt-2 font-semibold">{title}</p>
        </>
      )}
    </motion.div>
  );
}

export default GridSkills;
