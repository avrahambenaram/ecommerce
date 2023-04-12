import { useEffect, useState } from 'react';

export function useInnerSize() {
  const [innerWidth, setInnerWidth] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);
  }, [])

  return {
    innerWidth,
    innerHeight,
  }
}