/**
 * PageTransition — SABIX Design System
 * Wraps route content with a smooth fade + subtle Y translation.
 * Respects prefers-reduced-motion via Framer Motion's useReducedMotion.
 */
import { motion, useReducedMotion } from 'framer-motion';

const PageTransition = ({ children }) => {
  const shouldReduce = useReducedMotion();

  const variants = {
    initial: shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit:    shouldReduce ? { opacity: 0 } : { opacity: 0, y: -8 },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
