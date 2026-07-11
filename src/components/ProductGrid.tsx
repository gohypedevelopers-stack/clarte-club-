import Image from 'next/image';
import { Heart, ShoppingBag } from 'lucide-react';

export interface Product {
  name: string;
  price: string;
  image: string;
  hoverImage?: string;
  colors?: string[];
  blend?: boolean;
}

interface ProductGridProps {
  title: string;
  products: Product[];
}

export default function ProductGrid({ title, products }: ProductGridProps) {
  return (
    <section className="pt-6 pb-10 px-6 md:px-12 2xl:px-24 w-full mx-auto">
      <h2 className="text-2xl font-light uppercase tracking-[0.2em] mb-6 text-center text-brand-black">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-10">
        {products.map((product, idx) => (
          <div key={idx} className="group cursor-pointer flex flex-col">
            <div className="relative aspect-[4/5] bg-[#F2EEEA] border border-brand-taupe/20 mb-4 flex items-center justify-center overflow-hidden">
              <button className="absolute top-4 right-4 text-brand-taupe hover:text-brand-gold transition-colors z-10">
                <Heart strokeWidth={1.5} size={20} />
              </button>
              <div className="absolute inset-0">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  className={`object-cover object-center transition-all duration-700 ${product.hoverImage ? 'group-hover:opacity-0' : 'group-hover:scale-105'} ${product.blend ? 'mix-blend-multiply' : ''}`}
                />
                {product.hoverImage && (
                  <Image 
                    src={product.hoverImage}
                    alt={`${product.name} worn by model`}
                    fill
                    className={`object-cover object-center opacity-0 transition-opacity duration-700 group-hover:opacity-100 ${product.blend ? 'mix-blend-multiply' : ''}`}
                  />
                )}
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-3 px-2">
              <div className="flex items-center gap-3">
                <h3 className="font-bold text-sm tracking-wide uppercase text-brand-black">{product.name}</h3>
                <span className="inline-block bg-brand-black text-brand-cream text-xs font-bold px-2 py-1 tracking-wider">
                  {product.price}
                </span>
              </div>
              <button className="text-brand-taupe hover:text-brand-black transition-colors">
                <ShoppingBag strokeWidth={1.5} size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="px-10 py-4 border border-brand-black text-brand-black font-bold text-xs tracking-widest uppercase hover:bg-brand-black hover:text-brand-cream transition-colors">
          View All
        </button>
      </div>
    </section>
  );
}
