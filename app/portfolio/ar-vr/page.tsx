import Image from 'next/image';
import Link from 'next/link';

import { generatePortfolioMetadata } from '@/app/lib/metadata';

const slug = 'ar-vr';

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
        <h1 className="post-title font-extrabold leading-tight mb-8">AR/VR</h1>
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
        <iframe
          id="inlineFrameExample"
          title="Inline Frame Example"
          className="mx-auto w-full max-w-4xl rounded-lg"
          style={{ aspectRatio: '1000 / 500' }}
          src="https://www.youtube.com/embed/7B-rzR2avR0?autoplay=1"
          allow="autoplay"
          allowFullScreen
        ></iframe>

        <p>
          <strong>Role:</strong> Tech lead @ Apple (2018-2022)
        </p>

        <ul className="list-inside list-disc space-y-2">
          <li>
            Led a team of computer vision researchers to develop hand-tracking
            algorithms for the{' '}
            <a
              href="https://www.apple.com/apple-vision-pro/?ref=clearsignal.xyz"
              rel="noopener noreferrer"
              target="_blank"
              className="text-white hover:underline"
            >
              Apple Vision Pro
            </a>
            .
          </li>
        </ul>

        <p>
          <strong>Technical highlights:</strong>
        </p>

        <ul className="list-inside list-disc space-y-2">
          <li>
            Auto-annotation of 1 billion+ images involving pose estimation, mesh
            reconstruction and object segmentation.
          </li>
          <li>
            Semi-supervised multiview algorithms involving real and synthetic
            data.
          </li>
          <li>
            Designed and implemented 2D-to-3D lifting algorithms for real-time
            3D hand tracking.
          </li>
        </ul>

        <hr className="!my-12 border-gray-700" />
      </div>
    </article>
  );
}