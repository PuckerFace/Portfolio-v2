// components/LazySection.jsx
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const LazySection = ({ children, rootMargin = '200px 0px' }) => {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin });
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (inView) setShouldRender(true);
  }, [inView]);

  return <div ref={ref}>{shouldRender ? children : null}</div>;
};

export default LazySection;
