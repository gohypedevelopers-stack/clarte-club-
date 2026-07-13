import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Statement from '@/components/Statement';
import ProductGrid from '@/components/ProductGrid';
import FeaturedCollections from '@/components/FeaturedCollections';
import TheClub from '@/components/TheClub';
import AsSeenOn from '@/components/AsSeenOn';
import Join from '@/components/Join';
import Footer from '@/components/Footer';

const latestProducts = [
  { name: 'STYLE 01', price: '€280', image: '/images/products/product-1.png', hoverImage: '/images/products/product-2.png', blend: true },
  { name: 'STYLE 02', price: '€280', image: '/images/products/product-3.png', hoverImage: '/images/products/product-4.png', blend: true },
  { name: 'STYLE 03', price: '€280', image: '/images/products/product-5.png', hoverImage: '/images/products/product-6.png', blend: true },
  { name: 'STYLE 04', price: '€280', image: '/images/products/product-7.png', hoverImage: '/images/products/product-8.png', blend: true }
];

const wornByYouProducts = [
  { name: 'STYLE 05', price: '€280', image: '/images/products/product-9.png', hoverImage: '/images/products/product-10.png', blend: true },
  { name: 'STYLE 06', price: '€280', image: '/images/products/product-11.png', hoverImage: '/images/products/product-12.png', blend: true },
  { name: 'STYLE 07', price: '€280', image: '/images/products/product-13.png', hoverImage: '/images/products/product-14.png', blend: true },
  { name: 'STYLE 08', price: '€280', image: '/images/products/product-15.png', hoverImage: '/images/products/product-16.png', blend: true }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-cream relative">
      <Header />
      <Hero />
      <ProductGrid title="Latest Drop" products={latestProducts} />
      <FeaturedCollections />
      <ProductGrid title="Worn By You" products={wornByYouProducts} />
      <TheClub />
      <AsSeenOn />
      <Statement />
      {/* <Join /> */}
      <Footer />
    </main>
  );
}
