import { useEffect, useRef, useState } from 'react';

export default function ModuleCard({ title, desc, bgImage }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`snap-start relative min-h-[80vh] w-full overflow-hidden rounded-2xl shadow-2xl bg-[#161b22] bg-center bg-cover bg-fixed transition-all duration-700 ${
        inView ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-[0.98] translate-y-6'
      }`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

      {/* Content overlay with subtle glassmorphism */}
      <div className="absolute bottom-8 left-8 right-8 z-10">
        <div className="bg-white/5 backdrop-blur-md ring-1 ring-white/10 rounded-xl p-6 md:p-8">
          <h3 className="text-2xl md:text-4xl font-bold text-white">
            {title}
          </h3>
          <p className="mt-3 text-sm md:text-base text-gray-200">{desc}</p>
          <div className="mt-4 h-px w-24 bg-cyan-400/70" />
        </div>
      </div>

      {/* Decorative cyan accent border */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: '0 0 0 1px rgba(0,255,255,0.15) inset' }} />
    </section>
  );
}