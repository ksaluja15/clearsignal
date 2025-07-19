import Image from "next/image";
import Link from "next/link";

//I love cats

import { RelatedPosts } from '@/app/components/RelatedPosts';
import { postsData } from '@/app/data/posts';

import { generatePostMetadata } from '@/app/lib/metadata';

const slug = 'yolo-x-notes';

export const metadata = generatePostMetadata(slug);

const image1 = "/blog/yolo-x-notes/Screenshot-2024-08-10-at-4.32.17-PM.png";
const image2 = "/blog/yolo-x-notes/Screenshot-2024-08-10-at-4.29.09-PM-1.png";
const image3 = "/blog/yolo-x-notes/Screenshot-2024-08-10-at-4.30.53-PM-1.png";


const profile = "/kunal-saluja.jpg";

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
          Yolo-X Notes
        </h1>
        <p className="mt-4 text-xl text-[var(--color-text-secondary)] sm:text-2xl">
          The main motivation behind YOLOX was to update the YOLO series with
          the recent advancements at the time, particularly anchor-free
          detection.
        </p>
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
              <time dateTime="2024-08-10">Aug 10, 2024</time>
              <span className="mx-1">•</span>
              <span>2 min read</span>
            </div>
          </div>
        </div>
      </header>

      <div className="post-content content-grid mt-8 space-y-8 px-4 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
        <h2 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Motivation
        </h2>'yolo-x-notes'
        <hr className="!my-4 border-gray-700" />
        <ul className="list-inside list-disc space-y-2">
          <li>
            The main motivation behind YOLOX was to update the YOLO series with
            the recent advancements at the time, particularly anchor-free
            detection.
          </li>
          <li>
            When YoloX came out in 2021, YOLOv5 held the best trade-off
            performance with 48.2% AP on COCO at 13.7 ms. This inference time
            was calculated using YOLOv5-L model at 640 × 640 resolution with
            FP16-precision and batch=1 on a V100.
          </li>
          <li>
            YOLOv4 and YOLOv5 still used anchor-based detectors with
            hand-crafted assigning rules for training.
          </li>
        </ul>

        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image1}
            alt="YOLOX comparison with its peers at the time (Aug 2021)"
            width={1884}
            height={766}
            className="rounded-lg object-contain"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-400">
            YOLOX comparison with its peers at the time (Aug 2021)
          </figcaption>
        </figure>

        <h2 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Novelty
        </h2>
        <hr className="!my-4 border-gray-700" />
        <p>
          <strong className="font-bold text-white">
            This paper chose Yolov3 as the baseline and added incremental
            improvements to it, such as:
          </strong>
        </p>
        <ul className="list-inside list-disc space-y-4">
          <li>
            <strong className="font-bold text-white">Anchor free detection</strong>
            <ol className="ml-6 mt-2 list-inside list-decimal space-y-2">
              <li>
                Eliminates the need for clustering analysis to determine optimal
                anchor sizes. Such anchors are domain-specific and less
                generalized.
              </li>
              <li>
                Anchors increase complexity in two ways. Firstly, the number of
                predictions from the detection heads is too high. This can cause
                potential memory bottlenecks. Secondly, anchors are associated
                with several tightly tuned design parameters, making decoding
                harder.
              </li>
            </ol>
            <p className="ml-6 mt-2">
              The anchor-free concept appears to have been adapted from the{" "}
              <a
                href="https://arxiv.org/abs/1904.01355?ref=clearsignal.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                FCOS
              </a>{" "}
              paper.
            </p>
          </li>
        </ul>

        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image2}
            alt="FCOS anchor-free mechanism diagram"
            width={1898}
            height={1084}
            className="rounded-lg object-contain"
          />
        </figure>

        <ul className="list-inside list-disc space-y-4">
          <li>
            <strong className="font-bold text-white">SimOTA label assignment</strong>
            <p className="mt-2">
              YoloX adopts a simplified version of the label assignment strategy
              created by the same authors in the{" "}
              <a
                href="https://arxiv.org/abs/2103.14259?ref=clearsignal.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                OTA
              </a>{" "}
              paper. Labels are matched to the predictions based on a cost
              value (weighted sum of losses). Then an IOU is calculated relative
              to the sampled center (center-sampling from{" "}
              <a
                href="https://arxiv.org/abs/1904.01355?ref=clearsignal.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                FCOS
              </a>
              ) to determine the top k matches, also known as the Dynamic-k
              strategy.
            </p>
          </li>
          <li>
            <strong className="font-bold text-white">
              Strong augmentation - Mosaic and Mixup
            </strong>
            <p className="mt-2">
              Strong augmentation ensures that pre-training with Imagenet is no
              longer beneficial. Models are trained from scratch with this
              augmentation.
            </p>
          </li>
          <li>
            <strong className="font-bold text-white">
              Decoupled head for classification and regression
            </strong>
            <ol className="ml-6 mt-2 list-inside list-decimal space-y-2">
              <li>Improves convergence speed</li>
              <li>Improves AP</li>
            </ol>
          </li>
        </ul>

        <h2 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Results
        </h2>
        <hr className="!my-4 border-gray-700" />
        <ul className="list-inside list-disc space-y-2">
          <li>
            <strong>Baseline:</strong> Beats YoloV3 baseline by{" "}
            <strong>3% mAP</strong> on Coco when using the same backbone
            (DarkNet53)
          </li>
          <li>
            <strong>Large model (YOLOX-L):</strong> Beats YoloV5-L baseline by{" "}
            <strong>1.8% mAP</strong> on Coco when using the same backbone and
            other enhancements (CSPNet and additional Pan head)
          </li>
          <li>
            <strong>Small model (YOLOX-Tiny):</strong> Beats YoloV4-Tiny
            baseline by <strong>10% mAP</strong> on Coco when using the same
            backbone and other enhancements
          </li>
        </ul>

        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image3}
            alt="YOLOX results table showing mAP improvements"
            width={1876}
            height={710}
            className="rounded-lg object-contain"
          />
        </figure>

        <h2 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Links
        </h2>
        <hr className="!my-4 border-gray-700" />
        <p>
          <a
            href="https://arxiv.org/abs/2107.08430?ref=clearsignal.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Paper
          </a>{" "}
          /{" "}
          <a
            href="https://github.com/Megvii-BaseDetection/YOLOX?ref=clearsignal.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Github
          </a>
        </p>

        <h2 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          References
        </h2>
        <hr className="!my-4 border-gray-700" />
        <ol className="list-inside list-decimal space-y-2">
          <li>
            <a
              href="https://arxiv.org/abs/1904.01355?ref=clearsignal.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              FCOS: Fully Convolutional One-Stage Object Detection
            </a>
          </li>
          <li>
            <a
              href="https://arxiv.org/abs/2103.14259?ref=clearsignal.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              OTA: Optimal Transport Assignment for Object Detection
            </a>
          </li>
          <li>
            <a
              href="https://arxiv.org/abs/2107.08430?ref=clearsignal.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              <strong>YOLOX: Exceeding YOLO Series in 2021</strong>
            </a>
          </li>
        </ol>
        <hr className="!my-4 border-gray-700" />
      </div>
      <RelatedPosts allPosts={postsData} currentPostSlug={slug} />
    </article>
  );
}