---
id: smart-objects
type: exercise
title: Working with Smart Objects
duration: 45
skills:
  - smart-objects
  - non-destructive
  - transform
difficulty: beginner
---

# Exercise: Working with Smart Objects

## Learning Objective

Understand smart objects and use them to create non-destructive, reusable editing workflows.

## Why Smart Objects Matter

For your head replacement project, you'll need to:
- Scale and transform head images without quality loss
- Apply the same head to multiple figures at different sizes
- Make changes to the original without redoing all transformations

Smart objects make all of this possible.

## What is a Smart Object?

A smart object is a container that preserves the original content. Any transformations or filters applied to the smart object are non-destructive—you can always return to the original.

## Setup

1. Open a new Photoshop document (1920x1080px)
2. Import a portrait photo (File > Place Embedded)
3. This automatically creates a smart object

## Step-by-Step Instructions

### Step 1: Create a Smart Object

**From an existing layer**:
1. Right-click the layer
2. Select "Convert to Smart Object"
3. Notice the small icon on the layer thumbnail

**From multiple layers**:
1. Select multiple layers
2. Right-click > "Convert to Smart Object"
3. All layers are now combined into one smart object

### Step 2: Transform Without Quality Loss

Test non-destructive transformations:

1. Select your smart object layer
2. Press Command/Ctrl + T for Free Transform
3. Scale it down to 50% size
4. Press Enter to apply
5. Scale it back up to 200%
6. Notice: no quality loss (compare with a regular layer)

**Why this works**: Photoshop always transforms from the original embedded data, not the current pixels.

### Step 3: Edit the Smart Object Contents

Modify the original:

1. Double-click the smart object thumbnail
2. A new document opens showing the contents
3. Make changes (adjust colors, add text, etc.)
4. Save (Command/Ctrl + S)
5. Close the document
6. Watch the main document update automatically

**Use Case**: Update one Elon Musk head and have all instances update.

### Step 4: Create Linked Smart Objects

Reuse the same content:

1. Create or select a smart object
2. Right-click > "New Smart Object via Copy" (creates independent copy)
3. OR: Alt/Option + Drag to duplicate (creates linked copy)
4. Edit the original's contents
5. Linked copies update; independent copies don't

**For Your Project**:
- Linked: Same head, different positions/sizes
- Independent: Different expressions or angles of the same person

### Step 5: Apply Smart Filters

Non-destructive filter application:

1. Select a smart object
2. Apply any filter (Filter > Blur > Gaussian Blur, for example)
3. Notice: Filter appears below the smart object in Layers panel
4. Double-click the filter name to adjust settings anytime
5. Toggle filter visibility with the eye icon
6. Delete filter if you don't like it

### Step 6: Replace Smart Object Contents

Swap content while keeping all adjustments:

1. Select the smart object
2. Layer > Smart Objects > Replace Contents
3. Choose a different image
4. All transformations and filters remain applied

**Powerful Technique**: Set up your composition with placeholder heads, then replace them one by one with the actual Elon Musk images.

## Practical Application: Head Replacement Workflow

Create a reusable head replacement system:

1. Import your base image (historical painting)
2. Import a head photo as a smart object
3. Transform and position it over a figure
4. Add layer mask to blend edges
5. Duplicate the smart object for another figure
6. Transform to different size/angle
7. If you need to adjust the original head:
   - Edit the smart object once
   - All instances update automatically

## Verification Checklist

- [ ] Can convert layers to smart objects
- [ ] Can edit smart object contents and see updates
- [ ] Understand difference between linked and independent copies
- [ ] Can apply and modify smart filters
- [ ] Can replace smart object contents
- [ ] Understand when to use vs. not use smart objects

## When NOT to Use Smart Objects

- **Large files**: Each smart object stores full original data
- **Painting/brushing**: Can't paint directly on smart objects
- **Performance**: Can slow down older computers with many instances

For these cases, rasterize: Right-click > "Rasterize Layer"

## Common Mistakes

- **Forgetting to save**: When editing contents, must save the embedded document
- **Breaking links**: Copying smart objects to new documents breaks edit links
- **Too many filters**: Stack of 20 smart filters will slow performance

## Challenge Extension

Create a "master head" smart object system:

1. Create a smart object with a practice head
2. Make 5 copies positioned at different sizes/angles
3. Edit the original once to change all 5 simultaneously
4. Practice replacing the contents with different heads
5. Add smart filters (color adjustments) that apply to all

## Time Estimate

45 minutes

## Next Steps

Proceed to Exercise 3: Advanced Layer Groups and Comps.
