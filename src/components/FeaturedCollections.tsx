"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';

const collections = [
  {
    title: 'PERFORMANCE GOGGLES',
    subtitle: 'Premium Eyewear & Future Fashion',
    image: '/images/collection_1_1783762222207.png'
  },
  {
    title: 'URBAN SUN',
    subtitle: 'Polarized polarized Fashion',
    image: '/images/collection_2_1783762232956.png'
  }
];

export default function FeaturedCollections() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const children = container.children;
    let closestIndex = 0;
    let minDistance = Infinity;

    // Get actual computed left padding of the scroll container
    const containerStyle = window.getComputedStyle(container);
    const containerPadding = parseFloat(containerStyle.paddingLeft) || 0;

    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      if (child.tagName !== 'DIV') continue;
      
      // Calculate how close the child's snapped start position aligns with current scrollLeft
      const targetScroll = child.offsetLeft - containerPadding;
      const distance = Math.abs(targetScroll - scrollLeft);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }

    setActiveIndex(closestIndex);
  };

  const scrollToSlide = (index: number) => {
    const container = scrollRef.current;
    if (container) {
      const children = container.children;
      if (children[index]) {
        const child = children[index] as HTMLElement;
        const containerStyle = window.getComputedStyle(container);
        const containerPadding = parseFloat(containerStyle.paddingLeft) || 0;
        
        container.scrollTo({
          left: child.offsetLeft - containerPadding,
          behavior: 'smooth'
        });
        setActiveIndex(index);
      }
    }
  };

  return (
    <section className="py-10 px-6 md:px-12 2xl:px-24 w-full mx-auto overflow-hidden">
      <h2 className="text-base sm:text-xl md:text-2xl font-light uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-8 text-center text-brand-black">Featured Collections</h2>
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="relative flex flex-row md:grid md:grid-cols-2 gap-4 md:gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scrollbar-none pb-4 md:pb-0 px-6 -mx-6 md:px-0 md:mx-0 scroll-pl-6 md:scroll-pl-0"
      >
        {collections.map((item, index) => (
          <div key={index} className="relative w-[78vw] md:w-full h-[400px] shrink-0 snap-start overflow-hidden group cursor-pointer">
            <Image 
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-brand-cream w-full">
              <h3 className="text-xl font-light tracking-wide uppercase mb-1">{item.title}</h3>
              <p className="text-xs text-brand-cream/80 mb-5 tracking-wide font-light">{item.subtitle}</p>
              <button className="bg-transparent border border-brand-cream hover:bg-brand-cream hover:text-brand-black text-brand-cream px-4 py-2 md:px-6 md:py-3 text-[10px] md:text-xs font-bold transition-colors uppercase tracking-[0.12em] md:tracking-[0.15em] cursor-pointer">
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators for mobile */}
      <div className="flex justify-center space-x-2.5 mt-6 md:hidden">
        {collections.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              activeIndex === index ? 'bg-brand-black w-6' : 'bg-brand-taupe/30 w-1.5'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
