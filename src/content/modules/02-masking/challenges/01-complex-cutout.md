---
id: complex-cutout
type: challenge
title: Extract Complex Subject
duration: 60
skills:
  - masking
  - hair-selection
  - edge-refinement
  - channels
difficulty: advanced
---

# Challenge: Extract Complex Subject

## Objective

Demonstrate comprehensive masking mastery by extracting a complex subject with mixed edge types, creating a professional-quality cutout suitable for any composite use.

## Scenario

You need to extract a portrait for your satirical project. The subject has:
- Complex hair with flyaways
- Hard edges (shoulders, clothing)
- Soft edges (face contours)
- Varying background complexity
- Possible color contamination from background

This challenge simulates real project conditions.

## Requirements

### Subject Selection

Choose or find a portrait photo with ALL of these characteristics:
1. **Hair complexity**: Wavy, curly, or with significant flyaways (not straight, flat hair)
2. **Mixed edges**: Hard clothing edges AND soft/wispy hair edges
3. **Challenging background**: Not solid white—preferably textured or multi-colored
4. **Good resolution**: Minimum 2000px on longest side
5. **Lighting variation**: Not flat-lit—some shadows and highlights

**Why these requirements**: This replicates real-world difficulty of your satirical project.

### Challenge Tasks

Complete all tasks below to professional standards:

## Task 1: Initial Selection Strategy

**Planning phase—don't start cutting yet!**

1. Open your chosen image
2. Evaluate the image:
   - Zoom to 100% and examine all edges
   - Identify hard edge zones (shoulders, clothing)
   - Identify soft edge zones (hair, possible neck blend)
   - Check all color channels for contrast
   - Note problem areas (low contrast, complex background)

3. Document your strategy:
   - Which tools for which areas?
   - Which channels show best contrast?
   - Where will you need manual refinement?
   - Estimated time for each zone?

**Success Criteria**:
- [ ] Analyzed entire perimeter
- [ ] Identified appropriate tools for each zone
- [ ] Checked channels for opportunities
- [ ] Have a clear workflow plan

## Task 2: Rough Cutout

Create initial selection:

1. Use appropriate tool for rough selection:
   - Quick Selection for well-defined areas
   - Object Selection if background is simple
   - Channels if high contrast available
2. Include hair area generously (better too much than too little)
3. Don't worry about perfection—goal is 80% accurate rough pass
4. Time limit for this phase: 5 minutes

**Success Criteria**:
- [ ] Subject roughly selected
- [ ] Hair area included (with extra background okay)
- [ ] Major body areas cleanly selected
- [ ] Completed in under 5 minutes

## Task 3: Hard Edge Refinement

Perfect geometric edges:

1. Identify all hard edges (shoulders, straight clothing lines, etc.)
2. Choose refinement method:
   - Pen Tool for ultra-precise geometric edges
   - Quick Selection + manual cleanup for moderately hard edges
3. Zoom to 200%+ for edge work
4. Verify: No jagged pixels, no over/under selection
5. Check corners carefully—often need manual touch-up

**Success Criteria**:
- [ ] All hard edges are crisp and precise
- [ ] No stair-stepping or aliasing
- [ ] Corners are clean
- [ ] Edges hold up at 300% zoom

## Task 4: Hair and Soft Edge Mastery

The critical phase:

1. Enter Select and Mask workspace
2. Choose appropriate view mode (On Black or On White)
3. Set Edge Detection Radius (10-30px for hair)
4. Use Refine Edge Brush:
   - Brush over ALL hair edges where they meet background
   - Multiple passes if needed
   - Vary brush size for detail areas
5. Evaluate on both black and white backgrounds
6. Adjust Shift Edge to remove halos (-10% to -30% typical)
7. Enable Decontaminate Colors (50-100%)

**Success Criteria**:
- [ ] Individual hair strands visible and preserved
- [ ] No significant halos on black or white background
- [ ] Hair looks natural, not over-processed
- [ ] Flyaways captured (even very thin ones)
- [ ] Transition is realistic (not too sharp, not too soft)

## Task 5: Manual Refinement

Perfect the details:

1. Output to "New Layer with Layer Mask"
2. Examine mask on multiple backgrounds:
   - Black
   - White
   - Medium gray
   - A color similar to original background
3. Identify problem areas
4. Select mask thumbnail
5. Use Brush Tool (B) for manual corrections:
   - White paint (low opacity) to reveal more
   - Black paint (low opacity) to hide more
6. Work at 100-200% zoom
7. Be patient and meticulous

**Success Criteria**:
- [ ] Mask quality consistent around entire perimeter
- [ ] No missed areas or obvious errors
- [ ] Manual refinement improved automatic results
- [ ] Works on all test backgrounds

## Task 6: Edge Quality Verification

Test your work rigorously:

1. Create 5 test backgrounds:
   - Pure black (#000000)
   - Pure white (#FFFFFF)
   - Medium gray (#808080)
   - Warm color (orange/red)
   - Cool color (blue/green)

2. Place your cutout on each background
3. Zoom to 200% and examine edges
4. Look for:
   - Halos or fringing
   - Color contamination
   - Lost detail
   - Hard edges where should be soft
   - Soft edges where should be hard

5. If problems found: Return to mask and fix

**Success Criteria**:
- [ ] Looks natural on all 5 backgrounds
- [ ] No obvious halos or fringing
- [ ] Color contamination removed or minimal
- [ ] Edge quality consistent at high zoom
- [ ] Passes professional quality standards

## Task 7: Final Composite Test

Prove your mask is production-ready:

1. Find a complex background image (not solid color):
   - Textured
   - Multi-colored
   - Similar to historical painting style if possible
2. Compose your subject onto this background
3. Add a subtle shadow under subject (optional but recommended)
4. Evaluate: Does it look real?
5. Show to someone else: Can they spot the composite?

**Success Criteria**:
- [ ] Subject integrates believably
- [ ] Edges are invisible at normal viewing distance
- [ ] No technical giveaways (halos, fringing)
- [ ] Looks like it could be a real photograph
- [ ] Professional-quality result

## Overall Success Criteria

Your challenge is complete when:

- [ ] All 7 tasks completed
- [ ] Hard edges are crisp and precise
- [ ] Hair selection preserves fine detail
- [ ] No halos, fringing, or obvious mask errors
- [ ] Works on multiple backgrounds
- [ ] Quality holds up at 200%+ zoom
- [ ] Final composite looks photorealistic
- [ ] Total time: Under 60 minutes

## Evaluation Rubric

Grade yourself honestly:

**Excellent (90-100%)**:
- Indistinguishable from professional studio cutout
- Hair detail is exceptional
- Hard edges are pixel-perfect
- Works flawlessly on any background
- Zero visible artifacts
- Could be used in commercial work as-is

**Good (75-89%)**:
- Very good quality with minor imperfections
- Hair mostly preserved, a few thin strands lost
- Hard edges are clean
- Works well on most backgrounds
- Minor halos or fringing that could be fixed
- Suitable for most purposes with minor refinement

**Needs Improvement (<75%)**:
- Obvious masking errors
- Significant hair detail lost
- Halos or fringing visible at normal viewing distance
- Doesn't work on multiple backgrounds
- Hard edges are sloppy
- Requires significant additional work

## Common Challenges and Solutions

### Challenge: "Refine Edge Brush removing too much"
**Solution**: Lower the Radius setting, use smaller brush, paint only the actual edge transition zone.

### Challenge: "Hair looks too sharp and fake"
**Solution**: Slight Gaussian Blur on mask (0.5-1px), or reduce Contrast setting in Select and Mask.

### Challenge: "Halo won't go away"
**Solution**: Shift Edge more negative (up to -50%), or manually paint black on mask edge at low opacity.

### Challenge: "Background color in hair"
**Solution**: Decontaminate Colors at 100%, or use Hue/Saturation adjustment clipped to layer (Module 3 technique).

### Challenge: "Lost fine hair strands"
**Solution**: Re-enter Select and Mask, use Refine Edge Brush with smaller brush, paint specifically over lost strands.

## Time Tracking

Track your time for each task:
- Task 1 (Planning): ___ minutes
- Task 2 (Rough cutout): ___ minutes
- Task 3 (Hard edges): ___ minutes
- Task 4 (Hair/soft edges): ___ minutes
- Task 5 (Manual refinement): ___ minutes
- Task 6 (Verification): ___ minutes
- Task 7 (Final test): ___ minutes
- **Total**: ___ minutes

**Goal**: Complete in under 60 minutes with professional quality.

With practice, you should get faster while maintaining quality.

## Real-World Application

This challenge directly simulates your satirical project workflow:
- 47 heads to extract and composite
- Each needs this level of quality
- Consistency is critical
- Speed + quality = efficient workflow

If you can do one head in 60 minutes with excellent quality, you can do 47.

## Challenge Extensions

### Extension 1: Batch Processing Setup
Structure your workflow so it could be partially automated:
- Consistent layer naming
- Reusable channel operations
- Action-recordable steps

### Extension 2: Multiple Heads
Extract 3 different heads using the same workflow, aim for consistent quality across all three.

### Extension 3: Historical Painting Composite
Find a historical painting image, composite your extracted subject into it with lighting/color matching (preview of Modules 3-4).

## Submission Checklist

Before considering challenge complete:

- [ ] All tasks completed and criteria met
- [ ] Screenshots of:
  - Final cutout on black background
  - Final cutout on white background
  - Final cutout on complex background
  - Mask viewed at 200% zoom (showing quality)
- [ ] Self-graded using rubric
- [ ] Reflected on what was hardest
- [ ] Identified techniques to practice more
- [ ] Ready to move to Challenge 2

## What's Next?

Challenge 1 tested your extraction skills. Challenge 2 will test your ability to create a seamless composite, combining your masking skills with blending techniques.

Proceed to Challenge 2: Create Seamless Composite when ready.
