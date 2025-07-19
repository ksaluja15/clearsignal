import { Metadata } from 'next';
import { postsData } from '@/app/data/posts';
import { portfolioItems } from '@/app/data/portfolio';


export function generatePostMetadata(slug: string): Metadata {
  const post = postsData.find((p) => p.slug === slug);

  if (!post) {
    throw new Error(`Metadata generation failed: Post with slug "${slug}" not found.`);
  }

  const vercelUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || vercelUrl || "http://localhost:3000";
  
  if (!baseUrl) {
    throw new Error("Could not determine base URL. Please set NEXT_PUBLIC_SITE_URL in your .env.local file.");
  }

  const pageUrl = `${baseUrl}/blog/${post.slug}`;
  const imageUrl = `${baseUrl}${post.imageUrl}`;

  return {
    metadataBase: new URL(baseUrl), // Add this line
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: 'Kunal Saluja' }],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: pageUrl,
      siteName: 'ClearSignal',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.alt }],
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: ['Kunal Saluja'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}


export function generatePortfolioMetadata(slug: string): Metadata {
  const item = portfolioItems.find((p) => p.href === `/portfolio/${slug}`);

  if (!item) {
    throw new Error(`Metadata generation failed: Portfolio item with slug "${slug}" not found.`);
  }

  const vercelUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || vercelUrl || "http://localhost:3000";
  
  if (!baseUrl) {
    throw new Error("Could not determine base URL. Please set NEXT_PUBLIC_SITE_URL in your .env.local file.");
  }

  const pageUrl = `${baseUrl}${item.href}`;
  const imageUrl = `${baseUrl}${item.imageSrc}`;

  const description = item.alt; 

  return {
    metadataBase: new URL(baseUrl),
    title: `${item.title} - Portfolio | Kunal Saluja`,
    description: description,
    keywords: [item.title, 'Portfolio', 'Project', 'Kunal Saluja'],
    authors: [{ name: 'Kunal Saluja' }],
    alternates: {
      canonical: pageUrl,
    },

    openGraph: {
      title: `${item.title} - Portfolio`,
      description: description,
      url: pageUrl,
      siteName: 'ClearSignal',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: item.alt }],
      type: 'article', 
    },

    twitter: {
      card: 'summary_large_image',
      title: `${item.title} - Portfolio`,
      description: description,
      images: [imageUrl],
    },
  };
}