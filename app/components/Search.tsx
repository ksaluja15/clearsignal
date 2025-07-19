//search: uses fuse.js and searches through /public/search-index.json which is autogenarated on build
'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useDebounce } from 'use-debounce';
import Fuse, { type FuseResult } from 'fuse.js';

import { postsData } from '@/app/data/posts';

interface SearchPost {
  slug: string;
  title: string;
  excerpt: string; 
  content: string;
}

export default function Search({ onClose }: { onClose?: () => void }) {
  const [query, setQuery] = useState('');
  const [searchIndexPosts, setSearchIndexPosts] = useState<SearchPost[]>([]);
  const [results, setResults] = useState<FuseResult<SearchPost>[]>([]);
  const [debouncedQuery] = useDebounce(query, 300);

  const excerptMap = useMemo(() => {
    return postsData.reduce((map, post) => {
      map[post.slug] = post.excerpt;
      return map;
    }, {} as Record<string, string>);
  }, []);

  useEffect(() => {
    fetch('/search-index.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch search index');
        }
        return res.json();
      })
      .then((data) => setSearchIndexPosts(data))
      .catch(error => {
        console.error("Error loading search index:", error);
      });
  }, []);

  const fuse = useMemo(() => {
    if (searchIndexPosts.length > 0) {
      return new Fuse(searchIndexPosts, {
        keys: ['title', 'excerpt', 'content'],
        includeScore: true,
        minMatchCharLength: 2, 
        threshold: 0.5,        
      });
    }
    return null;
  }, [searchIndexPosts]);
  
  useEffect(() => {
    if (debouncedQuery.length > 1 && fuse) {
      setResults(fuse.search(debouncedQuery));
    } else {
      setResults([]);
    }
  }, [debouncedQuery, fuse]);

  const handleLinkClick = () => {
    setQuery('');
    setResults([]);
    onClose?.();
  };

  return (
    <div className="relative">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search full post content..."
        className="w-full bg-transparent p-4 text-lg text-white placeholder-gray-500 focus:outline-none"
        autoFocus
      />
      
      {results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 z-10">
          <ul className="max-h-96 overflow-y-auto rounded-lg border border-gray-700 bg-gray-900 shadow-lg">
            {results.map(({ item }) => (
              <li key={item.slug} className="border-b border-gray-800 last:border-b-0">
                <Link
                  href={`/blog/${item.slug}`}
                  onClick={handleLinkClick}
                  className="block px-4 py-3 transition-colors hover:bg-gray-800"
                >
                  <span className="font-semibold text-white">{item.title}</span>
                  {/* --- CHANGE THIS --- */}
                  {/* 3. Use the excerpt from our map, with a fallback to the search index's excerpt */}
                  <p className="mt-1 text-sm text-gray-400 line-clamp-2">
                    {excerptMap[item.slug] || item.excerpt}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {debouncedQuery.length > 1 && results.length === 0 && (
         <div className="border-t border-gray-700 p-6 text-center text-gray-500">
            No results found for "{debouncedQuery}".
         </div>
      )}
    </div>
  );
}