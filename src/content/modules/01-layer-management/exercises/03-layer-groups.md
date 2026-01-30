---
id: layer-groups
type: exercise
title: Advanced Layer Groups and Comps
duration: 30
skills:
  - groups
  - layer-comps
  - organization
difficulty: intermediate
---

# Exercise: Advanced Layer Groups and Comps

## Learning Objective

Master advanced layer grouping techniques and layer comps to create variations and maintain organized workflows in complex documents.

## Why Layer Comps Matter

For your satirical project, you might want to:
- Show different stages of completion to others
- Create variations (different head choices for the same figure)
- Switch between "before" and "after" views quickly
- Present multiple design directions without duplicating files

Layer comps make this possible without creating separate documents.

## What are Layer Comps?

Layer comps are saved snapshots of your layer panel state, including:
- Layer visibility (which layers are shown/hidden)
- Layer positions
- Layer appearance (styles, blend modes)

Switch between comps instantly to show different versions of your composition.

## Setup

1. Create or open a Photoshop document with at least 15 layers
2. Organize layers into groups if not already grouped
3. Open the Layer Comps panel (Window > Layer Comps)

## Part 1: Advanced Layer Groups

### Step 1: Nested Group Organization

Create a hierarchical structure:

```
📁 Composition
  📁 Background Elements
    - Layer: Sky
    - Layer: Architecture
  📁 Foreground Subjects
    📁 Subject 01
      - Layer: Head
      - Layer: Body
      - Layer: Shadow
    📁 Subject 02
      - Layer: Head
      - Layer: Body
      - Layer: Shadow
  📁 Finishing Effects
    - Layer: Color Grade
    - Layer: Vignette
```

**Best Practice**: Keep nesting to 2-3 levels maximum. Deeper nesting becomes hard to navigate.

### Step 2: Group Blending Modes

Apply blend modes to entire groups:

1. Select a group in the Layers panel
2. Change the blend mode from "Pass Through" to another mode (e.g., Multiply, Screen)
3. Notice: Now the blend mode affects how the entire group blends with layers below
4. "Pass Through" (default): Each layer blends individually
5. Any other mode: Group is treated as single merged layer for blending

**Use Case**: Apply a Multiply blend mode to a "Shadows" group to darken everything underneath consistently.

### Step 3: Group Opacity and Fill

Control group transparency:

1. Select a group
2. Adjust Opacity (affects all layers and effects)
3. Adjust Fill (affects layer pixels but not layer effects)
4. Useful for fading entire sections without adjusting individual layers

### Step 4: Group Masking

Apply masks to entire groups:

1. Select a group
2. Click the "Add Layer Mask" button
3. Paint on the mask (black hides, white reveals)
4. The mask affects all layers in the group simultaneously

**Powerful Technique**: Mask an entire "Figure 01" group to blend all its layers (head, adjustments, shadows) seamlessly with one mask.

### Step 5: Group Color Coding

Apply color to groups:

1. Right-click a group
2. Choose a color
3. All layers in the group inherit the color (unless individually colored)
4. Makes it easy to distinguish major sections

**Pro Tip**: Use keyboard shortcuts!
- Command/Ctrl + G: Group selected layers
- Command/Ctrl + Shift + G: Ungroup
- Command/Ctrl + ] or [: Move layer up/down in stack
- Command/Ctrl + Shift + ] or [: Move layer to top/bottom

## Part 2: Layer Comps

### Step 1: Create Your First Layer Comp

Capture current state:

1. Arrange your layers exactly as you want them
2. Open Layer Comps panel (Window > Layer Comps)
3. Click the "Create New Layer Comp" icon (page with plus)
4. Name it descriptively: "Original_State" or "Before_Heads"
5. Check which properties to capture:
   - ✓ Visibility (most important)
   - ✓ Position
   - ✓ Appearance (Layer Style)
6. Add comments if needed
7. Click OK

### Step 2: Create Variation Comps

Create different versions:

1. Change layer visibility (hide some layers, show others)
2. Maybe move some elements
3. Create a new layer comp: "Work_In_Progress"
4. Make more changes
5. Create another comp: "Final_Composite"
6. Create yet another: "Client_Presentation"

**Result**: You now have multiple saved states you can switch between instantly.

### Step 3: Switch Between Layer Comps

Navigate your versions:

1. In Layer Comps panel, click to the left of a comp name
2. Your document updates to that saved state
3. Layers show/hide, move, and change appearance
4. No undo needed—just click another comp

**Keyboard Shortcut**: Alt/Option + Page Up/Down to cycle through comps.

### Step 4: Update Existing Comps

Modify saved states:

1. Switch to a layer comp
2. Make changes to layer visibility, position, or appearance
3. Click the "Update Layer Comp" icon (circular arrows)
4. Choose what to update
5. Click OK

**Or**: Right-click comp name > "Update Layer Comp"

### Step 5: Export Layer Comps

Create separate files for each comp:

1. File > Scripts > Layer Comps to Files
2. Choose destination folder
3. Select file type (PSD, JPEG, PNG, PDF)
4. Choose which comps to export (all or selected)
5. Click Run

**Use Case**: Generate client review JPEGs showing 5 different design directions from one source file.

## Practical Application: Project Workflow

Set up layer comps for your satirical project:

### Comp 1: "Original_Painting"
- All replacement heads hidden
- Shows base painting only
- Good for reference

### Comp 2: "Layout_Guide"
- Placeholder heads visible
- Masks visible
- Guide layers shown
- Working state, not for presentation

### Comp 3: "In_Progress"
- Some heads replaced
- Shows current completion state
- For tracking progress

### Comp 4: "Final_Composite"
- All heads replaced
- All adjustments visible
- Guides and notes hidden
- Presentation ready

### Comp 5: "Before_After_Split"
- Half original, half complete
- Great for social media posts

## Verification Checklist

- [ ] Can create nested groups (2-3 levels)
- [ ] Can change group blend modes (understand Pass Through)
- [ ] Can apply masks to groups
- [ ] Can create layer comps capturing visibility/position/appearance
- [ ] Can switch between layer comps easily
- [ ] Can update existing layer comps
- [ ] Can export layer comps to files
- [ ] Understand when to use groups vs. comps

## Common Mistakes

- **Too Many Comps**: More than 10 comps becomes hard to manage
- **Unclear Names**: "Comp 1" tells you nothing; "Final_With_Blue_Sky" is clear
- **Not Updating**: Forgetting to update comps after changes causes confusion
- **Capturing Wrong Properties**: If layers move between comps, capture Position
- **Deep Nesting**: Groups nested 5+ levels are impossible to navigate

## Layer Comp Limitations

Be aware:
- Layer comps don't capture: filter settings, layer content, blend mode changes (unless using "Appearance" option)
- Deleting a layer breaks comps that reference it
- Adding layers after creating comps means new layers won't be managed by old comps
- Large files with many comps can get slow

## Challenge Extension

Create a presentation-ready workflow:

1. Organize document with 3 nested group levels
2. Create 5 meaningful layer comps:
   - Original reference
   - Work in progress (25% done)
   - Work in progress (75% done)
   - Final composite
   - Alternative version
3. Add descriptive comments to each comp
4. Export all comps as JPEGs to a folder
5. Create a before/after comparison comp

## Time Estimate

30 minutes

## Pro Tips

**Tip 1: Quick Comp Creation**
Create a comp before any major change. If you don't like the change, switch back to the comp instead of undo-ing 50 steps.

**Tip 2: Version Control Alternative**
Instead of "File > Save As" with version numbers, use layer comps to maintain versions in one file.

**Tip 3: Client Presentations**
Create multiple design directions as layer comps, export to PDF with one comp per page.

**Tip 4: Smart Object Compositions**
Combine with smart objects: Place the same smart object in multiple positions across different comps.

## Next Steps

You've now completed all exercises in Module 1! Proceed to Challenge 1: Build a Complex Document Structure.
