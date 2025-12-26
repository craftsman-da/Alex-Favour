import { Heart, MapPin, Calendar, Users, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CeremonyCards } from './components/CeremonyCards';
import { Countdown } from './components/Countdown';
import { Parallax } from './components/Parallax';

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className='min-h-screen bg-white'>
        <nav className='fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Heart className='w-4 h-4 sm:w-5 sm:h-5 text-rose-300' />
              <span className='font-serif text-base sm:text-xl'>
                Ifesinachi & Chioma
              </span>
            </div>

            <div className='hidden md:flex gap-8 text-sm text-gray-600'>
              <Link to='/' className='hover:text-gray-900 transition-colors'>
                Home
              </Link>
              <a
                href='#story'
                className='hover:text-gray-900 transition-colors'
              >
                Our Story
              </a>
              <a
                href='/program-of-event'
                className='hover:text-gray-900 transition-colors'
              >
                Program of Event
              </a>
            </div>

            <button
              className='md:hidden p-2 text-gray-600'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label='Toggle menu'
            >
              {isMenuOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div className='md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 py-4 px-6 flex flex-col gap-4 shadow-lg'>
              <Link
                to='/'
                className='text-gray-600 hover:text-gray-900 py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <a
                href='#story'
                className='text-gray-600 hover:text-gray-900 py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </a>
              <a
                href='/program-of-event'
                className='text-gray-600 hover:text-gray-900 py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                Program of Event
              </a>
            </div>
          )}
        </nav>

        <section id='home' className='pt-16 sm:pt-20 px-4 sm:px-6'>
          <div className='max-w-7xl mx-auto'>
            <div className='relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden'>
              <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10'></div>
              <Parallax
                speed={-30}
                className='absolute inset-0 w-full h-[120%] -top-[10%]'
              >
                <img
                  src='https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200'
                  alt='Wedding couple'
                  className='w-full h-full object-cover'
                />
              </Parallax>
              <div className='absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-8 z-20 px-4'>
                <h1 className='text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-wider text-center'>
                  JOIN US TO CELEBRATE
                </h1>
                <Countdown />
              </div>
            </div>
          </div>
        </section>

        <section className='py-12 sm:py-16 lg:py-20 px-4 sm:px-6'>
          <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-12 bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12'>
              <div className='w-24 h-24 sm:w-32 sm:h-32 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg flex-shrink-0 relative'>
                <Parallax
                  speed={-10}
                  className='absolute inset-0 w-full h-[140%] -top-[20%]'
                >
                  <img
                    src='https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=400'
                    alt='Wedding rings'
                    className='w-full h-full object-cover'
                  />
                </Parallax>
              </div>
              <div className='flex-1 text-center md:text-left'>
                <p className='text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-2'>
                  Join us to celebrate
                </p>
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 mb-2 sm:mb-4'>
                  Ifesinachi & Chioma
                </h2>
                <p className='text-sm sm:text-base text-gray-600 mb-4 sm:mb-6'>
                  17th Jan 2026
                </p>
              </div>
              <Link
                to='/program-of-event'
                className='bg-[var(--theme-primary)] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm font-medium border border-[var(--theme-primary)] hover:bg-white hover:text-[var(--theme-primary)] transition-colors w-full md:w-auto text-center'
              >
                Program of Event
              </Link>
            </div>
          </div>
        </section>

        <section id='story' className='py-8 sm:py-12 px-4 sm:px-6'>
          <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8'>
            <div className='bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12'>
              <h3 className='text-xl sm:text-2xl font-serif text-gray-800 mb-4 sm:mb-6'>
                Our Story
              </h3>
              <p className='text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8'>
                It's a love-at-first-swipe, corner-to-corner eye contact thing.
                We've through the most powerful moments and funny bad fortune to
                arrive at forever grateful moment.
              </p>
              <a
                href='/gift-registry'
                className='inline-block bg-[var(--theme-primary)] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-[var(--theme-primary)] hover:bg-white hover:text-[var(--theme-primary)] w-full sm:w-auto text-center'
              >
                GIFT NOW →
              </a>
            </div>

            <Link
              to='/gallery'
              className='bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 block hover:shadow-lg transition-all duration-300 cursor-pointer group'
            >
              <div className='flex justify-between items-start mb-4 sm:mb-6'>
                <div>
                  <h3 className='text-xl sm:text-2xl font-serif text-gray-800 mb-2'>
                    Photo Gallery
                  </h3>
                  <p className='text-xs sm:text-sm text-gray-600'>
                    Relive the Memorable
                    <br />
                    Your Moments
                  </p>
                </div>
                <span className='text-[var(--theme-primary)] opacity-0 group-hover:opacity-100 transition-opacity font-medium hidden sm:inline'>
                  View All →
                </span>
              </div>
              <div className='grid grid-cols-3 gap-2 sm:gap-3'>
                {[
                  'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=300',
                  'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=300',
                  'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=300',
                ].map((src, idx) => (
                  <div
                    key={idx}
                    className='aspect-square rounded-lg overflow-hidden'
                  >
                    <img
                      src={src}
                      alt={`Gallery ${idx + 1}`}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                      style={{ transitionDelay: `${idx * 75}ms` }}
                    />
                  </div>
                ))}
              </div>
            </Link>
          </div>
        </section>

        <section className='py-8 sm:py-12 px-4 sm:px-6'>
          <div className='max-w-7xl mx-auto'>
            <CeremonyCards />
          </div>
        </section>

        <section className='py-12 sm:py-16 lg:py-20 px-4 sm:px-6 theme-section-light rounded-t-[50px] sm:rounded-t-[100px] mt-12 sm:mt-20'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid md:grid-cols-2 gap-8 sm:gap-12 items-start mb-12 sm:mb-20'>
              <div>
                <div className='flex items-center gap-2 mb-4'>
                  <Users className='w-4 h-4 sm:w-5 sm:h-5 text-gray-600' />
                  <p className='text-xs sm:text-sm text-gray-600 uppercase tracking-wider'>
                    COUPLE
                  </p>
                </div>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-800 mb-6 sm:mb-8'>
                  Wedding Church Service
                </h2>
                <div className='space-y-4 text-gray-600 mb-6 sm:mb-8'>
                  <div className='flex items-start gap-3'>
                    <MapPin className='w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0' />
                    <div>
                      <p className='font-medium text-gray-800 text-sm sm:text-base'>
                        Location
                      </p>
                      <p className='text-xs sm:text-sm'>
                        5/7 Toyin Popoola Cres, Ikosi Ketu, Lagos 105102, Lagos,
                        Nigeria
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Calendar className='w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0' />
                    <div>
                      <p className='font-medium text-gray-800 text-sm sm:text-base'>
                        Date
                      </p>
                      <p className='text-xs sm:text-sm'>17th January 2026</p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Heart className='w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0' />
                    <div>
                      <p className='font-medium text-gray-800 text-sm sm:text-base'>
                        Service Time
                      </p>
                      <p className='text-xs sm:text-sm'>10:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative'>
                <div className='rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl'>
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
                </div>
              </div>
            </div>

            <div className='grid md:grid-cols-2 gap-8 sm:gap-12 items-start'>
              <div className='md:order-2'>
                <div className='flex items-center gap-2 mb-4'>
                  <Users className='w-4 h-4 sm:w-5 sm:h-5 text-gray-600' />
                  <p className='text-xs sm:text-sm text-gray-600 uppercase tracking-wider'>
                    CELEBRATION
                  </p>
                </div>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-800 mb-6 sm:mb-8'>
                  Grand Reception
                </h2>
                <div className='space-y-4 text-gray-600 mb-6 sm:mb-8'>
                  <div className='flex items-start gap-3'>
                    <MapPin className='w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0' />
                    <div>
                      <p className='font-medium text-gray-800 text-sm sm:text-base'>
                        Location
                      </p>
                      <p className='text-xs sm:text-sm'>
                        19a, Mobolaji Bank Anthony Way, Maryland
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Calendar className='w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0' />
                    <div>
                      <p className='font-medium text-gray-800 text-sm sm:text-base'>
                        Date
                      </p>
                      <p className='text-xs sm:text-sm'>17th January 2026</p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Heart className='w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0' />
                    <div>
                      <p className='font-medium text-gray-800 text-sm sm:text-base'>
                        Time
                      </p>
                      <p className='text-xs sm:text-sm'>1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative md:order-1'>
                <div className='rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl'>
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
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-12 sm:py-16 lg:py-20 px-4 sm:px-6 theme-section-light'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
              {[
                {
                  img: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
                  text: '"I LOVE AFFICIAL STORY, I\'LL NEVER THROUGH THEMSELVES BEING NO EENIE. ARE SURE PROFESSIONAL EVENTS PERFECT!"',
                  name: 'Dr. Kate',
                  title: 'Paris Tour',
                },
                {
                  img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
                  text: '"I HAVE ONE WES YOURSELF. 15AM TILL 2018. The greatest, a little intimate!"',
                  name: 'JHB K. Nguyen',
                  title: 'Four impact',
                },
                {
                  img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
                  text: '"TO OUR BEAULY TEACHERS, ER, (FRIENDS VISIT IT UPDATE HE HAT DAYS)!"',
                  name: 'Ava Evelyn',
                  title: 'Happy World',
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className='bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center'
                >
                  <div className='w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mx-auto mb-4 sm:mb-6 bg-gray-200'>
                    <img
                      src={testimonial.img}
                      alt='Testimonial'
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <p className='text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6'>
                    {testimonial.text}
                  </p>
                  <p className='font-medium text-gray-800 text-sm sm:text-base'>
                    {testimonial.name}
                  </p>
                  <p className='text-xs sm:text-sm text-gray-500'>
                    {testimonial.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className='theme-section-light px-4 sm:px-6 py-8 sm:py-12'>
          <div className='max-w-7xl mx-auto text-center'>
            <div className='flex justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8'>
              <a href='#' className='hover:text-gray-900 transition-colors'>
                Follow
              </a>
            </div>
            <div className='flex justify-center gap-3 sm:gap-4'>
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700 transition-colors'
                aria-label='Twitter'
              >
                <span className='text-sm'>𝕏</span>
              </a>
              <a
                href='#'
                className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700 transition-colors'
                aria-label='Instagram'
              >
                <span className='text-sm'>IG</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function App() {
  return <AppContent />;
}

export default App;
