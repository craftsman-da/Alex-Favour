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
    seconds: 0
  });

  useEffect(() => {
    // Set your wedding date here (January 2, 2026)
    const weddingDate = new Date('2026-01-02T00:00:00').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8 justify-center">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 min-w-[80px] md:min-w-[100px] text-center shadow-lg">
        <div className="text-3xl md:text-5xl font-bold text-gray-800">{timeLeft.days}</div>
        <div className="text-xs md:text-sm text-gray-600 mt-1 uppercase tracking-wider">Days</div>
      </div>
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 min-w-[80px] md:min-w-[100px] text-center shadow-lg">
        <div className="text-3xl md:text-5xl font-bold text-gray-800">{timeLeft.hours}</div>
        <div className="text-xs md:text-sm text-gray-600 mt-1 uppercase tracking-wider">Hours</div>
      </div>
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 min-w-[80px] md:min-w-[100px] text-center shadow-lg">
        <div className="text-3xl md:text-5xl font-bold text-gray-800">{timeLeft.minutes}</div>
        <div className="text-xs md:text-sm text-gray-600 mt-1 uppercase tracking-wider">Minutes</div>
      </div>
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 min-w-[80px] md:min-w-[100px] text-center shadow-lg">
        <div className="text-3xl md:text-5xl font-bold text-gray-800">{timeLeft.seconds}</div>
        <div className="text-xs md:text-sm text-gray-600 mt-1 uppercase tracking-wider">Seconds</div>
      </div>
    </div>
  );
}
