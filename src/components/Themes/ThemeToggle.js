import React from "react";
import { Icon } from "@iconify/react";
import { useThemeContext } from "../../hooks/useThemeContext";
import { motion } from "framer-motion";

// ic:round-dark-mode
// ic:baseline-light-mode

function ThemeToggle() {
  const { theme, setTheme } = useThemeContext();

  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      transition={{
        type: "keyframes",
        stiffness: 400,
        damping: 17,
        duration: 0.2,
      }}>
      {theme === "dark" ? (
        <Icon
          icon="ic:baseline-light-mode"
          width="40"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="cursor-pointer dark:text-lightWhite text-darkBlue"
        />
      ) : (
        <Icon
          icon="ic:round-dark-mode"
          width="40"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="cursor-pointer dark:text-lightWhite text-darkBlue"
        />
      )}
    </motion.div>
  );
}

export default ThemeToggle;
