---
id: edge-refinement
type: exercise
title: Edge Refinement Techniques
duration: 40
skills:
  - edge-refinement
  - masking
  - precision
difficulty: intermediate
---

# Exercise: Edge Refinement Techniques

## Learning Objective

Master the techniques for perfecting mask edges to create seamless, undetectable composites across all subject types.

## Why Edge Quality Matters

The edge is where composites succeed or fail:
- **Good edge**: Invisible, natural-looking, draws no attention
- **Bad edge**: Halos, fringing, hard lines, obvious composite
- **Professional edge**: Pixel-perfect quality at any zoom level

Your satirical project requires edges so good that viewers don't notice the heads were replaced.

## The Anatomy of a Perfect Edge

A mask edge has three zones:

1. **Core** (100% opaque): Solid subject area
2. **Transition** (50-99% opacity): Edge gradient zone
3. **Exterior** (0% opacity): Background area

Perfect edges have:
- Appropriate transition width for subject type
- No background color contamination
- Preserved fine detail
- Smooth, non-aliased curves
- Consistent quality around entire perimeter

## Setup

Gather images with different edge types:
- **Type 1**: Hard geometric edges (building, book)
- **Type 2**: Soft organic edges (flower petals, fabric)
- **Type 3**: Mixed edges (person: hard shoulders, soft hair)
- **Type 4**: Transparent edges (glass, smoke, sheer fabric)
- **Type 5**: Textured edges (tree bark, rough stone)

## Part 1: Hard Edge Refinement

Best for: Architecture, products, geometric objects

### Step 1: Create Precise Selection

1. Use Pen Tool (P) to trace edge
2. Convert path to selection (Command/Ctrl + Enter)
3. Feather: 0 pixels (hard edge)
4. Create layer mask

### Step 2: Evaluate Edge Quality

1. Zoom to 200-400%
2. Toggle mask visibility (Shift + click mask thumbnail)
3. Look for:
   - Jagged pixels (aliasing)
   - Unintentional softness
   - Missed pixels in corners

### Step 3: Refine Hard Edges

**Method 1: Mask Edge Adjustment**

1. Select layer mask (click mask thumbnail)
2. Select > Modify > Contract (0.5-1px) if edge too soft
3. Or: Select > Modify > Expand (0.5-1px) if edge too tight

**Method 2: Levels Adjustment on Mask**

1. Select mask thumbnail
2. Command/Ctrl + L (Levels)
3. Adjust black and white input sliders to sharpen edge
4. Move them closer together = harder edge
5. Be subtle: 5-10 point adjustments

**Method 3: Minimum/Maximum Filter**

1. Select mask
2. Filter > Other > Minimum (shrinks mask)
3. Or: Maximum (expands mask)
4. Radius: 1-2 pixels
5. Use to tighten or loosen edge precisely

### Step 4: Corner Precision

Corners often need special attention:

1. Zoom to 300%+
2. Select Brush Tool (B)
3. Paint directly on mask (white = reveal, black = hide)
4. Use small hard brush (1-3px)
5. Perfect each corner manually

## Part 2: Soft Edge Refinement

Best for: Organic subjects, portraits, nature

### Step 1: Determine Appropriate Feathering

Soft edges need transition zones:

**Feather amounts**:
- Very soft (5-10px): Clouds, smoke, motion blur
- Soft (3-5px): Fabric, flower petals, soft skin
- Moderate (1-2px): Most portraits
- Slight (0.5-1px): Close-cropped subjects

### Step 2: Create Soft Selection

1. Make initial selection with Quick Selection Tool
2. Select > Modify > Feather
3. Enter feather radius
4. Create layer mask

### Step 3: Evaluate Softness

1. View mask on multiple backgrounds:
   - Black: Shows if edge too soft (gradual fade visible)
   - White: Shows if edge too hard (sharp line visible)
   - Middle gray: Best for evaluation
2. Zoom to 100-200%
3. Look for unnatural hardness or excessive softness

### Step 4: Adjust Feather Amount

**To soften existing mask**:

1. Select mask
2. Filter > Blur > Gaussian Blur
3. Radius: 0.5-2px (subtle!)
4. Preview different backgrounds

**To harden existing mask**:

1. Select mask
2. Command/Ctrl + L (Levels)
3. Move black and white sliders inward
4. Steepens the transition gradient

### Step 5: Gradient Edge Blending

For very soft edges:

1. Select mask
2. Gradient Tool (G)
3. Black to white gradient
4. Drag across edge area
5. Useful for: Vignettes, soft background blends, cloud edges

## Part 3: Mixed Edge Refinement

Best for: Portraits, animals (hard body, soft hair)

### Step 1: Identify Edge Types

Walk around perimeter mentally:
- Head top: Soft (hair)
- Face: Moderate (skin)
- Shoulders: Hard (clothing)
- Arms: Hard (fabric)

Each area needs different treatment.

### Step 2: Zone-Based Refinement

1. Create initial mask (covers whole subject)
2. Make selection of ONLY hard edge zones (Lasso Tool)
3. With mask selected: Apply Minimum filter or Levels (harden)
4. Deselect
5. Make selection of ONLY soft edge zones
6. Apply Gaussian Blur or edge refinement (soften)
7. Deselect

**Result**: Different edge treatments on same mask.

### Step 3: Manual Transition Painting

For ultimate control:

1. Select mask
2. Brush Tool (B)
3. Reduce opacity (20-40%)
4. Soft brush
5. Paint white along edges that need to be softer
6. Paint black along edges that need to be harder
7. Build up gradually with multiple strokes

**Pro technique**: Use Overlay blend mode for brush to enhance existing mask values.

## Part 4: Transparent Edge Handling

Best for: Glass, smoke, veils, semi-transparent objects

### Step 1: Understand Transparency in Masks

- **Opaque mask** (white): 100% visible
- **Transparent mask** (gray): Partially visible
- **Invisible mask** (black): 0% visible

Glass and semi-transparent subjects need gray values in mask.

### Step 2: Create Transparency Mask

**Method 1: Luminosity-Based**

1. Channels panel
2. Find channel with best contrast (usually Blue for glass)
3. Command/Ctrl + click channel thumbnail (loads as selection)
4. Create layer mask
5. Adjust with Levels to perfect transparency

**Method 2: Manual Painting**

1. Create rough mask
2. Select mask
3. Brush Tool with gray color (50% gray = 50% transparent)
4. Paint varying opacity across semi-transparent areas
5. Sample colors from original for realistic transparency

### Step 3: Preserve Highlights

Transparent objects often have bright highlights:

1. These should be MORE opaque in mask
2. Use Dodge Tool (O) on mask to brighten highlight areas
3. Or: Paint white at low opacity to build up

### Step 4: Edge Glow

Transparent objects often have edge glow:

1. Don't remove this in mask!
2. Let glow extend slightly beyond object edge
3. Creates realistic integration

## Part 5: Textured Edge Refinement

Best for: Tree bark, rough stones, textured fabrics

### Step 1: Preserve Texture

Textured edges shouldn't be smooth:

1. Use Quick Selection Tool (captures texture naturally)
2. In Select and Mask:
   - Lower Smooth value (0-2)
   - Smart Radius ON
   - Refine Edge Brush along textured areas
3. Result: Mask follows texture variations

### Step 2: Add Texture Back

If edge is too smooth:

1. Select mask
2. Filter > Noise > Add Noise
3. Amount: 2-5%
4. Gaussian, Monochromatic
5. Creates irregular edge that looks more natural

### Step 3: Edge Irregularity

For very irregular edges (tree branches):

1. Don't try to make smooth
2. Let mask be jagged (that's realistic)
3. Use Refine Edge Brush to capture all detail
4. Result may look "wrong" in mask view but perfect in composite

## Part 6: Edge Color Contamination

Often edges contain background color.

### Step 1: Detect Contamination

1. Place subject on contrasting background
2. Look for color fringe:
   - Green edge on subject from green screen
   - Blue edge from sky background
   - Warm/cool shift

### Step 2: Remove Contamination (Preview of Module 3)

**Quick fix in Select and Mask**:
- Decontaminate Colors checkbox
- Amount: 50-100%

**Manual fix**:
- Module 3 covers this extensively
- For now: Shift Edge negative to reduce contamination

## Verification Checklist

- [ ] Can create and refine hard edges
- [ ] Can create and refine soft edges
- [ ] Can handle mixed edge types on one subject
- [ ] Can create masks for transparent subjects
- [ ] Can preserve textured edges
- [ ] Can identify and begin addressing color contamination
- [ ] Edges look natural on multiple backgrounds
- [ ] Quality holds up at high zoom (200%+)

## Common Mistakes

- **One-size-fits-all**: Using same feather amount for entire perimeter
- **Over-smoothing**: Removing natural texture and irregularity
- **Under-feathering**: Hard edges where they should be soft
- **Over-feathering**: Soft edges where they should be hard
- **Ignoring corners**: Corners often need manual attention
- **Not testing backgrounds**: Must view on multiple backgrounds
- **Working at low zoom**: Edge quality requires 100%+ zoom

## Quality Testing Protocol

For every mask you create:

1. **Black background test**: Shows halos and fringing
2. **White background test**: Shows missing detail
3. **Colored background test**: Shows color contamination
4. **Similar color test**: Background similar to original (hardest test)
5. **Zoom test**: 200-400% zoom reveals quality issues

**Standard**: Mask should pass ALL tests.

## Real-World Application

Your satirical project requires:

- **Hard edges**: Shoulders, clothing, neck cutoff
- **Soft edges**: Hair, sometimes neck/face blend
- **Mixed edges**: Most heads have both
- **Consistent quality**: All 47 heads need same quality level

Perfect your technique now on practice images, apply consistently to project later.

## Challenge Extension

**The Edge Perfection Challenge**:

1. Find a portrait photo
2. Create mask with:
   - Hard edges on shoulders
   - Moderate edges on face
   - Soft edges on hair
   - Perfect corners at neck/shoulder junction
3. Test on 5 different backgrounds
4. Refine until invisible on ALL backgrounds
5. Target: Professional print quality

## Pro Tips

**Tip 1**: Edge direction matters
- Edges coming toward camera: Sharper
- Edges going away: Can be softer
- Depth cues help realism

**Tip 2**: Lighting affects edges
- Backlit: Softer, more glow
- Front-lit: Sharper, more defined
- Side-lit: Mixed (shadow side softer)

**Tip 3**: Context matters
- If final composite is web-sized: Can be less precise
- If printing large: Needs maximum precision
- Always work to print standards

**Tip 4**: Edge width varies
- Distant objects: Narrower transition
- Close objects: Wider transition
- Depth-appropriate edges increase realism

## Time Estimate

40 minutes (practice on 3-4 different edge types)

## Next Steps

Proceed to Exercise 4: Channel-Based Masking to learn advanced masking workflows using color channels.
