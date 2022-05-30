import React, { useEffect } from "react";
import { Size } from "./type";

function useScreenSize() {
  const [screenSize, setScreenSize] = React.useState<Size>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { ...screenSize };
}

export default useScreenSize;
