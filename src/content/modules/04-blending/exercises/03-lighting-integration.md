---
id: lighting-integration
type: exercise
title: Lighting Integration Techniques
duration: 50
skills:
  - lighting
  - highlights
  - dodge-burn
  - integration
difficulty: advanced
---

# Exercise: Lighting Integration Techniques

## Learning Objective

Make composited subjects appear lit by their new environment through highlight, shadow, and lighting adjustments.

## The Lighting Challenge

When you composite a head photographed in modern studio lighting into a 1818 candlelight painting, the lighting won't match. You must relight the head digitally to match the environment.

## Part 1: Analyze Environment Lighting

Study your target environment (Declaration of Independence painting):

**Light characteristics**:
- Direction: Where does light come from? (often 45° from upper left/right in classical paintings)
- Quality: Hard (candle) or soft (diffused)?
- Color: Warm (yellow-orange) or cool? (candlelight is very warm)
- Intensity: Strong highlights or gentle? (candles create strong highlights on closer subjects)

**Document**: Sketch light direction arrows on printout/screenshot.

## Part 2: Adding Edge Highlights

Subjects pick up light along edges facing the light source.

**Method 1: Screen Blend Mode**

1. New layer above subject
2. Soft brush, white paint
3. Paint along edges that face light source
4. Set blend mode to Screen
5. Opacity: 20-40%
6. Gaussian Blur: 1-3px for soft glow

**Method 2: Dodge Tool**

1. Select subject layer (or work on duplicate)
2. Dodge Tool (O)
3. Range: Highlights
4. Exposure: 10-20%
5. Paint along lit edges
6. Builds up gradually

**Where to add highlights**:
- Top of head/hair (if lit from above)
- Side of face facing light
- Shoulder edge
- Any protruding features (nose, cheekbone)

## Part 3: Refining Subject's Own Shadows

Match shadow characteristics to environment.

**Deepen Shadows** (if environment is contrasty):

1. Curves adjustment (clipped to subject)
2. Drag lower-left (blacks) slightly down
3. Only affects shadows, preserves highlights

**Lighten Shadows** (if environment is soft/diffused):

1. Curves adjustment (clipped to subject)
2. Drag lower-left (blacks) up
3. Compresses tonal range

**Recolor Shadows**:

If environment has warm shadows:
1. Color Balance adjustment (clipped)
2. Shadows slider: Add yellow/red
3. Matches environmental shadow color

## Part 4: Dodge and Burn

Non-destructive lighting refinement.

**Setup**:
1. New layer, fill with 50% gray
2. Set blend mode to Soft Light (or Overlay for stronger effect)
3. Name: "Dodge and Burn"

**Dodge (lighten)**:
- Brush Tool, white paint
- Low opacity (5-10%)
- Paint highlights, build gradually
- Enhances existing highlights

**Burn (darken)**:
- Brush Tool, black paint
- Low opacity (5-10%)
- Paint shadows, build gradually
- Enhances existing shadows

**Applications**:
- Enhance cheekbone highlights
- Deepen eye socket shadows
- Add dimension to nose
- Subtle facial contouring

## Part 5: Atmospheric Light Effects

### Rim Lighting

Light wraps around edge of subject:

1. New layer (Screen blend)
2. Paint thin line of warm color (sample from environment light)
3. Along entire lit edge
4. Creates separation from background
5. Common in backlit scenarios

### Light Spill

Subject picks up color from nearby light sources:

1. New layer (Color blend mode, 20-40% opacity)
2. Sample warm light color from environment
3. Soft brush, large size
4. Paint over subject areas facing light
5. Subtle color contamination from light

## Part 6: Matching Light Direction

If subject lit from wrong direction:

**Minor corrections**:
- Dodge on one side, burn on other
- Shifts apparent light direction slightly

**Major corrections** (subject lit from opposite direction):
- Very difficult to fix convincingly
- Better to flip subject horizontally if feasible
- Or choose different source image

## Part 7: Multiple Light Sources

Historical paintings sometimes show multiple lights:

1. Identify each light source (candles, windows)
2. For each source:
   - Add appropriate highlights
   - Add appropriate shadows
3. Main light: Stronger effect
4. Fill light: Weaker effect
5. Layer separate effects for control

## Verification Checklist

- [ ] Can analyze environment lighting characteristics
- [ ] Can add edge highlights with Screen blend
- [ ] Can use Dodge tool for highlights
- [ ] Can refine subject's internal shadows
- [ ] Can use non-destructive dodge and burn
- [ ] Can create rim lighting effects
- [ ] Can add light spill/color contamination
- [ ] Subject appears lit by environment

## Common Mistakes

- **Too strong**: Highlights too bright, looks artificial
- **Wrong direction**: Highlights on wrong side for light source
- **Uniform**: Not varying intensity (closer to light = brighter)
- **No subtlety**: Using high opacity (build up gradually better)
- **Ignoring shadow side**: Only adding highlights, forgetting to adjust shadows

## Time Estimate

50 minutes

## Next Steps

Exercise 4: Texture and Detail Matching
