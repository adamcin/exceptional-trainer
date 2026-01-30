---
id: smart-object-workflow
type: challenge
title: Non-Destructive Editing Workflow
duration: 30
skills:
  - smart-objects
  - non-destructive
  - workflow
  - efficiency
difficulty: intermediate
---

# Challenge: Non-Destructive Editing Workflow

## Objective

Demonstrate mastery of non-destructive editing by building a complete head replacement workflow using smart objects, smart filters, and adjustment layers.

## Scenario

You have 3 different photos of Elon Musk's head and need to integrate each one into a historical painting at different sizes and angles. You want maximum flexibility to make changes later without redoing work.

## Requirements

### Setup
- Create a new document: 2400x1600px, RGB color mode
- Find or create a background image (historical painting style or similar)
- Obtain 3 different head photos (can be any person for practice purposes)

### Challenge Tasks

Complete all 5 tasks below:

### Task 1: Multi-Instance Smart Object System

Create a reusable smart object workflow:

1. Import your first head photo as a smart object (File > Place Embedded)
2. Position and scale it to fit one figure location
3. Create 2 additional copies:
   - One linked copy (Alt/Option + drag)
   - One independent copy (Right-click > New Smart Object via Copy)
4. Position and transform each copy differently
5. Edit the original smart object's contents (double-click)
6. Make a visible change (add a color adjustment, text overlay, or filter)
7. Save and close
8. Verify: Linked copies updated, independent copy did not

**Success Criteria**:
- [ ] One smart object with 3 instances (2 linked, 1 independent)
- [ ] Each instance at different size/angle
- [ ] Editing original updates only linked instances
- [ ] All transformations maintain quality

### Task 2: Smart Filter Stack

Apply non-destructive filters:

1. Select one of your smart objects
2. Apply these smart filters in order:
   - Gaussian Blur: 0.5-1px (subtle softness)
   - High Pass filter: Match texture to background
   - Camera Raw Filter or Filter > Adjustments: Color correction
3. Name each filter layer clearly
4. Practice toggling each filter on/off
5. Adjust filter settings by double-clicking
6. Rearrange filter order and observe differences

**Success Criteria**:
- [ ] Minimum 3 smart filters applied
- [ ] Can adjust any filter after application
- [ ] Filters are named or annotated
- [ ] Understand effect of filter stacking order

### Task 3: Adjustment Layer Integration

Combine smart objects with adjustment layers:

1. Create a Curves adjustment layer above your smart objects
2. Clip it to affect only the head (Alt/Option + click between layers)
3. Adjust curves to match color/tone to background
4. Create a Hue/Saturation adjustment layer
5. Also clip it to the smart object
6. Fine-tune color matching
7. Group the smart object and its adjustments together
8. Name the group clearly (e.g., "Figure_01_Complete")

**Success Criteria**:
- [ ] At least 2 adjustment layers per smart object
- [ ] Adjustment layers are clipped to smart objects
- [ ] Smart object + adjustments grouped logically
- [ ] Changes are non-destructive and editable

### Task 4: Content Replacement

Test the workflow's flexibility:

1. Select one of your smart objects
2. Layer > Smart Objects > Replace Contents
3. Choose your second head photo
4. Observe: All transformations and filters remain applied
5. Replace a different smart object with the third photo
6. Adjust transforms if needed to fit new content
7. Verify smart filters still work correctly
8. Verify adjustment layers still apply correctly

**Success Criteria**:
- [ ] Successfully replaced content in 2 smart objects
- [ ] All filters and adjustments persisted
- [ ] New content integrated seamlessly
- [ ] No quality loss in transformations

### Task 5: Layer Comp Variations

Create presentation versions:

1. Create layer comps showing different states:
   - "Version_A": First set of heads
   - "Version_B": After content replacement
   - "Before_After": Half original, half composite
   - "Client_Review": Fully polished presentation view
2. Use visibility and position changes between comps
3. Add descriptive comments to each comp
4. Test switching between comps quickly

**Success Criteria**:
- [ ] Created at least 3 meaningful layer comps
- [ ] Comps demonstrate workflow flexibility
- [ ] Can switch between comps smoothly
- [ ] Comps are well-named and documented

## Overall Success Criteria

- [ ] All smart objects are properly configured
- [ ] Workflow is 100% non-destructive (can undo any change)
- [ ] Document is well-organized with clear naming
- [ ] Can swap any head with another in under 30 seconds
- [ ] Can adjust color/tone of any head without affecting others
- [ ] No rasterized layers (except intentional background)
- [ ] Total file size is reasonable (under 500MB with sample images)
- [ ] Layers panel is organized and navigable

## Evaluation Rubric

Grade yourself:

**Excellent (90-100%)**:
- Workflow demonstrates deep understanding of non-destructive editing
- All smart objects, filters, and adjustments perfectly configured
- Could easily scale this to 47 figures
- Organization is professional-grade
- Content replacement works flawlessly
- Layer comps add real value

**Good (75-89%)**:
- Workflow is mostly non-destructive with minor issues
- Smart objects work but organization could be better
- Most tasks completed successfully
- Would need some refinement for large-scale project
- Layer comps present but could be more useful

**Needs Improvement (<75%)**:
- Workflow has destructive elements
- Smart objects not utilized effectively
- Significant gaps in task completion
- Organization is confusing
- Doesn't demonstrate scalability
- Layer comps missing or not functional

## Challenge Extensions

### Extension 1: Style Variations
Create 3 layer comps showing different artistic treatments:
- Realistic (subtle adjustments only)
- Stylized (strong color grading)
- Black & white with color accent

### Extension 2: Batch Processing Prep
Structure your document so that:
- All head smart objects follow identical naming convention
- All use the same filter stack
- Could be processed by a Photoshop action or script

### Extension 3: Template Creation
Save your document as a template:
- Strip out specific content
- Keep structure, smart objects, and workflow
- Add instruction layers or notes
- Save as .PST (Photoshop Template)

## Common Pitfalls to Avoid

**Rasterizing Too Early**:
Don't rasterize smart objects unless absolutely necessary. You lose all flexibility.

**Too Many Filters**:
More than 5-6 smart filters per object can slow performance. Combine or merge when possible.

**Breaking Links**:
Be careful when copying smart objects to other documents—links break.

**Forgetting to Save**:
When editing smart object contents, must save the embedded document or changes are lost.

**Overusing Independent Copies**:
Each independent smart object increases file size. Use linked copies when possible.

## Time Limit

30 minutes

## Verification Questions

Answer these before submitting:

1. **Why use smart objects instead of regular layers?**
   - Speed? No.
   - File size? No.
   - Flexibility and non-destructive workflow? Yes!

2. **When would you NOT use a smart object?**
   - When you need to paint directly on the layer
   - When file size is critical concern
   - When working on very old/slow computer

3. **What happens to smart filters when you replace smart object contents?**
   - They remain applied to the new content
   - Settings stay the same
   - May need to adjust filter values for new content

4. **How do linked smart object copies help your workflow?**
   - Edit once, update many instances
   - Consistency across multiple elements
   - Save time when making changes

## Submission Checklist

- [ ] All 5 tasks completed
- [ ] Screenshot of Layers panel (expanded)
- [ ] Screenshot of Layer Comps panel
- [ ] Verified smart object content can be replaced easily
- [ ] Tested: Close and reopen file—still works?
- [ ] Self-graded using rubric above

## Real-World Application

This challenge simulates your actual satirical project workflow:
- Multiple head photos (Elon Musk)
- Multiple positions/sizes (47 figures)
- Need for consistency (same processing across heads)
- Need for flexibility (change minds about which head to use)
- Need for non-destructive workflow (clients change their minds)

If you master this challenge, you're ready for the real project!

## What's Next?

After completing both challenges, proceed to the Module 1 Assessment to verify your mastery of advanced layer management techniques.
