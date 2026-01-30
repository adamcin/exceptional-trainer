---
id: hair-selection
type: exercise
title: Hair and Fur Selection Mastery
duration: 50
skills:
  - hair-selection
  - refine-edge
  - select-and-mask
difficulty: advanced
---

# Exercise: Hair and Fur Selection Mastery

## Learning Objective

Master the most challenging aspect of masking: selecting fine details like hair, fur, and wispy edges with professional quality.

## Why Hair Selection Is Hard

Hair presents unique challenges:
- **Individual strands**: Hundreds or thousands of thin elements
- **Transparency**: Hair is semi-transparent in many areas
- **Background contamination**: Hair edges absorb background colors
- **Varying density**: Thick areas vs. thin areas vs. wispy flyaways
- **Motion and direction**: Hair flows and overlaps

Poor hair selection is the #1 tell of amateur compositing.

## The Select and Mask Workspace

This is Photoshop's dedicated environment for refining edges, especially hair.

## Setup

1. Find 3-5 portrait photos with varying hair complexity:
   - Simple: Straight hair against solid background
   - Medium: Wavy hair with some flyaways
   - Complex: Curly hair against busy background
   - Expert: Backlit hair with lots of transparency
2. Open the simplest one first

## Part 1: Select and Mask Workspace Tour

### Step 1: Access the Workspace

Three ways to access:
1. Make a rough selection → Click "Select and Mask" button in options bar
2. Select > Select and Mask
3. Quick Selection Tool active → Press Command/Ctrl + Alt/Option + R

### Step 2: View Modes

Press F to cycle through view modes:

- **Onion Skin** (O): Shows original with transparency
- **Marching Ants** (M): Traditional selection view
- **Overlay** (V): Red overlay shows unselected areas (like Quick Mask)
- **On Black** (A): Subject on black background (best for light hair)
- **On White** (T): Subject on white background (best for dark hair)
- **Black & White** (K): Shows actual mask
- **On Layers** (Y): Shows subject on actual layer stack

**Best practice**: Toggle between "On Black" and "On White" to catch problems.

### Step 3: Toolbar Overview

Left toolbar tools:
- **Quick Selection Tool** (W): Make/adjust selection
- **Refine Edge Brush Tool** (R): THE hair selection tool
- **Brush Tool** (B): Manually paint selection
- **Lasso Tool** (L): Add/subtract areas
- **Hand Tool** (H): Pan around
- **Zoom Tool** (Z): Zoom in/out

## Part 2: The Refine Edge Brush Workflow

This is the primary tool for hair selection.

### Step 1: Make Rough Selection

Before entering Select and Mask:

1. Use Quick Selection Tool (W)
2. Select subject INCLUDING rough hair area
3. Don't worry about perfection—include some background near hair
4. The goal: Get close, don't miss any hair

### Step 2: Enter Select and Mask

1. Click "Select and Mask" button
2. Choose view mode: "On Black" for light hair, "On White" for dark hair
3. Zoom to 100% or higher (Z tool)

### Step 3: Adjust Global Settings

Right panel settings:

**Edge Detection**:
- **Radius**: Increase slider (start at 5-10px)
- Higher radius = more edge refinement area
- Check "Smart Radius" for mixed edge types
- For hair: Usually 10-30px radius

**Global Refinements**:
- **Smooth**: Removes jagged edges (0-5 usually)
- **Feather**: Softens edge transition (0-2px for hair)
- **Contrast**: Sharpens edge (increase if edge too soft)
- **Shift Edge**: Move edge in (-) or out (+)
  - Hair often needs -10% to -30% to remove background contamination

### Step 4: Use Refine Edge Brush (THE KEY TECHNIQUE)

1. Select Refine Edge Brush Tool (R)
2. Adjust brush size with `[` and `]`
3. Brush size should be slightly larger than the hair strands
4. Paint over the hair edges where they meet the background
5. Watch as Photoshop analyzes and extracts hair detail

**Technique**:
- Paint over the transition zone (where hair meets background)
- Don't paint in solid areas (middle of head, solid background)
- Paint multiple passes if needed
- Start with larger strokes, refine with smaller strokes
- Work your way around the entire head

**Magic moment**: Watch fine hair strands appear that weren't visible before!

### Step 5: Manual Cleanup

Switch to Brush Tool (B) for manual refinement:

1. Press B to activate Brush Tool
2. Paint white (Add): Reveals more of subject
3. Paint black (Subtract, Alt/Option): Removes areas
4. Toggle X to swap foreground/background colors
5. Use for:
   - Adding back areas Refine Edge removed
   - Removing background areas Refine Edge kept
   - Precision work on individual strands

### Step 6: Refine Problem Areas

Common issues and fixes:

**Halo (bright edge around hair)**:
- Shift Edge slider to negative (-20% to -40%)
- Or: Use Brush Tool (black) to manually remove halo

**Background color in hair**:
- Shift Edge slider negative
- Next module covers color correction for this

**Lost detail**:
- Lower Radius slightly
- Use Refine Edge Brush again with smaller brush

**Fuzzy edges**:
- Increase Contrast slider
- Reduce Feather

### Step 7: Output Settings

Bottom of right panel:

**Output To**: Choose "Layer Mask" (most common)

Other options:
- New Layer: Creates new layer, deletes background
- New Layer with Layer Mask: Best for further refinement
- New Document: Separate file

**Decontaminate Colors**: Check this!
- Replaces edge pixels to remove background color
- Essential for hair against colored backgrounds
- Amount: 50-100%

## Part 3: Advanced Techniques

### Technique 1: Multiple Backgrounds

For complex subjects:

1. Make selection against original background
2. Output to layer mask
3. Place subject on new background
4. If mask isn't perfect for new background:
   - Enter Select and Mask again (mask selected)
   - Refine further
   - Adjust Shift Edge for new background

### Technique 2: Edge Falloff Strategy

Different parts of hair need different treatment:

- **Top of head**: Sharper edge, less refinement
- **Sides**: Moderate refinement
- **Bottom/shoulders**: Maximum refinement for flyaways
- **Bangs/forehead**: Very precise edge

Adjust Refine Edge Brush size and pressure accordingly.

### Technique 3: Backlit Hair

Backlit hair is semi-transparent:

1. Lower Contrast setting (keeps transparency)
2. Use "On Black" view to see all hair detail
3. DON'T shift edge too much—preserve glow
4. Decontaminate Colors at lower percentage (30-50%)

### Technique 4: Motion Blur

Hair in motion has blur:

1. Increase Radius significantly (30-50px)
2. Lower Contrast (preserve blur)
3. Don't over-refine—keep natural blur

## Practice Progression

Work through your images in order of difficulty:

### Image 1: Simple
- Straight hair, solid background
- Focus on workflow basics
- Target: 95%+ accuracy
- Time: 10 minutes

### Image 2: Medium
- Wavy hair, moderate flyaways
- Practice Refine Edge Brush technique
- Target: 90%+ accuracy
- Time: 15 minutes

### Image 3: Complex
- Curly hair OR busy background
- Multiple passes with Refine Edge Brush
- Manual cleanup required
- Target: 85%+ accuracy
- Time: 20 minutes

### Image 4: Expert
- Backlit hair OR very detailed
- All techniques combined
- Patience required
- Target: 80%+ accuracy (this is hard!)
- Time: 30 minutes

## Verification Checklist

- [ ] Can access and navigate Select and Mask workspace
- [ ] Understand all view modes and when to use each
- [ ] Can use Refine Edge Brush effectively
- [ ] Can adjust Edge Detection settings appropriately
- [ ] Can manually refine with Brush Tool
- [ ] Understand Shift Edge and Decontaminate Colors
- [ ] Can handle simple to complex hair
- [ ] Output quality is professional (no obvious halos or lost detail)

## Common Mistakes

- **Radius too small**: Doesn't capture all hair strands
- **Radius too large**: Blurs edges, slows down processing
- **Painting in wrong areas**: Only paint the transition zone
- **Forgetting Decontaminate Colors**: Leaves color fringing
- **Over-shifting edge**: Removes too much hair, looks choppy
- **Working at low zoom**: Must work at 100%+ for quality
- **Giving up too soon**: Hair takes patience!

## Quality Evaluation

View your result on multiple backgrounds:

1. Black background: Shows halos and lost dark strands
2. White background: Shows lost light strands
3. Medium gray: Best overall evaluation
4. Checkerboard (transparency): Shows actual edge
5. Similar color to original background: Tests color contamination

**Professional standard**: Result should look natural on ALL these backgrounds.

## Real-World Application

For your satirical project:

- Elon Musk portraits will have varying hair complexity
- Historical painting background is complex and textured
- Each head needs perfect hair selection
- Color contamination must be removed (dark suit backgrounds common)
- Consistency across all 47 figures is critical

Master this now, apply 47 times later!

## Challenge Extension

**The Impossible Hair Challenge**:

Find the most difficult hair image you can:
- Backlit + curly + busy background + flyaways

See how close you can get to perfect. This is where you truly learn the tools.

## Pro Tips

**Tip 1**: Work in 3 passes:
- Pass 1: Rough Refine Edge Brush (entire perimeter)
- Pass 2: Detailed Refine Edge Brush (problem areas)
- Pass 3: Manual Brush Tool cleanup

**Tip 2**: Save your work:
- Output to "New Layer with Layer Mask"
- If not satisfied, enter Select and Mask again
- Previous work is preserved, can refine further

**Tip 3**: Hair color matters:
- Blonde/light hair: View on black, shift edge negative
- Dark hair: View on white, shift edge slightly negative
- Red hair: Tricky! Uses both light and dark techniques

**Tip 4**: Reference the final composite:
- If going onto dark background, can sacrifice some light strands
- If going onto light background, preserve all light strands
- Tailor your mask to the final destination

## Time Estimate

50 minutes (longer for complex subjects)

## Next Steps

You've conquered hair! Now proceed to Exercise 3: Edge Refinement Techniques to perfect your edge quality across all subject types.
