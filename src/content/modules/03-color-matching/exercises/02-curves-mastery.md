---
id: curves-mastery
type: exercise
title: Advanced Curves Adjustments
duration: 45
skills:
  - curves
  - color-correction
  - tonal-adjustment
difficulty: advanced
---

# Exercise: Advanced Curves Adjustments

## Learning Objective

Master Curves—the most powerful color and tonal adjustment tool in Photoshop—for precise color matching in composites.

## Why Curves?

Curves offers complete control over:
- Tonal range (blacks, shadows, midtones, highlights, whites)
- Individual color channels (precise color shifts)
- Contrast adjustments
- Split-toning (different colors in highlights vs. shadows)

Professional retouchers use Curves for 90% of color work.

## Setup

Gather practice images:
- Portrait needing color correction
- Image that's too warm or too cool
- Image with color cast
- Your historical painting reference

## Part 1: Understanding the Curves Interface

### The Curves Diagram

**Horizontal axis (input)**: Original tone values (left = black, right = white)
**Vertical axis (output)**: New tone values (bottom = black, top = white)
**Diagonal line**: Default (no change)—input equals output

**Moving curve UP**: Brightens
**Moving curve DOWN**: Darkens

### Step 1: Basic Tone Adjustments

1. Create Curves adjustment layer (Layer > New Adjustment Layer > Curves)
2. Click center of curve, drag up: Brightens midtones
3. Click center, drag down: Darkens midtones
4. Bottom-left anchor: Controls blacks
5. Top-right anchor: Controls whites
6. Click anywhere on curve to add control points

**Keyboard shortcuts**:
- Command/Ctrl + M: Open Curves
- Click on image: Places point on curve at that tone value

### Step 2: Contrast with Curves

Classic "S-curve" for contrast:

1. Add point in shadows (lower third), drag slightly DOWN
2. Add point in highlights (upper third), drag slightly UP
3. Creates gentle S-shape
4. Darkens darks, brightens lights = increased contrast

**Inverse S-curve** (reduce contrast):
- Brighten shadows, darken highlights
- Useful for matching low-contrast historical paintings

## Part 2: Color Correction with Curves

Curves has channel modes: RGB (luminosity), Red, Green, Blue

### Step 3: Channel-Based Color Correction

**Understanding color channels**:
- **Red channel**: Red ↔ Cyan
  - Up = add red
  - Down = add cyan
- **Green channel**: Green ↔ Magenta
  - Up = add green
  - Down = add magenta
- **Blue channel**: Blue ↔ Yellow
  - Up = add blue
  - Down = add yellow

### Step 4: Remove Color Cast

Image too blue (cool cast):

1. Curves > Select Blue channel
2. Drag curve DOWN in midtones
3. Adds yellow, removes blue
4. Check result, refine

Image too yellow (warm cast):

1. Curves > Select Blue channel
2. Drag curve UP in midtones
3. Adds blue, removes yellow

**General rule**: Add opposite color to remove cast.

### Step 5: Warm or Cool Overall Image

**To warm** (add yellow/orange):
- Blue channel: Curve down (adds yellow)
- Red channel: Curve slightly up (adds red)
- Result: Warm, golden tone

**To cool** (add blue):
- Blue channel: Curve up (adds blue)
- Red channel: Curve slightly down (adds cyan)
- Result: Cool, blue tone

## Part 3: Split-Toning with Curves

Different colors in highlights vs. shadows—essential for matching painting styles.

### Step 6: Warm Highlights, Cool Shadows

Typical in classical paintings:

1. Curves > Blue channel
2. Click in shadows (lower left area), drag UP (adds blue to shadows)
3. Click in highlights (upper right area), drag DOWN (adds yellow to highlights)
4. Creates curve with highlights low, shadows high
5. Adjust Red/Green channels similarly for refinement

### Step 7: Target Specific Tonal Ranges

Place curve points strategically:

- **Blacks** (0-10% on curve): Deepest shadows
- **Shadows** (10-40%): Dark areas
- **Midtones** (40-60%): Average tones
- **Highlights** (60-90%): Bright areas
- **Whites** (90-100%): Specular highlights

Adjust each independently for precise control.

## Part 4: Matching a Target Image

Practical color matching workflow:

### Step 8: Sample and Compare

1. Open source image (to be corrected) and target image (color goal)
2. Info panel (Window > Info) to view RGB values
3. Eyedropper: Sample corresponding areas in both images
   - Source: Skin midtone RGB: 180, 140, 120
   - Target: Skin midtone RGB: 160, 130, 100
4. Source is too bright, too red, too saturated

### Step 9: Make Matching Curves Adjustments

1. Create Curves adjustment layer on source
2. **RGB channel**: Drag midtones down (match luminosity)
   - Source brighter (180) → Target darker (160)
3. **Red channel**: Drag midtones down slightly
   - Source has more red (180) → Target less (160)
4. **Green channel**: Adjust to match
5. **Blue channel**: Adjust to match

6. Keep sampling and comparing, refine until RGB values similar

### Step 10: Use Curves Eyedroppers

Faster method for some scenarios:

1. Curves dialog has 3 eyedroppers:
   - Black point (left): Set black point
   - Gray point (center): Set neutral midtone
   - White point (right): Set white point

2. **Remove color cast**: Gray eyedropper → click neutral gray area
   - Photoshop neutralizes that point, removing cast
3. **Set black/white points**: Use respective eyedroppers on darkest/lightest points

**Limitation**: Only works if image has true neutral grays.

## Part 5: Advanced Techniques

### Technique 1: Luminosity Blend Mode

After Curves adjustment:

1. Change Curves layer blend mode to "Luminosity"
2. Affects only brightness, not color
3. Or: Change to "Color" to affect only color, not brightness

**Use case**: Match brightness without changing colors, or vice versa.

### Technique 2: Masks for Selective Adjustment

1. Create Curves adjustment
2. Invert mask (Command/Ctrl + I)—adjustment hidden
3. Paint white on mask where adjustment should apply
4. Allows different color corrections in different areas

**Example**: Warmer adjustment on face, cooler on background.

### Technique 3: Layer Opacity for Subtlety

Curves adjustment too strong:

1. Reduce adjustment layer opacity (50%, 30%, etc.)
2. Dials back intensity while keeping character

### Technique 4: Multiple Curves Layers

Don't try to fix everything with one Curves layer:

- Layer 1: Overall tone/contrast
- Layer 2: Color temperature
- Layer 3: Specific color shifts
- Layer 4: Final refinement

Each layer subtle—combined effect is powerful.

## Part 6: Curves for Your Project

### Matching Modern Photo to 1818 Painting

Typical adjustments needed:

1. **Reduce contrast** (flatten S-curve slightly)
   - Paintings have compressed tonal range

2. **Warm overall** (Blue channel down, Red slightly up)
   - Oil paintings and age create warm cast

3. **Split-tone** (Warm highlights, warm-neutral shadows)
   - Match painting's light quality

4. **Reduce saturation** (use Hue/Saturation after, but Curves sets foundation)

5. **Add color cast** if painting has one (common: amber, sepia, warm gray)

### Workflow

1. Sample painting colors (create reference swatches)
2. Composite head onto painting
3. Curves adjustment (clipped to head layer)
4. Match head's highlights to painting highlights (Blue channel primarily)
5. Match head's shadows to painting shadows (all channels)
6. Match midtones
7. Toggle adjustment on/off to verify improvement
8. Refine until seamless

## Verification Checklist

- [ ] Can use Curves to adjust contrast (S-curve)
- [ ] Understand RGB, Red, Green, Blue channel modes
- [ ] Can remove color casts with channel adjustments
- [ ] Can warm or cool images with Curves
- [ ] Can create split-toning effects
- [ ] Can sample colors and match with Curves
- [ ] Can use Curves eyedroppers appropriately
- [ ] Can use masks for selective Curves adjustments
- [ ] Understand when to use multiple Curves layers

## Common Mistakes

- **Too many control points**: More points = less control (3-5 typical)
- **Extreme adjustments**: Subtlety is key
- **RGB only**: Forgetting to use individual color channels
- **Single layer**: Multiple subtle layers better than one extreme layer
- **No reference**: Adjusting blindly without target comparison

## Practice Exercises

1. **Remove color cast**: Find image with obvious cast, remove with Curves
2. **Match two portraits**: Make one match the other's color
3. **Create period look**: Modern photo → 1818 painting color style
4. **Split-tone experiment**: Create 5 different split-tone looks with Curves

## Time Estimate

45 minutes (longer with all practice exercises)

## Next Steps

Proceed to Exercise 3: Matching Skin Tones to apply Curves mastery to the specific challenge of matching flesh tones across sources.
