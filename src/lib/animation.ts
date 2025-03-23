import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from '@studio-freight/lenis';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize smooth scroll
export const initSmoothScroll = () => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical', 
    gestureOrientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  
  return lenis;
};

// Scroll trigger setup
export const setupScrollTrigger = () => {
  // Re-init ScrollTrigger
  ScrollTrigger.refresh();
  
  // Basic reveal animation for elements
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach((el) => {
    gsap.fromTo(
      el,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });
};

// Text animation
export const animateText = (element: HTMLElement, delay = 0) => {
  const text = element.innerText;
  element.innerText = '';
  
  const characters = text.split('');
  characters.forEach((char, index) => {
    const span = document.createElement('span');
    span.innerText = char === ' ' ? '\u00A0' : char;
    span.style.opacity = '0';
    span.style.display = 'inline-block';
    
    element.appendChild(span);
    
    gsap.to(span, {
      opacity: 1,
      duration: 0.1,
      delay: delay + index * 0.05,
      ease: 'power2.out',
    });
  });
};

// Stagger animation for elements
export const staggerElements = (
  elements: NodeListOf<Element> | HTMLElement[], 
  fromVars = { y: 50, opacity: 0 }, 
  toVars = { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
) => {
  gsap.fromTo(elements, fromVars, toVars);
};

// Page transitions
export const pageTransitionIn = (container: HTMLElement) => {
  gsap.to(container, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: 'power2.out',
  });
};

export const pageTransitionOut = (container: HTMLElement) => {
  return gsap.to(container, {
    opacity: 0,
    y: -20,
    duration: 0.5,
    ease: 'power2.in',
  });
};

// Custom hooks
export { useGSAP };
