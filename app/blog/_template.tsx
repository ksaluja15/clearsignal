/* =================================================================================================
  BLOG POST TEMPLATE (this page is not rendered because it starts with an "_")
  =================================================================================================
*/

/*
  HOW TO USE:
  1. Create a new folder in `app/blog/` with your post's slug (e.g., `my-post`). 
     For this template do Ctrl + H and replace my-post with your post slug.
  2. Create a `page.tsx` file inside that new folder.
  3. Copy the entire content of this template into the new `page.tsx` file.
  4. Update the metadata, content, and component props as described in the comments below.
  5. Add a corresponding entry for this post in `/app/data/posts.ts`. (imp)
*/

/*
  COMPONENTS

  Here are the common components you can use within your blog post's content area.
*/

/*  <p>: For paragraphs.
    <h2>, <h3>: For section headings.
    <ul>, <ol>, <li>: For lists.
    <a>: For hyperlinks.
    <strong>, <em>: For bold and italic text.
    <hr>: For a horizontal rule/divider.
*/

/* --- Custom Components --- */

/* 1. <Image
        src="/blog/my-post/my-image.png" /* Path relative to /public 
        alt="A descriptive alt text for the image"
        width={800}
        height={400}
        className="rounded-lg object-contain"
    />
*/

/* 2. <CodeBlock>
      Props*: `language` (e.g., "python") for syntax highlighting. this is optional
       const myCode = `function hello() { console.log("Hello, World!"); }`;
       <CodeBlock language="javascript">{myCode}</CodeBlock>
*/

/* 3. <Callout emoji="💡">
        This is prob an important tip that readers better pay attention.
      </Callout>
*/

/* 4  <Link href="/about" className="text-blue-400 hover:underline">
        About Me
      </Link>
*/

// Don't need to mess with these


/* 6. <RelatedPosts>
      Usage: Displays a section of related posts.
      Props: `allPosts`, `currentPostSlug`.
*/


/* STEP 1: Import necessary components and data. */
import Image from 'next/image';
import Link from 'next/link';

/* Essential components for blog posts (delete if not needed) */
import { Callout } from '@/app/components/Callout';
import CodeBlock from '@/app/components/CodeBlock';
import { RelatedPosts } from '@/app/components/RelatedPosts';
import { postsData } from '@/app/data/posts';



/* Metadata generation function */
import { generatePostMetadata } from '@/app/lib/metadata';

const slug = 'my-post';


/* STEP 2: Generate metadata for the post.
   Replace 'my-post' with the actual slug of your post.
   This slug MUST match the folder name and the slug in `posts.ts`.
*/
export const metadata = generatePostMetadata(slug);


/* STEP 3: Define constants for your post. */
const profile = '/kunal-saluja.jpg'; /* Author profile image */
const headerImage = '/blog/my-post/header.png'; /* Main image for the post */
/* Add more as needed */


export default function Page() {
  /* Define any code snippets you want to display. */
  const exampleCodeSnippet = `
    import React from 'react';

    function HelloWorld() {
      return <h1>Hello, World!</h1>;
    }
  `;

  return (
    /* The main article container */
    <article className="py-8 sm:py-16">

      <header className="content-grid px-4">
        {/* Tag link */}
        <div className="mb-4">
          <Link
            href="/tag/blog" /* e.g., /tag/papers, /tag/code */
            className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] hover:text-white"
          >
            Blog {/* e.g., Papers, Code */}
          </Link>
        </div>

        {/* Post Title */}
        <h1 className="post-title font-extrabold leading-tight">
          My Blog
        </h1>

        {/* Post Subtitle or Excerpt */}
        <p className="mt-4 text-xl text-[var(--color-text-secondary)] sm:text-2xl">
          An engaging summary of what this post is about.
        </p>

        {/* Author Info */}
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
              {/* Update the date and read time */}
              <time dateTime="2025-07-11">July 11, 2025</time>
              <span className="mx-1">•</span>
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </header>


      <div className="post-content content-grid mt-8 space-y-8 px-4 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">

        <p>
          This is the first paragraph of your blog post. You can introduce the
          topic and set the stage for what you're about to discuss. Feel free
          to use <strong>bold text</strong> or <em>italic text</em> to emphasize
          points. You can also add links like this one to{' '}
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            external sites
          </a>.
        </p>

        {/* Heading */}
        <h2 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          A Section About a Key Concept
        </h2>

        <p>
          Here you can elaborate on a specific point. You can include lists to
          break down information:
        </p>

        {/*  List */}
        <ul className="list-inside list-disc space-y-2">
          <li>First item</li>
          <li>Second item.</li>
          <li>Last Item</li>
        </ul>

        {/* Image Component */}
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={headerImage}
            alt="A descriptive alt text for this specific image"
            width={1024}
            height={512}
            className="rounded-lg object-contain"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-400">
            An optional caption for the image.
          </figcaption>
        </figure>


        {/* Callout Component */}
        <Callout emoji="💡">
          Use callouts to share tips
        </Callout>

        {/* CodeBlock Component */}
        <h3 className="!mt-12 text-xl font-bold text-white md:text-2xl">
          Displaying Code
        </h3>
        <p>
          You can display code snippets w syntax highlighting using the
          `CodeBlock` component.
        </p>
        <CodeBlock language="tsx">{exampleCodeSnippet}</CodeBlock>

        <p>
          And here is the concluding paragraph. maybe
        </p>
        <hr className="!my-4 border-gray-700" /> {/*bottom line*/}
      </div>


      {/* RELATED POSTS SECTION (Do not change this section)*/}
      <RelatedPosts allPosts={postsData} currentPostSlug={slug} />
    </article>
  );
}