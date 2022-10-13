import { useState, useEffect } from 'react';

export default function useScroll() {
  const [scrollY, setScrollY] = useState<number>(0);
  const [innerWidth, setInnerWidth] = useState<number>(0);

  const scrollListener = () => {
    setScrollY(window.pageYOffset);
  };

  const resizeListener = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return {
    scrollY,
    innerWidth,
  };
}
