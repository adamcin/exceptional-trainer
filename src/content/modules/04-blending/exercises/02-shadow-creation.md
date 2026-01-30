---
id: shadow-creation
type: exercise
title: Creating Realistic Shadows
duration: 45
skills:
  - shadows
  - lighting
  - realism
difficulty: advanced
---

# Exercise: Creating Realistic Shadows

## Learning Objective

Master shadow creation to ground composited elements realistically in their environments.

## Shadow Types

**Cast Shadow**: Object blocks light source, shadow falls on other surfaces
**Contact Shadow**: Where object touches surface (darkest, sharpest)
**Ambient Occlusion**: Light can't reach crevices, stays dark
**Core Shadow**: Dark side of object itself (not cast shadow)

## Setup

Composite subject on background, need to create believable shadow.

## Part 1: Analyzing Light Direction

Study your background:
- Where is light coming from?
- Hard light (sun/candle) = sharp shadows
- Soft light (overcast/diffused) = soft shadows
- Multiple light sources = multiple shadows
- For historical paintings: Usually warm directional light (candles/windows)

## Part 2: Creating Cast Shadows

### Method 1: Transform Method (Best for Most Cases)

1. Duplicate subject layer
2. Fill with black: Select layer pixels (Command/Ctrl + click thumbnail), fill with black
3. Place below subject
4. Free Transform (Command/Ctrl + T):
   - Flip vertical if needed
   - Perspective transform to match light angle
   - Scale/skew to match light direction
5. Set blend mode to Multiply
6. Adjust opacity (30-80% depending on light strength)
7. Gaussian Blur: Distance determines blur (close = sharp, far = blurry)
8. Mask edges where shadow would fade

### Method 2: Manual Painting

1. New layer below subject (set to Multiply)
2. Soft brush, black/dark gray
3. Paint shadow shape
4. Adjust opacity and blur
5. More artistic control, but requires practice

## Part 3: Contact Shadows

Where subject meets surface:

1. New layer (Multiply blend mode)
2. Very small, soft brush
3. Paint dark shadow directly where contact occurs
4. Keep tight to subject (1-5px typically)
5. Darkest part of entire shadow
6. Critical for grounding subject

**Without contact shadow**: Subject floats
**With contact shadow**: Subject sits on surface

## Part 4: Shadow Refinement

### Shadow Color

Shadows aren't pure black:
- Cool shadows: Dark blue-gray (common in paintings with warm light)
- Warm shadows: Dark brown (less common)
- Sample shadow color from background, use that

**Implementation**: Instead of pure black shadow, use color sampled from background shadows.

### Shadow Softness

Distance from subject to surface affects blur:
- **Close to surface**: Sharp shadow (low blur radius, 2-5px)
- **Far from surface**: Soft shadow (high blur radius, 10-40px)
- **Variable distance**: Use gradient mask on blur or paint manually

### Shadow Opacity

Light strength affects opacity:
- **Strong light**: Dark, defined shadows (70-90% opacity)
- **Soft light**: Light, diffused shadows (20-40% opacity)
- **Multiple lights**: Multiple overlapping shadows (complex)

## Part 5: Advanced Techniques

### Ambient Occlusion

Dark areas where light can't reach:

1. New layer (Multiply)
2. Small soft brush
3. Paint dark in crevices:
   - Under chin
   - Around neck
   - Where hair meets head
4. Very subtle (10-20% opacity)
5. Adds depth and realism

### Shadow Perspective

Shadows follow perspective of scene:
- If background has perspective lines, shadow should follow them
- Use vanishing points to guide shadow direction
- Critical for architectural or structured environments

### Multiple Light Sources

Historical paintings sometimes show multiple lights (candles, windows):
- Create separate shadow layer for each light
- Each shadow in appropriate direction
- Blend with varying opacity
- Most complex scenario

## Verification Checklist

- [ ] Can identify light direction in reference images
- [ ] Can create cast shadows with transform method
- [ ] Can create contact shadows
- [ ] Understand shadow color (not pure black)
- [ ] Can adjust shadow softness based on distance
- [ ] Can adjust shadow opacity based on light strength
- [ ] Shadows ground subject realistically
- [ ] Can create ambient occlusion

## Common Mistakes

- **Pure black shadows**: Use dark color sampled from scene
- **No contact shadow**: Subject floats
- **Wrong direction**: Doesn't match light source
- **Uniform softness**: Should vary with distance
- **Too strong**: Overpowering, unnatural

## Time Estimate

45 minutes

## Next Steps

Exercise 3: Lighting Integration Techniques
