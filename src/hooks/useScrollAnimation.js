import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered fade-in animations using IntersectionObserver.
 * @param {object} options - IntersectionObserver options
 * @returns {[React.RefObject, boolean]} - [ref to attach, isVisible flag]
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Only trigger once
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return [ref, isVisible];
}

/**
 * Hook to observe multiple elements for staggered animations.
 * @param {number} count - Number of elements to observe
 * @param {number} staggerDelay - Delay between each element in ms
 * @returns {[Function, boolean[]]} - [ref callback, visibility array]
 */
export function useStaggerAnimation(count, staggerDelay = 100) {
  const [visibleItems, setVisibleItems] = useState(new Array(count).fill(false));
  const refs = useRef([]);

  useEffect(() => {
    const observers = [];

    refs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }, index * staggerDelay);
            observer.unobserve(el);
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [count, staggerDelay]);

  const setRef = (index) => (el) => {
    refs.current[index] = el;
  };

  return [setRef, visibleItems];
}
