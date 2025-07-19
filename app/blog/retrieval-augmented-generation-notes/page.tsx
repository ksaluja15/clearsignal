import CodeBlock from '@/app/components/CodeBlock';
import Image from 'next/image';
import Link from 'next/link';

import { RelatedPosts } from '@/app/components/RelatedPosts';
import { postsData } from '@/app/data/posts';

import { generatePostMetadata } from '@/app/lib/metadata';

const slug = 'retrieval-augmented-generation-notes';

export const metadata = generatePostMetadata(slug);

const image1 = '/blog/retrieval-augmented-generation-notes/Screenshot_2024-09-12_at_5.29.09_PM.png';
const image2 = '/blog/retrieval-augmented-generation-notes/Screenshot_2024-09-12_at_5.40.43_PM.png';
const image3 = '/blog/retrieval-augmented-generation-notes/Screenshot_from_2024-09-17_10-48-22.png';
const image4 = '/blog/retrieval-augmented-generation-notes/Screenshot_from_2024-09-18_11-05-05.png';
const image5 = '/blog/retrieval-augmented-generation-notes/Screenshot_from_2024-09-18_11-02-55.png';
const image6 = '/blog/retrieval-augmented-generation-notes/Screenshot-from-2024-09-18-13-58-47.png';
const profile = '/kunal-saluja.jpg';

export default function Page() {
  const codeSnippet1 = `import getpass
import os

os.environ["HUGGINGFACEHUB_API_TOKEN"] = getpass.getpass("Enter your token: ")

from langchain_huggingface import HuggingFaceEndpoint

# Using a huggingface model here instead of OPENAI, since it's free and open-source
llm = HuggingFaceEndpoint(
    repo_id="HuggingFaceH4/zephyr-7b-beta",
    task="text-generation",
    max_new_tokens=512,
    do_sample=False,
    repetition_penalty=1.03,
)`;

  const output1 = `The token has not been saved to the git credentials helper. Pass \`add_to_git_credential=True\` in this function directly or \`--add-to-git-credential\` if using via \`huggingface-cli\` if you want to set the git credential as well.
Token is valid (permission: read).
Your token has been saved to /home/kunal/.cache/huggingface/token
Login successful`;

  const codeSnippet2 = `import bs4
from langchain import hub
from langchain_chroma import Chroma
from langchain_community.document_loaders import WebBaseLoader
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough
from langchain.embeddings import HuggingFaceEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter

# Load, chunk and index the contents of the blog. Uinsg my own blog here for simplicity
loader = WebBaseLoader(
    web_paths=("https://www.clearsignal.xyz/cpu-vs-gpu-vs-tpu/",))
docs = loader.load()

model_name = "BAAI/bge-base-en-v1.5"
model_kwargs = {"device":'cpu'}
encode_kwargs = {'normalize_embeddings':True}

hf = HuggingFaceEmbeddings(
    model_name = model_name,
    model_kwargs = model_kwargs,
    encode_kwargs = encode_kwargs
)`;

  const codeSnippet3 = `text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
splits = text_splitter.split_documents(docs)
vectorstore = Chroma.from_documents(documents=splits, embedding=hf)`;

  const codeSnippet4 = `from loguru import logger

retriever = vectorstore.as_retriever(search_type="similarity", search_kwargs={"k": 6})

# Example
retrieved_docs = retriever.invoke("What are the approaches to Task Decomposition?")
logger.info(f"Number of retrieved docs: {len(retrieved_docs)}")
logger.info(f"Content of first doc: {retrieved_docs[0].page_content}")`;

  const output2 = `[32m2024-09-24 15:09:46.683 [0m |  [1mINFO     [0m |  [36m__main__ [0m: [36m<module> [0m: [36m7 [0m -  [1mNumber of retrieved docs: 6 [0m
[32m2024-09-24 15:09:46.684 [0m |  [1mINFO     [0m |  [36m__main__ [0m: [36m<module> [0m: [36m8 [0m -  [1mContent of first doc: Fig. 1. Overview of a LLM-powered autonomous agent system.
Component One: Planning#
A complicated task usually involves many steps. An agent needs to know what they are and plan ahead.
Task Decomposition#
Chain of thought (CoT; Wei et al. 2022) has become a standard prompting technique for enhancing model performance on complex tasks. The model is instructed to “think step by step” to utilize more test-time computation to decompose hard tasks into smaller and simpler steps. CoT transforms big tasks into multiple manageable tasks and shed lights into an interpretation of the model’s thinking process. [0m`;

  const codeSnippet5 = `prompt = hub.pull("rlm/rag-prompt")


def format_docs(docs):
    return "\\n\\n".join(doc.page_content for doc in docs)


rag_chain = (
    {"context": retriever | format_docs, "question": RunnablePassthrough()}
    | prompt
    | llm
    | StrOutputParser()
)`;

  const output3 = `/home/kunal/work/miniconda3/envs/torch/lib/python3.8/site-packages/langsmith/client.py:323: LangSmithMissingAPIKeyWarning: API key must be provided when using hosted LangSmith API
  warnings.warn(`;

  const codeSnippet6 = `rag_chain.invoke("How does a GPU work?")`;

  const output4 = `' A GPU (graphics processing unit) works by processing a large number of computations simultaneously, specifically designed for tasks such as rendering graphics and performing matrix operations. It is optimized for throughput over latency by running a large number of ALUs (arithmetic logic units) in parallel. This design allows GPUs to excel at tasks such as training deep learning models due to the high computational demands required. TPUs (tensor processing units) are a specialized type of processor designed specifically for machine learning and deep learning tasks. They are heavily optimized for ONLY these types of operations, compromising on the flexibility needed to perform other tasks. While CPUs (central processing units) can also perform these tasks, they are not optimized specifically for them, and their design requires them to execute instructions sequentially, making them less efficient for these tasks. In summary, CPUs are better suited for general-purpose computing, while GPUs and TPUs are better for specific computing tasks such as graphics rendering and machine learning.'`;

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
          NOTES: Retrieval-Augmented Generation for Large Language Models
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
              <time dateTime="2024-09-18">Sep 18, 2024</time>
              <span className="mx-1">•</span>
              <span>9 min read</span>
            </div>
          </div>
        </div>
      </header>

      <div className="post-content content-grid mt-8 space-y-8 px-4 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">

        <p>
          Paper:{' '}
          <a
            href="https://arxiv.org/abs/2312.10997?ref=clearsignal.xyz"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Retrieval-Augmented Generation for Large Language Models: A Survey
          </a>
        </p>
        <p>
          Authors: Yunfan Gaoa, Yun Xiongb, Xinyu Gaob, Kangxiang Jiab, Jinliu
          Panb, Yuxi Bic, Yi Daia, Jiawei Suna, Meng Wangc, and Haofen Wang
        </p>
                <p>
          Here is a short compilation of bullet points gathered while reading
          the paper " Retrieval-Augmented Generation for Large Language
          Models: A Survey". The authors did a reasonably good job
          summarizing the landscape of current RAG systems.
        </p>


        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Notes
        </h3>
        <hr className="my-8 border-t border-gray-700" />
        <ul className="list-inside list-disc space-y-4">
          <li>
            Retrieval-Augmented Generation (RAG) enhances LLMs by retrieving
            relevant document chunks from an external knowledge base through
            semantic similarity calculation.
            <figure className="mx-auto my-8 flex flex-col items-center">
              <Image
                src={image1}
                alt="Diagram of RAG enhancing LLMs"
                width={700}
                height={400}
                className="rounded-lg object-contain"
              />
            </figure>
          </li>
          <li>
            <strong className="text-white">Development techniques:</strong>
            <ul className="ml-8 mt-4 list-inside list-disc space-y-2">
              <li>Pretraining LLMs</li>
              <li>Inference/ In-context learning</li>
              <li>Finetuning LLMs</li>
            </ul>
          </li>
        </ul>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image2}
            alt="Taxonomy of RAG techniques"
            width={700}
            height={400}
            className="rounded-lg object-contain"
          />
        </figure>
        <ul className="list-inside list-disc space-y-4">
          <li>
            <strong className="text-white">Evolution of RAG:</strong>
            <ul className="ml-8 mt-4 list-inside list-disc space-y-2">
              <li>Naive</li>
              <li>Advanced</li>
              <li>Modular</li>
            </ul>
          </li>
        </ul>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image3}
            alt="Evolution of RAG paradigms"
            width={700}
            height={400}
            className="rounded-lg object-contain"
          />
        </figure>
        <ul className="list-inside list-disc space-y-4">
          <li>
            <strong className="text-white">Naive RAG</strong>
            <ul className="ml-8 mt-4 list-inside list-disc space-y-2">
              <li>
                3 steps
                <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                  <li>Indexing: Documents → chunks → vectors → Vector DBs</li>
                  <li>Retrieval : Query → Vector → Semantic similar search → top K</li>
                  <li>Generation : Query + top K vectors → Generated response</li>
                </ul>
              </li>
              <li>
                Cons:
                <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                  <li>Imprecise retrievals: Irrelevant chunks</li>
                  <li>
                    Too many similar chunks are retrieved leading to repeated
                    responses
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong className="text-white">Advanced RAG</strong>
            <ul className="ml-8 mt-4 list-inside list-disc space-y-2">
              <li>
                Pre-retrieval and post-retrieval strategies
                <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                  <li>
                    Pre-retrieval
                    <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                      <li>
                        Enhancing data granularity, optimizing index
                        structures, adding metadata, alignment optimization, and
                        mixed retrieval.
                      </li>
                      <li>Query rewriting, query transformation</li>
                    </ul>
                  </li>
                  <li>
                    Post-retrieval
                    <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                      <li>
                        Feeding all relevant chunks can dilute key details with
                        irrelevant content
                      </li>
                      <li>Reranking + context compression helps here</li>
                      <li>
                        Reranking retrieved information to the edges of the
                        prompt is the key
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong className="text-white">Modular RAG</strong>
            <ul className="ml-8 mt-4 list-inside list-disc space-y-2">
              <li>
                Multiple components more flexibility and adaptability as modules
                can be substituted depending upon task
              </li>
              <li>Numerous different patterns/strategies</li>
              <li>
                Types of modules:
                <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                  <li>Search</li>
                  <li>Fusion</li>
                  <li>Memory</li>
                  <li>Routing</li>
                  <li>Predict</li>
                  <li>Task adapter</li>
                </ul>
              </li>
              <li>
                Types of strategies:
                <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                  <li>Rewrite-Retrieve-Read</li>
                  <li>Generate-Read</li>
                  <li>Recite-Read</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image4}
            alt="Modular RAG strategies diagram"
            width={700}
            height={400}
            className="rounded-lg object-contain"
          />
        </figure>
        <ul className="list-inside list-disc space-y-4">
          <li>
            <strong className="text-white">RAG vs Fine-tuning</strong>
            <ul className="ml-8 mt-4 list-inside list-disc space-y-2">
              <li>
                RAG excels in dynamic environments by offering realtime
                knowledge updates and effective utilization of external
                knowledge sources with high interpretability. However, it comes
                with higher latency and ethical considerations regarding data
                retrieval.
              </li>
              <li>
                FT is more static, requiring retraining for updates but
                enabling deep customization of the model’s behavior and style.
                It demands significant computational resources for dataset
                preparation and training, and while it can reduce
                hallucinations, it may face challenges with unfamiliar data.
              </li>
              <li>
                While unsupervised fine-tuning shows some improvement, RAG
                consistently outperforms it, for both existing knowledge
                encountered during training and entirely new knowledge.
              </li>
              <li>
                LLMs struggle to learn new factual information through
                unsupervised fine-tuning, making a case for RAG
              </li>
            </ul>
          </li>
        </ul>
        <hr className="my-8 border-t border-gray-700" />
        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Retrieval
        </h3>
        <ul className="list-inside list-disc space-y-4">
          <li>
            <strong className="text-white">Retrieval Source:</strong>
            <ul className="ml-8 mt-4 list-inside list-disc space-y-2">
              <li>
                Data structures:
                <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                  <li>
                    Text
                    <ul className="ml-8 mt-1 list-inside list-disc space-y-1">
                      <li>Example: Wikipedia dump</li>
                    </ul>
                  </li>
                  <li>
                    Semi-structured data (PDF)
                    <ul className="ml-8 mt-1 list-inside list-disc space-y-1">
                      <li>text+table data</li>
                      <li>Splitting text+tables is challenging</li>
                      <li>semantic search with text+table is challenging</li>
                    </ul>
                  </li>
                  <li>
                    Structured data (Knowledge Graph, KG)
                    <ul className="ml-8 mt-1 list-inside list-disc space-y-1">
                      <li>More precise</li>
                      <li>Need maintenance</li>
                    </ul>
                  </li>
                  <li>LLM generated</li>
                </ul>
              </li>
              <li>
                Retrieval granularity
                <p className="mt-2">
                  Coarse-grained retrieval units theoretically can provide more
                  relevant information for the problem, but they may also
                  contain redundant content, which could distract the retriever
                  and language models in downstream tasks. Fine-grained
                  retrieval unit granularity increases the burden of retrieval
                  and does not guarantee semantic integrity and meeting the
                  required knowledge. In text, retrieval granularity ranges from
                  fine to coarse, including Token, Phrase, Sentences,
                  Proposition, Chunks, Document.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <strong className="text-white">Indexing optimization</strong>
            <ul className="ml-8 mt-4 list-inside list-disc space-y-2">
              <li>
                Documents will be processed, segmented, and transformed into
                Embeddings to be stored in a vector database.
              </li>
              <li>
                Chunking strategy
                <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                  <li>
                    Most common method is to split the document into chunks on a
                    fixed number of tokens (e.g., 100, 256, 512)
                  </li>
                  <li>
                    Larger chunks can capture more context, but they also
                    generate more noise, requiring longer processing time and
                    higher costs.
                  </li>
                  <li>
                    While smaller chunks may not fully convey the necessary
                    context, they do have less noise.
                  </li>
                </ul>
              </li>
              <li>
                Metadata attachment
                <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                  <li>
                    Page number, file name, author,category timestamp.
                    Subsequently, retrieval can be filtered based on this
                    metadata, limiting the scope of the retrieval.
                  </li>
                  <li>
                    Assigning different weights to document timestamps during
                    retrieval can achieve time-aware RAG, ensuring the
                    freshness of knowledge and avoiding outdated information.
                  </li>
                  <li>
                    HIerarchical + Knowledge graph index structure
                    <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                      <li>
                        Data summaries are stored at each node, aiding in the
                        swift traversal of data and assisting the RAG system in
                        determining which chunks to extract. This approach can
                        also mitigate the illusion caused by block extraction
                        issues.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong className="text-white">Query optimization</strong>
            <ul className="ml-8 mt-4 list-inside list-disc space-y-2">
              <li>
                Why is it important?
                <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                  <li>
                    Formulating a precise and clear question is difficult, and
                    imprudent queries result in subpar retrieval effectiveness.
                  </li>
                  <li>
                    Sometimes, the question itself is complex, and the language
                    is not well-organized.
                  </li>
                  <li>
                    Another difficulty lies in language complexity ambiguity.
                    Language models often struggle when dealing with specialized
                    vocabulary or ambiguous abbreviations with multiple
                    meanings.
                  </li>
                </ul>
              </li>
            </ul>
            <p className="mt-4">
              There are multiple techniques for query optimization, such as
            </p>
            <ul className="ml-8 mt-4 list-inside list-disc space-y-2">
              <li>
                Query Expansion
                <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                  <li>
                    Expanding a single query into multiple queries enriches the
                    content of the query, providing further context to address
                    any lack of specific nuances, thereby ensuring the optimal
                    relevance of the generated answers.
                  </li>
                  <li>
                    Multi-Query: By employing prompt engineering to expand
                    queries via LLMs, these queries can then be executed in
                    parallel.
                  </li>
                  <li>
                    Chain-of-Verification(CoVe): expanded queries undergo
                    validation by LLM to achieve the effect of reducing
                    hallucinations.
                  </li>
                </ul>
              </li>
              <li>
                Query Transformation
                <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                  <li>
                    Query rewrite
                    <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                      <li>
                        The original queries are not always optimal for LLM
                        retrieval, especially in real-world scenarios. Therefore,
                        we can prompt LLM to rewrite the queries.
                      </li>
                      <li>RRR (Rewrite-retrieve-read)</li>
                    </ul>
                  </li>
                  <li>
                    Query routing
                    <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                      <li>
                        Routing different queries to different RAG pipelines
                      </li>
                      <li>Metadata router: based on metadata/keywords</li>
                      <li>Semantic router: based on embeddings</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong className="text-white">Embeddings</strong>
            <p className="mt-2">
              Retrieval is achieved by calculating the similarity (e.g. cosine
              similarity) between the embeddings of the question and document
              chunks, where the semantic representation capability of embedding
              models plays a key role.
            </p>
            <ul className="ml-8 mt-4 list-inside list-disc space-y-2">
              <li>
                Most common: sparse encoder (BM25) and a dense retriever (BERT
                architecture Pre-training language models)
              </li>
              <li>
                Hugging Face’s MTEB leaderboard 7 evaluates embedding models
                across 8 tasks, covering 58 datasests.
              </li>
              <li>
                Hybrid retrieval: Use sparse and dense embedding models
                together.
              </li>
              <li>
                Fine-tuning embedding model:
                <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                  <li>
                    Needed when context significantly deviates from pre-training
                    corpus, particularly within highly specialized disciplines
                    such as healthcare, legal practice, etc
                  </li>
                  <li>
                    another purpose of fine-tuning is to align the retriever and
                    generator, for example, using the results of LLM as the
                    supervision signal for fine-tuning, known as LSR
                    (LM-supervised Retriever).
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong className="text-white">Adapter</strong>
            <p className="mt-2">
              Instead of fine-tuning the entire LLM, adapters are small
              trainable modules inserted between layers of LLM. These adapters
              undergo training, and improve the performance of the LLM on a
              target dataset.
            </p>
          </li>
        </ul>
        <hr className="my-8 border-t border-gray-700" />
        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Generation
        </h3>
        <ul className="list-inside list-disc space-y-4">
          <li>
            Context Curation
            <ul className="ml-8 mt-4 list-inside list-disc space-y-2">
              <li>
                Why?
                <br />- overly long contexts can also lead LLM to the “Lost in
                the middle” problem
                <br />- Like humans, LLM tends to only focus on the beginning
                and end of long texts, while forgetting the middle portion.
                Therefore, in the RAG system, we typically need to further
                process the retrieved content.
                <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                  <li>
                    Reranking
                    <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                      <li>
                        Reranking fundamentally reorders document chunks to
                        highlight the most pertinent results first, effectively
                        reducing the overall document pool, severing a dual
                        purpose in information retrieval, acting as both an
                        enhancer and a filter, delivering refined inputs for
                        more precise language model processing
                      </li>
                      <li>
                        rule-based methods that depend on predefined metrics
                        like Diversity, Relevance, and MRR, or model-based
                        approaches like Encoder-Decoder models from the BERT
                        series, Cohere, GPT,etc
                      </li>
                    </ul>
                  </li>
                  <li>
                    Context Selection/Compression
                    <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                      <li>Models used to remove unimportant tokens</li>
                      <li>
                        Removing unimportant retrieved documents can be helpful
                        too
                      </li>
                      <li>
                        Another straightforward and effective approach involves
                        having the LLM evaluate the retrieved content before
                        generating the final answer.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                LLM Fine-tuning
                <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                  <li>
                    Targeted fine-tuning based on the scenario and data
                    characteristics on LLMs can yield better results. This is
                    also one of the greatest advantages of using on-premise
                    LLMs. When LLMs lack data in a specific domain, additional
                    knowledge can be provided to the LLM through fine-tuning.
                  </li>
                  <li>
                    Alignment of responses:
                    <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                      <li>
                        Aligning LLM outputs with human or retriever preferences
                        through reinforcement learning
                        <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                          <li>
                            For instance, manually annotating the final
                            generated answers and then providing feedback through
                            reinforcement learning
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <hr className="my-8 border-t border-gray-700" />
        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Augmentation
        </h3>
        <ul className="list-inside list-disc space-y-4">
          <li>
            Iterative retrieval
            <ul className="ml-8 mt-4 list-inside list-disc space-y-2">
              <li>
                Iterative retrieval is a process where the knowledge base is
                repeatedly searched based on the initial query and the text
                generated so far, providing a more comprehensive knowledge base
                for LLMs.
              </li>
              <li>
                Recursive retrieval
                <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                  <li>
                    Same as iterative rerieval, but the initial query is
                    transformed/refined at each iteration
                  </li>
                  <li>
                    gradually converging on the most pertinent information
                    through a feedback loop.
                  </li>
                  <li>
                    For example, IRCoT uses chain-of-thought to guide the
                    retrieval process and refines the CoT with the obtained
                    retrieval results.
                  </li>
                </ul>
              </li>
              <li>
                Adaptive retrieval
                <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                  <li>
                    LLMs decide whether external knowledge is needed or not
                  </li>
                  <li>
                    Special tokens that facilitate actions such as web search,
                    retrieve, critique, etc
                  </li>
                  <li>
                    Thresholds around confidence of generated content also play
                    a key role in the automation.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image5}
            alt="Augmentation process diagram"
            width={700}
            height={400}
            className="rounded-lg object-contain"
          />
        </figure>
        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Evaluation
        </h3>
        <ul className="list-inside list-disc space-y-4">
          <li>
            Downstream tasks
            <ul className="ml-8 mt-4 list-inside list-disc space-y-2">
              <li>
                Question Answering (QA), including traditional
                single-hop/multi-hop QA, multiplechoice, domain-specific QA as
                well as long-form scenarios suitable for RAG.
                <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                  <li>
                    Information Extraction (IE), dialogue generation, code search
                  </li>
                </ul>
              </li>
              <li>
                Evaluation Metrics
                <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                  <li>
                    QA
                    <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                      <li>EM and F1 scores</li>
                    </ul>
                  </li>
                  <li>
                    Answer quality
                    <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                      <li>BLEU and ROUGE metrics</li>
                    </ul>
                  </li>
                  <li>
                    Retrieval quality
                    <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                      <li>Hit Rate, MRR, and NDCG</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Evaluation aspects
                <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                  <li>
                    Quality:
                    <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                      <li>Context Relevance</li>
                      <li>Answer Faithfulness</li>
                      <li>Answer Relevance</li>
                    </ul>
                  </li>
                  <li>
                    Ability:
                    <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                      <li>
                        Noise robustness: ignoring/distinguishing
                        noisy/irrelevant retrieved documents from relevant ones
                      </li>
                      <li>
                        Negative rejection: refraining from responding when
                        retrieved documents are irrelevant
                      </li>
                      <li>
                        information integration: synthesizing info from multiple
                        docs
                      </li>
                      <li>
                        counterfactual robustness: disregard known inaccuracies
                        within fetched docs
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Benchmarks
                <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                  <li>RGB</li>
                  <li>RECALL</li>
                  <li>CRUD</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Discussion and future prospects
        </h3>
        <ul className="list-inside list-disc space-y-4">
          <li>
            RAG vs Long Context
            <ul className="ml-8 mt-4 list-inside list-disc space-y-2">
              <li>
                Is rag still needed when LLMs can consume context of up to 200k
                tokens?
                <ul className="ml-8 mt-2 list-inside list-disc space-y-1">
                  <li>
                    RAG-based generation can quickly locate the original
                    references for LLMs to help users verify the generated
                    answers
                  </li>
                  <li>
                    The entire retrieval and reasoning process is observable,
                    while generation solely relying on long context remains a
                    black box.
                  </li>
                  <li>
                    the expansion of context provides new opportunities for the
                    development of RAG, enabling it to address more complex
                    problems and integrative or summary questions that require
                    reading a large amount of material to answer
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Hybrid approach
            <ul className="ml-8 mt-4 list-inside list-disc space-y-2">
              <li>
                Combining RAG with fine-tuning is emerging as a leading
                strategy.
              </li>
            </ul>
          </li>
          <li>
            Existing tools and frameworks
            <ul className="ml-8 mt-4 list-inside list-disc space-y-2">
              <li>Langchain. Llamaindex</li>
              <li>Flowise AI, Haystack, Meltano, Cohere</li>
              <li>Weviate, Kendra (Amazon)</li>
            </ul>
          </li>
        </ul>
        <hr className="my-8 border-t border-gray-700" />
        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Summary
        </h3>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image6}
            alt="RAG Ecosystem diagram"
            width={902}
            height={560}
            className="rounded-lg object-contain"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-400">
            Ecosystem
          </figcaption>
        </figure>
        <hr className="my-8 border-t border-gray-700" />
        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Simple RAG Pipeline using Langchain
        </h3>
        <CodeBlock language="python">{codeSnippet1}</CodeBlock>
        <CodeBlock>{output1}</CodeBlock>

        <h4 className="!mt-12 text-xl font-bold text-white md:text-2xl">
          Load blog
        </h4>
        <CodeBlock language="python">{codeSnippet2}</CodeBlock>

        <h4 className="!mt-12 text-xl font-bold text-white md:text-2xl">
          Setup vector Store
        </h4>
        <CodeBlock language="python">{codeSnippet3}</CodeBlock>

        <h4 className="!mt-12 text-xl font-bold text-white md:text-2xl">
          Setup Retreiver
        </h4>
        <CodeBlock language="python">{codeSnippet4}</CodeBlock>
        <CodeBlock>{output2}</CodeBlock>

        <h4 className="!mt-12 text-xl font-bold text-white md:text-2xl">
          Setup Prompt and chain
        </h4>
        <CodeBlock language="python">{codeSnippet5}</CodeBlock>
        <CodeBlock>{output3}</CodeBlock>

        <h4 className="!mt-12 text-xl font-bold text-white md:text-2xl">
          Invoke Prompt
        </h4>
        <CodeBlock language="python">{codeSnippet6}</CodeBlock>
        <CodeBlock>{output4}</CodeBlock>
        <hr className="!my-4 border-gray-700" />
      </div>
      <RelatedPosts allPosts={postsData} currentPostSlug={slug} />
    </article>
  );
}