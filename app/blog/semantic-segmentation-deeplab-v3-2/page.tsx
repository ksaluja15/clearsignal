
import Image from 'next/image';
import Link from 'next/link';

import { RelatedPosts } from '@/app/components/RelatedPosts';
import { postsData } from '@/app/data/posts';

import { generatePostMetadata } from '@/app/lib/metadata';

const slug = 'semantic-segmentation-deeplab-v3-2';

export const metadata = generatePostMetadata(slug);

const image1 = '/blog/semantic-segmentation-deeplab-v3-2/seg.webp';
const image2 = '/blog/semantic-segmentation-deeplab-v3-2/intuition.webp';
const image3 = '/blog/semantic-segmentation-deeplab-v3-2/seg_arch.webp';
const image4 = '/blog/semantic-segmentation-deeplab-v3-2/seg_res.webp';
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
          Semantic Segmentation - DeepLab V3+
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
              <time dateTime="2021-01-27">Jan 27, 2021</time>
              <span className="mx-1">•</span>
              <span>2 min read</span>
            </div>
          </div>
        </div>
      </header>

      <div className="post-content content-grid mt-8 space-y-8 px-4 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
        <h3 className="!mt-12 text-center text-2xl font-bold text-white md:text-3xl">
          Semantic Segmentation
        </h3>
        <p>
          Semantic segmentation involves partitioning/marking regions in the
          image belonging to different objects/classes. Deep learning methods
          have made a remarkable improvement in this field within the past few
          years. This short article summarises DeepLab V3+, an elegant
          extension of DeepLab v3 proposed by the same authors (Chen et al.).
        </p>

        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image1}
            alt="Examples of semantic segmentation"
            width={761}
            height={282}
            className="rounded-lg object-contain"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-400">
            Examples of semantic segmentation.{' '}
            <a
              href="https://arxiv.org/pdf/1802.02611.pdf?ref=clearsignal.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Source
            </a>
          </figcaption>
        </figure>

        <h3 className="!mt-12 text-center text-2xl font-bold text-white md:text-3xl">
          Intuition
        </h3>

        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image2}
            alt="Comparison of ASPP, Encoder-Decoder, and DeepLabV3+ architectures"
            width={807}
            height={309}
            className="rounded-lg object-contain"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-400">
            (a) ASPP style architecture (b) Encoder Decoder style architecture
            (c) Proposed architecture.{' '}
            <a
              href="https://arxiv.org/pdf/1802.02611.pdf?ref=clearsignal.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Source
            </a>
          </figcaption>
        </figure>

        <p>
          Previously, ASPP (Atrous Spatial Pyramid Pooling) has been used to
          extract rich multi-scale features from images. The authors of Deeplab
          v3+ try to combine the ASPP module with the good old encoder-decoder
          architecture with skip connections, thereby providing better details
          in predictions.
        </p>

        <h3 className="!mt-12 text-center text-2xl font-bold text-white md:text-3xl">
          Architecture
        </h3>

        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image3}
            alt="DeepLab v3+ architecture diagram"
            width={849}
            height={440}
            className="rounded-lg object-contain"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-400">
            DeepLab v3+ architecture.{' '}
            <a
              href="https://arxiv.org/pdf/1802.02611.pdf?ref=clearsignal.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Source
            </a>
          </figcaption>
        </figure>

        <p>Here are the key features of this architecture:</p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            Atrous Depthwise Convolution: The depthwise convolution has an added
            dilation to make it atrous.
          </li>
          <li>
            ASPP style encoder from DeepLab V3 + UNet style decoder with skip
            connections.
          </li>
          <li>
            Modified Xception network as the backbone: This can be replaced by
            any backbone; HRNet seems to be widely used these days.
          </li>
        </ul>

        <h3 className="!mt-12 text-center text-2xl font-bold text-white md:text-3xl">
          Results
        </h3>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image4}
            alt="Results table showing different backbones"
            width={833}
            height={328}
            className="rounded-lg object-contain"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-400">
            Results show different backbones with Bilinear Upsampling(BU) vs a
            decoder.{' '}
            <a
              href="https://arxiv.org/pdf/1802.02611.pdf?ref=clearsignal.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Source
            </a>
          </figcaption>
        </figure>

        <h3 className="!mt-12 text-center text-2xl font-bold text-white md:text-3xl">
          References
        </h3>
        <ol className="list-inside list-decimal space-y-2">
          <li>
            <a
              href="https://arxiv.org/pdf/1802.02611.pdf?ref=clearsignal.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Encoder-Decoder with Atrous Separable Convolution for Semantic
              Image Segmentation
            </a>
          </li>
          <li>
            <a
              href="https://arxiv.org/abs/1610.02357?ref=clearsignal.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Xception: Deep Learning with Depthwise Separable Convolutions
            </a>
          </li>
          <li>
            <a
              href="https://arxiv.org/pdf/1606.00915v2.pdf?ref=clearsignal.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              DeepLab: Semantic Image Segmentation with Deep Convolutional Nets,
              Atrous Convolution, and Fully Connected CRFs
            </a>
          </li>
          <li>
            <a
              href="https://arxiv.org/abs/1801.04381?ref=clearsignal.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              MobileNetV2: Inverted Residuals and Linear Bottlenecks
            </a>
          </li>
        </ol>
        <hr className="!my-4 border-gray-700" />
      </div>
      <RelatedPosts allPosts={postsData} currentPostSlug={slug} />
    </article>
  );
}