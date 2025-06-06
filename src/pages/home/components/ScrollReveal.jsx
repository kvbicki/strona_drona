import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/scrollreveal.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  baseOpacity = 0,
  baseY = 50,
  baseBlur = 10,
  duration = 0.8,
  stagger = 0.1,
  containerClassName = ""
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    gsap.fromTo(
      el.children,
      {
        opacity: baseOpacity,
        y: baseY,
        filter: `blur(${baseBlur}px)`
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration,
        stagger,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, baseOpacity, baseY, baseBlur, duration, stagger]);

  return (
    <div ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;