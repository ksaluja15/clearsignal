import CodeBlock from '@/app/components/CodeBlock';
import { postsData } from '@/app/data/posts';
import Image from 'next/image';
import Link from 'next/link';

import { RelatedPosts } from '@/app/components/RelatedPosts';
import { generatePostMetadata } from '@/app/lib/metadata';

const slug = 'affine-augmentations';

export const metadata = generatePostMetadata(slug);

const profile = '/kunal-saluja.jpg';
const image1 = '/blog/affine-augmentations/affine.png';
const image2 = '/blog/affine-augmentations/pytorch_augmentations_6_0.png';
const image3 = '/blog/affine-augmentations/Screenshot-from-2024-03-03-16-24-04.png';
const image4 = '/blog/affine-augmentations/pytorch_augmentations_13_0.png';

export default function Page() {
  return (
    <article className="py-8 sm:py-16">
      <header className="content-grid px-4">
        <div className="mb-4">
          <Link
            href="/tag/pytorch"
            className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] hover:text-white"
          >
            pytorch
          </Link>
        </div>
        <h1 className="post-title font-extrabold leading-tight">
          Affine augmentations
        </h1>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)] md:text-xl">
          Old notes on affine augmentations. Enjoy!
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
              <time dateTime="2023-04-01">Apr 1, 2023</time>
              <span className="mx-1">•</span>
              <span>3 min read</span>
            </div>
          </div>
        </div>
      </header>

      <div className="post-content content-grid mt-8 space-y-8 px-4 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
        <p>Old notes on affine augmentations. Enjoy!</p>
        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Affine Augmentations
        </h3>
        <p>
          Most of the standard Geometric 2D augmentations can be composed from
          affine matrices.
        </p>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image1}
            alt="affine transformations matrix"
            width={800}
            height={300}
            className="rounded-lg object-contain"
          />
        </figure>
        <p>Lets load an image with bbox and keypoint labels</p>
        <CodeBlock language="python">
          {`import cv2
import yaml
from PIL import Image

# Read image
img = cv2.imread('./augmentation_data.png')
print(f"Image size = width:{img.shape[1]} pixels / height:{img.shape[0]} pixels")

# Read labels
labels = yaml.safe_load(open('./augmentation_data_labels.yml'))['labels']
print(labels)`}
        </CodeBlock>
        <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm">
          <code>
            {`Image size = width:599 pixels / height:464 pixels
{'wickets': {'x1': 253, 'y1': 250, 'x2': 315, 'y2': 434}, 'bat': {'x1': 372, 'y1': 18, 'x2': 482, 'y2': 69}, 'wicket_camera': {'x': 288, 'y': 386}, 'r_eye': {'x': 314, 'y': 108}, 'l_eye': {'x': 329, 'y': 103}}`}
          </code>
        </pre>
        <p>Plot labels</p>
        <CodeBlock language="python">
          {`#Wickets
image = cv2.rectangle(img, (labels['wickets']['x1'], labels['wickets']['y1']),\
    (labels['wickets']['x2'], labels['wickets']['y2']), (0, 0 , 255), 2)
#Bat
image = cv2.rectangle(img, (labels['bat']['x1'], labels['bat']['y1']),\
    (labels['bat']['x2'], labels['bat']['y2']), (0, 255 , 255), 2)
# Wicket camera
image = cv2.circle(img, (labels['wicket_camera']['x'], labels['wicket_camera']['y']), \
    2, (0, 255, 0), 1)
# l_eye camera
image = cv2.circle(img, (labels['l_eye']['x'], labels['l_eye']['y']), \
    2, (0, 255, 0), 1)
# r_eye camera
image = cv2.circle(img, (labels['r_eye']['x'], labels['r_eye']['y']), \
    2, (0, 255, 0), 1)

pil_image = Image.fromarray(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
display(pil_image)`}
        </CodeBlock>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image2}
            alt="Image with plotted labels"
            width={599}
            height={464}
            className="rounded-lg object-contain"
          />
        </figure>
        <h3 className="!mt-12 text-2xl font-bold text-white md:text-3xl">
          Affine Matrix Calculator class
        </h3>
        <p>
          This class composes a sequence of rotation, translation, scaling and
          shearing into one matrix.
        </p>
        <CodeBlock language="python">
          {`from typing import Any
import numpy as np

class AffineMatrixCalculator:

    def __init__(self):
        pass

    def __call__(self, rotation=0., translation=(0., 0.) ,scale=(1., 1.), shear=(0., 0.)):
        self.M_R = self.getRotationMatrix(rotation)
        self.M_t = self.getTranslationMatrix(translation)
        self.M_Sc = self.getScalingMatrix(scale)
        self.M_Sh = self.getShearingMatrix(shear)
        return self.M_t @ self.M_R @ self.M_Sc @ self.M_Sh

    @staticmethod
    def getRotationMatrix(deg):
        angle = np.radians(deg)
        R=np.array([[np.cos(angle), -np.sin(angle), 0],\\
                    [np.sin(angle), np.cos(angle), 0],\\
                    [0, 0, 1]])
        return R

    @staticmethod
    def getTranslationMatrix(trans):
        M = np.eye(3)
        M[0, 2] = trans[0]
        M[1, 2] = trans[1]
        return M

    @staticmethod
    def getScalingMatrix(s):
        M = np.eye(3)
        M[0, 0] = s[0]
        M[1, 1] = s[1]
        return M

    @staticmethod
    def getShearingMatrix(s):
        M = np.eye(3)
        M[0, 1] = s[0]
        M[1, 0] = s[1]
        return M

A = AffineMatrixCalculator()
M = A(rotation=10., translation=(0.1, 0.2), scale=(0.7, 0.9), shear=(0.02, 0.05))
print(M)`}
        </CodeBlock>
        <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm">
          <code>
            {`[[ 0.68155126 -0.14249605  0.1       ]
 [ 0.16587007  0.88875805  0.2       ]
 [ 0.          0.          1.        ]]`}
          </code>
        </pre>
        <p>Warping the image with the M matrix</p>
        <CodeBlock language="python">
          {`aug_img = cv2.warpAffine(img, M[:2, :], (img.shape[1],img.shape[0]))
pil_image = Image.fromarray(cv2.cvtColor(aug_img, cv2.COLOR_BGR2RGB))
display(pil_image)`}
        </CodeBlock>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image3}
            alt="Warped image"
            width={599}
            height={464}
            className="rounded-lg object-contain"
          />
        </figure>
        <p>Warping the labels</p>
        <CodeBlock language="python">
          {`aug_labels = {}
w = int(abs(labels['wickets']['x1'] - labels['wickets']['x2']))
h = int(abs(labels['wickets']['y1'] - labels['wickets']['y2']))
wickets = np.array([[labels['wickets']['x1'], labels['wickets']['y1'], 1.], \\
                    [labels['wickets']['x1']+w, labels['wickets']['y1'], 1.], \\
                    [labels['wickets']['x1']+w, labels['wickets']['y1']+h, 1.], \\
                    [labels['wickets']['x1'], labels['wickets']['y1']+h, 1.]])

# transforming points
augmented_wickets = (M @ wickets.T).T

# plotting
aug_img = cv2.polylines(aug_img, pts=np.int32([augmented_wickets[:, :2]]), isClosed=True, color=(0, 0, 255), thickness=2)
pil_image = Image.fromarray(cv2.cvtColor(aug_img, cv2.COLOR_BGR2RGB))
display(pil_image)`}
        </CodeBlock>
        <figure className="mx-auto my-8 flex flex-col items-center">
          <Image
            src={image4}
            alt="Warped image with transformed labels"
            width={599}
            height={464}
            className="rounded-lg object-contain"
          />
        </figure>
        <hr className="!my-4 border-gray-700" />

      </div>
      <RelatedPosts allPosts={postsData} currentPostSlug={slug} />
    </article>
    
  );
}