import Image from 'next/image';
import Link from 'next/link';

import { RelatedPosts } from '@/app/components/RelatedPosts';
import { postsData } from '@/app/data/posts';

import { generatePostMetadata } from '@/app/lib/metadata';

const slug = 'quick-nlp-overview';

export const metadata = generatePostMetadata(slug);

const profile = '/kunal-saluja.jpg';
const image1 = '/blog/quick-nlp-overview/nlp_amazon.gif';
const image2 = '/blog/quick-nlp-overview/nlp_tasks.png';
const image3 = '/blog/quick-nlp-overview/nlp_coref.png';
const image4 = '/blog/quick-nlp-overview/nlp_seq_tag.png';
const image5 = '/blog/quick-nlp-overview/nlp_rnn.png';
const image6 = '/blog/quick-nlp-overview/nlp_lstm.png';
const image7 = '/blog/quick-nlp-overview/nlp_trans.png';

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
          Short NLP Overview!
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
              <time dateTime="2022-01-16">Jan 16, 2022</time>
              <span className="mx-1">•</span>
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </header>

      <div className="post-content content-grid mt-8 space-y-8 px-4 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
        <h3
          id="outline"
          className="!mt-12 text-2xl font-bold text-white md:text-3xl"
        >
          Outline
        </h3>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <a href="#intro" className="underline hover:text-white">
              Introduction
            </a>
          </li>
          <li>
            <a href="#caa" className="underline hover:text-white">
              Neural Network Modeling
            </a>
          </li>
          <li>
            <a href="#ar" className="underline hover:text-white">
              Available resources
            </a>
          </li>
          <li>
            <a href="#ref" className="underline hover:text-white">
              References
            </a>
          </li>
        </ul>

        <h3
          id="intro"
          className="!mt-12 text-2xl font-bold text-white md:text-3xl"
        >
          Introduction
        </h3>
        <p>
          <strong>Natural language processing (NLP)</strong> is a branch of
          science sitting at the intersection of computer science, artificial
          intelligence, and computational linguistics. To put it simply, it
          gives computers the ability to read, understand and generate text and
          speech just like we do. Within the last decade, NLP-based products
          have become ubiquitous. Here are some common
          <br />
          NLP applications/products you might be aware of:
        </p>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Amazon Alexa or Siri</li>
          <li>Voice input in Google or Apple Maps</li>
          <li>Conversational chatbots</li>
          <li>Google or Siri Translate</li>
        </ul>
        <p>
          From a computer vision scientist's perspective, NLP is becoming
          increasingly important as time goes by. From the use of pre-trained
          embeddings to vision transformers, we are starting to observe how
          architectures used in both fields have concepts in common. For all
          aspiring AI practitioners, it is important to know the basic
          algorithms in
          <br />
          both fields.
        </p>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image1}
            alt="Amazon Alexa NLP example"
            width={1214}
            height={889}
            className="rounded-lg object-contain"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-400">
            Source: Amazon
          </figcaption>
        </figure>
        <p>NLP can be broadly broken down into 4 key areas:</p>
        <ol className="list-inside list-decimal space-y-4">
          <li>
            <em>
              <strong>Language Modeling</strong>
            </em>
            <br />
            Language modeling is the task of assigning a probability to
            sentences in a language. Besides assigning a probability to each
            sequence of words, the language model also assigns a probability for
            the likelihood of a given
            <br />
            word (or a sequence of words) to follow another sequence of words.
            [1]
          </li>
          <li>
            <em>
              <strong>Morphology</strong>
            </em>
            <br />
            Morphology is the study of words, how they are formed, and their
            relationship to other words in the same language. It analyzes the
            structure of words and parts of words such as stems, root words,
            prefixes, and suffixes. [2]
          </li>
          <li>
            <em>
              <strong>Parsing / Syntactic Analysis</strong>
            </em>
            <br />
            Syntactic analysis, also referred to as syntax analysis or parsing,
            is the process of analyzing natural language with the rules of
            formal grammar. Grammatical rules are applied to categories and
            groups of words, not individual words, thereby assigning a semantic
            structure to text. [3]
          </li>
          <li>
            <em>
              <strong>Semantic Analysis</strong>
            </em>
            <br />
            Semantic analysis refers to the process of understanding the meaning
            behind sentences. it is a study of what words mean when they are put
            together in a sentence. It takes into account the individual meaning
            of words, how they relate and modifies neighboring words, and the
            context these words appear in.
          </li>
        </ol>

        <h3
          id="caa"
          className="!mt-12 text-2xl font-bold text-white md:text-3xl"
        >
          Neural Network Modeling
        </h3>
        <p>
          Modern-day NLP mostly relies on deep neural networks(DNN) for
          predictions. NLP engineers have to make 3 important choices before
          they train any neural network:
        </p>
        <ol className="list-inside list-decimal space-y-2">
          <li>Defining the "Task"</li>
          <li>Choosing word embeddings</li>
          <li>Choosing the neural network architecture</li>
        </ol>

        <h4
          id="defining-the-task"
          className="!mt-12 text-xl font-bold text-white md:text-2xl"
        >
          Defining the "Task"
        </h4>
        <p>
          Here are some broad categories defined in the AllenNLP model library.
          Code + paper + weights are available at{' '}
          <a
            href="https://paperswithcode.com/lib/allennlp"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Papers with Code
          </a>{' '}
          website.
        </p>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image2}
            alt="NLP Tasks from Papers with Code"
            width={1067}
            height={765}
            className="rounded-lg object-contain"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-400">
            Source: Papers with Code
          </figcaption>
        </figure>
        <p>
          a.{' '}
          <em>
            <strong>Classification</strong>
          </em>
          : Predicting one or more labels for each input. For example Sentiment
          analysis.
        </p>
        <p>
          b.{' '}
          <em>
            <strong>Coreference Resolution</strong>
          </em>
          : The goal is to find all expressions that are related to the same
          entity.
        </p>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image3}
            alt="Example of Coreference Resolution"
            width={350}
            height={93}
            className="rounded-lg object-contain"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-400">
            Example of Coreference Resolution. Source: Stanford NLP Group
          </figcaption>
        </figure>
        <p>
          c.{' '}
          <em>
            <strong>Generation</strong>
          </em>
          : Generating unstructured text of variable length. For example{' '}
          <a
            href="https://openai.com/blog/openai-api/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            GPT-3
          </a>
          .
        </p>
        <p>
          d.{' '}
          <em>
            <strong>Language Modeling</strong>
          </em>
          : Learning a probability distribution over a sequence of tokens.
        </p>
        <p>
          e.{' '}
          <em>
            <strong>Sequence Tagging</strong>
          </em>
          : Information extraction task where each word in a sentence is
          classified with a pre-defined label set.
        </p>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image4}
            alt="Example of Sequence Tagging"
            width={355}
            height={75}
            className="rounded-lg object-contain"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-400">
            Example of Sequence Tagging. Click image for source.
          </figcaption>
        </figure>
        <p>
          <em>
            <strong>PS:</strong>
          </em>{' '}
          This is not an exhaustive list.
        </p>

        <h4
          id="choosing-word-embeddings"
          className="!mt-12 text-xl font-bold text-white md:text-2xl"
        >
          Choosing word embeddings
        </h4>
        <p>
          NLP deals with massive vocabularies, ranging from 100k to millions of
          words. It would be inefficient to train a network if each word is
          represented with a vector of size V (where V is the size of this
          vocabulary). Word embeddings solve this problem as they reduce the
          dimensions of the encoding (compared to V), while adding meaning to
          the vectors.
          <br />
          Here are some common word embeddings:
        </p>
        <ol className="list-inside list-decimal space-y-4">
          <li>
            <em>
              <strong>Embedding Layer</strong>
            </em>
            <br />
            This is a neural network layer with weight dimensions (V x N), where
            V is the size of the vocabulary, and N is the embedding dimension.
            It is initialized with random values and the word embeddings are
            learned during the training phase. [
            <a
              href="https://gdcoder.com/what-is-an-embedding-layer/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Detailed Explanation
            </a>
            ]
          </li>
          <li>
            <em>
              <strong>Word2Vec</strong>
            </em>
            <br />
            Word2Vec was developed by Mikolov et al.{' '}
            <a
              href="https://arxiv.org/pdf/1301.3781.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              paper
            </a>{' '}
            in 2013. This technique uses the
            <br />
            local context around a word to develop a meaningful representation
            of it. It has two flavors:
            <ol className="list-inside list-decimal space-y-2 pl-8 mt-4">
              <li>Continuous Bag Of Words Model</li>
              <li>
                Skip-gram Model
                <br />
                <br />
                More details can be found{' '}
                <a
                  href="https://towardsdatascience.com/introduction-to-word-embedding-and-word2vec-652d0c2060fa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white"
                >
                  here
                </a>
                .
              </li>
            </ol>
          </li>
          <li>
            <em>
              <strong>GloVe (Global Vectors for Word Representation)</strong>
            </em>
            <br />
            GloVe was developed by Manning et al. At Stanford University. The
            main intuition underlying the model is the simple observation that
            ratios of word-word co-occurrence probabilities have the potential
            for encoding some form of meaning.
            <br />
            More details can be found{' '}
            <a
              href="https://nlp.stanford.edu/projects/glove/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              here
            </a>
            .
          </li>
          <li>
            <em>
              <strong>ELMO (Embeddings from Language Models)</strong>
            </em>
            <br />
            All the embeddings discussed above aim to provide 1 embedding per
            word, but we know that the meaning of a word changes with context.
            <br />
            To solve this problem, ELMO trains custom <strong>deep</strong>{' '}
            embeddings for each word, based on the context/usage. For example,
            the word "right"
            <br />
            will have different embeddings for the following sentences:
            <ol className="list-inside list-decimal space-y-2 pl-8 mt-4">
              <li>Take the next right.</li>
              <li>You are right about that problem.</li>
            </ol>
          </li>
          <li>
            <em>
              <strong>
                BERT (Bidirectional Encoder Representations from Transformers)
              </strong>
            </em>
            <br />
            Both Elmo and Bert are deep embeddings that involve training
            wider/deeper neural networks on a big corpus.
            <br />
            The key difference between the two lies in the training objective.
            <ol className="list-inside list-decimal space-y-2 pl-8 mt-4">
              <li>
                ELMO uses the traditional Language Modeling training objective
                to generate the next word given previous words in the sentence.
                It tries to calculate P(Xi| Xi-1, Xi-2, Xi-n) such that the
                resulting distribution mimics the distribution in the training
                corpus.
              </li>
              <li>
                Bert uses the 'masked' language modeling objective. It
                randomly masks words (with some probability) in the training
                corpus and uses the surrounding words to predict the missing
                word.
              </li>
            </ol>
          </li>
        </ol>

        <h4
          id="choosing-the-neural-network-architecture"
          className="!mt-12 text-xl font-bold text-white md:text-2xl"
        >
          Choosing the neural network architecture
        </h4>
        <p>There are two classes of architectures we should look at:</p>

        <h5 className="!mt-10 text-lg font-bold text-white md:text-xl">
          <em>Traditional Sequence models</em>
        </h5>
        <p>The most commonly used sequence models are :</p>
        <p>
          a.{' '}
          <strong>
            <em>RNN (Recurrent neural networks)</em>
          </strong>
          <br />
          Recurrent neural networks are a class of networks that consume
          sequential inputs. They update the current state(memory) based on the
          previous state and the current input.
        </p>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image5}
            alt="Recurrent Neural Network unfolded"
            width={749}
            height={238}
            className="rounded-lg object-contain"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-400">
            Source
          </figcaption>
        </figure>
        <p>
          b.{' '}
          <strong>
            <em>LSTM (Long short term memory) networks</em>
          </strong>
          <br />
          LSTM is a type of RNN that gets rid of the vanishing gradient problem
          by regulating the gradient flow using gates.
        </p>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image6}
            alt="LSTM cell diagram"
            width={611}
            height={383}
            className="rounded-lg object-contain"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-400">
            Source
          </figcaption>
        </figure>
        <p>
          c.{' '}
          <strong>
            <em>GRU (Gated recurrent unit) networks</em>
          </strong>
          <br />
          GRU is a simplified version of LSTM, with only 2 gates instead of 3.
          It's faster to train as compared to LSTMs and provides similar
          performance metrics on a variety of datasets.
        </p>
        <p>
          NOTE: A step by step explanation on these models can be found at{' '}
          <a
            href="http://colah.github.io/posts/2015-08-Understanding-LSTMs/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Colah's Blog
          </a>
          .
        </p>

        <h5 className="!mt-10 text-lg font-bold text-white md:text-xl">
          <em>Transformers</em>
        </h5>
        <p>
          Transformer networks are one of the most widely used architectures in
          NLP over the last 4 years. The architecture deploys a novel use of the
          familiar concepts of{' '}
          <strong>
            <em>self-attention</em>
          </strong>
          ,{' '}
          <strong>
            <em>multi-head attention</em>
          </strong>
          , and{' '}
          <strong>
            <em>positional encodings</em>
          </strong>{' '}
          inside an encoder-decoder design, thereby enhancing the performance of
          the model.{' '}
          <strong>
            <em>
              GPT-3 uses a modified version of this architecture and almost
              passed the Turing test for short articles!
            </em>
          </strong>
        </p>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image7}
            alt="Transformer architecture diagram"
            width={367}
            height={493}
            className="rounded-lg object-contain"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-400">
            Source
          </figcaption>
        </figure>
        <p>
          Please refer to this{' '}
          <a
            href="https://jalammar.github.io/illustrated-transformer/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            blog
          </a>{' '}
          for more details on transformers.
        </p>

        <h3 id="ar" className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Available Resources
        </h3>
        <h5 className="!mt-10 text-lg font-bold text-white md:text-xl">
          Paid APIs for NLP
        </h5>
        <p>
          The API industry for NLP has really blossomed over the years. You can
          find APIs for all the tasks listed{' '}
          <a href="#caa" className="underline hover:text-white">
            here
          </a>
          .
          <br />
          Here are a few APIs that I came across:
        </p>
        <ol className="list-inside list-decimal space-y-2">
          <li>Google Cloud</li>
          <li>HuggingFace</li>
          <li>NLP Cloud</li>
          <li>IBM Watson</li>
          <li>Aylien</li>
        </ol>

        <h5 className="!mt-10 text-lg font-bold text-white md:text-xl">
          Python Libraries for NLP
        </h5>
        <p>
          I've been experimenting with AllenNLP, which provides pre-built
          models, encoder/decoder blocks, vocabulary builders, indexers, and
          tokenizers. It's a layer on top of Pytorch and seems pretty
          intuitive. Moreover, the documentation provided is sufficient to get
          started with, which isn't the case with TorchText as of now.
          Other than that, they don't differ a lot.
          <br />
          Here are some open-source python libraries which can be used for model
          training and inference:
        </p>
        <ol className="list-inside list-decimal space-y-2">
          <li>TorchText : Torch Library</li>
          <li>Spacy : This is equivalent to 'scipy' for NLP !</li>
          <li>
            HuggingFace: primarily used for transformers, sharing open-source
            models, datasets and metrics
          </li>
          <li>AllenNLP: research framework built on pytorch</li>
        </ol>
        <p>
          This concludes this short intro to NLP. I'll try to snipe at
          certain topics and provide a detailed analysis in the upcoming
          articles.
          <br />
          Thanks for reading!
        </p>

        <h3 id="ref" className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          References
        </h3>
        <ol className="list-inside list-decimal space-y-4 text-base">
          <li>
            Page 105,{' '}
            <a
              href="https://www.amazon.com/Language-Processing-Synthesis-Lectures-Technologies/dp/1627052984"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Neural Network Methods in Natural Language Processing, 2017.
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Morphology_(linguistics)"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Wiki
            </a>
          </li>
          <li>
            <a
              href="https://builtin.com/data-science/introduction-nlp"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Introduction to NLP
            </a>
          </li>
          <li>
            <a
              href="https://ieeexplore.ieee.org/document/9075398"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              A Survey of the Usages of Deep Learning for Natural Language
              Processing
            </a>
          </li>
          <li>
            <a
              href="https://guide.allennlp.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Allen Institute for AI
            </a>
          </li>
          <li>
            <a
              href="https://jalammar.github.io/illustrated-bert/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              The Illustrated BERT, ELMo, and co.
            </a>
          </li>
        </ol>
        <hr className="!my-4 border-gray-700" />
      </div>
      <RelatedPosts allPosts={postsData} currentPostSlug={slug} />

    </article>
  );
}