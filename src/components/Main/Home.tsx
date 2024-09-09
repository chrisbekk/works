import { AnimatePresence, motion } from 'framer-motion';

export const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Time between the staggered animations
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className="w-full py-2 xs:py-16 md:pt-40 px-3 md:px-20"
    >
      <AnimatePresence>
        <motion.h1
          key="welcome-heading" // Add unique key here
          variants={childVariants}
          className="font-light tracking-wide text-xl xs:text-4xl sm:text-6xl sm:font-thin"
        >
          welcome.
        </motion.h1>

        <motion.div
          key="welcome-text" // Add unique key here
          variants={childVariants}
          className="max-w-[840px] mt-4 border-l-2 border-custom_orange px-3 py-4"
        >
          <motion.h2
            key="intro-heading" // Add unique key here
            variants={childVariants}
            className="text-sm sm:text-xl font-light mb-3 tracking-wide"
          >
            My name is Christian, and I’m a{' '}
            <span className="text-custom_orange">frontend developer</span> in
            Lillehammer, Norway.
          </motion.h2>

          <motion.p
            key="intro-paragraph" // Add unique key here
            variants={childVariants}
            className="text-xs sm:text-lg tracking-wider font-extralight"
          >
            I am a frontend developer skilled in building{' '}
            <span className="text-custom_orange">responsive static pages</span>{' '}
            with HTML, CSS, and JavaScript, as well as{' '}
            <span className="text-custom_orange">dynamic applications</span>{' '}
            using{' '}
            <span className="text-custom_orange">
              React, Tailwind CSS and Material-UI
            </span>
            . With experience in Node.js and MongoDB, I also develop scalable,{' '}
            <span className="text-custom_orange">full-stack solutions</span>{' '}
            that integrate seamlessly with frontend interfaces.
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
