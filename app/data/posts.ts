//posts data see main docs
/*
  {
    slug: "(slug)",
    imageUrl: "/index/(image)",
    alt: "Image_Alt",
    tags: ["blog", "papers"],
    featured: false,
    large: false,
    title: "Title",
    excerpt: "explain_ur_post",
    date: "Aug 8, 2025",
    readTime: "2 min read",
  }
*/

export interface Post {
  slug: string;
  imageUrl: string;
  alt: string;
  tags: string[];
  featured: boolean;
  large: boolean;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export const postsData: Post[] = [
  {
    slug: "grounded-sam-2",
    imageUrl: "/index/Screenshot-from-2025-01-22-15-58-24-1.png",
    alt: "Notes - Grounded SAM",
    tags: ["blog", "papers"],
    featured: true,
    large: true,
    title: "Notes - Grounded SAM",
    excerpt: "What is Grounded SAM? The Grounded SAM paper introduces a novel approach to open-set segmentation by combining two powerful pre-trained models...",
    date: "Jan 22, 2025",
    readTime: "2 min read",
  },
  {
    slug: "can-llms-reason",
    imageUrl: "/index/reasoning_of_LLM_models.png",
    alt: "NOTES: Can LLMs truly reason?",
    tags: ["papers", "blog"],
    featured: true,
    large: false,
    title: "NOTES: Can LLMs truly reason?",
    excerpt: "Can LLMs actually reason, or are they just “probabilistic pattern matchers”? This paper attempts to answer that question.",
    date: "Nov 7, 2024",
    readTime: "3 min read",
  },
  {
    slug: "retrieval-augmented-generation-notes",
    imageUrl: "/index/Screenshot-from-2024-09-18-14-01-03-1.png",
    alt: "NOTES: Retrieval-Augmented Generation for Large Language Models",
    tags: ["papers", "blog", "code"],
    featured: true,
    large: false,
    title: "NOTES: Retrieval-Augmented Generation for Large Language Models",
    excerpt: "Here is a short compilation of bullet points gathered while reading the paper \"Retrieval-Augmented Generation for Large Language Models: A Survey\".",
    date: "Sep 18, 2024",
    readTime: "9 min read",
  },
  {
    slug: "yolo-x-notes",
    imageUrl: "/index/Screenshot-2024-08-10-at-4.35.01-PM.png",
    alt: "Yolo-X Notes",
    tags: ["papers", "object-detection", "blog"],
    featured: true,
    large: false,
    title: "Yolo-X Notes",
    excerpt: "The main motivation behind YOLOX was to update the YOLO series with the recent advancements at the time, particularly anchor-free detection.",
    date: "Aug 10, 2024",
    readTime: "2 min read",
  },
  {
    slug: "multi-task-losses",
    imageUrl: "/index/Screenshot-from-2024-03-09-09-34-02.png",
    alt: "Multi-task Loss",
    tags: ["blog","loss functions", "papers"],
    featured: false,
    large: false,
    title: "Multi-task Loss",
    excerpt: "This is a short review of the paper titled \"Multi-Task Learning Using Uncertainty to Weigh Losses for Scene Geometry and Semantics\" by Kendall et al, 2018.",
    date: "Mar 9, 2024",
    readTime: "3 min read",
  },
  {
    slug: "polynomial-fitting-using-pytorch",
    imageUrl: "/index/Screenshot-from-2024-03-03-15-22-14.png",
    alt: "Polynomial fitting using Pytorch",
    tags: ["pytorch", "code", "blog"],
    featured: false,
    large: false,
    title: "Polynomial fitting using Pytorch",
    excerpt: "Here is a short tutorial on how to fit polynomials using pytorch.",
    date: "Aug 1, 2023",
    readTime: "3 min read",
  },
  {
    slug: "affine-augmentations",
    imageUrl: "/index/Screenshot-from-2024-03-03-16-28-24.png",
    alt: "Affine augmentations",
    tags: ["pytorch", "code", "blog"],
    featured: false,
    large: false,
    title: "Affine augmentations",
    excerpt: "Old notes on affine augmentations. Enjoy!",
    date: "Apr 1, 2023",
    readTime: "3 min read",
  },
  {
    slug: "migrate-your-blog-from-ghost-pro",
    imageUrl: "/index/photo-1603516863860-7d5c93a83fe8.jpeg",
    alt: "Migrate your blog from Ghost(Pro) to Digital ocean",
    tags: ["blog", "misc"],
    featured: false,
    large: false,
    title: "Migrate your blog from Ghost(Pro) to Digital ocean",
    excerpt: "I recently decided to migrate my ghost blog from ghost(pro) subscription to a digital ocean droplet. Primary reasons for the migration were...",
    date: "Aug 3, 2022",
    readTime: "2 min read",
  },
  {
    slug: "svd",
    imageUrl: "/index/1_dnvjYsiEhj-NzFf6ZeCETg.jpeg",
    alt: "SVD",
    tags: ["blog", "code"],
    featured: true,
    large: false,
    title: "SVD",
    excerpt: "SVD (Singular Value Decomposition) is one of my favorite topics in linear algebra. It's almost magical to factorize any matrix...",
    date: "Jun 15, 2022",
    readTime: "2 min read",
  },
  {
    slug: "poly-loss",
    imageUrl: "/index/Screenshot-from-2022-05-19-00-09-17.png",
    alt: "PolyLoss : A new framework for loss functions",
    tags: ["papers", "loss functions", "blog"],
    featured: true,
    large: false,
    title: "PolyLoss : A new framework for loss functions",
    excerpt: "Authors propose a new framework of loss functions, motivated by the Taylor series expansion of commonly used functions like cross entropy.",
    date: "May 18, 2022",
    readTime: "1 min read",
  },
  {
    slug: "quick-nlp-overview",
    imageUrl: "/index/nlp_02.png",
    alt: "Short NLP Overview!",
    tags: ["blog", "nlp", "papers"],
    featured: false,
    large: false,
    title: "Short NLP Overview!",
    excerpt: "Natural language processing (NLP) is a branch of science sitting at the intersection of computer science, artificial intelligence, and computational linguistics.",
    date: "Jan 16, 2022",
    readTime: "6 min read",
  },
  {
    slug: "my-new-desktop",
    imageUrl: "/index/rig_side-1.webp",
    alt: "My New Desktop!",
    tags: ["blog", "misc"],
    featured: false,
    large: false,
    title: "My New Desktop!",
    excerpt: "If you're into gaming and deep learning, you need to own a GPU. For years I was working with an older GPU (GTX 960M), but I thought it was time to upgrade.",
    date: "Dec 30, 2021",
    readTime: "1 min read",
  },
  {
    slug: "efficientnet-v1-v2-a-smart-heuristic",
    imageUrl: "/index/eff.webp",
    alt: "EfficientNet (V1 & V2) - A smart heuristic",
    tags: ["papers", "object-detection", "blog"],
    featured: false,
    large: false,
    title: "EfficientNet (V1 & V2) - A smart heuristic",
    excerpt: "EfficientNet tries to come up with a smart heuristic to scale a CNN, relating resolution, width, and depth of a CNN.",
    date: "May 9, 2021",
    readTime: "2 min read",
  },
  {
    slug: "designing-and-shipping-a-ml-feature",
    imageUrl: "/index/design.webp",
    alt: "Designing and shipping a ML Feature",
    tags: ["blog", "misc"],
    featured: true,
    large: false,
    title: "Designing and shipping a ML Feature",
    excerpt: "What exactly are we trying to accomplish? Will the new model architecture really be a game-changer? How much impact will this new dataset have...?",
    date: "Apr 3, 2021",
    readTime: "2 min read",
  },
  {
    slug: "semantic-segmentation-deeplab-v3-2",
    imageUrl: "/index/seg_cov.webp",
    alt: "Semantic Segmentation - DeepLab V3+",
    tags: ["papers", "segmentation", "blog"],
    featured: false,
    large: false,
    title: "Semantic Segmentation - DeepLab V3+",
    excerpt: "Semantic segmentation involves partitioning/marking regions in the image belonging to different objects/classes. This short article summarises DeepLab V3+...",
    date: "Jan 27, 2021",
    readTime: "2 min read",
  },
  {
    slug: "cpu-vs-gpu-vs-tpu",
    imageUrl: "/index/cpu_cov.webp",
    alt: "CPU vs GPU vs TPU",
    tags: ["blog", "misc"],
    featured: true,
    large: false,
    title: "CPU vs GPU vs TPU",
    excerpt: "CPU vs GPU vs TPU",
    date: "Dec 24, 2020",
    readTime: "2 min read",
  },
  {
    slug: "detection-classification-metrics",
    imageUrl: "/index/det_cov.webp",
    alt: "Detection/Classification metrics",
    tags: ["blog", "misc", "object-detection"],
    featured: false,
    large: false,
    title: "Detection/Classification metrics",
    excerpt: "Once we've trained multiple detection/classification models, how to choose the best model? Once we've chosen the best model, how to choose the optimum operating point?",
    date: "Dec 22, 2020",
    readTime: "2 min read",
  },
];