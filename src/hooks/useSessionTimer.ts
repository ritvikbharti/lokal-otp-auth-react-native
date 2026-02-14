import { useEffect, useRef, useState } from "react";

export const useSessionTimer = () => {
  const startRef = useRef(Date.now());
  const [time, setTime] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(Date.now() - startRef.current);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return time;
};