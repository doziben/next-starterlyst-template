import { useState, useEffect } from "react";

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const updateMatches = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Initial check
    updateMatches(mediaQueryList as any);

    // Add listener for changes
    mediaQueryList.addListener(updateMatches);

    // Clean up the listener when the component unmounts
    return () => {
      mediaQueryList.removeListener(updateMatches);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
