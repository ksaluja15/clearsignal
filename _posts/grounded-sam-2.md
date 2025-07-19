---
title: "Notes - Grounded SAM"
date: "2025-01-22"
excerpt: "The Grounded SAM paper introduces a novel approach to open-set
          segmentation by combining two powerful pre-trained models: Grounding
          DINO for open-set object detection and the Segment Anything Model
          (SAM) for zero-shot segmentation."
imageUrl: ""
tags: ["blog"]
---

What is Grounded SAM?

          The{" "}

            Grounded SAM
          {" "}
          paper introduces a novel approach to open-set segmentation by
          combining two powerful pre-trained models: Grounding DINO for open-set
          object detection and the Segment Anything Model (SAM) for zero-shot
          segmentation. This integration enables the detection and segmentation
          of any regions based on arbitrary text inputs and opens a door to
          connecting various vision models.

          Model components used in the paper:

          SAM is an open-world segmentation model that can "cut
          out" any object in any image with proper prompts, like points, boxes,
          or text. Despite of its strong zero-shot performance, the model cannot
          identify the masked objects based an arbitrary text input and normally
          requires point or box prompts to run.

          DINO is Meta’s versatile foundation model trained
          using self supervision. Features from this model can be used in a
          variety of downstream tasks like Monocular depth estimation,
          segmentation, object detection, etc.

          Grounding DINO is an open-set object detector that can
          detect any objects with respect to an arbitrary free-form text prompt.
          It has a strong zero-shot detection performance. However, the model
          needs text as inputs and can only detect boxes with corresponding
          phrases.

          OSX is the state-of-the-art model for expressive
          whole-body mesh recovery, which aims to estimate the 3D human body
          poses, hand gestures, and facial expressions jointly from monocular
          images. It needs first to detect human boxes, crop and resize the
          human boxes, and then conduct single-person mesh recovery.

          BLIP is an Image caption model. It cannot perform
          object level tasks like detection/segmentation.

          Recognize Anything Model (RAM) is a strong image
          tagging model that can recognize any common categories of high
          accuracy for an input image. However, RAM can only generate tags but
          cannot generate precise boxes and masks for the recognized categories.

          How does SAM work?

          Given an input image and a text prompt, we first employ Grounding DINO
          to generate precise boxes for objects or regions within the image by
          leveraging the textual information as condition. Subsequently, the
          annotated boxes obtained through Grounding DINO serve as the box
          prompts for SAM to generate precise mask annotations. By leveraging
          the capabilities of these two robust expert models, the open-set
          detection and segmentation tasks can be more effortlessly
          accomplished.

          Why not train a universal object segmentation model with text
          prompting instead?

          It is highly challenging to determine masks in images corresponding
          to regions mentioned in any user-provided text. This is primarily due
          to the limited availability of high-quality data for segmentation in
          the wild tasks, which presents a challenge for the model to accomplish
          precise open-set segmentation under conditions characterized by data
          scarcity.

          Which new pipelines are enabled with Grounded SAM ?

        4 workflows described in this picture are:

          G-DINO + SAM = Open vocabulary object detection + segmentation

            BLIP & RAM = Automatic detection + segmentation labels from any
            image

            Grounded SAM + Stable diffusion = Automatic Synthetic data
            generation + controllable image editing system

            Grounded SAM + OSX = Mesh recovery + human motion analysis