import { Callout } from '@/app/components/Callout';
import Image from 'next/image';
import Link from 'next/link';

import { RelatedPosts } from '@/app/components/RelatedPosts';
import { postsData } from '@/app/data/posts';

import { generatePostMetadata } from '@/app/lib/metadata';
const slug = 'detection-classification-metrics' ;

export const metadata = generatePostMetadata(slug);

const image1 = '/blog/detection-classification-metrics/pr.webp';
const image2 = '/blog/detection-classification-metrics/ft.webp';
const profile = '/kunal-saluja.jpg';

const MathFormula = ({
  inline = false,
  children,
}: {
  inline?: boolean;
  children: string;
}) => {
  if (!inline) {
    return (
      <div className="math-container">
        <div
          className="text-center"
          dangerouslySetInnerHTML={{ __html: children }}
        />
      </div>
    );
  }
  return <span dangerouslySetInnerHTML={{ __html: children }} />;
};

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
          Detection/Classification metrics
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
              <time dateTime="2020-12-22">Dec 22, 2020</time>
              <span className="mx-1">•</span>
              <span>2 min read</span>
            </div>
          </div>
        </div>
      </header>

      <div className="post-content content-grid mt-8 space-y-8 px-4 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Problem Statement
        </h3>
        <ol className="list-inside list-decimal space-y-2">
          <li>
            Once we've trained multiple detection/classification models, how to
            choose the best model ?
          </li>
          <li>
            Once we've chosen the best model, how to choose the optimum
            operating point (the best threshold) ?
          </li>
        </ol>

        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Solution
        </h3>
        <p>
          There are two metrics which can help us here. If you've come across
          terms like AP, mAP and F-1 score in research papers, these are
          precisely the metrics that help us with the above mentioned
          problems. Let's begin by defining precision and recall, which are
          pre-requisities to understanding other metrics.
        </p>

        <h4 className="!mt-12 text-xl font-bold text-white md:text-2xl">
          Precision and Recall
        </h4>
        <p>Let's assume that we've trained a car detector.</p>
        <Callout emoji="💡">
          Precision is the ratio of true positives to total number of
          predictions. For every N predictions made by this detector on an
          image, this metric tells us what percentage of those detections are
          actually cars.
        </Callout>

        <MathFormula>{"$$ Precision = \\frac{TP}{TP+FP} $$"}</MathFormula>

        <Callout emoji="💡">
          Recall is the ratio of correct predictions to the number of ground
          truth labels available for the class. Assuming that we have X cars in
          an image, this metric tells us what percentage of those X cars were
          detected correctly.
        </Callout>

        <MathFormula>{"$$ Recall = \\frac{TP}{TP+FN} $$"}</MathFormula>

        <h4 className="!mt-12 text-xl font-bold text-white md:text-2xl">
          Average Precision (AP)
        </h4>
        <Callout emoji="💡">
          Average Precision is the area under the Precision - Recall curve.
        </Callout>
        <MathFormula>{"$$ AP = \\int_0^1 P(r) ,dr $$"}</MathFormula>

        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image1}
            alt="Precision-Recall Curve"
            width={2000}
            height={1333}
            className="rounded-lg object-contain"
          />
        </figure>
        <p>
          We can use the standard sklearn package to compute the AUC (area under
          the curve), or we can approximate the area, as shown in the figure
          above.
          <br />
          <br />
          Mean Average Precision (mAP) is the mean of AP for all classes.
        </p>
        <MathFormula>{"$$ mAP=\\sum_0^N\\frac{AP(i)}{N} $$"}</MathFormula>
        <Callout emoji="💡">
          Given N different models, the optimal model choice in *most*
          situations is the one with the highest mAP
        </Callout>

        <h4 className="!mt-12 text-xl font-bold text-white md:text-2xl">
          F1 score
        </h4>
        <Callout emoji="💡">
          F1 score is described as the harmonic mean of precision and recall.
          If we were to calculate the F1 score for every point on the PR curve,
          the point with the highest F1 score is generally chosen as an
          operating point.
        </Callout>
        <MathFormula>{"$$ F1=\\frac{2PR}{P+R} $$"}</MathFormula>

        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image2}
            alt="F1 score vs Threshold"
            width={2000}
            height={1333}
            className="rounded-lg object-contain"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-400">
            This is also known as the Equal Error Rate (EER) point.
          </figcaption>
        </figure>
        <hr className="!my-4 border-gray-700" />
      </div>
      
       <RelatedPosts allPosts={postsData} currentPostSlug={slug} />
    </article>
  );
}