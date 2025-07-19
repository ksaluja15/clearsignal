import { Callout } from '@/app/components/Callout';
import Image from 'next/image';
import Link from 'next/link';

import { RelatedPosts } from '@/app/components/RelatedPosts';
import { postsData } from '@/app/data/posts';

import { generatePostMetadata } from '@/app/lib/metadata';

const slug = 'cpu-vs-gpu-vs-tpu';

export const metadata = generatePostMetadata(slug);

const image1 = '/blog/cpu-vs-gpu-vs-tpu/mult_add_cpu.gif';
const image2 = '/blog/cpu-vs-gpu-vs-tpu/mult-add-gpu.gif';
const image3 = '/blog/cpu-vs-gpu-vs-tpu/mult_add_tpu.gif';
const profile = '/kunal-saluja.jpg';
const googleCloudArticleUrl =
  'https://cloud.google.com/blog/products/ai-machine-learning/what-makes-tpus-fine-tuned-for-deep-learning?ref=clearsignal.xyz';

export default function Page() {
  return (
    <article className="py-8 sm:py-16">
      <header className="content-grid px-4 pr-10">
        <div className="mb-4">
          <Link
            href="/tag/blog"
            className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] hover:text-white"
          >
            blog
          </Link>
        </div>
        <h1 className="post-title font-extrabold leading-tight">
          CPU vs GPU vs TPU
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
              <time dateTime="2020-12-24">Dec 24, 2020</time>
              <span className="mx-1">•</span>
              <span>2 min read</span>
            </div>
          </div>
        </div>
      </header>

      <div className="post-content content-grid mt-8 space-y-8 px-4 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">

        <div className="space-y-8">
          <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
            Introduction
          </h3>
          <p>
            While most deep learning engineers/enthusiasts focus on algorithms,
            they often forget about the hardware they use for training/inference.
            If you ask them why GPU/TPU is faster than a CPU, you'll often hear
            responses like "GPUs are optimized for convolutions or GPUs can run
            more threads". While these statements are true, they merely scratch
            the surface. In this post, we dig deeper into the hardware to
            explain what's happening.
          </p>
          <p>
            I'm not a hardware pro by any means, but I feel this information is
            critical for all AI enthusiasts.
          </p>
        </div>

        <Callout emoji="💡">
          The main trade-off b/w the three pieces of hardware is b/w Latency
          andThroughput
        </Callout>

        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          CPU
        </h3>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image1}
            alt="Multiply-Add operation on CPU"
            width={640}
            height={214}
            className="rounded-lg object-contain"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-400">
            Multiply-Add operation on CPU [Source:{' '}
            <a
              href={googleCloudArticleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Google Cloud
            </a>
            ]
          </figcaption>
        </figure>
        <ul className="list-inside list-disc space-y-4">
          <li>
            CPUs are meant to be the most flexible piece of hardware, capable
            of running every software, instruction by instruction.
          </li>
          <li>
            CPUs are not designed to only render graphics or multiply tensors,
            they need to load databases, a variety of applications and run
            multiple threads where each thread is running a different
            instruction set.
          </li>
          <li>
            To accomplish this, CPUs read instruction <i>one by one</i> from
            the memory, perform any computation if needed, and write the
            result back into memory.
          </li>
        </ul>
        <Callout emoji="💡">
          CPUs optimize for latency over throughput
        </Callout>

        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          GPU
        </h3>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image2}
            alt="Multiply-Add operation on GPU"
            width={640}
            height={268}
            className="rounded-lg object-contain"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-400">
            Multiply-Add operation on GPU [Source:{' '}
            <a
              href={googleCloudArticleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Google Cloud
            </a>
            ]
          </figcaption>
        </figure>
        <ul className="list-inside list-disc space-y-4">
          <li>
            GPUs are designed to process a single instruction{' '}
            <i> simultaneously </i> over a large number of cuda cores.
          </li>
          <li>
            Though the cores have lower{' '}
            <a
              href="https://techterms.com/definition/clockspeed#:~:text=Clock%20speed%20is%20the%20rate,one%20billion%20cycles%20per%20second"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              clock speed
            </a>
            , the sheer number of cuda cores is enough to crush CPU when it
            comes to tasks like training deep learning models.
          </li>
        </ul>
        <Callout emoji="💡">
          GPU optimizes for throughput over latency by running a large number of
          ALUs in parallel.But they are still general enough and support most
          of computations possible on a CPU.
        </Callout>

        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          TPU
        </h3>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image3}
            alt="Data loading and Multiply-Add operation on TPU"
            width={640}
            height={269}
            className="rounded-lg object-contain"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-400">
            Data loading and Multiply-Add operation on TPU [Source:{' '}
            <a
              href={googleCloudArticleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Google Cloud
            </a>
            ]
          </figcaption>
        </figure>
        <ul className="list-inside list-disc space-y-4">
          <li>
            These MMUs are meant to avoid to memory access during a chain of
            tensor product operations. This is accomplished by a{' '}
            <a
              href="https://en.wikipedia.org/wiki/Systolic_array?ref=clearsignal.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              systolic array architecture
            </a>
            .
          </li>
        </ul>
        <Callout emoji="💡">
          TPU are heavily optimized for ONLY deep learning tasks/operations,
          whilecompromising on the flexibility needed to perform other tasks.
        </Callout>
        <hr className="!my-4 border-gray-700" />
      </div>

      <RelatedPosts allPosts={postsData} currentPostSlug={slug} />

    </article>
  );
}