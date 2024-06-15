// components/CountdownTimer.js
import { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { id } from 'date-fns/locale';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formattedTargetDate = format(
    parseISO(targetDate),
    'EEEE, d MMMM yyyy',
    { locale: id }
  );

  if (!mounted) {
    return null;
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='text-lg mt-2 mb-4'>{formattedTargetDate}</div>
      <div className='flex text-white gap-2'>
        <div className='p-3 bg-blue-900 rounded-lg text-center'>
          {timeLeft.days || 0} Hari
        </div>
        <div className='p-3 bg-blue-900 rounded-lg text-center'>
          {timeLeft.hours || 0} Jam
        </div>
        <div className='p-3 bg-blue-900 rounded-lg text-center'>
          {timeLeft.minutes || 0} Menit
        </div>
        {/* <div className='p-3 bg-blue-900 rounded-lg text-center'>
          {timeLeft.seconds || 0} Detik
        </div> */}
      </div>
    </div>
  );
};

export default CountdownTimer;
