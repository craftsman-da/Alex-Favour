import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set your wedding date here (January 17, 2026)
    const weddingDate = new Date('2026-01-17T00:00:00').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='flex gap-2 sm:gap-3 md:gap-6 lg:gap-8 justify-center px-4 w-full max-w-2xl mx-auto'>
      <div className='bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 min-w-[60px] sm:min-w-[70px] md:min-w-[90px] lg:min-w-[100px] text-center shadow-lg flex-1 max-w-[80px] sm:max-w-[90px] md:max-w-none'>
        <div className='text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800'>
          {timeLeft.days}
        </div>
        <div className='text-[10px] sm:text-xs md:text-sm text-gray-600 mt-0.5 sm:mt-1 uppercase tracking-wider'>
          Days
        </div>
      </div>
      <div className='bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 min-w-[60px] sm:min-w-[70px] md:min-w-[90px] lg:min-w-[100px] text-center shadow-lg flex-1 max-w-[80px] sm:max-w-[90px] md:max-w-none'>
        <div className='text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800'>
          {timeLeft.hours}
        </div>
        <div className='text-[10px] sm:text-xs md:text-sm text-gray-600 mt-0.5 sm:mt-1 uppercase tracking-wider'>
          Hours
        </div>
      </div>
      <div className='bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 min-w-[60px] sm:min-w-[70px] md:min-w-[90px] lg:min-w-[100px] text-center shadow-lg flex-1 max-w-[80px] sm:max-w-[90px] md:max-w-none'>
        <div className='text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800'>
          {timeLeft.minutes}
        </div>
        <div className='text-[10px] sm:text-xs md:text-sm text-gray-600 mt-0.5 sm:mt-1 uppercase tracking-wider'>
          Mins
        </div>
      </div>
      <div className='bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 min-w-[60px] sm:min-w-[70px] md:min-w-[90px] lg:min-w-[100px] text-center shadow-lg flex-1 max-w-[80px] sm:max-w-[90px] md:max-w-none'>
        <div className='text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800'>
          {timeLeft.seconds}
        </div>
        <div className='text-[10px] sm:text-xs md:text-sm text-gray-600 mt-0.5 sm:mt-1 uppercase tracking-wider'>
          Secs
        </div>
      </div>
    </div>
  );
}
