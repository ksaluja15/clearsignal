import Image from 'next/image';
import Link from 'next/link';

import { generatePortfolioMetadata } from '@/app/lib/metadata';

const slug = 'adtech';

export const metadata = generatePortfolioMetadata(slug);

const profile = '/kunal-saluja.jpg';

export default function Page() {
  return (
    <article className="py-8 sm:py-16">
      <header className="content-grid px-4">
        <div className="mb-4">
          <Link
            href="/tag/portfolio"
            className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] hover:text-white"
          >
            portfolio
          </Link>
        </div>
        <h1 className="post-title font-extrabold leading-tight">AdTech</h1>

        <div className="mt-8 flex items-center gap-4">
          <Image
            src={profile}
            alt="Kunal Saluja"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full border-2 border-gray-700 bg-gray-800 object-cover"
          />
          <div>
            <h4 className="font-bold text-white">Kunal Saluja</h4>
            <div className="text-sm text-[var(--color-text-secondary)]">
              <time dateTime="2018-01-01">Jan 1, 2018</time>
            </div>
          </div>
        </div>
      </header>

      <div className="post-content content-grid mt-8 space-y-8 px-4 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
        <iframe
          title="Inline Frame Example"
          className="aspect-video w-full"
          src="https://www.youtube.com/embed/lO_w7uwWWbM?autoplay=1"
          allow="autoplay"
        ></iframe>

        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          ROLE: Computer Vision Scientist @ Gumgum (2016-2018)
        </h3>
        <p>
          I like to call it my "<strong>Accelerated PHD</strong>". My role
          involved building CV detectors utilizing the SOTA research in the
          field.
        </p>

        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Technical highlights:
        </h3>
        <ul className="list-inside list-disc space-y-2">
          <li>
            Built context-driven ad placement system by analyzing images on
            publisher websites
          </li>
          <li>Trained multiple object detectors for brand logos at scale</li>
          <li>
            Trained an object detector for Car (Make & Model) detection
          </li>
          <li>
            Built a QT application for auto-annotation using detection+tracking
          </li>
        </ul>
        <hr className="!mt-12 border-gray-700" />
      </div>
    </article>
  );
}