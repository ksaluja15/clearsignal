// dynamic link for various tags, they are pre rendered on build for optimization
import { Post, postsData } from '@/app/data/posts';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';

export async function generateStaticParams() {
  const allTags = new Set<string>();
  postsData.forEach(post => {
    post.tags.forEach(tag => allTags.add(tag));
  });

  return Array.from(allTags)
    .filter(tag => tag.toLowerCase() !== 'portfolio')
    .map(tag => ({
      slug: tag,
    }));
}

const FeaturedIcon = () => (
  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3">
    <path d="M4.49365 4.58752C3.53115 6.03752 2.74365 7.70002 2.74365 9.25002C2.74365 10.6424 3.29678 11.9778 4.28134 12.9623C5.26591 13.9469 6.60127 14.5 7.99365 14.5C9.38604 14.5 10.7214 13.9469 11.706 12.9623C12.6905 11.9778 13.2437 10.6424 13.2437 9.25002C13.2437 6.00002 10.9937 3.50002 9.16865 1.68127L6.99365 6.25002L4.49365 4.58752Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

const PostCard = ({ post }: { post: Post }) => {
  const isBanner = post.large;

  if (isBanner) {
    return (
      <article className="group">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Link href={`/blog/${post.slug}`} className="block relative w-full overflow-hidden aspect-video rounded-lg">
            <Image 
              src={post.imageUrl} 
              alt={post.alt} 
              fill 
              className="object-cover transition-transform duration-300 group-hover:scale-105" 
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Link>
          <div>
            <div className="flex items-center gap-3 text-xs uppercase text-gray-500 font-medium mb-2">
              <span>{post.tags[0]}</span>
              {post.featured && <span className="flex items-center gap-1.5 text-white"><FeaturedIcon /> Featured</span>}
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-gray-300 transition-colors">{post.title}</Link>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
            <footer className="text-xs text-gray-500">
              <time>{post.date}</time><span className="px-1.5">—</span><span>{post.readTime}</span>
            </footer>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block relative w-full overflow-hidden aspect-video mb-4 rounded-lg">
        <Image 
          src={post.imageUrl} 
          alt={post.alt} 
          fill 
          className="object-cover transition-transform duration-300 group-hover:scale-105" 
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>
      <div>
        <div className="flex items-center gap-3 text-xs uppercase text-gray-500 font-medium mb-2">
          <span>{post.tags[0]}</span>
          {post.featured && <span className="flex items-center gap-1.5 text-white"><FeaturedIcon /> Featured</span>}
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-gray-300 transition-colors">{post.title}</Link>
        </h2>
        <p className="text-gray-400 text-base leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
        <footer className="text-xs text-gray-500">
          <time>{post.date}</time><span className="px-1.5">—</span><span>{post.readTime}</span>
        </footer>
      </div>
    </article>
  );
};

export default async function TagPage(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params;

  if (slug.toLowerCase() === 'portfolio') {
    redirect('/portfolio');
  }

  const decodedTag = decodeURIComponent(slug);
  const filteredPosts = postsData.filter(post => post.tags.includes(decodedTag));

  if (filteredPosts.length === 0) {
    notFound();
  }

  const bannerPost = filteredPosts.find(p => p.large);
  const otherPosts = bannerPost
    ? filteredPosts.filter(p => p.slug !== bannerPost.slug)
    : filteredPosts;

  const twoColPosts = otherPosts.slice(0, 2);
  const threeColPosts = otherPosts.slice(2);

  const displayTag = decodedTag.charAt(0).toUpperCase() + decodedTag.slice(1);

  return (
    <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <header className="mb-12 border-b border-gray-800 pb-8">
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">{displayTag}</h1>
        <p className="text-lg text-gray-400 mt-2">
          A collection of {filteredPosts.length} post{filteredPosts.length > 1 ? 's' : ''} tagged with "{decodedTag}".
        </p>
      </header>

      <div className="space-y-16 mt-16">
        {bannerPost && <PostCard post={bannerPost} />}

        {twoColPosts.length > 0 && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {twoColPosts.map(post => <PostCard key={post.slug} post={post} />)}
          </section>
        )}

        {threeColPosts.length > 0 && (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {threeColPosts.map(post => <PostCard key={post.slug} post={post} />)}
          </section>
        )}
      </div>
    </main>
  );
}
