import { useState, useEffect } from 'react';

interface CountUpProps {
  end: number;
  inView: boolean;
}

export default function CountUp({ end, inView }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, inView]);

  return <>{count}</>;
}