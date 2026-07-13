import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-end justify-center pb-32 overflow-hidden">
      <Image 
        src="/images/hero_bg_group.png" 
        alt="Clarte Club models walking down street at night" 
        fill 
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-brand-black/40" /> {/* Dark Overlay */}
      <div className="relative z-10 text-center text-brand-cream px-4">
        <h1 className="text-lg sm:text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-8 drop-shadow-lg">
          Made with intention.
        </h1>
        <button className="px-6 py-3 sm:px-10 sm:py-4 bg-transparent border border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-black transition-colors duration-300 text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase">
          The Collection
        </button>
      </div>
    </section>
  );
}
