import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-cream pt-16 pb-8 border-t border-brand-taupe/20">
      <div className="w-full px-6 md:px-12 2xl:px-24 mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-12 gap-8 mb-12">
          
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
            <p className="text-xs text-brand-taupe leading-relaxed pr-4 relative z-10">
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
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-taupe/20">
          <p className="text-[10px] text-brand-taupe uppercase tracking-widest mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CLARTE CLUB. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-4 text-brand-taupe">
            <Link href="#" className="hover:text-brand-gold transition-colors"><FaFacebook size={16} /></Link>
            <Link href="#" className="hover:text-brand-gold transition-colors"><FaInstagram size={16} /></Link>
            <Link href="#" className="hover:text-brand-gold transition-colors"><FaYoutube size={16} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
