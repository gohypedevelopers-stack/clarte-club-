import Image from 'next/image';
import { Quote } from 'lucide-react';
import { TypingAnimation } from '@/components/ui/typing-animation';

export default function Statement() {
  return (
    <section className="relative py-8 md:py-12 lg:py-16 bg-brand-cream border-b border-brand-taupe/10 overflow-hidden">
      <div className="w-full px-6 md:px-12 2xl:px-24 mx-auto max-w-[2560px]">
        <div className="flex flex-row items-center justify-between w-full gap-2 md:gap-8 lg:gap-16">
          
          {/* Left Image */}
          <div className="block w-12 sm:w-24 md:w-32 lg:w-48 xl:w-56 shrink-0 relative aspect-[3/4] mix-blend-multiply opacity-70 pointer-events-none self-start -translate-y-3 sm:-translate-y-6 lg:-translate-y-10">
            <Image 
              src="/images/unisex_model_male_new.png" 
              alt="Model Left" 
              fill 
              className="object-cover object-top grayscale"
            />
          </div>

          {/* Text Content */}
          <div className="relative z-10 flex-1 flex flex-col items-center w-full max-w-4xl px-2 lg:px-8 pt-2 pb-8 md:py-0">
             <div className="relative w-full text-center">
               <Quote className="absolute -top-6 -left-1 md:-top-16 md:-left-8 w-4 h-4 md:w-12 md:h-12 text-brand-gold opacity-60 rotate-180" strokeWidth={1} />
               
               <h2 className="font-light tracking-[0.1em] sm:tracking-[0.15em] lg:tracking-[0.2em] uppercase text-center inline-block">
                 <TypingAnimation 
                   as="span"
                   text="Some people are seen." 
                   className="block mb-2 md:mb-4 text-brand-black drop-shadow-none text-[15px] sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl leading-normal sm:leading-loose"
                   duration={100}
                 />
                 <TypingAnimation 
                   as="span"
                   text="Others are remembered." 
                   className="block text-brand-taupe drop-shadow-none text-[15px] sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl leading-normal sm:leading-loose"
                   duration={100}
                 />
               </h2>

               <Quote className="absolute -bottom-6 -right-1 md:-bottom-16 md:-right-8 w-4 h-4 md:w-12 md:h-12 text-brand-gold opacity-60" strokeWidth={1} />
             </div>
          </div>

          {/* Right Image */}
          <div className="block w-12 sm:w-24 md:w-32 lg:w-48 xl:w-56 shrink-0 relative aspect-[3/4] mix-blend-multiply opacity-70 pointer-events-none self-end translate-y-3 sm:translate-y-6 lg:translate-y-10">
            <Image 
              src="/images/unisex_model_female_new.png" 
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
