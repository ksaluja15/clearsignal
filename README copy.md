# ClearSignal Blog + Portfolio

## Table of Contents

- [ClearSignal Blog + Portfolio](#clearsignal-blog--portfolio)
  - [Table of Contents](#table-of-contents)
  - [1. Tech Stack](#1-tech-stack)
  - [2. Running the App](#2-running-the-app)
  - [3. Content Management](#3-content-management)
    - [How to Add a New Blog Post](#how-to-add-a-new-blog-post)
  - [Easy Way](#easy-way)
  - [Manually](#manually)
      - [Step 1: Add the Post Data](#step-1-add-the-post-data)
      - [Step 2: Create the Post Page](#step-2-create-the-post-page)
      - [Step 3: Add Images](#step-3-add-images)
      - [Step 4: Rebuild the Search Index](#step-4-rebuild-the-search-index)
    - [How to Add a New Portfolio Item](#how-to-add-a-new-portfolio-item)
  - [](#)
  - [Easy Way](#easy-way-1)
  - [Manual](#manual)
      - [Step 1: Add the Portfolio Data](#step-1-add-the-portfolio-data)
      - [Step 2: Create the Portfolio Page](#step-2-create-the-portfolio-page)
  - [4. Project Structure \& Component Guide](#4-project-structure--component-guide)
    - [Core App Files (`/app`)](#core-app-files-app)
    - [Components (`/app/components`)](#components-appcomponents)
    - [Data (`/app/data`)](#data-appdata)
    - [Library (`/app/lib`)](#library-applib)
    - [Public Assets (`/public`)](#public-assets-public)
  - [5. Key Features Deep Dive](#5-key-features-deep-dive)
    - [Full-Text Search (Fuse.js)](#full-text-search-fusejs)
    - [Comments (Disqus)](#comments-disqus)
    - [Math Equations (MathJax)](#math-equations-mathjax)
    - [Code Syntax Highlighting](#code-syntax-highlighting)
  - [6. Styling](#6-styling)
  - [7. Building for Production](#7-building-for-production)
  - [8. Hosting on Vercel](#8-hosting-on-vercel)

---

## 1. Tech Stack

*   **Framework**: Next.js 15 (App Router)
*   **Styling**: Tailwind CSS 4
*   **Language**: TypeScript
*   **Search**: Fuse.js
*   **Comments**: Disqus-React
*   **Code Highlighting**: `react-syntax-highlighter`
*   **Math Rendering**: MathJax

---

## 2. Running the App

1.  **Clone the repo:**
    ```bash
    git clone https://github.com/hypixelstore/clearsignal-blog
    cd clearsignal-blog
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    #or
    npm install
    ```

3.  **Run the development server:**
    ```bash
    bun run dev
    #or
    npm run dev
    ```
    The site should be available at `http://localhost:3000`.

---

## 3. Content Management

All post and portfolio metadata is stored in TypeScript files in the `/app/data` directory.

### How to Add a New Blog Post
## Easy Way
- Copy and follow `_template.tsx` in `/app/blog/`, paste components from the top as needed!
- Make an entry in `app/data/posts.ts` with the same slug as the file name you created

## Manually
#### Step 1: Add the Post Data

Open `app/data/posts.ts` and add a new `Post` object to the `postsData` array.

**Post Object Fields:**

| Field | Type | Description | Example |
| :--- | :--- | :--- | :--- |
| `slug` | `string` | The unique URL-friendly identifier for the post. This must match the page file name. | `"my-new-post"` |
| `imageUrl` | `string` | Path to the post's main image, relative to the `public` directory. | `"/index/new-post-image.png"` |
| `alt` | `string` | Alt text for the image, used for accessibility and SEO. | `"A description of the new post image."` |
| `tags` | `string[]` | An array of tags. The first tag is displayed on the post card. | `["blog", "code", "nextjs"]` |
| `featured` | `boolean` | If `true`, a "Featured" icon will appear on the post card. on the landing page | `true` |
| `large` | `boolean` | If `true`, this post will be displayed as the main banner-style post. **Only one post should have this!** | `true` |
| `title` | `string` | The title of the post. | `"My Awesome New Post"` |
| `excerpt` | `string` | A short summary of the post. This is shown on cards and used for SEO descriptions. and will be shown on landing page | `"A quick look at how to create a new blog post..."` |
| `date` | `string` | The publication date in a human-readable format. (its just for reference) | `"Nov 20, 2024"` |
| `readTime` | `string` | The estimated read time. | `"5 min read"` |

#### Step 2: Create the Post Page

Create a new page file for your post inside the `app/blog/` directory. The file name should be `page.tsx`.

For a slug of `"my-new-post"`, the path would be: `app/blog/my-new-post/page.tsx`.

You can use this template to get started (this is what I used to make those pages) but as for a template checkout `_template.tsx` in `/app/blog/`:

```tsx
// app/blog/my-new-post/page.tsx

import Image from 'next/image';
import Link from 'next/link';

// Essential imports
import { postsData } from '@/app/data/posts';
import { RelatedPosts } from '@/app/components/RelatedPosts';
import { generatePostMetadata } from '@/app/lib/metadata';

// 1. Generate Metadata (Replace slug)
export const metadata = generatePostMetadata('my-new-post');

// 2. Add your images (optional)
const profile = '/kunal-saluja.jpg';
const image1 = '/blog/my-new-post/image1.png'; // Example image path

export default function Page() {
  return (
    <article className="py-8 sm:py-16">
      <header className="content-grid px-4">
        {/* Header content (title, author, date) */}
      </header>

      <div className="post-content content-grid mt-8 space-y-8 px-4 text-lg ...">
        {/*
          Use standard HTML tags like <p>, <h2>, <ul>, etc.
          You can use components like <Image />, <CodeBlock />, etc. more doc below or check component files
        */}
        <p>This is my first paragraph.</p>
        <Image src={image1} alt="My first image" width={800} height={400} />
      </div>

      {/* 3. Related posts, You dont need to touch these*/}
      <RelatedPosts allPosts={postsData} currentPostSlug="my-new-post" />
    </article>
  );
}
```

#### Step 3: Add Images

Place any images for your post inside the `public/blog/your-new-slug/` directory and reference them in your `page.tsx` file.

#### Step 4: Rebuild the Search Index

After adding a new post, you must rebuild the search index for it to appear in search results.

```bash
npm run build
```

This command runs the `scripts/generate-search-index.mjs` script and then builds the Next.js project. The updated `public/search-index.json` will be included in your next commit, and also should work right away

### How to Add a New Portfolio Item

very similar to adding a blog post
##
## Easy Way
Copy and follow `_template.tsx` in `/app/portfolio/`, paste components from the top as needed!

## Manual
#### Step 1: Add the Portfolio Data

Open `app/data/portfolio.ts` and add a new object to the `portfolioItems` array.

**Portfolio Object Fields:**

| Field | Type | Description | Example |
| :--- | :--- | :--- | :--- |
| `href` | `string` | The URL path to the portfolio item page. | `"/portfolio/new-project"` |
| `imageSrc` | `string` | Path to the project's image, relative to the `public` directory. | `"/portfolio/new-project.jpg"` |
| `alt` | `string` | Alt text for the image. | `"A screenshot of the new project."` |
| `title` | `string` | The title of the project. | `"New Awesome Project"` |
| `gridClass` | `string` | Tailwind CSS class to control grid spanning (ignore this leave it as `md:col-span-2`) . | `"md:col-span-1"` |
| `aspectClass` | `string` | Tailwind CSS class for aspect ratio (this is for the video, leave this to `aspect-video` as well). | `"aspect-[4/3]"` |

#### Step 2: Create the Portfolio Page

Create a new page file at `app/portfolio/your-project-slug/page.tsx`. Use an existing portfolio page as a template. Remember to update the call to `generatePortfolioMetadata` with the correct slug. (start with copying another portfolio example as that will help)

---

## 4. Project Structure & Component Guide

### Core App Files (`/app`)

*   `layout.tsx`: The root layout for the entire application. It sets up the HTML structure, includes global CSS, and wraps all pages with the `Header`, `Footer`, and `MathJaxProvider`.
*   `globals.css`: Global styles and Tailwind CSS imports. Your new css goes here
*   `page.tsx`: The homepage of the website. It fetches post data and arranges them into banner, two-column, and three-column layouts.
*   `author/page.tsx`: A static page with information about the author.
*   `blog/[slug]/page.tsx`: blog pages
*   `portfolio/[slug]/page.tsx`: portfolio pages
*   `tag/[slug]/page.tsx`: The dynamic page template for tags . It filters posts based on the `slug` (tag name) and displays them.
*   `portfolio/page.tsx`: The main portfolio gallery page.

### Components (`/app/components`)

This directory contains all reusable React components.

| Component | Description |
| :--- | :--- |
| `Header.tsx` | The main site navigation. It's sticky on non-home pages and includes links and the search button which triggers the `SearchModal`. |
| `Footer.tsx` | Well its a footer. |
| `SearchModal.tsx` | A modal overlay for the search interface. It handles the open/close state, background blur, and traps focus. |
| `Search.tsx` | The core search logic. Uses `Fuse.js` to perform a client-side search against a pre-built JSON index. |
| `RelatedPosts.tsx` | A client component that displays a random selection of 3 other posts. It prioritizes showing one featured post if available. |
| `MathJaxProvider.tsx` | A client component that injects the MathJax library scripts into the page and re-renders equations whenever the page route changes. |
| `CodeBlock.tsx` | Renders code snippets. It uses `react-syntax-highlighter` for Python and a standard `<pre>` tag for other languages for optimized performance. |
| `Callout.tsx` | A simple component for creating styled boxes with an emoji to highlight important information. |
### Data (`/app/data`)

*   `posts.ts`: The single source of truth for all blog post metadata. Exporting the `Post` interface and the `postsData` array.
*   `portfolio.ts`: The single source of truth for all portfolio item metadata.

### Library (`/app/lib`)

*   `metadata.ts`: Contains helper functions (`generatePostMetadata`, `generatePortfolioMetadata`) that generate dynamic, SEO-friendly metadata for blog and portfolio pages based on their slugs.

### Public Assets (`/public`)

*   This directory contains all static assets like images, logos, and `search-index.json`.
*   `search-index.json`: A pre-built JSON file containing the `slug`, `title`, `excerpt`, and full `content` of every blog post. This file is generated at build time and is used by `Fuse.js` for client-side searching.

---

## 5. Key Features Deep Dive

### Full-Text Search (Fuse.js)
### Comments (Disqus)
### Math Equations (MathJax)
### Code Syntax Highlighting

---

## 6. Styling

*   **Tailwind CSS**: The project uses Tailwind CSS for all its styling. Utility classes are applied directly in the JSX. Configuration is in `tailwind.config.ts`. Havent had to touch any of it because I did all extra css in `globals.css`
*   **Global Styles**: `app/globals.css` contains base styles, Tailwind imports, and custom CSS classes for typography (e.g., `.post-title`, `.post-content`) and layout (`.content-grid`). The content grid provides a robust system for controlling content width (standard, wide, and full-bleed).

---

## 7. Building for Production

To create a production-ready build of the site, run:

```bash
npm run build
```

This command performs two key actions:
1.  **Generates the search index**:
2.  **Builds the Next.js app**

## 8. Hosting on Vercel

You'll need:
1.  **A Vercel Account**: If you don't have one, [sign up for a free account](https://vercel.com/signup). It's easiest to sign up using your GitHub, so we can add the repository later.
2.  **Project Pushed to Git**: Your project code must be in a Git repository on a platform like GitHub.

Import Your Project

1.  Log in to your Vercel dashboard.
2.  Click the **"Add New..."** button and select **"Project"**.
3.  The "Import Git Repository" screen will appear. If you signed up with GitHub, you should see a list of your repositories.
4.  Find your project's repository and click the **"Import"** button next to it.

Your project is ready, click on the link that is given to you and add your domain!.