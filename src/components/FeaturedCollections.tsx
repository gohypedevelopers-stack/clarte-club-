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
  return (
    <section className="py-10 px-6 md:px-12 2xl:px-24 w-full mx-auto">
      <h2 className="text-2xl font-light uppercase tracking-[0.2em] mb-8 text-center text-brand-black">Featured Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {collections.map((item, index) => (
          <div key={index} className="relative h-[400px] overflow-hidden group cursor-pointer">
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
              <button className="bg-transparent border border-brand-cream hover:bg-brand-cream hover:text-brand-black text-brand-cream px-6 py-3 text-xs font-bold transition-colors uppercase tracking-[0.15em] cursor-pointer">
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
