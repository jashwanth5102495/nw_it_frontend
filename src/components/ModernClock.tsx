import { useEffect, useState } from 'react';

function formatTime(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const isPM = hours >= 12;
  const hour12 = hours % 12 || 12;
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${hour12}:${pad(minutes)}:${pad(seconds)} ${isPM ? 'PM' : 'AM'}`;
}

function formatDate(date: Date) {
  const opts: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };
  return new Intl.DateTimeFormat(undefined, opts).format(date);
}

export default function ModernClock() {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center select-none">
      <div className="rounded-2xl bg-black/50 text-white shadow-2xl backdrop-blur-md border border-white/10 px-5 py-4">
        <div className="text-xs text-white/80">Current Time</div>
        <div className="mt-1 font-mono text-3xl md:text-4xl tracking-widest">
          {formatTime(now)}
        </div>
        <div className="mt-2 text-sm text-white/70">
          {formatDate(now)}
        </div>
      </div>
    </div>
  );
}
