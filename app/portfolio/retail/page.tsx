import Image from 'next/image';
import Link from 'next/link';
import { Callout } from '@/app/components/Callout'; 

import { generatePortfolioMetadata } from '@/app/lib/metadata';
const slug = 'retail';

export const metadata = generatePortfolioMetadata(slug);

const image1 = '/portfolio/retail/Screenshot-from-2024-10-16-20-33-42.png';
const image2 = '/portfolio/retail/TV.jpg';
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
          Retail Monitoring Sytems
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
              <span className="mx-1">•</span>
              <span>1 min read</span>
            </div>
          </div>
        </div>
      </header>

      <div className="post-content content-grid mt-8 space-y-8 px-4 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image1}
            alt="Object detection of multiple people in a retail environment"
            width={1315}
            height={785}
            className="rounded-lg object-contain"
          />
        </figure>

        <p>
          <strong className="font-bold text-white">Role:</strong> Computer
          Vision Consultant @ Tractor Supply Company (2024)
        </p>

        <p>
          <strong className="font-bold text-white">
            Technical highlights:
          </strong>
        </p>

        <ul className="list-inside list-disc space-y-2">
          <li>
            Scaled YOLO-based object detection+tracking systems to monitor
            personnel across 3000 stores.
          </li>
          <li>
            (Ongoing) Training Diffusion-based Image generation models for
            product advertisements.
          </li>
        </ul>

        <Callout emoji="💡">
          TractorVision project mentioned in the TSC magazine
        </Callout>

        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image2}
            alt="TractorVision project mentioned in TSC magazine"
            width={456}
            height={1046}
            className="rounded-lg object-contain"
          />
        </figure>

        <hr className="!mt-12 border-gray-700" />
      </div>
    </article>
  );
}