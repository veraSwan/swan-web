"use client";
import { useState, useEffect } from 'react';

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

type ScrollAnimationOptions = {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
};

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { threshold = 0.1, triggerOnce = true, rootMargin = '0px' } = options;
  const [isVisible, setIsVisible] = useState(false);
  const [node, setNode] = useState<Element | null>(null);

  useEffect(() => {
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (triggerOnce) {
          observer.unobserve(node);
        }
      } else if (!triggerOnce) {
        setIsVisible(false);
      }
    }, { threshold, rootMargin });

    observer.observe(node);
    return () => observer.unobserve(node);
  }, [node, threshold, triggerOnce, rootMargin]);

  return { ref: setNode, isVisible, variants: animationVariants };
};
