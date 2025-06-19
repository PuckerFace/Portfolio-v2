import React, { useEffect, useRef, useState } from 'react';

const LazyOnView = ({ importFunc }) => {
  const ref = useRef(null);
  const [Component, setComponent] = useState(null);
  const observerRef = useRef(null);

  useEffect(() => {
    let hasLoaded = false;

    const loadComponent = async () => {
      if (hasLoaded) return;
      const { default: LoadedComponent } = await importFunc();
      setComponent(() => LoadedComponent);
      hasLoaded = true;
    };

    const setupObserver = () => {
      if (!ref.current) return;

      observerRef.current = new IntersectionObserver(
        async ([entry], observerInstance) => {
          if (entry.isIntersecting) {
            await loadComponent();
            observerInstance.disconnect();
          }
        },
        { rootMargin: '100px' }
      );

      observerRef.current.observe(ref.current);
    };

    // Delay observation until after scroll restoration
    const timeout = setTimeout(() => {
      setupObserver();
    }, 100); // Wait a bit for browser to finish auto-scrolling

    return () => {
      clearTimeout(timeout);
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [importFunc]);

  return (
    <div ref={ref}>
      {Component ? (
        <Component />
      ) : (
        <div style={{ minHeight: 300, background: '#f0f0f0' }}>
          Loading section…
        </div>
      )}
    </div>
  );
};

export default LazyOnView;
