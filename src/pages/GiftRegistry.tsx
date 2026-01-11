import { Heart, Gift, Copy, Check, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export function GiftRegistry() {
  const { currentColor } = useTheme();
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const bankDetails = [
    {
      id: 'bank1',
      bankName: 'Monie Point',
      accountNumber: '5974820558',
      accountName: 'Favour Chioma',
    },
    {
      id: 'bank2',
      bankName: 'Opay',
      accountNumber: '6106134578',
      accountName: 'Favour Chioma',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50'>
      {/* Decorative elements */}
      <motion.div
        className={`fixed top-20 left-10 ${currentColor.text} opacity-30`}
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <Heart className='w-16 h-16' fill='currentColor' />
      </motion.div>
      <motion.div
        className={`fixed bottom-20 right-10 ${currentColor.text} opacity-30`}
        animate={{ rotate: -360, scale: [1, 1.3, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        <Heart className='w-20 h-20' fill='currentColor' />
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-rose-100 shadow-sm'
      >
        <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
          <motion.div
            className='flex items-center gap-2'
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart
                className={`w-5 h-5 ${currentColor.text}`}
                fill='currentColor'
              />
            </motion.div>
            <span className='font-serif text-xl bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent'>
              Ifesinachi & Chioma
            </span>
          </motion.div>
          <motion.a
            href='/'
            className={`text-sm font-medium text-gray-600 ${currentColor.hover.replace(
              'bg',
              'text'
            )} transition-colors flex items-center gap-2`}
            whileHover={{ x: -5 }}
          >
            ← Back Home
          </motion.a>
        </div>
      </motion.nav>

      <main className='pt-24 pb-20 px-6'>
        <div className='max-w-3xl mx-auto'>
          <motion.div
            className='text-center mb-12'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className='w-20 h-20 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg'
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Gift className={`w-10 h-10 ${currentColor.text}`} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className='font-serif text-4xl md:text-5xl bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent mb-4'>
                Gift Registry
              </h1>
              <div className='flex items-center justify-center gap-2 mb-4'>
                <Sparkles className={`w-4 h-4 ${currentColor.text}`} />
                <span className={`${currentColor.text} text-sm font-medium`}>
                  Celebrating Our Love
                </span>
                <Sparkles className={`w-4 h-4 ${currentColor.text}`} />
              </div>
            </motion.div>

            <motion.p
              className='text-gray-600 max-w-xl mx-auto leading-relaxed'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Your presence at our wedding is the greatest gift of all. However,
              if you wish to honour us with a gift, a cash gift would be highly
              appreciated to help us start our new life together.
            </motion.p>
          </motion.div>

          <div className='grid md:grid-cols-2 gap-6'>
            {bankDetails.map((bank, index) => (
              <motion.div
                key={bank.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.2, type: 'spring' }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className='bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-rose-100 hover:shadow-xl transition-all relative overflow-hidden group'
              >
                <motion.div
                  className={`absolute top-0 left-0 w-full h-1.5 ${currentColor.bg}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                />

                <motion.div
                  className='absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full opacity-20'
                  animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity }}
                />

                <h3
                  className={`text-sm font-medium ${currentColor.text} uppercase tracking-wider mb-6 flex items-center gap-2`}
                >
                  <Heart className='w-4 h-4' fill='currentColor' />
                  Bank Transfer
                </h3>

                <div className='space-y-5 relative z-10'>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <p className='text-xs text-gray-400 mb-1 font-medium'>
                      Bank Name
                    </p>
                    <p className='font-semibold text-gray-900'>
                      {bank.bankName}
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <p className='text-xs text-gray-400 mb-1 font-medium'>
                      Account Name
                    </p>
                    <p className='font-semibold text-gray-900'>
                      {bank.accountName}
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <p className='text-xs text-gray-400 mb-1 font-medium'>
                      Account Number
                    </p>
                    <div className='flex items-center gap-3'>
                      <p className='font-mono text-2xl font-bold text-gray-900 tracking-wider'>
                        {bank.accountNumber}
                      </p>
                      <motion.button
                        onClick={() => handleCopy(bank.accountNumber, bank.id)}
                        className={`p-2.5 ${currentColor.hover.replace(
                          'bg',
                          'hover:bg'
                        )} rounded-full transition-colors`}
                        title='Copy Account Number'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <motion.div
                          initial={false}
                          animate={{ rotate: copied === bank.id ? 360 : 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          {copied === bank.id ? (
                            <Check className='w-5 h-5 text-green-500' />
                          ) : (
                            <Copy className='w-5 h-5 text-gray-400' />
                          )}
                        </motion.div>
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className='mt-16 text-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              className='inline-block bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-rose-100'
              whileHover={{ scale: 1.02 }}
            >
              <Sparkles
                className={`w-6 h-6 ${currentColor.text} mx-auto mb-4`}
              />
              <p className='text-sm text-gray-600 italic leading-relaxed'>
                "God loves a cheerful giver. And God is able to bless you
                abundantly..." <br />
                <span
                  className={`not-italic font-semibold ${currentColor.text} mt-2 inline-block`}
                >
                  - 2 Corinthians 9:7-8
                </span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
