'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search, User, ShoppingCart } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 text-brand-cream transition-all duration-300 ${isScrolled ? 'bg-brand-black/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="w-full px-6 md:px-12 2xl:px-24 flex items-center justify-between mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center -mt-7 -mb-11">
          <Image 
            src="/images/logo/cartellogo.png" 
            alt="Clarté Club Logo" 
            width={300} 
            height={150} 
            className="object-contain h-22 md:h-26 w-auto transition-all duration-300" 
            priority
          />
        </Link>
        
        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-xs font-semibold tracking-[0.2em]">
          <Link href="/men" className="hover:text-brand-gold transition-colors">MEN</Link>
          <Link href="/women" className="hover:text-brand-gold transition-colors">WOMEN</Link>
          <Link href="/lifestyle" className="hover:text-brand-gold transition-colors">LIFESTYLE</Link>
          <Link href="/collections" className="hover:text-brand-gold transition-colors">COLLECTIONS</Link>
        </nav>
        
        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button className="hover:text-brand-gold transition-colors"><Search size={20} /></button>
          <button className="hover:text-brand-gold transition-colors"><User size={20} /></button>
          <button className="hover:text-brand-gold transition-colors"><ShoppingCart size={20} /></button>
        </div>
      </div>
    </header>
  );
}
