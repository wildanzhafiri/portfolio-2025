import { motion, type Variants } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.985,
    filter: 'blur(10px)',
    rotateX: 6,
    transformPerspective: 900,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease,
      opacity: { duration: 0.35, ease },
      filter: { duration: 0.45, ease },
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.99,
    filter: 'blur(8px)',
    transition: { duration: 0.22, ease },
  },
};

export function ProjectReveal({ children }: { children: React.ReactNode; index?: number }) {
  return (
    <motion.div
      layout
      variants={reveal}
      initial="hidden"
      animate="show"
      exit="exit"
      transition={{
        type: 'spring',
        stiffness: 420,
        damping: 38,
        mass: 0.9,
      }}
      style={{ transformOrigin: '50% 80%' }}
    >
      {children}
    </motion.div>
  );
}
