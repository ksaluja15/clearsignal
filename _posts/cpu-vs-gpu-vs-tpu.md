---
title: "CPU vs GPU vs TPU"
date: "2020-12-24"
excerpt: ""
imageUrl: "/blog/cpu-vs-gpu-vs-tpu/mult_add_cpu.gif"
tags: ["blog"]
---

### 
            Introduction

            While most deep learning engineers/enthusiasts focus on algorithms,
            they often forget about the hardware they use for training/inference.
            If you ask them why GPU/TPU is faster than a CPU, you'll often hear
            responses like "GPUs are optimized for convolutions or GPUs can run
            more threads". While these statements are true, they merely scratch
            the surface. In this post, we dig deeper into the hardware to
            explain what's happening.

            I'm not a hardware pro by any means, but I feel this information is
            critical for all AI enthusiasts.