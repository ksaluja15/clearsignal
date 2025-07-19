import Image from "next/image";
import Link from "next/link";

import { RelatedPosts } from '@/app/components/RelatedPosts';
import { postsData } from '@/app/data/posts';


import { generatePostMetadata } from '@/app/lib/metadata';

const slug = 'grounded-sam-2';

export const metadata = generatePostMetadata(slug);

const image = "/blog/grounded-sam-2/Screenshot-from-2025-01-22-15-58-24.png";
const profile = "/kunal-saluja.jpg";


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
          Notes - Grounded SAM
        </h1>
        <p className="mt-4 text-xl text-[var(--color-text-secondary)] sm:text-2xl">
          The Grounded SAM paper introduces a novel approach to open-set
          segmentation by combining two powerful pre-trained models: Grounding
          DINO for open-set object detection and the Segment Anything Model
          (SAM) for zero-shot segmentation.
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
              <time dateTime="2025-01-22">Jan 22, 2025</time>
              <span className="mx-1">•</span>
              <span>2 min read</span>
            </div>
          </div>
        </div>
      </header>

      <div className="post-content content-grid mt-8 space-y-8 px-4 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
        <h2 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          What is Grounded SAM?
        </h2>
        <hr className="!my-4 border-gray-700" />
        <p>
          The{" "}
          <a
            href="https://arxiv.org/abs/2401.14159?ref=clearsignal.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Grounded SAM
          </a>{" "}
          paper introduces a novel approach to open-set segmentation by
          combining two powerful pre-trained models: Grounding DINO for open-set
          object detection and the Segment Anything Model (SAM) for zero-shot
          segmentation. This integration enables the detection and segmentation
          of any regions based on arbitrary text inputs and opens a door to
          connecting various vision models.
        </p>
        <hr className="!my-4 border-gray-700" />

        <h2 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Model components used in the paper:
        </h2>
        <p>
          <strong>SAM</strong> is an open-world segmentation model that can "cut
          out" any object in any image with proper prompts, like points, boxes,
          or text. Despite of its strong zero-shot performance, the model cannot
          identify the masked objects based an arbitrary text input and normally
          requires point or box prompts to run.
        </p>
        <p>
          <strong>DINO</strong> is Meta’s versatile foundation model trained
          using self supervision. Features from this model can be used in a
          variety of downstream tasks like Monocular depth estimation,
          segmentation, object detection, etc.
        </p>
        <p>
          <strong>Grounding DINO</strong> is an open-set object detector that can
          detect any objects with respect to an arbitrary free-form text prompt.
          It has a strong zero-shot detection performance. However, the model
          needs text as inputs and can only detect boxes with corresponding
          phrases.
        </p>
        <p>
          <strong>OSX</strong> is the state-of-the-art model for expressive
          whole-body mesh recovery, which aims to estimate the 3D human body
          poses, hand gestures, and facial expressions jointly from monocular
          images. It needs first to detect human boxes, crop and resize the
          human boxes, and then conduct single-person mesh recovery.
        </p>
        <p>
          <strong>BLIP</strong> is an Image caption model. It cannot perform
          object level tasks like detection/segmentation.
        </p>
        <p>
          <strong>Recognize Anything Model (RAM)</strong> is a strong image
          tagging model that can recognize any common categories of high
          accuracy for an input image. However, RAM can only generate tags but
          cannot generate precise boxes and masks for the recognized categories.
        </p>
        <hr className="!my-4 border-gray-700" />

        <h2 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          How does SAM work?
        </h2>
        <p>
          Given an input image and a text prompt, we first employ Grounding DINO
          to generate precise boxes for objects or regions within the image by
          leveraging the textual information as condition. Subsequently, the
          annotated boxes obtained through Grounding DINO serve as the box
          prompts for SAM to generate precise mask annotations. By leveraging
          the capabilities of these two robust expert models, the open-set
          detection and segmentation tasks can be more effortlessly
          accomplished.
        </p>
        <hr className="!my-4 border-gray-700" />

        <h2 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Why not train a universal object segmentation model with text
          prompting instead?
        </h2>
        <p>
          It is highly challenging to determine masks in images corresponding
          to regions mentioned in any user-provided text. This is primarily due
          to the limited availability of high-quality data for segmentation in
          the wild tasks, which presents a challenge for the model to accomplish
          precise open-set segmentation under conditions characterized by data
          scarcity.
        </p>
        <hr className="!my-4 border-gray-700" />

        <h2 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Which new pipelines are enabled with Grounded SAM ?
        </h2>
        <p>4 workflows described in this picture are:</p>
        <ol className="list-inside list-decimal space-y-2">
          <li>G-DINO + SAM = Open vocabulary object detection + segmentation</li>
          <li>
            BLIP & RAM = Automatic detection + segmentation labels from any
            image
          </li>
          <li>
            Grounded SAM + Stable diffusion = Automatic Synthetic data
            generation + controllable image editing system
          </li>
          <li>
            Grounded SAM + OSX = Mesh recovery + human motion analysis
          </li>
        </ol>

        <div className="relative mx-auto h-auto w-full max-w-3xl">
            <Image
                src={image}
                alt="Diagram of Grounded SAM pipelines"
                width={861}
                height={766}
                className="rounded-lg object-contain"
                layout="responsive"
            />
            <hr className="!my-4 border-gray-700" />

        </div>
        <hr className="!my-4 border-gray-700" />
      </div>

       <RelatedPosts allPosts={postsData} currentPostSlug={slug} />
    </article>
  );
}