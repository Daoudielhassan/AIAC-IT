import { useEffect, useState } from "react";

export const useLazyLoad = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1, // When 10% of the component is visible, load it
      }
    );

    const element = document.querySelector("#lazy-load-target");

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return isIntersecting;
};
