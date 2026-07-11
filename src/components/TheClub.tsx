import Image from 'next/image';

export default function TheClub() {
  return (
    <section className="bg-brand-black text-brand-cream py-10 md:py-14 lg:py-18 px-6 text-center">
      <div className="w-full max-w-[2560px] mx-auto flex flex-col items-center">
        <div className="w-36 md:w-44 lg:w-48 xl:w-56 flex items-center justify-center -my-10 md:-my-14 lg:-my-16 xl:-my-18 pointer-events-none">
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
