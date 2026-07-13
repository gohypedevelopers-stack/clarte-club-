"use client";

import { useState } from 'react';

export default function Join() {
  const [joined, setJoined] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setJoined(true);
  };

  return (
    <section className="py-14 px-6 bg-brand-cream text-center border-b border-brand-taupe/10">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-light tracking-[0.15em] text-brand-black uppercase mb-3">Join The Club</h2>
        <p className="text-brand-taupe mb-8 text-sm tracking-wide">No noise. Only what matters.</p>
        
        {joined ? (
          <div className="py-4 text-brand-gold font-light tracking-widest uppercase">
            Welcome to the Club.
          </div>
        ) : (
          <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-4" onSubmit={handleSubmit}>
            <input 
              type="email" 
              required
              placeholder="Email Address" 
              className="flex-1 bg-transparent border-b border-brand-black px-4 py-3 text-brand-black placeholder-brand-taupe/50 focus:outline-none focus:border-brand-gold transition-colors text-sm"
            />
            <button type="submit" className="bg-brand-black text-brand-cream px-6 py-2.5 sm:px-10 sm:py-3 text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase hover:bg-brand-gold transition-colors">
              Join
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
