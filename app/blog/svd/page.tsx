import Image from 'next/image';
import Link from 'next/link';

import { RelatedPosts } from '@/app/components/RelatedPosts';
import { postsData } from '@/app/data/posts';

import { generatePostMetadata } from '@/app/lib/metadata';

const slug = 'svd';

export const metadata = generatePostMetadata(slug);

const image1 = '/blog/svd/SVD-1.png';
const image2 = '/blog/svd/SVD-2.png';
const image3 = '/blog/svd/SVD-3.png';
const image4 = '/blog/svd/SVD-4.png';
const image5 = '/blog/svd/svd_tiger_res.webp';
const profile = '/kunal-saluja.jpg';

import CodeBlock from '@/app/components/CodeBlock';

const pythonCode = `from PIL import Image
import numpy as np
import matplotlib.pyplot as plt

img = Image.open('tiger.webp')
img = np.array(img)
gray = 0.2989 * img[:, :, 0] + 0.5870 * img[:, :, 1] + 0.1140 * img[:, :, 2]

U, s, V = np.linalg.svd(gray)

recon_imgs = []
for n in [5, 15, 30]:
    S = np.zeros(np.shape(gray))
    for i in range(0, n):
        S[i, i] = s[i]
    recon_img = U @ S @ V
    recon_imgs.append(recon_img)

fig, ax = plt.subplots(2, 2)

ax[0][0].imshow(gray, cmap='gray')
ax[0][0].axis('off')
ax[0][0].set_title('Original')

ax[0][1].imshow(recon_imgs[0], cmap='gray')
ax[0][1].axis('off')
ax[0][1].set_title(f'Reconstructed n = 5')

ax[1][0].imshow(recon_imgs[1], cmap='gray')
ax[1][0].axis('off')
ax[1][0].set_title(f'Reconstructed n = 15')

ax[1][1].imshow(recon_imgs[2], cmap='gray')
ax[1][1].axis('off')
ax[1][1].set_title(f'Reconstructed n = 30')
plt.show()
`;


export default function Page() {
  return (
    <article className="py-8 sm:py-16">
      <header className="content-grid px-4">
        <div className="mb-4">
          <Link
            href="/tag/blog"
            className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] hover:text-white"
          >
            Blog
          </Link>

        </div>
        <h1 className="post-title font-extrabold leading-tight">SVD</h1>
        <p>
          SVD (Singular Value Decomposition) is one of my favorite topics in
          linear algebra. It's almost magical to factorize any matrix into a
          product of two orthogonal matrices and a diagonal matrix.
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
              <time dateTime="2022-06-15">Jun 15, 2022</time>
              <span className="mx-1">•</span>
              <span>2 min read</span>
            </div>
          </div>
        </div>
      </header>

      <div className="post-content content-grid mt-8 space-y-8 px-4 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">

        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Derivation
        </h3>
        <p>
          In simple words, any matrix 'A' can be decomposed into a product of 3
          matrices : U, ∑ and V, where ∑ contains the singular values along its
          diagonal, and U & V are unitary matrices. Here is a derivation for
          SVD:
        </p>

        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image1}
            alt="SVD Derivation Part 1"
            width={1700}
            height={2200}
            className="rounded-lg object-contain"
          />
        </figure>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image2}
            alt="SVD Derivation Part 2"
            width={1700}
            height={2200}
            className="rounded-lg object-contain"
          />
        </figure>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image3}
            alt="SVD Derivation Part 3"
            width={1700}
            height={2200}
            className="rounded-lg object-contain"
          />
        </figure>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image4}
            alt="SVD Derivation Part 4"
            width={1700}
            height={2200}
            className="rounded-lg object-contain"
          />
        </figure>

        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Applications
        </h3>
        <ol className="list-inside list-decimal space-y-2">
          <li>Image compression</li>
          <li>Low-rank approximations</li>
          <li>PCA</li>
          <li>Rank determination</li>
          <li>Least squares</li>
        </ol>
        <p>and a million more...</p>
        <p>Let's look at one such application in computer vision:</p>
        <p>
          <strong>Image compression</strong>
        </p>
        <p>
          What if we delete small singular values from ∑ and its corresponding
          vectors from U and V? We can then obtain the projection of A onto a
          lower-dimensional subspace. This technique can be used to compress an
          image at the loss of some high-frequency information.
        </p>
        <p>
          Using this code, we can reconstruct the image using the first N
          components:
        </p>

        <CodeBlock>{pythonCode}</CodeBlock>

        <p>
          There are 942 singular values for the original image, since it's a
          (942x942) image with unique pixel rows.
        </p>

        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image5}
            alt="SVD Image Compression Result"
            width={640}
            height={480}
            className="rounded-lg object-contain"
          />
        </figure>

        <p>
          We can recover most of the low-frequency information from the image
          using only the first 15-30 components of SVD. Even the finer details
          like eyeballs are present in the reconstructed image, with a
          compression rate of ~ 2000-4000.
        </p>
        <hr className="!my-4 border-gray-700" />
      </div>
      <RelatedPosts allPosts={postsData} currentPostSlug={slug} />
    </article>
  );
}