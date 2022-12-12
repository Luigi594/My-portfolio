import { useState, useEffect } from "react";

function useResizeScreen() {
  // know the current width of the screen
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // clean up process
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  return { width };
}

export default useResizeScreen;
