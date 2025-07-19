//related posts box at the bottom of each blog page. finds 3 random posts other than the current post, 1 featred post and 2 normal posts
'use client';

import { Post } from '@/app/data/posts';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

//could make this as a component but its only used twice so I think its better to not complicate also this isnt something youll modify (:
const FeaturedIcon = () => (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3">
        <path d="M4.49365 4.58752C3.53115 6.03752 2.74365 7.70002 2.74365 9.25002C2.74365 10.6424 3.29678 11.9778 4.28134 12.9623C5.26591 13.9469 6.60127 14.5 7.99365 14.5C9.38604 14.5 10.7214 13.9469 11.706 12.9623C12.6905 11.9778 13.2437 10.6424 13.2437 9.25002C13.2437 6.00002 10.9937 3.50002 9.16865 1.68127L6.99365 6.25002L4.49365 4.58752Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);


const PostCard = ({ post }: { post: Post }) => {
  return (
    <article className="group flex h-full flex-col">
      <Link href={`/blog/${post.slug}`} className="block relative w-full overflow-hidden aspect-video mb-4 rounded-lg">
        <Image 
            src={post.imageUrl} 
            alt={post.alt} 
            fill 
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="flex flex-grow flex-col">
        <div className="flex items-center gap-3 text-xs uppercase text-gray-500 font-medium mb-2">
          <span>{post.tags[0]}</span>
          {post.featured && <span className="flex items-center gap-1.5 text-white"><FeaturedIcon /> Featured</span>}
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-gray-300 transition-colors">{post.title}</Link>
        </h2>
        <p className="text-gray-400 text-base leading-relaxed mb-4 flex-grow">{post.excerpt}</p>
        <footer className="mt-auto text-xs text-gray-500">
          <time>{post.date}</time><span className="px-1.5">—</span><span>{post.readTime}</span>
        </footer>
      </div>
    </article>
  );
};


interface RelatedPostsProps {
  allPosts: Post[];
  currentPostSlug: string;
}

export const RelatedPosts: React.FC<RelatedPostsProps> = ({ allPosts, currentPostSlug }) => {
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    // This logic runs only on the client, after the page has loaded. thats why we had to make this a client compoenet
    const otherPosts = allPosts.filter((p) => p.slug !== currentPostSlug);
    const featured = otherPosts.filter((p) => p.featured);
    const nonFeatured = otherPosts.filter((p) => !p.featured);

    const shuffledFeatured = shuffleArray(featured);
    const shuffledNonFeatured = shuffleArray(nonFeatured);

    const selectedPosts: Post[] = [];

    // Prioritize one featured post
    if (shuffledFeatured.length > 0) {
      selectedPosts.push(shuffledFeatured.shift()!);
    }

    // Fill the rest from the remaining pool
    const remainingPool = [...shuffledFeatured, ...shuffledNonFeatured];
    while (selectedPosts.length < 3 && remainingPool.length > 0) {
      selectedPosts.push(remainingPool.shift()!);
    }
    
    setRelatedPosts(selectedPosts);
  }, [allPosts, currentPostSlug]);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="border-t border-gray-700">
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Read more
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-gray-400">
                    Check out other posts you might find interesting.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {relatedPosts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                ))}
            </div>
      </section>
    </div>
  );
};