import Image from 'next/image';
import Link from 'next/link';

import { RelatedPosts } from '@/app/components/RelatedPosts';
import { postsData } from '@/app/data/posts';

import { generatePostMetadata } from '@/app/lib/metadata';

const slug = 'designing-and-shipping-a-ml-feature';

export const metadata = generatePostMetadata(slug);

const image1 = '/blog/designing-and-shipping-a-ml-feature/design_ml.webp';
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
          Designing and shipping a ML Feature
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
              <time dateTime="2021-04-03">Apr 3, 2021</time>
              <span className="mx-1">•</span>
              <span>2 min read</span>
            </div>
          </div>
        </div>
      </header>

      <div className="post-content content-grid mt-8 space-y-8 px-4 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
        <p>
          What exactly are we trying to accomplish? Will the new model
          architecture really be a game-changer? How much impact will this new
          dataset have on the model accuracy? <br />
          These are some questions a typical machine learning team deals with on
          a daily basis. <br />
          But it is important to not get bogged down by the intricacies, and
          always go back to the first principles approach. With the pace at
          which new research papers are pouring in, it is important for
          ML/Data/CV Scientists to sometimes take a back seat and think about
          the overall picture a bit more.
        </p>

        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image1}
            alt=""
            width={789}
            height={683}
            className="rounded-lg object-contain"
          />
        </figure>

        <p>
          If we start off with a tiny open-source dataset and loop through
          this design cycle, we can establish a pretty solid baseline. The bulk
          of the work after this should be focused on the finer aspects of the
          product, the outliers/corner cases in particular.
        </p>

        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Establishing goals and use-cases
        </h3>
        <p>
          This is perhaps the most important part of this strategy. It involves
          working closely with the product managers to decide the overarching
          goal, which dictates the key requirements of the product. Any mistake
          here can prove to be very costly, both from employee retention and a
          financial standpoint. After all, no one likes to work for managers
          who keep shifting the goal post.
          <br />
          <br />
          Here are some key components of each strategy. I refrained from going
          into details for each component here, as it's mostly
          self-explanatory. Instead, I wanted to focus more on the vast breadth
          of issues here, since the finer details vary for each team.
        </p>

        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Data Strategy
        </h3>
        <ol className="list-inside list-decimal space-y-2">
          <li>
            <strong>Data Collection</strong> → Using "off the shelf" datasets or
            creating a dataset from scratch?
          </li>
          <li>
            <strong>Data Labeling</strong> → Manual or Automatic annotation?
          </li>
          <li>
            <strong>Data Backend</strong> → Storage, Indexing, and Delivery.
            Usually, AWS S3 is used for storage, while teams tend to build their
            own layer (typically python-based) for serving the data.
          </li>
        </ol>

        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Model Strategy
        </h3>
        <ol className="list-inside list-decimal space-y-2">
          <li>
            <strong>Training Framework</strong> → Pytorch or Tensorflow?
          </li>
          <li>
            <strong>Training Infrastructure</strong> → AWS or self-built GPU rigs
            or both?
          </li>
          <li>
            <strong>"Off the shelf" models</strong> for establishing baseline
            (if available)
          </li>
          <li>
            <strong>Exploring the Accuracy / Speed TradeOff</strong> → This blog
            details how EfficientNet does exactly that.
          </li>
          <li>
            <strong>Neural architecture search</strong> → This blog talks about
            how NAS can be used in specific cases to greatly reduce the network
            size while maintaining accuracy
          </li>
        </ol>

        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Deployment Strategy
        </h3>
        <ol className="list-inside list-decimal space-y-2">
          <li>
            <strong>On the cloud</strong> → Typically web apps are hosted on AWS,
            and the model will run in a multi-threaded manner on multiple GPU
            instances.
          </li>
          <li>
            <strong>On embedded device</strong> → Mobile phones, ASICS/FPGA, or
            other chipsets. While iPhones offer a painless experience in
            deploying ML models, android and other devices usually require more
            custom solutions, although that has started to change now.
          </li>
          <li>
            <strong>Model compatibility</strong> → This issue usually arises
            while deploying on embedded devices. Some ML ops may not be
            supported by the hardware, thus influencing the model strategy to
            accommodate the changes.
          </li>
          <li>
            <strong>Code consistency</strong> → This issue usually arises while
            deploying on embedded devices. If there's additional logic wrapping
            the model, it needs to be tested offline and online to ensure
            consistency.
          </li>
          <li>
            <strong>Speed Feedback</strong> → Quick prototyping may reveal some
            flaws in the model design causing latency issues. This influences
            the model strategy.
          </li>
        </ol>

        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Quality Testing Strategy
        </h3>
        <ol className="list-inside list-decimal space-y-2">
          <li>
            <strong>Right Metrics</strong> → Going back to the goal establishment
            phase, this is where we need to make sure the performance metrics
            mirror the goals.
          </li>
          <li>
            <strong>True fine-grained analysis</strong> → Qualitative and
            Quantitative analysis of the model is essential for iterative
            improvement. This impacts every strategy.
          </li>
        </ol>

        <p>
          This is not an exhaustive list by any means, but many ML teams
          usually follow this model. Feel free to leave comments.
        </p>
      </div>
      <hr className="!my-4 border-gray-700" />
      <RelatedPosts allPosts={postsData} currentPostSlug={slug} />

    </article>
  );
}