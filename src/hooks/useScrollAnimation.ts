"use client";
import { useState, useEffect, useRef } from 'react';

const easing = [0.22, 1, 0.36, 1];

export const animationVariants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easing } }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: easing } }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.96, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: easing } }
  },
  staggerContainer: (staggerChildren = 0.15, delayChildren = 0) => ({
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren }
    }
  })
};

export const useScrollAnimation = (options = { threshold: 0.1, triggerOnce: true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options.triggerOnce && ref.current) {
          observer.unobserve(ref.current);
        }
      } else if (!options.triggerOnce) {
        setIsVisible(false);
      }
    }, {
      threshold: options.threshold,
      rootMargin: options.rootMargin || '0px'
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.triggerOnce, options.rootMargin]);

  return { ref, isVisible, variants: animationVariants };
};