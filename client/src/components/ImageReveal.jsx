/**
 * ImageReveal — SABIX Design System
 * Scroll-triggered image reveal using Framer Motion.
 * Clips from bottom to reveal image as it enters the viewport.
 * Respects prefers-reduced-motion.
 */
import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const ImageReveal = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  aspectRatio = '3/2',
  objectPosition = 'center',
  eager = false,
  onLoad,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' });
  const shouldReduce = useReducedMotion();

  const containerVariants = {
    hidden: shouldReduce ? { opacity: 0 } : { clipPath: 'inset(100% 0% 0% 0%)' },
    visible: shouldReduce
      ? { opacity: 1 }
      : { clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
  };

  const imageVariants = {
    hidden:  shouldReduce ? {} : { scale: 1.08 },
    visible: shouldReduce ? {} : { scale: 1, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${containerClassName}`}
      style={{ aspectRatio }}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        onLoad={onLoad}
        variants={imageVariants}
        className={`w-full h-full object-cover ${className}`}
        style={{ objectPosition }}
      />
    </motion.div>
  );
};

export default ImageReveal;
