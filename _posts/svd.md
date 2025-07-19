---
title: "SVD"
date: "2022-06-15"
excerpt: ""
imageUrl: "/blog/svd/SVD-1.png"
tags: ["code"]
---

### 
          Derivation

          In simple words, any matrix 'A' can be decomposed into a product of 3
          matrices : U, ∑ and V, where ∑ contains the singular values along its
          diagonal, and U & V are unitary matrices. Here is a derivation for
          SVD:

### 
          Applications

          Image compression
          Low-rank approximations
          PCA
          Rank determination
          Least squares

        and a million more...
        Let's look at one such application in computer vision:

          Image compression

          What if we delete small singular values from ∑ and its corresponding
          vectors from U and V? We can then obtain the projection of A onto a
          lower-dimensional subspace. This technique can be used to compress an
          image at the loss of some high-frequency information.

          Using this code, we can reconstruct the image using the first N
          components:

        {pythonCode}

          There are 942 singular values for the original image, since it's a
          (942x942) image with unique pixel rows.

          We can recover most of the low-frequency information from the image
          using only the first 15-30 components of SVD. Even the finer details
          like eyeballs are present in the reconstructed image, with a
          compression rate of ~ 2000-4000.