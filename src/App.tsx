import { Heart, MapPin, Calendar, Users, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { CeremonyCards } from './components/CeremonyCards';
import { Countdown } from './components/Countdown';
import { Parallax } from './components/Parallax';
import { useTheme } from './context/ThemeContext';

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  useTheme();

  const navBg = useTransform(
    scrollYProgress,
    [0, 0.1],
    ['rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 0.95)']
  );

  const coupleNames = ['Ifesinachi', '&', 'Chioma'];
  const weddingDate = '17th January 2026';

  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <motion.nav
        style={{ backgroundColor: navBg }}
        className='fixed top-0 w-full backdrop-blur-sm z-50 border-b border-gray-100'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='flex items-center gap-2'
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart
                className='w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-500'
                style={{ color: 'var(--theme-primary)' }}
              />
            </motion.div>
            <Link
              to='/'
              className='font-serif text-base sm:text-xl transition-all duration-500'
            >
              {coupleNames[0]} {coupleNames[1]} {coupleNames[2]}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='hidden md:flex gap-6 lg:gap-8 text-sm text-gray-600'
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to='/'
                className='hover:text-gray-900 transition-colors relative group'
              >
                Home
                <span
                  className='absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full'
                  style={{ backgroundColor: 'var(--theme-primary)' }}
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to='/#story'
                className='hover:text-gray-900 transition-colors relative group'
              >
                Our Story
                <span
                  className='absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full'
                  style={{ backgroundColor: 'var(--theme-primary)' }}
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to='/program-of-event'
                className='hover:text-gray-900 transition-colors relative group whitespace-nowrap'
              >
                Program of Event
                <span
                  className='absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full'
                  style={{ backgroundColor: 'var(--theme-primary)' }}
                />
              </Link>
            </motion.div>
          </motion.div>

          <button
            className='md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className='md:hidden overflow-hidden bg-white border-t border-gray-100'
        >
          <div className='px-4 py-4 flex flex-col gap-1'>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0 }}
            >
              <Link
                to='/'
                className='block text-gray-600 hover:text-gray-900 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors'
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Link
                to='/#story'
                className='block text-gray-600 hover:text-gray-900 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors'
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to='/program-of-event'
                className='block text-gray-600 hover:text-gray-900 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors'
                onClick={() => setIsMenuOpen(false)}
              >
                Program of Event
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <section id='home' className='pt-16 sm:pt-20 px-4 sm:px-6'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden'
          >
            <div
              className='absolute inset-0 z-10 transition-all duration-500'
              style={{
                background: `linear-gradient(to bottom, transparent 0%, rgba(var(--theme-r), var(--theme-g), var(--theme-b), 0.3) 50%, rgba(0, 0, 0, 0.7) 100%)`,
              }}
            />
            <Parallax
              speed={-30}
              className='absolute inset-0 w-full h-[120%] -top-[10%]'
            >
              <img
                src='/couplec6.png'
                alt='Wedding celebration'
                className='w-full h-full object-cover'
              />
            </Parallax>
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-8 z-20 px-4'>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-wider text-center drop-shadow-lg'
              >
                JOIN US TO CELEBRATE
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Countdown />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Announcement Section */}
      <section className='py-12 sm:py-16 lg:py-20 px-4 sm:px-6'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            variants={scaleIn}
            className='flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-12 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 transition-all duration-500'
            style={{
              background: `linear-gradient(135deg, rgba(var(--theme-r), var(--theme-g), var(--theme-b), 0.08) 0%, rgba(var(--theme-r), var(--theme-g), var(--theme-b), 0.03) 100%)`,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className='w-24 h-24 sm:w-32 sm:h-32 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg flex-shrink-0 relative ring-2 transition-all duration-500'
            >
              <Parallax
                speed={-10}
                className='absolute inset-0 w-full h-[140%] -top-[20%]'
              >
                <img
                  src='/couplered6.jpg'
                  alt='Wedding rings symbolizing eternal love'
                  className='w-full h-full object-cover'
                />
              </Parallax>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className='flex-1 text-center md:text-left'
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className='text-xs sm:text-sm uppercase tracking-wider mb-2 transition-colors duration-500'
                style={{ color: 'var(--theme-primary)' }}
              >
                Join us to celebrate
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 mb-2 sm:mb-4'
              >
                {coupleNames[0]} {coupleNames[1]} {coupleNames[2]}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className='text-sm sm:text-base text-gray-600 mb-4 sm:mb-6'
              >
                {weddingDate}
              </motion.p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to='/program-of-event'
                className='block px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm font-medium transition-all duration-300 w-full md:w-auto text-center shadow-lg hover:shadow-xl whitespace-nowrap'
                style={{
                  backgroundColor: 'var(--theme-primary)',
                  color: 'white',
                  border: '2px solid var(--theme-primary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = 'var(--theme-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    'var(--theme-primary)';
                  e.currentTarget.style.color = 'white';
                }}
              >
                Program of Event
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story & Gallery Section */}
      <section id='story' className='py-8 sm:py-12 px-4 sm:px-6'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className='max-w-7xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8'
        >
          {/* Our Story */}
          <motion.div
            variants={slideInLeft}
            className='rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 transition-all duration-500'
            style={{
              background: `linear-gradient(135deg, rgba(var(--theme-r), var(--theme-g), var(--theme-b), 0.08) 0%, rgba(var(--theme-r), var(--theme-g), var(--theme-b), 0.03) 100%)`,
            }}
          >
            <motion.h3
              variants={fadeInUp}
              className='text-xl sm:text-2xl font-serif text-gray-800 mb-4 sm:mb-6'
            >
              Our Love Story
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className='text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8'
            >
              From a chance encounter to a lifetime together. Our journey has
              been filled with laughter, growth, and unwavering love. Every
              moment has led us to this beautiful celebration of our union.
            </motion.p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to='/gift-registry'
                className='inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center'
                style={{
                  backgroundColor: 'var(--theme-primary)',
                  color: 'white',
                  border: '2px solid var(--theme-primary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = 'var(--theme-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    'var(--theme-primary)';
                  e.currentTarget.style.color = 'white';
                }}
              >
                SEND YOUR BLESSINGS →
              </Link>
            </motion.div>
          </motion.div>

          {/* Photo Gallery */}
          <motion.div variants={slideInRight}>
            <Link
              to='/gallery'
              className='rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 block hover:shadow-lg transition-all duration-500 cursor-pointer group h-full'
              style={{
                background: `linear-gradient(135deg, rgba(var(--theme-r), var(--theme-g), var(--theme-b), 0.08) 0%, rgba(var(--theme-r), var(--theme-g), var(--theme-b), 0.03) 100%)`,
              }}
            >
              <div className='flex justify-between items-start mb-4 sm:mb-6'>
                <div>
                  <h3 className='text-xl sm:text-2xl font-serif text-gray-800 mb-2'>
                    Our Gallery
                  </h3>
                  <p className='text-xs sm:text-sm text-gray-600'>
                    Treasured moments
                    <br />
                    Captured in time
                  </p>
                </div>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className='font-medium hidden sm:inline transition-colors duration-500'
                  style={{ color: 'var(--theme-primary)' }}
                >
                  View All →
                </motion.span>
              </div>
              <motion.div
                variants={staggerContainer}
                className='grid grid-cols-3 gap-2 sm:gap-3'
              >
                {[
                  '/couplered(3).jpg',
                  '/coupley(2).jpg',
                  '/couplec(2).jpg',
                ].map((src, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleIn}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    transition={{ duration: 0.3 }}
                    className='aspect-square rounded-lg overflow-hidden ring-1 transition-all duration-300'
                  >
                    <img
                      src={src}
                      alt={`Cherished moment ${idx + 1}`}
                      className='w-full h-full object-cover'
                    />
                  </motion.div>
                ))}
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Ceremony Cards */}
      <section className='py-8 sm:py-12 px-4 sm:px-6'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className='max-w-7xl mx-auto'
        >
          <CeremonyCards />
        </motion.div>
      </section>

      {/* Wedding Events Section */}
      <section className='py-12 sm:py-16 lg:py-20 px-4 sm:px-6 theme-section-light rounded-t-[50px] sm:rounded-t-[100px] mt-12 sm:mt-20'>
        <div className='max-w-7xl mx-auto'>
          {/* Church Service */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className='grid md:grid-cols-2 gap-8 sm:gap-12 items-start mb-12 sm:mb-20'
          >
            <motion.div variants={slideInLeft}>
              <motion.div
                variants={fadeInUp}
                className='flex items-center gap-2 mb-4'
              >
                <Users
                  className='w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-500'
                  style={{ color: 'var(--theme-primary)' }}
                />
                <p className='text-xs sm:text-sm text-gray-600 uppercase tracking-wider'>
                  SACRED CEREMONY
                </p>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className='text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-800 mb-6 sm:mb-8'
              >
                Holy Matrimony
              </motion.h2>
              <motion.div
                variants={staggerContainer}
                className='space-y-4 text-gray-600 mb-6 sm:mb-8'
              >
                {[
                  {
                    icon: MapPin,
                    label: 'Venue',
                    value:
                      '5/7 Toyin Popoola Cres, Ikosi Ketu, Lagos 105102, Nigeria',
                  },
                  { icon: Calendar, label: 'Date', value: weddingDate },
                  { icon: Heart, label: 'Ceremony Begins', value: '10:00 AM' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className='flex items-start gap-3'
                  >
                    <item.icon
                      className='w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0 transition-colors duration-500'
                      style={{ color: 'var(--theme-primary)' }}
                    />
                    <div>
                      <p className='font-medium text-gray-800 text-sm sm:text-base'>
                        {item.label}
                      </p>
                      <p className='text-xs sm:text-sm'>{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={slideInRight} className='relative'>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className='rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-2 transition-all duration-500'
              >
                <iframe
                  src='https://www.google.com/maps?q=Kingdom+of+Mercy+Ministries,+Lagos,+Nigeria&output=embed'
                  title='Church Location'
                  width='100%'
                  height='300'
                  className='sm:h-[400px]'
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Reception */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className='grid md:grid-cols-2 gap-8 sm:gap-12 items-start'
          >
            <motion.div variants={slideInRight} className='md:order-2'>
              <motion.div
                variants={fadeInUp}
                className='flex items-center gap-2 mb-4'
              >
                <Users
                  className='w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-500'
                  style={{ color: 'var(--theme-primary)' }}
                />
                <p className='text-xs sm:text-sm text-gray-600 uppercase tracking-wider'>
                  JOYFUL CELEBRATION
                </p>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className='text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-800 mb-6 sm:mb-8'
              >
                Wedding Reception
              </motion.h2>
              <motion.div
                variants={staggerContainer}
                className='space-y-4 text-gray-600 mb-6 sm:mb-8'
              >
                {[
                  {
                    icon: MapPin,
                    label: 'Venue',
                    value: '19a, Mobolaji Bank Anthony Way, Maryland',
                  },
                  { icon: Calendar, label: 'Date', value: weddingDate },
                  {
                    icon: Heart,
                    label: 'Celebration Starts',
                    value: '1:00 PM',
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className='flex items-start gap-3'
                  >
                    <item.icon
                      className='w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0 transition-colors duration-500'
                      style={{ color: 'var(--theme-primary)' }}
                    />
                    <div>
                      <p className='font-medium text-gray-800 text-sm sm:text-base'>
                        {item.label}
                      </p>
                      <p className='text-xs sm:text-sm'>{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={slideInLeft} className='relative md:order-1'>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className='rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-2 transition-all duration-500'
              >
                <iframe
                  src='https://www.google.com/maps?q=19a+Mobolaji+Bank+Anthony+Way,+Maryland,+Lagos,+Nigeria&output=embed'
                  title='Reception Location'
                  width='100%'
                  height='300'
                  className='sm:h-[400px]'
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-12 sm:py-16 lg:py-20 px-4 sm:px-6 theme-section-light'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'
          >
            {[
              {
                img: '/wellwish.png',
                text: 'What a beautiful celebration of love! The ceremony was heartfelt and the reception was absolutely magical. Wishing you both a lifetime of happiness!',
                name: 'Pastor kc Eze',
                title: 'God Father',
              },
              {
                img: '/wellwish.png',
                text: "I've never seen two people more perfect for each other. Your love story inspires us all. Congratulations on this wonderful journey!",
                name: 'Mr Paul Nguta',
                title: "Bride's Father",
              },
              {
                img: '/wellwish.png',
                text: 'To witness your love bloom has been such a joy. May your marriage be filled with laughter, adventure, and endless love!',
                name: 'Chidubem Genexsis',
                title: 'Childhood Friend',
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{
                  y: -8,
                  boxShadow:
                    '0 20px 40px rgba(var(--theme-r), var(--theme-g), var(--theme-b), 0.15)',
                }}
                transition={{ duration: 0.3 }}
                className='bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center ring-1 transition-all duration-500'
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className='w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mx-auto mb-4 sm:mb-6 bg-gray-200 ring-2 transition-all duration-500'
                >
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className='w-full h-full object-cover'
                  />
                </motion.div>
                <p className='text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 italic'>
                  "{testimonial.text}"
                </p>
                <p className='font-medium text-gray-800 text-sm sm:text-base'>
                  {testimonial.name}
                </p>
                <p className='text-xs sm:text-sm text-gray-500'>
                  {testimonial.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className='theme-section-light px-4 sm:px-6 py-8 sm:py-12'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='max-w-7xl mx-auto text-center'
        >
          <motion.div
            variants={fadeInUp}
            className='flex justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8'
          >
            <a
              href='#'
              className='hover:text-gray-900 transition-colors font-medium relative group'
            >
              Share Our Joy
              <span
                className='absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full'
                style={{ backgroundColor: 'var(--theme-primary)' }}
              />
            </a>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            className='flex justify-center gap-3 sm:gap-4'
          >
            {[
              { label: 'Twitter', icon: '𝕏' },
              { label: 'Instagram', icon: 'IG' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href='#'
                variants={scaleIn}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className='w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300'
                aria-label={social.label}
                style={{ backgroundColor: 'var(--theme-primary)' }}
              >
                <span className='text-sm'>{social.icon}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </footer>
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;
