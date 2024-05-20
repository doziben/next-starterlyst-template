import { useState, useEffect } from "react";

type UseHeaderScrollProps = {
  // Optional offset to adjust the trigger point (defaults to 0)
  offset?: number;
};

const useHeaderScroll = ({ offset = 0 }: UseHeaderScrollProps) => {
  const [isScrolledPast, setIsScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerElement = document.querySelector("header");
      if (headerElement) {
        const headerHeight = headerElement.offsetHeight;
        setIsScrolledPast(scrollPosition > headerHeight + offset);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return isScrolledPast;
};

export default useHeaderScroll;
