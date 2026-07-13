import Image from 'next/image';
import { Heart, MessageCircle, Bookmark } from 'lucide-react';

const posts = [
  {
    handle: 'street_style',
    image: '/images/social_1_1783762293154.png',
    caption: 'Loving my new shades from @clarteclub',
    time: '2 hours ago'
  },
  {
    handle: 'street_style',
    image: '/images/social_2_1783762311072.png',
    caption: 'Loving my new shades from @clarteclub',
    time: '10 hours ago'
  },
  {
    handle: 'street_style',
    image: '/images/social_3_1783762322063.png',
    caption: 'Loving my new shades from @clarteclub',
    time: '20 hours ago'
  },
  {
    handle: 'street_style',
    image: '/images/social_4_1783762332901.png',
    caption: 'Loving my new shades from @clarteclub',
    time: '23 hours ago'
  }
];

const duplicatedPosts = [...posts, ...posts, ...posts, ...posts];

export default function AsSeenOn() {
  return (
    <section className="bg-brand-black py-10 overflow-hidden">
      <div className="w-full px-6 md:px-12 2xl:px-24 mx-auto text-center mb-10">
        <h2 className="text-base sm:text-xl md:text-2xl font-light uppercase tracking-[0.15em] sm:tracking-[0.2em] text-brand-cream">As Seen On</h2>
      </div>
      <div className="w-full relative">
        <div className="flex w-max animate-marquee space-x-4 px-4">
          {duplicatedPosts.map((post, idx) => (
            <div key={idx} className="bg-brand-cream text-brand-black p-3 cursor-pointer group w-[280px] sm:w-[320px] shrink-0 border border-brand-taupe/10">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-brand-taupe overflow-hidden relative">
                  <Image src={post.image} alt="avatar" fill className="object-cover" />
                </div>
                <span className="text-xs font-bold">{post.handle}</span>
              </div>
              <div className="relative aspect-square overflow-hidden mb-3">
                <Image 
                  src={post.image}
                  alt="social post"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-center mb-2 text-brand-black">
                <div className="flex space-x-3">
                  <Heart size={20} className="hover:text-brand-gold transition-colors" />
                  <MessageCircle size={20} className="hover:text-brand-gold transition-colors" />
                </div>
                <Bookmark size={20} className="hover:text-brand-gold transition-colors" />
              </div>
              <p className="text-xs mb-1">
                <span className="font-bold">{post.handle}</span> {post.caption}
              </p>
              <p className="text-[10px] text-brand-taupe uppercase">{post.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
