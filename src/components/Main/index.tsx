import { AnimatePresence, motion } from 'framer-motion';
import { Home } from './Home';
import { Projects } from './Projects';

type MainProps = {
  page: string;
};

export const Main = ({ page }: MainProps) => {
  const pageVariants = {
    hidden: { opacity: 0, y: 100 }, // Start with opacity 0 and translated off-screen
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Animate to visible
    exit: { opacity: 0, transition: { duration: 0.2 } }, // Exit animation
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={page}
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {page === 'HOME' && <Home />}
        {page === 'PROJECTS' && <Projects />}
      </motion.div>
    </AnimatePresence>
  );
};
