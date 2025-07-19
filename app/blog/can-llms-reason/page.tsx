import Image from 'next/image';
import Link from 'next/link';

import { RelatedPosts } from '@/app/components/RelatedPosts';
import { postsData } from '@/app/data/posts';


import { generatePostMetadata } from '@/app/lib/metadata';

const slug = 'can-llms-reason';

export const metadata = generatePostMetadata(slug);


const profile = '/kunal-saluja.jpg';
const image1 = '/blog/can-llms-reason/Screenshot-from-2024-11-08-14-15-34.png';
const image2 = '/blog/can-llms-reason/Screenshot-from-2024-11-07-16-25-16.png';
const image3 = '/blog/can-llms-reason/Screenshot-from-2024-11-07-16-26-25.png';
const image4 = '/blog/can-llms-reason/Screenshot-from-2024-11-07-16-31-51.png';
const image5 = '/blog/can-llms-reason/Screenshot-from-2024-11-07-16-53-42.png';

export default function Page() {
  return (
    <article className="py-8 sm:py-16">
      <header className="content-grid px-4">
        <div className="mb-4 flex gap-2">
          <Link
            href="/tag/papers"
            className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] hover:text-white"
          >
            papers
          </Link>
        </div>
        <h1 className="post-title font-extrabold leading-tight">
          NOTES: Can LLMs truly reason?
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
              <time dateTime="2024-11-07">Nov 7, 2024</time>
              <span className="mx-1">•</span>
              <span>3 min read</span>
            </div>
          </div>
        </div>
      </header>

      <div className="post-content content-grid mt-8 space-y-8 px-4 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
        <p>
          Can LLMs actually reason, or are they just “probabilistic pattern
          matchers” ? This paper (
          <a
            href="https://arxiv.org/pdf/2410.05229?ref=clearsignal.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            GSM-Symbolic: Understanding the Limitations of Mathematical
            Reasoning in Large Language Models. by Mirzadeh et al.
          </a>
          ) attempts to answer that question.
        </p>

        <hr className="border-gray-700" />

        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          <strong>Motivation:</strong>
        </h3>
        <ul className="list-inside list-disc space-y-2">
          <li>
            GSM8K benchmark is widely used to assess the mathematical reasoning
            of models on grade-school-level questions.
          </li>
        </ul>

        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image1}
            alt=""
            width={789}
            height={646}
            className="rounded-lg object-contain"
          />
        </figure>

        <ul className="list-inside list-disc space-y-2">
          <li>
            While the performance of LLMs on GSM8K has significantly improved
            in recent years, it remains unclear whether their mathematical
            reasoning capabilities have genuinely advanced, raising questions
            about the reliability of the reported metrics.
          </li>
        </ul>

        <hr className="border-gray-700" />

        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          <strong>Datasets:</strong>
        </h3>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <strong>
              <em>GSM-Symbolic:</em>
            </strong>{' '}
            an enhanced benchmark that generates diverse variants of GSM8K
            questions using symbolic templates
          </li>
          <li>
            <strong>
              <em>GSM-No Op</em>
            </strong>
            : To create the templates, we add seemingly relevant but ultimately
            inconsequential statements to GSM-Symbolic templates. Since these
            statements carry no operational significance, we refer to them as
            "No-Op". These additions do not affect the reasoning required to
            solve the problem.
          </li>
          <li>
            <strong>GSM-Symbolic-{'{M1, P1, P2}'}</strong> : GSM-Symbolic with
            increasing difficulty M1 {'<'} P1 {'<'} P2
          </li>
        </ul>

        <hr className="border-gray-700" />

        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          <strong>Findings:</strong>
        </h3>
        <ul className="list-inside list-disc space-y-2">
          <li>
            LLMs exhibit noticeable variance when responding to different
            instantiations of the same question. Specifically, the performance
            of all models declines when only the numerical values in the
            question are altered in the GSM-Symbolic benchmark.
          </li>
          <li>
            When we add a single clause that appears relevant to the question,
            we observe significant performance drops (up to 65%) across all
            state-of-the-art models, even though the added clause does not
            contribute to the reasoning chain needed to reach the final
            answer.
          </li>
          <li>
            LLMs exhibit more robustness to changes in superficial elements
            like proper names but are very sensitive to changes in numerical
            values
          </li>
          <li>
            Results on GSM8K demonstrate that the performance of LLMs can be
            viewed as a distribution with unwarranted variance across different
            instantiations of the same question.
          </li>
          <li>
            By adding seemingly relevant but ultimately irrelevant information
            to problems, we demonstrate substantial performance drops (up to
            65%) across all state-of-the-art models
          </li>
          <li>
            current LLMs are not capable of genuine logical reasoning; instead,
            they attempt to replicate the reasoning steps observed in their
            training data.
          </li>
        </ul>

        <hr className="border-gray-700" />

        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          <strong>Techniques:</strong>
        </h3>
        <ul className="list-inside list-disc space-y-2">
          <li>
            Varying numbers, names or both in the GSM-Symbolic dataset to study
            the variance in responses.
          </li>
          <li>
            Adding additional constraints to the question, relevant or
            irrelevant, and studying the responses.
          </li>
          <li>
            Measuring the decrease in accuracy as the complexity of questions
            rises
          </li>
        </ul>

        <hr className="border-gray-700" />

        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Results:
        </h3>
        <ul className="list-inside list-disc space-y-2">
          <li>
            Performance drop on GSM-Symbolic VS GSM8K. Most likely these
            models have memorized the results on GSM8K, since it has been
            publicly available for a long time
          </li>
        </ul>

        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image2}
            alt=""
            width={1174}
            height={579}
            className="rounded-lg object-contain"
          />
        </figure>

        <ul className="list-inside list-disc space-y-2">
          <li>
            Models are more robust to variations in Name, but less so for
            numbers.
          </li>
        </ul>

        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image3}
            alt=""
            width={1189}
            height={675}
            className="rounded-lg object-contain"
          />
        </figure>

        <ul className="list-inside list-disc space-y-2">
          <li>
            As the difficulty of questions increases, model performance reduces
            and variance in responses rises. This loosely suggests that the
            model can’t think logically.
          </li>
        </ul>

        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image4}
            alt=""
            width={801}
            height={842}
            className="rounded-lg object-contain"
          />
        </figure>

        <ul className="list-inside list-disc space-y-2">
          <li>
            Models blindly infer certain operations, proving that they have
            memorized responses. In Both responses, models subtract the kiwis
            without being asked to do so.
          </li>
        </ul>

        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image5}
            alt=""
            width={796}
            height={519}
            className="rounded-lg object-contain"
          />
        </figure>
        <hr className="!my-4 border-gray-700" />
      </div>
      <RelatedPosts allPosts={postsData} currentPostSlug={slug} />
    </article>
  );
}