import Image from 'next/image';
import { Quote } from 'lucide-react';
import { TypingAnimation } from '@/components/ui/typing-animation';

export default function Statement() {
  return (
    <section className="relative py-8 md:py-12 lg:py-16 bg-brand-cream border-b border-brand-taupe/10 overflow-hidden">
      <div className="w-full px-6 md:px-12 2xl:px-24 mx-auto max-w-[2560px]">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full gap-4 md:gap-8 lg:gap-16">
          
          {/* Left Image */}
          <div className="hidden md:block w-24 md:w-32 lg:w-48 xl:w-56 shrink-0 relative aspect-[3/4] mix-blend-multiply opacity-70 pointer-events-none self-start mt-0 lg:mt-8">
            <Image 
              src="/images/unisex_model_male.png" 
              alt="Model Left" 
              fill 
              className="object-cover object-top grayscale"
            />
          </div>

          {/* Text Content */}
          <div className="relative z-10 flex-1 flex flex-col items-center w-full max-w-4xl px-2 lg:px-8 py-8 md:py-0">
             <div className="relative w-full text-center">
               <Quote className="absolute -top-10 -left-2 md:-top-16 md:-left-8 w-8 h-8 md:w-12 md:h-12 text-brand-gold opacity-60 rotate-180" strokeWidth={1} />
               
               <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-[0.15em] lg:tracking-[0.2em] uppercase leading-loose text-center inline-block">
                 <TypingAnimation 
                   as="span"
                   text="Some people are seen." 
                   className="block mb-2 md:mb-4 text-brand-black drop-shadow-none"
                   duration={100}
                 />
                 <TypingAnimation 
                   as="span"
                   text="Others are remembered." 
                   className="block text-brand-taupe drop-shadow-none"
                   duration={100}
                 />
               </h2>

               <Quote className="absolute -bottom-10 -right-2 md:-bottom-16 md:-right-8 w-8 h-8 md:w-12 md:h-12 text-brand-gold opacity-60" strokeWidth={1} />
             </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block w-24 md:w-32 lg:w-48 xl:w-56 shrink-0 relative aspect-[3/4] mix-blend-multiply opacity-70 pointer-events-none self-end mb-0 lg:mb-8">
            <Image 
              src="/images/unisex_model_female.png" 
              alt="Model Right" 
              fill 
              className="object-cover object-top grayscale"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
