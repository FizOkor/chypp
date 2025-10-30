import { useState, useLayoutEffect, useCallback } from 'react';
import { debounce } from 'lodash'; // A helper utility to debounce a function call

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = useCallback(
    debounce(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 200),
    []
  );

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to get size

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return windowSize;
}

export default useWindowSize;
