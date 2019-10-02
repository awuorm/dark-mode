import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const useDarkMode = (value) => {
  const [goingDark, setgoingDark] = useLocalStorage("dark",value);
  useEffect(() => {
    goingDark
      ? document.querySelector("body").setAttribute("class", "dark-mode")
      : document.querySelector("body").removeAttribute("class", "dark-mode");
  },[goingDark]);
  return [goingDark, setgoingDark];
};

export default useDarkMode;