---
id: selection-tools
type: exercise
title: Advanced Selection Tools
duration: 40
skills:
  - selections
  - tools
  - quick-selection
difficulty: intermediate
---

# Exercise: Advanced Selection Tools

## Learning Objective

Master all selection tools in Photoshop and develop intuition for which tool to use in different situations.

## The Selection Toolkit

Photoshop offers many selection tools because no single tool works for every situation. Professional compositors switch tools fluidly based on subject characteristics.

## Setup

1. Gather 5 practice images with different characteristics:
   - Simple geometric object (book, phone, building)
   - Person with simple background
   - Person with complex background
   - Object with very defined edges (product photo)
   - Organic object (flower, tree, animal)
2. Open each in Photoshop

## Part 1: Quick Selection Tool

**Best for**: Well-defined subjects with good contrast

### Step 1: Basic Quick Selection

1. Select the Quick Selection Tool (W)
2. In the options bar, choose "Select Subject" button
3. Photoshop's AI selects what it thinks is the main subject
4. Evaluate: How accurate is the selection?

**Keyboard shortcuts**:
- `W` - Select Quick Selection Tool
- `[` and `]` - Decrease/increase brush size
- `Alt/Option` - Subtract from selection
- `Shift` - Add to selection (default mode)

### Step 2: Manual Quick Selection

If "Select Subject" isn't accurate enough:

1. Start with the Quick Selection Tool active
2. Click and drag over the subject you want to select
3. The selection "grows" intelligently to edges
4. If it selects too much: Hold Alt/Option and drag over areas to remove
5. Adjust brush size with `[` and `]` for fine control
6. Work at 100% zoom for edge accuracy

**Pro Tips**:
- Use smaller brush near edges
- Multiple small strokes more accurate than one big stroke
- If selection goes haywire, Command/Ctrl + D to deselect and start over

### Step 3: Refine the Selection

1. With selection active, click "Select and Mask" in options bar
2. Choose view mode: "On Black" or "On White" (whichever shows problems)
3. Adjust Edge Detection "Radius" slider
4. Use Refine Edge Brush (R) for problem areas
5. Click OK when satisfied

## Part 2: Object Selection Tool

**Best for**: Clean, well-defined objects; AI is very good at this

### Step 1: Rectangle Object Selection

1. Select Object Selection Tool (nested with Quick Selection, press W)
2. Mode: "Rectangle" in options bar
3. Draw a rectangle around your subject
4. Photoshop selects the object within the rectangle
5. Extremely fast for product photography

### Step 2: Lasso Object Selection

1. Mode: "Lasso"
2. Draw a rough lasso around your subject
3. Photoshop refines to exact edges
4. More accurate than rectangle for complex shapes

**When to use**:
- Product photography
- Objects on white/clean backgrounds
- Architecture with clear edges
- Any situation where subject is obvious

## Part 3: Pen Tool for Precise Paths

**Best for**: Hard-edged subjects requiring pixel-perfect precision

### Step 1: Create a Path

1. Select Pen Tool (P)
2. In options bar, choose "Path" (not Shape)
3. Click to create anchor points around subject perimeter
4. Click and drag to create curved segments
5. Close the path by clicking the first point

**Pen Tool mastery**:
- Click for straight segments
- Click-drag for curves
- Command/Ctrl while clicking to modify existing points
- Hold Shift for 45-degree constraint
- Alt/Option + click anchor point to convert curve/corner

### Step 2: Convert Path to Selection

1. Once path is complete, press Command/Ctrl + Enter
2. Or: Right-click path > "Make Selection"
3. Set Feather Radius (0 for hard edge, 1-2px for slight softness)
4. Click OK

**When to use Pen Tool**:
- Architecture and buildings
- Products with geometric shapes
- Vehicles
- Any subject where edges must be perfectly straight or smoothly curved
- When you have time for precision

## Part 4: Magic Wand Tool

**Best for**: Selecting areas of similar color

### Step 1: Basic Magic Wand Selection

1. Select Magic Wand Tool (nested with Quick Selection, press W)
2. Set Tolerance: 32 (adjusts how similar colors must be)
3. Check "Contiguous" (only selects connected pixels)
4. Click on the area you want to select
5. Shift + click to add more areas
6. Alt/Option + click to subtract

**Practical use**:
- Selecting solid color backgrounds to delete them
- Selecting sky
- Selecting areas within complex objects

### Step 2: Tolerance Adjustment

- Low tolerance (10-20): Selects very similar colors only
- Medium tolerance (30-50): Selects moderately similar colors
- High tolerance (60-100): Selects wide range of colors

**Experiment**: Click the same area with different tolerance values and see how selection changes.

## Part 5: Polygonal and Magnetic Lasso Tools

### Polygonal Lasso

1. Select Polygonal Lasso Tool (L, or hold L to cycle)
2. Click to create straight-edge segments
3. Double-click to complete selection
4. Useful for: Buildings, geometric subjects

### Magnetic Lasso

1. Select Magnetic Lasso Tool
2. Click to start, then trace along high-contrast edge
3. Tool "snaps" to edge automatically
4. Click to force anchor points on tricky areas
5. Double-click or press Enter to close
6. Useful for: Subjects with clearly defined edges against contrasting backgrounds

## Part 6: Select by Color Range

**Best for**: Complex selections based on color

### Step 1: Color Range Selection

1. Select > Color Range
2. Click eyedropper on the color you want to select
3. Adjust "Fuzziness" (like Tolerance)
4. Click to add colors (Shift automatically adds)
5. Preview shows selected areas in white
6. Click OK to create selection

**Advanced options**:
- Selection Preview: See selection on image
- Range: Choose "Highlights", "Midtones", or "Shadows"
- Localized Color Clusters: Better for complex scenes

## Decision Matrix: Which Tool When?

| Subject Type | Best Tool | Why |
|--------------|-----------|-----|
| Person, simple background | Quick Selection / Object Selection | AI handles this well |
| Person, complex background | Quick Selection → Select and Mask | AI + manual refinement |
| Product on white | Object Selection | Fast and accurate |
| Architecture | Pen Tool | Geometric precision needed |
| Sky | Magic Wand | Solid color area |
| Hair/fur | Quick Selection → Refine Edge | Special tools needed |
| Transparent objects | Channels | Color-based selection |
| Uniform background | Magic Wand / Color Range | Color similarity |

## Practice Workflow

For each of your 5 practice images:

1. Identify subject characteristics (geometric? organic? high contrast?)
2. Choose appropriate tool based on characteristics
3. Make initial selection
4. Evaluate selection quality (toggle Quick Mask: Q)
5. Refine if needed
6. Convert to layer mask (Layer > Layer Mask > Reveal Selection)
7. View on different backgrounds to verify quality

## Verification Checklist

- [ ] Can use Quick Selection Tool effectively
- [ ] Can use Object Selection Tool for clean subjects
- [ ] Can create precise selections with Pen Tool
- [ ] Understand when to use Magic Wand
- [ ] Can use Lasso tools appropriately
- [ ] Can use Color Range for color-based selections
- [ ] Know which tool to use for different situations
- [ ] Can combine tools (rough selection → refine)

## Common Mistakes

- **Using one tool for everything**: Each tool has strengths
- **Not zooming in**: Work at 100% for edge accuracy
- **Giving up too soon**: Selection often requires multiple tools
- **Forgetting to refine**: Initial selection rarely perfect
- **Skipping feathering**: Most selections need 1-2px feather for natural blending

## Pro Techniques

**Technique 1: Subtract and Add**
- Make rough oversized selection
- Subtract excess (Alt/Option + drag)
- More control than trying to get it perfect first time

**Technique 2: Selection Combination**
- Use Pen Tool for hard edges (shoulders, clothing)
- Use Quick Selection for soft areas (face)
- Combine: Add both selections together

**Technique 3: Save Selections**
- Select > Save Selection (name it)
- Reusable if you need to redo work
- Load Selection to recall it later

## Challenge Extension

Create a "selection test" document:

1. Collect 10 different subject types
2. Make optimal selection for each using the best tool
3. Time yourself: Aim for under 2 minutes per selection
4. Save selections as channels for comparison
5. Evaluate: Which tool/technique is fastest for each type?

## Time Estimate

40 minutes

## Next Steps

You now know which tools to use for different scenarios. Next, you'll tackle the hardest masking challenge: hair and fur selection in Exercise 2.
