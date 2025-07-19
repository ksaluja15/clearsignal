import Image from 'next/image';
import Link from 'next/link';

import { RelatedPosts } from '@/app/components/RelatedPosts';
import { postsData } from '@/app/data/posts';
import { generatePostMetadata } from '@/app/lib/metadata';

const slug = 'multi-task-losses';

export const metadata = generatePostMetadata(slug);

const image1 = '/blog/multi-task-losses/Screenshot-from-2024-03-03-16-44-51.png';
const image2 = '/blog/multi-task-losses/Screenshot-from-2024-03-09-09-23-28.png';
const profile = '/kunal-saluja.jpg';

const MathFormula = ({
  inline = false,
  children,
}: {
  inline?: boolean;
  children: string;
}) => {
  
  const Tag = inline ? 'span' : 'div';
  
  
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
          Multi-task Loss
        </h1>
        <p className="mt-4 text-xl text-[var(--color-text-secondary)] sm:text-2xl">
          This is a short review of the paper titled "Multi-Task
          Learning Using Uncertainty to Weigh Losses for Scene Geometry and
          Semantics" by Kendall et al, 2018 .
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
              <time dateTime="2024-03-09">Mar 9, 2024</time>
              <span className="mx-1">•</span>
              <span>3 min read</span>
            </div>
          </div>
        </div>
      </header>

      <div className="post-content content-grid mt-8 space-y-8 px-4 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
        <p>
          This is a short review of the paper titled "Multi-Task
          Learning Using Uncertainty to Weigh Losses for Scene Geometry and
          Semantics" by Kendall et al, 2018 .
        </p>
        <hr className="!my-4 border-gray-700" />

        <h2 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Problem description
        </h2>
        <p>
          Given a model with multiple heads(tasks), how to balance all the
          losses ? The gradients are affected by the magnitude of losses, and
          naturally the tasks with higher loss magnitudes are prioritized.
        </p>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image1}
            alt="Multi-task model architecture"
            width={753}
            height={389}
            className="rounded-lg object-contain"
          />
        </figure>
        <hr className="!my-4 border-gray-700" />

        <h2 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Key Contribution
        </h2>
        <p>
          The author uses the example of a multi-head model predicting
          semantic segmentation, instance segmentation and inverse depth in
          this paper to demonstrate his experiment.
        </p>
        <p>
          <strong className="font-bold text-white">Core idea</strong>
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            Let each model branch predict its own{" "}
            <em className="italic">homoscedastic</em> uncertainty
          </li>
          <li>Weigh each loss by the branch's respective uncertainty</li>
        </ul>
        <hr className="!my-4 border-gray-700" />

        <h2 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Proof
        </h2>
        <p>
          Let <MathFormula inline>{"\\( f^W(x) \\)"}</MathFormula> be the
          output of a neural network with weights{" "}
          <MathFormula inline>{"\\( W \\)"}</MathFormula> on input{" "}
          <MathFormula inline>{"\\( x \\)"}</MathFormula>. For regression
          tasks we define our likelihood as a Gaussian with mean given by the
          model output :
        </p>
        <MathFormula>
          {"\\( p(y|f^W(x)) = \\mathcal{N}(f^W(x),\\sigma^{2}) \\tag{1} \\)"}
        </MathFormula>
        <p>
          Multi task likelihoods can be defined as (assuming independent
          random variables) :
        </p>
        <MathFormula>
          {
            "\\(p (y_{1},\\dots, y_{k}|f^W(x) ) = p( y_{1}|f^W(x)),\\dots,p( y_{k}|f^W(x)) \\tag{2} \\)"
          }
        </MathFormula>
        <p>
          The probability density of observing a single data point x, that is
          generated from a Gaussian distribution is given by:
        </p>
        <MathFormula>
          {
            "\\( f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} e^{\\frac{-(x-\\mu)^2}{2\\sigma^2}} \\tag{3} \\)"
          }
        </MathFormula>
        <p>
          Substituting (3) in (1), Log likelihood for multi task input can be
          defined as:
        </p>
        <MathFormula>
          {
            "\\( \\log_{e}{p(y|f^{W}(x))} \\propto \\frac{-1}{2\\sigma^2} \\lVert y-f^{W}(x)\\rVert^2 - \\log{\\sigma} \\tag{4} \\)"
          }
        </MathFormula>
        <p>
          Now let's assume that our model output is composed of two
          vectors y1 and y2, each following a Gaussian distribution such that:
        </p>
        <MathFormula>
          {
            "\\( p(y1,y2|f^{W}(x)) = p(y1|f^{W}(x)) \\cdot p(y2|f^{W}(x)) = \\mathcal{N}(y1;f^W(x),\\sigma_{1}^{2}) \\cdot \\mathcal{N}(y2;f^W(x),\\sigma_{2}^{2}) \\tag{5} \\)"
          }
        </MathFormula>
        <p>Taking log on both sides and expanding (5) using (4), we get:</p>
        <MathFormula>
          {
            "\\( - \\log{p(y1, y2, | f^{W}(x))} \\propto \\frac{1}{2\\sigma_{1}^2} \\lVert y_{1}-f^{W}(x)\\rVert^2 + \\frac{1}{2\\sigma_{2}^2} \\lVert y_{2}-f^{W}(x)\\rVert^2 + \\log{\\sigma_{1}\\sigma_{2}} \\)"
          }
        </MathFormula>
        <MathFormula>
          {
            "\\(   = \\frac{1}{2\\sigma_{1}^2}\\mathcal{L}_{1}(W) + \\frac{1}{2\\sigma_{2}^2}\\mathcal{L}_{2}(W) +  \\log{\\sigma_{1}\\sigma_{2}} \\)"
          }
        </MathFormula>
        <p>
          As <MathFormula inline>{"\\( \\sigma_{1} \\)"}</MathFormula> (the
          noise parameter for the variable{" "}
          <MathFormula inline>{"\\( y_{1} \\)"}</MathFormula> ) increases,
          weight of{" "}
          <MathFormula inline>{"\\( \\mathcal{L}_{1} \\)"}</MathFormula>{" "}
          decreases. On the other hand, as the noise decreases, the weight of
          the respective objective increases. The noise is discouraged from
          increasing too much (effectively ignoring the data) by the last
          term in the objective, which acts as a regulariser for the noise
          terms.
          <br />
          <strong className="font-bold text-white">
            In practice, we train the network to predict the{" "}
            <MathFormula inline>{"\\( \\sigma^{2} \\)"}</MathFormula>. This is
            numerically more stable than regressing the variance,{" "}
            <MathFormula inline>{"\\( \\sigma \\)"}</MathFormula>, as the loss
            avoids any division by zero.
          </strong>
        </p>
        <hr className="!my-4 border-gray-700" />
        <h2 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Results
        </h2>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image2}
            alt="Results table showing comparison of different loss weighting methods"
            width={970}
            height={471}
            className="rounded-lg object-contain"
          />
        </figure>
        <p>
          A reasonably well trained model is obtained without the need for
          manual loss weight adjustment. There's a minor improvement
          observed in segmentation + inverse depth metrics.
        </p>
        <hr className="!my-4 border-gray-700" />
      </div>
      <RelatedPosts allPosts={postsData} currentPostSlug={slug} />
    </article>
  );
}