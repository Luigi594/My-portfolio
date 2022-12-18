import React from "react";
import { motion } from "framer-motion";
import {
  titleAnimations,
  descriptionAndFooterAnimation,
} from "../../utils/animations";

function Title({ direccionLeft, text, subtext }) {
  return (
    <>
      <motion.div
        variants={titleAnimations}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="titleContent">
        {direccionLeft ? (
          <>
            <h1 className="textContent">{text}</h1>
            <hr className="lineContent" />
          </>
        ) : (
          <>
            <hr className="lineContent" />
            <h1 className="textContent">{text}</h1>
          </>
        )}
      </motion.div>

      {subtext && (
        <motion.div
          variants={descriptionAndFooterAnimation}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="contentDescription">
          <h2 className="textDescription">{subtext}</h2>
        </motion.div>
      )}
    </>
  );
}

export default Title;
