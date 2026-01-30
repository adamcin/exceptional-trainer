---
id: texture-matching
type: exercise
title: Texture and Detail Matching
duration: 35
skills:
  - texture
  - detail
  - grain
  - sharpness
difficulty: intermediate
---

# Exercise: Texture and Detail Matching

## Learning Objective

Match texture, grain, and detail level between composited elements for consistent visual quality.

## The Texture Problem

Modern digital photos: Clean, sharp, noise-free
Oil paintings: Textured canvas, visible brush strokes, aged grain
**Mismatch = obvious composite**

## Part 1: Analyzing Texture

Study your target (historical painting):

**Texture characteristics**:
- Grain/noise level: High (visible at 100% zoom)?
- Sharpness: Soft (oil paintings aren't razor-sharp)
- Canvas texture: Visible weave pattern?
- Brush strokes: Visible paint texture?
- Craquelure: Age cracks in varnish?

**Measure grain**: Zoom to 100%, examine shadow areas (grain most visible in darks).

## Part 2: Adding Grain/Noise

Match modern photo to painting texture.

**Method 1: Add Noise Filter**

1. Select subject layer (or create merged copy above)
2. Filter > Noise > Add Noise
3. Amount: 2-8% (sample background to match)
4. Distribution: Gaussian
5. Monochromatic: Checked (color noise looks digital)

**Method 2: Grain via Camera Raw**

1. Convert layer to Smart Object
2. Filter > Camera Raw Filter
3. Effects tab > Grain section
4. Amount: 20-60
5. Size: 25-50 (Medium)
6. Roughness: 50 (adjust to match reference)
7. More control than Add Noise

**Method 3: Texture Overlay**

1. Find/create grain texture (or photograph canvas)
2. Place over subject
3. Desaturate (Command/Ctrl + Shift + U)
4. Set to Overlay or Soft Light
5. Opacity: 20-50%
6. Most realistic method

## Part 3: Adjusting Sharpness

Match sharpness level to background.

**If subject too sharp** (common with modern photos):

1. Slight Gaussian Blur (0.5-2px)
2. Smart Sharpen (to sharpen subject's details): Filter > Sharpen > Smart Sharpen
   - Or convert to Smart Object, apply Smart Sharpen as smart filter

**If subject too soft** (rare):

1. Smart Sharpen
2. Amount: 50-150%
3. Radius: 0.5-1.5px
4. Reduce Noise: 10-20%

**Matching technique**:
- View subject and background side-by-side at 100%
- Adjust until similar sharpness level
- Slight softness usually needed for historical painting match

## Part 4: Detail Level Matching

**High-frequency detail** (fine texture, pores, hair strands):

Modern photos have more detail than paintings. May need to reduce:

1. Duplicate subject layer
2. Gaussian Blur (2-5px)
3. Set opacity to 20-40%
4. Blends with sharp layer below
5. Reduces excessive detail

**Or use Surface Blur**:
- Preserves edges while smoothing detail
- Filter > Blur > Surface Blur
- Radius: 5-10, Threshold: 10-20

## Part 5: Canvas Texture Overlay

Add oil painting canvas texture to modern photo.

**Acquire texture**:
- Photograph actual canvas
- Download canvas texture
- Extract from painting itself (desaturated area)

**Apply texture**:

1. Place texture over subject
2. Desaturate if needed
3. Set to Overlay or Soft Light
4. Opacity: 10-30%
5. May need to tile/clone to cover subject
6. Mask edges for gradual fade

**Advanced**: Different opacity in highlights vs. shadows (texture more visible in lights).

## Part 6: Brush Stroke Simulation

Advanced technique for extreme painting matching.

**Oil Paint Filter**:

1. Subject as Smart Object
2. Filter > Stylize > Oil Paint
3. Stylization: 2-4 (low, subtle)
4. Cleanliness: 5-7
5. Scale: 2-4
6. Bristle Detail: 5-7
7. Very subtle application (consider reducing filter opacity)

**Result**: Simulates painted appearance. Use sparingly—easy to overdo.

## Part 7: Craquelure (Age Cracks)

If painting shows age cracks:

1. Find/create craquelure texture
2. Place over composite
3. Desaturate
4. Set to Multiply or Overlay
5. Very low opacity (5-15%)
6. Applies across entire composition
7. Unifies modern elements with aged painting

## Verification Checklist

- [ ] Can analyze texture in reference images
- [ ] Can add appropriate grain/noise to match
- [ ] Can adjust sharpness level
- [ ] Can reduce excessive detail if needed
- [ ] Can apply canvas texture overlay
- [ ] Can use filters for painted appearance (if appropriate)
- [ ] Can add craquelure for aged look
- [ ] Subject matches background texture/detail level

## Common Mistakes

- **Too much grain**: Looks like bad photo, not painting
- **Wrong type of noise**: Color noise (turn on Monochromatic)
- **Too soft**: Blur removes all detail
- **Oil Paint filter too strong**: Looks like filter, not painting
- **Texture overlay too visible**: Should be subtle
- **Not matching reference**: Guessing instead of measuring

## Quality Test

View composite at:
- **25%**: Overall texture consistency
- **50%**: General appearance
- **100%**: Detail/grain matching
- **200%**: Verify not overdone

Should be consistent at all zoom levels.

## Time Estimate

35 minutes

## Next Steps

Challenges to apply all Module 4 skills in complete scenarios.
