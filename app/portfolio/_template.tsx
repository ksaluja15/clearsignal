// =================================================================================================
// PORTFOLIO PAGE TEMPLATE (this page is not rendered because it starts with an "_")
// =================================================================================================
//
// HOW TO USE:
/* 1. Create a new folder in `app/portfolio/` with your project's slug (e.g., `my-post`).
   For this template do Ctrl + H and replace "my-awesome-post" with your post slug.
   2. Create a `page.tsx` file inside that new folder.
   3. Copy the entire content of this template into the new `page.tsx` file.
   4. Update the metadata slug, content, and component props as needed.
  5. Add a corresponding entry for this project in `/app/data/portfolio.ts`. (imp)*/

// COMPONENTS

/* 1.   <Image
            src="/portfolio/my-post/image.png" // Path relative to /public
            alt="A descriptive alt text for the image"
            width={800} // set it to somethiing relative to the image aspect ratio
            height={400}
        /> 
*/

/* 2. Youtube Video
        <iframe 
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Project Video"
            allow="autoplay"
        ></iframe>
*/

/* 3. <Callout>
        - Props: `emoji` (e.g., "💡").
        <Callout emoji="💡">
        A key takeaway or a special note about the project.
        </Callout>
*/  

// STEP 1: Import necessary components and data.
import Image from 'next/image';
import Link from 'next/link';

// Essential components (delete if not needed)
import { Callout } from '@/app/components/Callout';

// Metadata generation function
import { generatePortfolioMetadata } from '@/app/lib/metadata';

// STEP 2: Generate metadata for the project page.
//  Replace 'my-post' with the actual slug of your project.
//  This slug MUST match the `href` in `portfolio.ts`.
const slug = 'my-post';

export const metadata = generatePortfolioMetadata(slug);



// STEP 3: Define constants for your page.
const profile = '/kunal-saluja.jpg'; //profile image
// Add more as needed


export default function Page() {
  return (
    <article className="py-8 sm:py-16">

      <header className="content-grid px-4">
        {/* Portfolio Tag Link */}
        <div className="mb-4">
          <Link
            href="/portfolio"
            className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] hover:text-white"
          >
            portfolio
          </Link>
        </div>

        {/* Project Title */}
        <h1 className="post-title font-extrabold leading-tight">
          Project Title
        </h1>

        {/* Author Information */}
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
              {/* Update the date */}
              <time dateTime="2025-01-01">Jan 1, 2025</time>
            </div>
          </div>
        </div>
      </header>

      {/* PROJECT CONTENT */}
      <div className="post-content content-grid mt-8 space-y-8 px-4 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">

        {/* You can add a video */}
        <div className="aspect-video w-full">
            <iframe
                className="h-full w-full rounded-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Project Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>

        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          ROLE: Your Role @ Company (Date Range)
        </h3>

        <p>
          A description of the project . 
          Use <strong>bold text</strong> sometimes.
        </p>

        {/* Use a heading and list for technical details */}
        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Technical highlights:
        </h3>
        <ul className="list-inside list-disc space-y-2">
          <li>Developed a key feature using Computer Vision.</li>
          <li>Scaled a system to handle large amounts of data.</li>
          <li>Optimized a machine learning model for embedded devices.</li>
        </ul>

        {/* Use a callout for special recognition or notes */}
        <Callout emoji="🏆">
            This project won an award!
        </Callout>

        <hr className="!my-12 border-gray-700" />
        
      </div>
    </article>
  );
}