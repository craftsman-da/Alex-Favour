import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const images = [
  'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=300',
];

export function AutoSlideGallery() {
  const [[page, direction], setPage] = useState([0, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage(([prevPage]) => [
        prevPage === images.length - 1 ? 0 : prevPage + 1,
        1,
      ]);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const imageIndex = page % images.length;

  const variants = {
    enter: {
      x: 300,
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -300,
      opacity: 0,
    },
  };

  return (
    <div className='relative w-full h-48 sm:h-56 overflow-hidden rounded-lg'>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className='absolute inset-0'
        >
          <img
            src={images[imageIndex]}
            alt={`Gallery ${imageIndex + 1}`}
            className='w-full h-full object-cover'
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
