import Image from 'next/image';
import Link from 'next/link';

import { RelatedPosts } from '@/app/components/RelatedPosts';
import { postsData } from '@/app/data/posts';

import { generatePostMetadata } from '@/app/lib/metadata';

const slug = 'poly-loss';

export const metadata = generatePostMetadata(slug);

const image1 = '/blog/poly-loss/Screenshot-from-2022-05-19-00-04-09.png';
const image2 = '/blog/poly-loss/Screenshot-from-2022-05-19-00-03-50.png';
const image3 = '/blog/poly-loss/Screenshot-from-2022-05-19-00-05-53.png';
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
          PolyLoss : A new framework for loss functions
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
              <time dateTime="2022-05-18">May 18, 2022</time>
              <span className="mx-1">•</span>
              <span>1 min read</span>
            </div>
          </div>
        </div>
      </header>

      <div className="post-content content-grid mt-8 space-y-8 px-4 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
        <p>
          Original Paper: [
          <a
            href="https://arxiv.org/pdf/2204.12511.pdf?ref=clearsignal.xyz"
            className="text-blue-400 hover:underline"
          >
            https://arxiv.org/pdf/2204.12511.pdf
          </a>
          ]
        </p>
        <p>
          Authors: Zhaoqi Leng, Mingxing Tan , Chenxi Liu , Ekin Dogus Cubuk ,
          Xiaojie Shi, Shuyang Cheng ,Dragomir Anguelov [Waymo And Google]
        </p>

        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Summary
        </h3>
        <p>
          Authors propose a new framework of loss functions, motivated by the
          Taylor series expansion of commonly used functions like cross entropy
          and focal loss.
        </p>

        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image1}
            alt="Taylor series expansion of CE and Focal Loss"
            width={856}
            height={158}
            className="rounded-lg object-contain"
          />
        </figure>

        <p>
          When CE and focal losses are expanded, it's easier to see the
          similarities and differences between them. This seems to be the prime
          motivation to create a framework of losses which express such common
          functions as a special case.
        </p>
        <p>
          The authors also experiment with the coefficients of taylor expansion
          of these functions and assess their impact on training a ResNet-50
          model on ImageNet-1k dataset. Based on their experiments, altering
          the coefficients of the first N terms of the expansion series seems
          to give the best results.
        </p>

        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image2}
            alt="PolyLoss framework formula"
            width={862}
            height={159}
            className="rounded-lg object-contain"
          />
        </figure>

        <p>
          Upon further simplification, L(poly-1) seems to provide superior
          result as compared to cross entropy loss on a variety of different
          tasks involving detection, classification and segmentation.
        </p>

        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image3}
            alt="Poly-1 loss formula"
            width={715}
            height={40}
            className="rounded-lg object-contain"
          />
        </figure>

        <p>
          There's a lot to love about the simplicity and impact of this paper.
          A one line change in the loss function seems to give better results
          than the traditionally used loss functions.
        </p>
        <hr className="!my-4 border-gray-700" />
      </div>
      <RelatedPosts allPosts={postsData} currentPostSlug={slug} />
    </article>
  );
}