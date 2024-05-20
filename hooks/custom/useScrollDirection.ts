import { useState, useEffect } from "react";

export enum ScrollDirection {
  Up = "up",
  Down = "down",
}

const useScrollDirection = (): ScrollDirection | null => {
  const [scrollDirection, setScrollDirection] =
    useState<ScrollDirection | null>(null);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setScrollDirection(ScrollDirection.Up);
      } else if (prevScrollPos < currentScrollPos) {
        setScrollDirection(ScrollDirection.Down);
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollDirection;
};

export default useScrollDirection;

/**
 * USAGE
 *
 * const scrollDir  = useScrollDirection
 * scrollDir === ScrollDirection.up && (CONDITIONALLY RENDER SOMETHING)
 */
