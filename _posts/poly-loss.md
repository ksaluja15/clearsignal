---
title: "PolyLoss : A new framework for loss functions"
date: "2022-05-18"
excerpt: ""
imageUrl: "/blog/poly-loss/Screenshot-from-2022-05-19-00-04-09.png"
tags: ["papers"]
---

Original Paper: [

            https://arxiv.org/pdf/2204.12511.pdf

          ]

          Authors: Zhaoqi Leng, Mingxing Tan , Chenxi Liu , Ekin Dogus Cubuk ,
          Xiaojie Shi, Shuyang Cheng ,Dragomir Anguelov [Waymo And Google]

### 
          Summary

          Authors propose a new framework of loss functions, motivated by the
          Taylor series expansion of commonly used functions like cross entropy
          and focal loss.

          When CE and focal losses are expanded, it's easier to see the
          similarities and differences between them. This seems to be the prime
          motivation to create a framework of losses which express such common
          functions as a special case.

          The authors also experiment with the coefficients of taylor expansion
          of these functions and assess their impact on training a ResNet-50
          model on ImageNet-1k dataset. Based on their experiments, altering
          the coefficients of the first N terms of the expansion series seems
          to give the best results.

          Upon further simplification, L(poly-1) seems to provide superior
          result as compared to cross entropy loss on a variety of different
          tasks involving detection, classification and segmentation.

          There's a lot to love about the simplicity and impact of this paper.
          A one line change in the loss function seems to give better results
          than the traditionally used loss functions.