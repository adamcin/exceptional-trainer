---
id: composite-scene
type: challenge
title: Create Seamless Composite
duration: 45
skills:
  - masking
  - compositing
  - blending
  - integration
difficulty: advanced
---

# Challenge: Create Seamless Composite

## Objective

Combine your masking expertise with basic blending techniques to create a believable composite scene where the subject appears to have been part of the original image.

## Scenario

Now that you can extract subjects cleanly (Challenge 1), prove you can integrate them seamlessly into new environments. This is the ultimate test of your masking quality—poor masks become obvious in composite scenes.

## Requirements

### Image Selection

You need TWO images:

**Image 1: Subject** (Person to extract)
- Clear, well-lit portrait
- Ideally similar lighting direction to background
- Good resolution (2000px+)
- Complex enough to test your skills (hair, mixed edges)

**Image 2: Background** (Destination scene)
- Interesting environment (not plain wall)
- Compatible scale (don't put giant person in dollhouse)
- Lighting direction visible
- Textured or detailed (tests mask quality)
- Bonus: Historical painting style (practice for your project)

## Challenge Tasks

Complete all 5 tasks for a seamless result:

## Task 1: Extract Subject with Destination in Mind

This is different from generic extraction:

1. Analyze background image first:
   - What's the lighting direction?
   - What's the color temperature? (warm/cool)
   - What's the background complexity?
   - Where will subject be placed?

2. Extract subject with these considerations:
   - If background is dark: Preserve more detail in shadow areas
   - If background is light: Perfect highlights
   - Edge softness should match background sharpness
   - Color contamination must be removed (will clash with new background)

3. Create mask optimized for THIS specific composite

**Success Criteria**:
- [ ] Subject extracted cleanly
- [ ] Mask quality appropriate for destination
- [ ] Considered final placement during extraction
- [ ] Color contamination removed

## Task 2: Scale and Position

Make the composite believable:

1. Place subject layer above background
2. Transform (Command/Ctrl + T) to appropriate size:
   - Match perspective: If background shows perspective, subject must match
   - Match scale: Consider distance and relative sizes
   - Match angle: Subject orientation should fit scene logic
3. Position subject where they would logically exist in scene
4. Don't just center it—think about composition

**Success Criteria**:
- [ ] Scale is believable (not giant or tiny)
- [ ] Position makes spatial sense
- [ ] Perspective matches (not floating or wrong angle)
- [ ] Composition is visually pleasing

## Task 3: Refine Mask for New Background

Your mask might need adjustment:

1. View composite at 100% zoom
2. Toggle layer visibility to check edges
3. Look for problems:
   - Halos more obvious on new background?
   - Lost detail that should be visible?
   - Edge too hard or too soft for this context?

4. Select mask thumbnail
5. Make refinements:
   - Paint with soft brush (low opacity) to adjust edge
   - Use Levels on mask to shift edge in/out
   - Gaussian Blur on mask if edge too hard
   - Dodge/Burn on mask for selective adjustments

**Success Criteria**:
- [ ] Edges look natural against new background
- [ ] No halos or obvious fringing
- [ ] Edge character matches background
- [ ] Refined based on actual composite appearance

## Task 4: Basic Integration (Preview of Modules 3-4)

Even without color matching expertise, you can do basic integration:

### Edge Blending

1. Create new layer above subject
2. Set to Soft Light or Overlay blend mode
3. Use soft brush to paint along edges:
   - Sample color from background near subject
   - Paint gently along subject edges
   - Helps blend color and reduce artificial look
4. Low opacity (10-20%)—subtlety is key

### Quick Shadow

1. Duplicate subject layer
2. Fill with black (or dark gray)
3. Place below subject
4. Transform: Flip, skew, or distort to match lighting direction
5. Blur: Filter > Blur > Gaussian Blur (vary based on distance)
6. Reduce opacity (20-40%)
7. Mask shadow where it shouldn't appear

### Basic Color Harmony

1. Add Curves or Color Balance adjustment layer
2. Clip to subject layer (Alt/Option + click between layers)
3. Adjust to push subject colors toward background colors
4. Subtle adjustments only—Module 3 covers this properly

**Success Criteria**:
- [ ] Edge blending applied subtly
- [ ] Shadow present and believable
- [ ] Basic color harmony attempted
- [ ] Integration techniques improve realism

## Task 5: Detail and Realism

Polish the composite:

### Match Background Texture

If background is:
- **Grainy**: Add noise to subject (Filter > Noise > Add Noise, 1-2%)
- **Soft**: Slight Gaussian Blur on subject (0.5-1px)
- **Sharp**: Ensure subject is equally sharp

### Atmospheric Perspective

If subject is supposed to be far away:
- Reduce contrast (Curves adjustment)
- Shift toward blue (Color Balance toward cyan)
- Reduce sharpness slightly
- Lower saturation slightly

If subject is in foreground:
- Maintain full contrast and sharpness

### Edge Light Interaction

Look at background lighting:
- Where would light hit subject's edges?
- Add subtle highlights with Dodge tool or white paint (low opacity)
- Where would shadows occur on subject?
- Add subtle shadows with Burn tool or dark paint (low opacity)

**Success Criteria**:
- [ ] Subject matches background texture/grain
- [ ] Depth cues appropriate (if applicable)
- [ ] Light interaction considered
- [ ] Details support the illusion

## Overall Success Criteria

Composite is successful when:

- [ ] Subject appears to belong in scene
- [ ] Edges are invisible at normal viewing distance
- [ ] Scale and perspective are believable
- [ ] Lighting direction is compatible
- [ ] Shadow grounds the subject
- [ ] Colors harmonize (even if not perfect)
- [ ] Texture consistency maintained
- [ ] No obvious technical flaws
- [ ] Passes the "glance test" (looks real at first glance)
- [ ] Completed in under 45 minutes

## Evaluation Rubric

Grade yourself:

**Excellent (90-100%)**:
- Completely believable composite
- Even close inspection reveals no obvious flaws
- Masking is invisible
- Integration techniques skillfully applied
- Could fool most viewers
- Lighting and scale perfect
- Professional portfolio quality

**Good (75-89%)**:
- Convincing composite overall
- Minor flaws visible on close inspection
- Masking is good but has small issues
- Integration helps but not perfect
- Casual viewers would believe it
- Lighting and scale mostly correct
- Good work with room for improvement

**Needs Improvement (<75%)**:
- Obviously a composite
- Masking flaws are visible
- Scale, perspective, or lighting feels off
- Integration techniques not effective
- Doesn't pass glance test
- Needs significant additional work

## Common Issues and Fixes

### Issue: "Subject looks pasted on"
**Causes**:
- Halo around subject (mask issue)
- Colors don't harmonize (adjustment needed)
- Edge too sharp (needs slight blur)
- No shadow (missing grounding element)

**Fixes**:
- Shift mask edge inward slightly
- Add color grading clipped to subject
- 0.5px Gaussian Blur on mask
- Add shadow layer

### Issue: "Lighting doesn't match"
**Causes**:
- Subject lit from different direction than background
- Wrong color temperature (warm vs. cool)
- Wrong contrast levels

**Fixes**:
- This is hard to fix—best to choose compatible images
- Can flip subject horizontally if that helps
- Color Balance adjustment toward background temperature
- Curves to match contrast

### Issue: "Scale feels wrong"
**Causes**:
- Subject too large or too small
- Perspective doesn't match
- Position violates spatial logic

**Fixes**:
- Resize subject (Command/Ctrl + T)
- Use perspective transform if needed
- Reposition to make spatial sense
- Check: If you traced subject on background, would it fit?

### Issue: "Edges look artificial"
**Causes**:
- Mask quality insufficient
- Texture mismatch (smooth subject, grainy background)
- Edge character wrong for lighting

**Fixes**:
- Return to Select and Mask, refine further
- Add grain/noise to match background
- Paint along edges with background color sampling

## The Glance Test

Show your composite to someone for 2 seconds, then ask:
- "Did you notice anything unusual?"
- "Does anything look fake?"

If they spot the composite immediately: Needs work.
If they don't notice: Success!

## Real-World Application

Your satirical project IS this challenge at scale:
- Extract 47 heads (Challenge 1 skill)
- Composite into historical painting (Challenge 2 skill)
- Repeat 47 times with consistent quality

This challenge proves you can do it once. The project requires doing it excellently 47 times.

## Challenge Extensions

### Extension 1: Multiple Subjects
Create composite with 2-3 subjects in same scene, all interacting believably with the space and each other.

### Extension 2: Historical Painting Practice
Find a historical painting similar to "Declaration of Independence" and composite a modern portrait into it. This is exactly your final project!

### Extension 3: Lighting Direction Challenge
Find a subject lit from the left and background lit from the right. See if you can make it work (very difficult—may require creative use of light/shadow painting).

## Time Tracking

- Task 1 (Extraction): ___ minutes
- Task 2 (Scale/Position): ___ minutes
- Task 3 (Mask refinement): ___ minutes
- Task 4 (Integration): ___ minutes
- Task 5 (Details): ___ minutes
- **Total**: ___ minutes

**Target**: Under 45 minutes with good quality.

## Submission Checklist

- [ ] Composite complete and polished
- [ ] Screenshots of:
  - Final composite at normal view
  - Edge detail at 200% zoom
  - Mask quality demonstration
  - Before/after integration comparison
- [ ] Self-graded using rubric
- [ ] Identified strongest and weakest aspects
- [ ] Ready for Module 2 Assessment

## What You've Learned

Completing both challenges demonstrates:
- Extraction expertise (Challenge 1)
- Compositing skills (Challenge 2)
- Quality control and refinement
- Problem-solving when issues arise
- Workflow efficiency

You're ready for the module assessment!

## Professional Insight

Professional compositors spend:
- 20% of time on initial extraction
- 30% of time on mask refinement
- 50% of time on integration and polish

Don't rush integration—that's where good composites become great.

## Next Steps

You've completed all exercises and challenges in Module 2! Proceed to the Module Assessment to verify your comprehensive mastery of precision masking techniques.
