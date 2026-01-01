import { Heart, MapPin, Calendar, Navigation, Download } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { useTheme } from './context/ThemeContext';
import weddingInvite from './assets/wedding-invite.jpg';

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export function CeremonyDetails() {
  useParams();
  const { currentColor } = useTheme();

  const details = {
    title: 'Wedding Ceremony',
    date: 'January 17th, 2026',
    time: '10:00 AM',
    venue: 'Kingdom of Mercy Ministries, Lagos',
    address: '5/7 Toyin Popoola Cres, Ikosi Ketu, Lagos',
    mapLink:
      'https://maps.google.com/?q=Kingdom+of+Mercy+Ministries,+Lagos,+Nigeria',
    image: weddingInvite,
    filename: 'Ifesinachi_Chioma_Wedding_Invite.jpg',
    colors: [
      { name: 'Emerald', bg: 'bg-emerald-700' },
      { name: 'Gold', bg: 'bg-yellow-500' },
      { name: 'White', bg: 'bg-white border border-gray-200' },
    ],
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className='fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100'
      >
        <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex items-center gap-2'
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className={`w-5 h-5 ${currentColor.text} opacity-60`} />
            </motion.div>
            <span className='font-serif text-xl'>Ifesinachi & Chioma</span>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href='/'
            className={`text-sm font-medium text-gray-600 ${currentColor.hover.replace(
              'bg',
              'hover:text'
            )} transition-colors`}
          >
            ← Back Home
          </motion.a>
        </div>
      </motion.nav>

      <main className='pt-24 pb-20 px-4 md:px-6'>
        <div className='max-w-4xl mx-auto'>
          {/* Main Card */}
          <motion.div
            initial='hidden'
            animate='visible'
            variants={scaleIn}
            className='bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100'
          >
            {/* Image Container */}
            <motion.div variants={fadeIn} className='relative bg-gray-100'>
              <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                src={details.image}
                alt={`${details.title} Invitation`}
                className='w-full h-auto object-contain max-h-[80vh] mx-auto'
              />
            </motion.div>

            {/* Actions & Details Bar */}
            <motion.div
              initial='hidden'
              animate='visible'
              variants={staggerContainer}
              className='p-6 md:p-8 bg-white'
            >
              <div className='flex flex-col md:flex-row gap-6 items-center justify-between'>
                {/* Text Details */}
                <motion.div
                  variants={slideInLeft}
                  className='text-center md:text-left space-y-1'
                >
                  <motion.h2
                    variants={fadeInUp}
                    className='font-serif text-2xl text-gray-900'
                  >
                    {details.title}
                  </motion.h2>
                  <motion.div
                    variants={fadeInUp}
                    className='flex items-center justify-center md:justify-start gap-2 text-gray-600'
                  >
                    <Calendar className='w-4 h-4' />
                    <span>
                      {details.date} • {details.time}
                    </span>
                  </motion.div>
                  <motion.div
                    variants={fadeInUp}
                    className='flex items-center justify-center md:justify-start gap-2 text-gray-600'
                  >
                    <MapPin className='w-4 h-4' />
                    <span>{details.venue}</span>
                  </motion.div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  variants={slideInRight}
                  className='flex flex-wrap justify-center gap-3'
                >
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={details.mapLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium shadow-md ${currentColor.hover}`}
                    style={{ backgroundColor: currentColor.value }}
                  >
                    <Navigation className='w-4 h-4' />
                    Get Directions
                  </motion.a>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className='flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors'
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = details.image;
                      link.download = details.filename;
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <Download className='w-4 h-4' />
                    Save Image
                  </motion.button>
                </motion.div>
              </div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className='h-px bg-gray-100 my-8'
                style={{ transformOrigin: 'left' }}
              ></motion.div>

              {/* Event Details Section */}
              <motion.div
                initial='hidden'
                animate='visible'
                variants={staggerContainer}
                className='space-y-4'
              >
                <motion.div
                  variants={fadeInUp}
                  className='text-center md:text-left'
                >
                  <h3 className='font-serif text-lg text-gray-900 mb-2'>
                    Event Details
                  </h3>
                  <p className='text-sm text-gray-600 leading-relaxed'>
                    Join us as we celebrate our union in holy matrimony. Your
                    presence will make our special day even more meaningful.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className='bg-gray-50 rounded-2xl p-4 space-y-3'
                >
                  <div className='flex items-start gap-3'>
                    <MapPin
                      className={`w-5 h-5 ${currentColor.text} opacity-60 mt-0.5 flex-shrink-0`}
                    />
                    <div>
                      <p className='font-medium text-gray-900 text-sm'>
                        Full Address
                      </p>
                      <p className='text-sm text-gray-600'>{details.address}</p>
                    </div>
                  </div>

                  <div className='flex items-start gap-3'>
                    <Calendar
                      className={`w-5 h-5 ${currentColor.text} opacity-60 mt-0.5 flex-shrink-0`}
                    />
                    <div>
                      <p className='font-medium text-gray-900 text-sm'>
                        Date & Time
                      </p>
                      <p className='text-sm text-gray-600'>
                        {details.date} at {details.time}
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-3'>
                    <Heart
                      className={`w-5 h-5 ${currentColor.text} opacity-60 mt-0.5 flex-shrink-0`}
                    />
                    <div>
                      <p className='font-medium text-gray-900 text-sm'>
                        Dress Code
                      </p>
                      <div className='flex gap-2 mt-2'>
                        {details.colors.map((color, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + idx * 0.1 }}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            className='flex flex-col items-center gap-1'
                          >
                            <div
                              className={`w-8 h-8 rounded-full ${color.bg} shadow-sm`}
                            ></div>
                            <span className='text-xs text-gray-600'>
                              {color.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
