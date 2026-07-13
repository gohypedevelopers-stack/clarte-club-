"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-end justify-center pb-20 overflow-hidden">
      {/* Parallax Background Container */}
      <div 
        className="absolute inset-0 h-[140%] -top-[20%] w-full will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.35}px, 0)` }}
      >
        <Image 
          src="/images/hero_bg_group.png" 
          alt="Clarte Club models walking down street at night" 
          fill 
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-black/20" /> {/* Dark Overlay */}
      </div>

      <div className="relative z-10 text-center px-4">
        <button className="bg-transparent border-0 outline-none p-0 text-brand-cream hover:text-brand-gold transition-colors duration-300 text-sm sm:text-base font-light tracking-wide underline underline-offset-8 cursor-pointer">
          Shop now
        </button>
      </div>
    </section>
  );
}
