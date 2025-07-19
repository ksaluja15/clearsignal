import Image from 'next/image';
import Link from 'next/link';

import { RelatedPosts } from '@/app/components/RelatedPosts';
import { postsData } from '@/app/data/posts';

import { generatePostMetadata } from '@/app/lib/metadata';

const slug = 'my-new-desktop';

export const metadata = generatePostMetadata(slug);

const profile = '/kunal-saluja.jpg';

export default function Page() {
  return (
    <article className="py-8 sm:py-16">
      <header className="content-grid px-4">
        <div className="mb-4">
          <Link
            href="/tag/blog"
            className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] hover:text-white"
          >
            blog
          </Link>
        </div>
        <h1 className="post-title font-extrabold leading-tight">
          My New Desktop!
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
              <time dateTime="2021-12-30">Dec 30, 2021</time>
              <span className="mx-1">•</span>
              <span>1 min read</span>
            </div>
          </div>
        </div>
      </header>

      <div className="post-content content-grid mt-8 space-y-8 px-4 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
        <p>
          If you're into gaming and deep learning, you need to own a GPU. For
          years I was working with an older GPU (GTX 960M), but I thought it was
          time to upgrade. But wait, should I get a laptop, a pre-built
          desktop, or just build my own ? It took me weeks to decide, and now I
          can say that I don't regret my decision in hindsight. I ended up
          assembling a desktop from scratch, and I must say, it was a great
          experience !
        </p>

        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Why build your own desktop?
        </h3>

        <p>There are multiple advantages:</p>

        <ol className="list-inside list-decimal space-y-4">
          <li>
            Cost Effective
            <ul className="ml-6 mt-2 list-disc space-y-2">
              <li>It's way cheaper as compared to buying pre-built desktops.</li>
              <li>
                There are plenty of options on the market, like HP Omen series,
                CLX custom builds, ROG desktop series, etc. I ended up adding
                better parts and saved approximately 600$ !
              </li>
            </ul>
          </li>
          <li>
            Customizable and Upgradable
            <ul className="ml-6 mt-2 list-disc space-y-2">
              <li>
                If a part falls out, it might not be easy to replace it in a
                pre-built desktop. I've read about such builds having little to
                no space b/w parts.
              </li>
              <li>
                Future GPU and CPU upgrades are easier if you've installed the
                parts yourself.
              </li>
              <li>
                Normally, people end up adding more fans which prolongs the life
                of CPU and other components.
              </li>
            </ul>
          </li>
        </ol>

        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Part List
        </h3>
        <ul className="list-inside list-disc space-y-2">
          <li>
            Motherboard:{' '}
            <a
              href="https://www.amazon.com/gp/product/B088W7RKVZ/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1&ref=clearsignal.xyz"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              ASUS ROG Strix B550-F Gaming
            </a>
          </li>
          <li>
            PSU :{' '}
            <a
              href="https://www.amazon.com/gp/product/B01LZ3WDQG/ref=ppx_yo_dt_b_asin_title_o03_s01?ie=UTF8&psc=1&ref=clearsignal.xyz"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              EVGA 750 N1, 750W
            </a>
          </li>
          <li>
            Ram:{' '}
            <a
              href="https://www.amazon.com/gp/product/B07QRSPFG7/ref=ppx_yo_dt_b_asin_title_o03_s01?ie=UTF8&psc=1&ref=clearsignal.xyz"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              TEAMGROUP T-Force Vulcan Z DDR4 16GB Kit (2x8GB) 3000MHz
            </a>
          </li>
          <li>
            CPU Cooler:{' '}
            <a
              href="https://www.amazon.com/gp/product/B08F21X2VP/ref=ppx_yo_dt_b_asin_title_o03_s02?ie=UTF8&psc=1&ref=clearsignal.xyz"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vetroo V5 CPU Air
            </a>
          </li>
          <li>
            SSD: 2 x{' '}
            <a
              href="https://www.amazon.com/gp/product/B086BGWNY8/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1&ref=clearsignal.xyz"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Crucial P2 500GB 3D NAND NVMe
            </a>
          </li>
          <li>
            CPU:{' '}
            <a
              href="https://www.amazon.com/gp/product/B0815XFSGK/ref=ppx_yo_dt_b_asin_title_o04_s01?ie=UTF8&psc=1&ref=clearsignal.xyz"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              AMD Ryzen 7 5800X
            </a>
          </li>
          <li>
            Case:{' '}
            <a
              href="https://www.amazon.com/gp/product/B07LCMR3JC/ref=ppx_yo_dt_b_asin_title_o04_s02?ie=UTF8&psc=1&ref=clearsignal.xyz"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Thermaltake Level 20 MT
            </a>
          </li>
          <li>
            GPU:{' '}
            <a
              href="https://www.amazon.com/Gigabyte-GeForce-2060-GDDR6-Graphics/dp/B08CRZTTBZ/ref=sr_1_15?dchild=1&keywords=Gigabyte+AORUS+RTX+2060+6G&qid=1629347641&sr=8-15&ref=clearsignal.xyz"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gigabyte GeForce RTX 2060 6GB GDDR6 Graphics Card
            </a>
          </li>
        </ul>

        <h4 className="!mt-12 text-xl font-bold text-white md:text-2xl">
          Notes
        </h4>
        <ol className="list-inside list-decimal space-y-4">
          <li>
            I would recommend replacing the CPU cooler with another one, since
            the mounts on this one didn't fit the AM4 socket on the motherboard.
          </li>
          <li>
            Currently, there is a massive chip shortage due to covid and other
            supply chain issues in China. GPUs are hard to come by. I would
            recommend buying a used GPU (make sure it wasn't used for crypto
            mining), or asking a friend who works at Nvidia to get you one.
          </li>
          <li>
            I found the following websites to be extremely useful:
            <ul className="ml-6 mt-2 list-disc space-y-2">
              <li>
                <a
                  href="https://pcpartpicker.com/?ref=clearsignal.xyz"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PC Part Picker
                </a>
              </li>
              <li>
                <a
                  href="https://www.logicalincrements.com/?ref=clearsignal.xyz"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Logical increments
                </a>
              </li>
            </ul>
          </li>
        </ol>
        <hr className="!my-4 border-gray-700" />
      </div>
     <RelatedPosts allPosts={postsData} currentPostSlug={slug} />
    </article>
  );
}