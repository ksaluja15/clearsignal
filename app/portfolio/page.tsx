//portfolio landing page
import Image from 'next/image';
import Link from 'next/link';
import { portfolioItems } from '@/app/data/portfolio';

const newHeaderImage = '/portfolio/terminator_T1000_darker_background.png';

export default function Page() {
  return (
    <main id="site-main" className="bg-[#111315]">
      <section
        className="relative flex items-center justify-center overflow-hidden py-16 lg:aspect-[3/1] lg:py-0"
      >
        <Image
          src={newHeaderImage}
          alt="Endoskeleton with glowing red eyes"
          fill
          className="object-cover"
          priority
        />
        <h1
          className="relative z-10 text-6xl font-bold text-white md:text-7xl"
          style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}
        >
          Portfolio
        </h1>
      </section>

      <section className="py-16"> 
        <div className="mx-auto max-w-6xl p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4">
            {portfolioItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative flex transform-gpu items-end overflow-hidden rounded-2xl transition-all duration-300 ease-in-out ${item.gridClass} ${item.aspectClass}`}
              >
                <Image
                  src={item.imageSrc}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-115"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-center text-4xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}