import Image from 'next/image';
import Link from 'next/link';

import { generatePortfolioMetadata } from '@/app/lib/metadata';
const slug = 'self-driving-farm-vehicles';

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
          Self-Driving
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
              <time dateTime="2024-10-16">Oct 16, 2024</time>
              <span className="mx-1">•</span>
              <span>1 min read</span>
            </div>
          </div>
        </div>
      </header>

      <div className="post-content content-grid mt-8 space-y-8 px-4 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
        <div className="w-full">
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/5McwIkLlpoM?autoplay=1"
            title="Self-Driving Farm Vechicles"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>

        <p>
          <strong>Role:</strong> Director, Computer Vision @{' '}
          <strong>Bonsai Robotics (2022-2024)</strong>
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            Balanced individual contributions (60%) and management
            responsibilities (40%) while leading a team of 5 computer vision
            and data scientists.
          </li>
        </ul>

        <p>
          <strong>Technical highlights:</strong>
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            Deep learning models involving multiple heads for tasks such as
            object detection and segmentation to name a few.
          </li>
          <li>Optimized models on embedded platforms</li>
          <li>Developed 3D Scene understanding and localization algorithms.</li>
          <li>
            Data platform for labeling and curating millions of images.
          </li>
        </ul>
        <hr className="border-gray-700" />
      </div>
    </article>
  );
}