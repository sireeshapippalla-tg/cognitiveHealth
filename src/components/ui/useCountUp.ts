import { useEffect, useState } from "react";

const useCountUp = (end: number, duration = 2000, start = 0) => {
  const [value, setValue] = useState(start);

  useEffect(() => {
    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;

      const easeOut = 1 - Math.pow(1 - progress / duration, 3);
      const percentage = Math.min(easeOut, 1);

      const currentValue = start + (end - start) * percentage;
      setValue(currentValue);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return value;
};

export default useCountUp;