import Image from 'next/image';
import Link from 'next/link';

import { RelatedPosts } from '@/app/components/RelatedPosts';
import { postsData } from '@/app/data/posts';

import { generatePostMetadata } from '@/app/lib/metadata';

const slug = 'efficientnet-v1-v2-a-smart-heuristic';

export const metadata = generatePostMetadata(slug);

const image1 = '/blog/efficientnet-v1-v2-a-smart-heuristic/efficientNet.webp';
const image2 = '/blog/efficientnet-v1-v2-a-smart-heuristic/eff_res.webp';
const profile = '/kunal-saluja.jpg';

export default function Page() {
  return (
    <article className="py-8 sm:py-16">
      <header className="content-grid px-4">
        <div className="mb-4">
          <Link
            href="/tag/papers"
            className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] hover:text-white"
          >
            papers
          </Link>
        </div>
        <h1 className="post-title font-extrabold leading-tight">
          EfficientNet (V1 & V2) - A smart heuristic
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
              <time dateTime="2021-05-09">May 9, 2021</time>
              <span className="mx-1">•</span>
              <span>2 min read</span>
            </div>
          </div>
        </div>
      </header>

      <div className="post-content content-grid mt-8 space-y-8 px-4 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
        <h3 className="!mt-12 text-center text-2xl font-bold text-white md:text-3xl">
          Intuition
        </h3>
        <p>
          EfficientNet tries to come up with a smart heuristic to scale a CNN,
          relating resolution, width, and depth of a CNN. In particular, it
          tries to answer two key questions:
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>What should be the best base network</li>
          <li>How to scale the base network(a) in an efficient manner</li>
        </ul>
        <p>
          EfficientNet enables us to effectively control the compute
          used(FLOPs) by a network Vs accuracy. Moreover, it allows for fast
          inference on embedded devices.
        </p>

        <h4 className="!mt-12 text-center text-xl font-bold text-white md:text-2xl">
          Finding the best base network
        </h4>
        <p>
          The author uses a multi-objective neural architecture search
          algorithm to find a network (EfficientNet-B0). The objective function
          comprises of{' '}
          <i>Accuracy(x) * (Flops(x) / Target-Flops) </i> as the target.
        </p>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image1}
            alt="EfficientNet-B0 architecture"
            width={314}
            height={201}
            className="rounded-lg object-contain"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-400">
            MB stands for inverted bottleneck residuals from MobileNet v2
          </figcaption>
        </figure>

        <h4 className="!mt-12 text-center text-xl font-bold text-white md:text-2xl">
          Scaling the base network
        </h4>
        <p>
          Now that the author has found the best network to scale, the question
          becomes how to relate resolution, width and depth of the network by
          one number,making it easier to scale. The technique used in this paper
          tries to answer the following question:
        </p>
        <blockquote className="border-l-4 border-gray-600 pl-4 italic">
          How would you scale the network if you suddenly had twice as many
          resources ?
        </blockquote>
        <p>
          By trying different multiples of resolution, width, and depth of the
          network, the author lands on the multiples 1.15, 1.1, and 1.2
          respectively. This means that if we scale the resolution, width, and
          depth of the network by the above-mentioned multiples, we will use
          twice as much compute compared to the base case when the multiples
          are 1 each. If we apply this approach in an incremental fashion, we
          will obtain optimized architectures which give high accuracy at the
          specified target flops.
        </p>

        <h4 className="!mt-12 text-center text-xl font-bold text-white md:text-2xl">
          UPDATE: EfficientNet V2
        </h4>
        <p>Some changes proposed in the latest architecture and methodology:</p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            Combination of Fused-MBConv and MB Conv instead of only MbConv
          </li>
          <li>
            Training-aware NAS - jointly optimizes for accuracy, parameter
            efficiency and training speed this time.
          </li>
          <li>
            Progressive Learning - Low regularization + small images initially
            during training, followed by high regularization + large images
            later.
          </li>
          <li>Small architecture changes.</li>
        </ul>

        <h4 className="!mt-12 text-center text-xl font-bold text-white md:text-2xl">
          Results
        </h4>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image2}
            alt="EfficientNet Results"
            width={657}
            height={475}
            className="rounded-lg object-contain"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-400">
            Results show a remarkable trade-off b/w accuracy and compute
            obtained by this heuristic.
          </figcaption>
        </figure>

        <h4 className="!mt-12 text-center text-xl font-bold text-white md:text-2xl">
          References
        </h4>
        <ul className="list-inside list-disc space-y-2">
          <li>
            (
            <a
              href="https://arxiv.org/pdf/1905.11946.pdf?ref=clearsignal.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:underline"
            >
              https://arxiv.org/pdf/1905.11946.pdf
            </a>
            ) EfficientNet: Rethinking Model Scaling for CNNs - Mingxing Tan,
            Quoc V. Le
          </li>
        </ul>
        <hr className="!my-4 border-gray-700" />
      </div>
       <RelatedPosts allPosts={postsData} currentPostSlug={slug} />
    </article>
  );
}