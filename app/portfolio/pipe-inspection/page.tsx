import Image from 'next/image';
import Link from 'next/link';

import { generatePortfolioMetadata } from '@/app/lib/metadata';

const slug = 'pipe-inspection';

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
        <h1 className="post-title font-extrabold leading-tight">
          Pipe Inspection
        </h1>

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
              <time dateTime="2024-10-20">Oct 20, 2024</time>
            </div>
          </div>
        </div>
      </header>

      <div className="post-content content-grid mt-8 space-y-8 px-4 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
        {/* Responsive iframe wrapper */}
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/ulPyS5f1Cr4?autoplay=1"
            title="Pipe Inspection Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p>
          <strong>Role:</strong> Computer Vision Consultant (2024)
        </p>

        <p className="!mb-2 text-xl font-bold text-white">
          Technical Highlights:
        </p>
        <ul className="!mt-0 list-inside list-disc space-y-2">
          <li>
            Developed an anomaly detection and segmentation system for sewer
            pipes;
          </li>
          <li>Scaled it to process 100 million feet of pipe data.</li>
        </ul>
        <hr className="!my-12 border-gray-700" />
      </div>
    </article>
  );
}