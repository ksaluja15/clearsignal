---
title: "NOTES: Retrieval-Augmented Generation for Large Language Models"
date: "2024-09-18"
excerpt: ""
imageUrl: "/blog/retrieval-augmented-generation-notes/Screenshot_2024-09-12_at_5.29.09_PM.png"
tags: ["papers"]
---

Here is a short compilation of bullet points gathered while reading
          the paper " Retrieval-Augmented Generation for Large Language
          Models: A Survey". The authors did a reasonably good job
          summarizing the landscape of current RAG systems.

          Paper:{' '}

            Retrieval-Augmented Generation for Large Language Models: A Survey

          Authors: Yunfan Gaoa, Yun Xiongb, Xinyu Gaob, Kangxiang Jiab, Jinliu
          Panb, Yuxi Bic, Yi Daia, Jiawei Suna, Meng Wangc, and Haofen Wang

### 
          Notes

            Retrieval-Augmented Generation (RAG) enhances LLMs by retrieving
            relevant document chunks from an external knowledge base through
            semantic similarity calculation.

            Development techniques:

              Pretraining LLMs
              Inference/ In-context learning
              Finetuning LLMs

            Evolution of RAG:

              Naive
              Advanced
              Modular

            Naive RAG

                3 steps

                  Indexing: Documents → chunks → vectors → Vector DBs
                  Retrieval : Query → Vector → Semantic similar search → top K
                  Generation : Query + top K vectors → Generated response

                Cons:

                  Imprecise retrievals: Irrelevant chunks

                    Too many similar chunks are retrieved leading to repeated
                    responses

            Advanced RAG

                Pre-retrieval and post-retrieval strategies

                    Pre-retrieval

                        Enhancing data granularity, optimizing index
                        structures, adding metadata, alignment optimization, and
                        mixed retrieval.

                      Query rewriting, query transformation

                    Post-retrieval

                        Feeding all relevant chunks can dilute key details with
                        irrelevant content

                      Reranking + context compression helps here

                        Reranking retrieved information to the edges of the
                        prompt is the key

            Modular RAG

                Multiple components more flexibility and adaptability as modules
                can be substituted depending upon task

              Numerous different patterns/strategies

                Types of modules:

                  Search
                  Fusion
                  Memory
                  Routing
                  Predict
                  Task adapter

                Types of strategies:

                  Rewrite-Retrieve-Read
                  Generate-Read
                  Recite-Read

            RAG vs Fine-tuning

                RAG excels in dynamic environments by offering realtime
                knowledge updates and effective utilization of external
                knowledge sources with high interpretability. However, it comes
                with higher latency and ethical considerations regarding data
                retrieval.

                FT is more static, requiring retraining for updates but
                enabling deep customization of the model’s behavior and style.
                It demands significant computational resources for dataset
                preparation and training, and while it can reduce
                hallucinations, it may face challenges with unfamiliar data.

                While unsupervised fine-tuning shows some improvement, RAG
                consistently outperforms it, for both existing knowledge
                encountered during training and entirely new knowledge.

                LLMs struggle to learn new factual information through
                unsupervised fine-tuning, making a case for RAG

### 
          Summary

            Ecosystem

### 
          Simple RAG Pipeline using Langchain

        {codeSnippet1}
        {output1}

          Load blog

        {codeSnippet2}

          Setup vector Store

        {codeSnippet3}

          Setup Retreiver

        {codeSnippet4}
        {output2}

          Setup Prompt and chain

        {codeSnippet5}
        {output3}

          Invoke Prompt

        {codeSnippet6}
        {output4}