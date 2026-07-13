import Image from 'next/image';

export default function TheClub() {
  return (
    <section className="relative overflow-hidden bg-brand-black text-brand-cream py-10 md:py-14 lg:py-18 px-6 text-center">
      {/* Corner Patterns (Art Deco Luxury) */}
      {/* Top Left */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 w-12 h-12 md:w-16 md:h-16 text-brand-gold/60 pointer-events-none z-0 select-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M 2 2 L 80 2" />
          <path d="M 2 2 L 2 80" />
          <path d="M 12 12 L 60 12" />
          <path d="M 12 12 L 12 60" />
        </svg>
      </div>
      {/* Top Right */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 md:w-16 md:h-16 text-brand-gold/60 pointer-events-none z-0 select-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M 98 2 L 20 2" />
          <path d="M 98 2 L 98 80" />
          <path d="M 88 12 L 40 12" />
          <path d="M 88 12 L 88 60" />
        </svg>
      </div>
      {/* Bottom Left */}
      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 w-12 h-12 md:w-16 md:h-16 text-brand-gold/60 pointer-events-none z-0 select-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M 2 98 L 80 98" />
          <path d="M 2 98 L 2 20" />
          <path d="M 12 88 L 60 88" />
          <path d="M 12 88 L 12 40" />
        </svg>
      </div>
      {/* Bottom Right */}
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 md:w-16 md:h-16 text-brand-gold/60 pointer-events-none z-0 select-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M 98 98 L 20 98" />
          <path d="M 98 98 L 98 20" />
          <path d="M 88 88 L 40 88" />
          <path d="M 88 88 L 88 40" />
        </svg>
      </div>

      {/* Bottom repeating pattern (fading out upwards) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 pointer-events-none z-0 overflow-hidden opacity-45 select-none">
        <svg className="w-full h-full text-brand-gold" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bottom-pattern-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="12" cy="12" r="1.2" fill="currentColor" />
              <path d="M 12 8 L 12 16 M 8 12 L 16 12" stroke="currentColor" strokeWidth="0.85" />
            </pattern>
            <linearGradient id="bottom-fade" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="white" stopOpacity="0.9" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="bottom-mask">
              <rect width="100%" height="100%" fill="url(#bottom-fade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#bottom-pattern-grid)" mask="url(#bottom-mask)" />
        </svg>
      </div>

      <div className="w-full max-w-[2560px] mx-auto flex flex-col items-center">
        <div className="w-36 md:w-44 lg:w-48 xl:w-56 flex items-center justify-center -my-10 md:-my-14 lg:-my-16 xl:-my-18 pointer-events-none select-none">
          <Image
            src="/images/logo/cartellogo.png"
            alt="Clarté Club"
            width={500}
            height={500}
            className="w-full h-auto object-contain"
          />
        </div>
        <h2 className="relative z-10 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-wide mb-3 md:mb-4 leading-tight">
          Recognised, never announced.
        </h2>
        <p className="relative z-10 text-brand-taupe text-sm md:text-base lg:text-lg xl:text-xl mb-6 md:mb-8 max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto font-light leading-relaxed">
          What belonging means, and a way in.
        </p>
        <button className="relative z-10 px-6 md:px-8 py-2.5 md:py-3.5 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-colors text-xs font-bold tracking-[0.2em] uppercase cursor-pointer">
          Enter The Club
        </button>
      </div>
    </section>
  );
}
