import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-black text-brand-cream pt-16 pb-12 border-t border-brand-taupe/20">
      <div className="w-full px-6 md:px-12 2xl:px-24 mx-auto relative z-10">
        <div className="grid grid-cols-3 md:grid-cols-12 gap-8 mb-8 relative z-10">
          
          <div className="col-span-full md:col-span-3">
            <Link href="/" className="block w-36 md:w-44 -ml-4 -mt-10 -mb-6 hover:opacity-80 transition-opacity">
              <Image
                src="/images/logo/cartellogo.png"
                alt="Clarté Club"
                width={400}
                height={400}
                className="w-full h-auto object-contain pointer-events-none"
              />
            </Link>
            <p className="text-xs text-brand-taupe leading-relaxed pr-4">
              Clarte Club is the destination for premium eyewear and future fashion. 
              Elevating your lifestyle through vision.
            </p>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold text-sm uppercase mb-4 tracking-wider">Company</h4>
            <ul className="space-y-3 text-xs text-brand-taupe">
              <li><Link href="#" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-brand-gold transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-brand-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold text-sm uppercase mb-4 tracking-wider">Support</h4>
            <ul className="space-y-3 text-xs text-brand-taupe">
              <li><Link href="#" className="hover:text-brand-gold transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-brand-gold transition-colors">Shipping</Link></li>
              <li><Link href="#" className="hover:text-brand-gold transition-colors">Returns</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold text-sm uppercase mb-4 tracking-wider">Legal</h4>
            <ul className="space-y-3 text-xs text-brand-taupe">
              <li><Link href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-brand-gold transition-colors">Terms</Link></li>
              <li><Link href="#" className="hover:text-brand-gold transition-colors">Press</Link></li>
            </ul>
          </div>

          <div className="col-span-full md:col-span-3">
            <h4 className="font-bold text-sm uppercase mb-4 tracking-wider">Subscribe to the Vision</h4>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-2 text-sm bg-brand-black border border-brand-taupe text-brand-cream focus:outline-none focus:border-brand-gold placeholder:text-brand-taupe"
              />
              <button 
                type="submit" 
                className="w-full bg-brand-gold text-brand-black font-bold text-xs uppercase tracking-widest py-3 hover:bg-brand-cream transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
        
        <div className="flex flex-row justify-between items-center pt-4 border-t border-brand-taupe/20 relative z-10 w-full">
          <p className="text-[8px] text-brand-taupe uppercase tracking-widest">
            &copy; {new Date().getFullYear()} CLARTE CLUB. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-4 text-brand-taupe shrink-0">
            <Link href="#" className="hover:text-brand-gold transition-colors"><FaFacebook size={16} /></Link>
            <Link href="#" className="hover:text-brand-gold transition-colors"><FaInstagram size={16} /></Link>
            <Link href="#" className="hover:text-brand-gold transition-colors"><FaYoutube size={16} /></Link>
          </div>
        </div>

      </div>

      {/* Faded Background Text Watermark (strictly behind the bottom copyright row, centered with slight shift to avoid copyright overlap) */}
      <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none z-0 select-none overflow-hidden leading-none">
        <span className="block text-[6vw] md:text-[5vw] font-bold uppercase tracking-[0.45em] text-transparent bg-clip-text bg-gradient-to-b from-brand-cream/15 to-transparent translate-x-[3.5vw]">
          CLARTÉ CLUB
        </span>
      </div>
    </footer>
  );
}
