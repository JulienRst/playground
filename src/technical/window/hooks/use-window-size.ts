// base : https://usehooks.com/useWindowSize/
import { useState, useEffect } from 'react';
import parseStyleVariable from 'technical/style/parse-style-variable';
import variables from 'ui/variables.module.scss';
// Define general type for useWindowSize hook, which includes width and height
interface Size {
  width: number | undefined;
  height: number | undefined;
}

// Hook
function useWindowSize(): Size {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export function useIsMobile() {
  const { width } = useWindowSize();

  const isMobile = width
    ? width < parseStyleVariable(variables.mobileBreakPoint)
    : false;

  return isMobile;
}

export default useWindowSize;
