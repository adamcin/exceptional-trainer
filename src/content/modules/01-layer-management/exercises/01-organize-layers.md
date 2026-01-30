---
id: organize-layers
type: exercise
title: Organizing Complex Layer Hierarchies
duration: 45
skills:
  - layers
  - organization
  - groups
difficulty: beginner
---

# Exercise: Organizing Complex Layer Hierarchies

## Learning Objective

Master the techniques for organizing complex multi-layer documents using groups, naming conventions, and color coding.

## Scenario

You've received a Photoshop document with 30 unorganized layers from another designer. Your task is to organize it into a logical, navigable structure.

## Setup

1. Download the practice file: `messy-layers.psd` (simulated)
2. Open it in Photoshop
3. Open the Layers panel (Window > Layers or F7)

## Step-by-Step Instructions

### Step 1: Assess the Current Structure

Before organizing, understand what you have:

- Scroll through all layers in the Layers panel
- Note which layers belong together (backgrounds, subjects, text, effects)
- Identify layers that are currently invisible
- Check for locked layers

**Pro Tip**: Use Command/Ctrl + Click on layer thumbnails to quickly see what's on each layer.

### Step 2: Create a Logical Group Structure

Organize layers into functional groups:

1. Select multiple layers (Shift + Click for contiguous, Command/Ctrl + Click for non-contiguous)
2. Press Command/Ctrl + G to create a new group
3. Name the group descriptively (double-click the group name)

**Recommended Structure**:
```
📁 Background
  - Layer: Background Fill
  - Layer: Background Texture
📁 Subject-01
  - Layer: Person Base
  - Layer: Person Mask
  - Layer: Person Adjustments
📁 Subject-02
  - Layer: Head Replacement
  - Layer: Color Correction
  - Layer: Shadow
📁 Effects
  - Layer: Vignette
  - Layer: Grain
  - Layer: Overall Color Grade
📁 Text & Graphics
  - Layer: Title
  - Layer: Logo
```

### Step 3: Apply Naming Conventions

Good naming makes navigation instant:

- **Be Descriptive**: "Elon_Head_02" not "Layer 27 copy"
- **Use Prefixes**: "BG_", "FX_", "TXT_" for quick identification
- **Include Numbers**: "Subject_01", "Subject_02" for sequences
- **Indicate Purpose**: "adjustment", "mask", "backup"

**Example**: `Subject_03_Head_Elon_ColorMatch`

### Step 4: Apply Color Coding

Use layer colors to create visual organization:

1. Right-click a layer or group
2. Select a color from the context menu
3. Apply consistently:
   - **Red**: Original/source content
   - **Yellow**: Work in progress
   - **Green**: Completed/approved
   - **Blue**: Adjustments/corrections
   - **Purple**: Effects/finishing

### Step 5: Lock Completed Layers

Protect finished work from accidental changes:

- Click the lock icon on layers you shouldn't edit
- Use Position lock for layers you might paint on but shouldn't move
- Use All lock for completely finished elements

### Step 6: Collapse Groups

Keep the panel manageable:

- Collapse groups you're not actively working on
- Expand only the group you need
- Use Command/Ctrl + Click on the triangle to collapse/expand all nested groups

## Verification Checklist

- [ ] All layers are in logical groups
- [ ] Every layer has a descriptive name
- [ ] Color coding is applied consistently
- [ ] Related layers are grouped together (base + mask + adjustments)
- [ ] Lock icons are applied to finished layers
- [ ] Groups are collapsed except the current working area
- [ ] You can find any layer in under 5 seconds

## Common Mistakes to Avoid

- **Too Many Nesting Levels**: Limit to 2-3 levels deep
- **Generic Names**: "Layer 1", "Group 1 copy" tell you nothing
- **Inconsistent Naming**: Pick a convention and stick to it
- **No Color Coding**: Visual cues speed up navigation significantly
- **Everything Expanded**: Collapsed groups keep the panel scannable

## Challenge Extension

Create a layer organization template you'll use for your satirical project:

- Plan for 47 figures (original painting has 47 people)
- Each figure needs: base, head replacement, adjustments, shadows
- Think about how you'll track which historical figure is which
- Consider creating a master group structure you can reuse

## Time Estimate

45 minutes

## Next Steps

Once you've organized your layers, proceed to Exercise 2: Working with Smart Objects.
