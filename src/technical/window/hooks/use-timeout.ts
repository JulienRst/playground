// https://www.joshwcomeau.com/snippets/react-hooks/use-timeout/
import { useEffect, useRef } from 'react';
export default function useTimeout(callback: Function, delay: number) {
  const timeoutRef = useRef<number>();
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => savedCallback.current();
    timeoutRef.current = window.setTimeout(tick, delay);
    return () => window.clearTimeout(timeoutRef.current);
  }, [delay]);
  return timeoutRef;
}
