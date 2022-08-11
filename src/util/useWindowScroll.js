import { useEffect, useState } from "react";
import { throttle } from "./throttle";

function useWindowScroll() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    const throttleScroll = throttle(handleScroll);
    window.addEventListener("scroll", throttleScroll);
    return () => window.removeEventListener("scroll", throttleScroll);
  }, []);

  return active;
}

export default useWindowScroll;
