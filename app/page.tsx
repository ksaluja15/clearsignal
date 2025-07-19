import { Post, postsData } from '@/app/data/posts';
import Image from 'next/image';
import Link from 'next/link';


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
          <Link href={`/blog/${post.slug}`} className="block relative w-full overflow-hidden aspect-video">
            <Image src={post.imageUrl} alt={post.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw"/>
          </Link>
          <div>
            <div className="flex items-center gap-3 text-xs uppercase text-gray-500 font-medium mb-2">
              <span>{post.tags[0]}</span>
              {post.featured && <span className="flex items-center gap-1.5 text-white"><FeaturedIcon /> Featured</span>}
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-gray-300 transition-colors">{post.title}</Link>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-4">{post.excerpt}</p>
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
      <Link href={`/blog/${post.slug}`} className="block relative w-full overflow-hidden aspect-video mb-4">
        <Image src={post.imageUrl} alt={post.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw"/>
      </Link>
      <div>
        <div className="flex items-center gap-3 text-xs uppercase text-gray-500 font-medium mb-2">
          <span>{post.tags[0]}</span>
          {post.featured && <span className="flex items-center gap-1.5 text-white"><FeaturedIcon /> Featured</span>}
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-gray-300 transition-colors">{post.title}</Link>
        </h2>
        <p className="text-gray-400 text-base leading-relaxed mb-4">{post.excerpt}</p>
        <footer className="text-xs text-gray-500">
          <time>{post.date}</time><span className="px-1.5">—</span><span>{post.readTime}</span>
        </footer>
      </div>
    </article>
  );
};


export default function Home() {
  const bannerPost = postsData.find(p => p.large);
  const twoColPosts = postsData.slice(1, 3);
  const threeColPosts = postsData.slice(3);

  return (
    <>
      <section className="relative w-full aspect-video lg:h-[50vh]" style={{opacity: 1.0, zIndex: 1}}>

        <Image
          src="/index/Screenshot-from-2024-10-16-21-17-39.png"
          alt="ClearSignal"
          fill
          priority
          className="object-cover"
        />
      </section>

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16" style={{opacity: 1.0, zIndex: 2}}>
        {bannerPost && <PostCard post={bannerPost} />}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {twoColPosts.map(post => <PostCard key={post.slug} post={post} />)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {threeColPosts.map(post => <PostCard key={post.slug} post={post} />)}
        </div>
      </section>
    </>
  );
}