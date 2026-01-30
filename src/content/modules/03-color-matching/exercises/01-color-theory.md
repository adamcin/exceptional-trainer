---
id: color-theory
type: exercise
title: Color Theory for Compositing
duration: 30
skills:
  - color-theory
  - observation
  - analysis
difficulty: intermediate
---

# Exercise: Color Theory for Compositing

## Learning Objective

Develop your eye for color relationships and understand how color harmony creates believable composites.

## Why Color Theory Matters

Two identical composites with perfect masks—one with matched colors, one without. The matched version looks real. The unmatched version looks fake. Color is that powerful.

## Setup

Gather 5-10 reference images:
- Professional composites (find on Behance, portfolio sites)
- Historical paintings (especially portraits)
- Film stills (cinematography is expert color grading)
- Your "Declaration of Independence" painting reference

## Part 1: Color Observation Training

### Step 1: Identify Color Temperature

For each reference image:

1. Overall temperature: Warm, cool, or neutral?
2. Shadow temperature: Often opposite of highlight temperature
3. Midtone temperature: Usually dominant color feel
4. Look for color casts: Overall tint (green, magenta, blue, yellow)?

**Historical paintings**: Usually warm overall (aged varnish, candlelight era)

### Step 2: Analyze Color Relationships

In successful composites:

- **Highlight colors**: Do all elements share similar highlight tones?
- **Shadow colors**: Shadows are rarely pure black—what color are they?
- **Skin tones**: Even across different people, skin often shares warmth/coolness
- **Color contamination**: Objects pick up color from their environment

**Exercise**: Find a composite with 3+ elements. Eyedropper tool—sample highlights from each. Notice similarities?

### Step 3: Saturation Analysis

1. Open Hue/Saturation (Command/Ctrl + U)
2. Move Saturation slider to -100 (grayscale)
3. Evaluate: Do all elements have similar contrast/density?
4. Undo back to color
5. Observation: Saturation levels should be similar across composite elements

**Takeaway**: Composites often need saturation adjustments more than hue shifts.

## Part 2: Color Matching Principles

### Principle 1: Match the Environment, Not Reality

When compositing Elon Musk into 1818 painting:
- Don't keep Elon's modern digital color
- Match the painting's palette
- The painting defines "correct" color

### Principle 2: Lights and Darks Have Different Colors

Examine painting highlights vs. shadows:
- Highlights: Often warm (candlelight, sunlight)
- Shadows: Often cool (reflected sky, ambient)
- Or reversed in some lighting scenarios

**Your adjustments must account for this split-toning.**

### Principle 3: Atmospheric Perspective

Distant objects:
- Lower contrast
- Shift toward blue/cool
- Reduced saturation
- Less detail

Foreground objects:
- Higher contrast
- Natural/warm color
- Normal saturation
- Full detail

**Application**: If compositing head in background vs. foreground, color treatment differs.

### Principle 4: Color Contamination

Objects reflect their environment:
- Person near green wall picks up green cast
- Face in sunlight picks up warm yellow
- In shade picks up cool blue from sky

**Your composites need this subtle contamination for realism.**

## Part 3: Practical Color Analysis

### Exercise: Deconstruct a Historical Portrait

Using "Declaration of Independence" or similar:

1. **Sample colors** (Eyedropper tool):
   - Skin highlight (lightest flesh tone)
   - Skin midtone (average flesh tone)
   - Skin shadow (darkest flesh tone)
   - Background highlight
   - Background shadow

2. **Create color swatches**: New layer, paint squares of each sampled color

3. **Analyze relationships**:
   - RGB values (Info panel)
   - HSB values (Color Picker)
   - What do you notice?

**Typical 1818 painting findings**:
- Warm overall (R > B in most samples)
- Reduced saturation vs. modern photos (S: 20-40% typical)
- Compressed value range (not pure black or pure white)
- Yellow/amber cast in highlights
- Brown/sepia in shadows

4. **Create target palette**: Save these swatches for later matching

## Part 4: The Color Matching Workflow

Standard professional workflow:

### Step 1: Analyze Target
- What are the dominant colors?
- What's the temperature?
- What's the contrast range?
- What's the saturation level?

### Step 2: Analyze Source
- Compare source to target
- Is source warmer or cooler?
- Is source more or less saturated?
- Is source higher or lower contrast?

### Step 3: Plan Adjustments
- Need to warm or cool?
- Need to increase or decrease saturation?
- Need to add color cast?
- Need to compress or expand contrast?

### Step 4: Apply and Iterate
- Make adjustment (Curves usually)
- Evaluate against target
- Refine
- Repeat until harmonious

## Part 5: Common Color Matching Scenarios

### Scenario 1: Modern Photo into Historical Painting

**Problem**: Modern photos are cooler, sharper, more saturated
**Solution**:
- Warm shift (add yellow/red)
- Reduce saturation (-20 to -40%)
- Reduce contrast slightly
- Add grain/texture

### Scenario 2: Multiple Source Photos into One Scene

**Problem**: Each photo has different color balance
**Solution**:
- Choose one photo as color reference
- Match all others to that one
- Then match entire comp to final background

### Scenario 3: Different Lighting Sources

**Problem**: Head photo shot in daylight, painting shows candlelight
**Solution**:
- Shift toward warm (yellow/orange)
- Reduce blue channel
- Adjust shadows to match painting's shadow color
- Add appropriate highlight color

## Part 6: Tools Overview (Detailed in Next Exercise)

Quick reference:

- **Curves**: Most powerful, most control (use for everything)
- **Color Balance**: Quick warm/cool in shadows/mids/highlights
- **Hue/Saturation**: Adjust intensity, shift global hue
- **Selective Color**: Target specific color ranges
- **Photo Filter**: Add color tint (like warming filter)
- **Match Color**: AI attempts to match colors (starting point)

## Verification Checklist

- [ ] Can identify color temperature in images
- [ ] Can recognize color relationships in composites
- [ ] Can analyze highlight/shadow color differences
- [ ] Understand split-toning concept
- [ ] Can sample and compare colors with eyedropper
- [ ] Can create target color palette from reference
- [ ] Understand standard color matching workflow
- [ ] Know common scenarios and solutions

## Common Mistakes

- **Matching hue only**: Forgetting saturation and luminosity
- **Ignoring shadows**: Only adjusting highlights/midtones
- **Over-matching**: Making everything identical (too uniform)
- **Absolute vs. relative**: Matching specific RGB values instead of relationships
- **One adjustment layer**: Usually need multiple for precision

## Exercise Extension

**Color Matching Detective**:

1. Find 3 obvious composites (bad color matching)
2. Identify what's wrong:
   - Temperature mismatch?
   - Saturation mismatch?
   - Contrast mismatch?
   - Wrong color cast?
3. Mentally plan how to fix each

**Develops critical eye before you start adjusting.**

## Time Estimate

30 minutes

## Next Steps

Proceed to Exercise 2: Advanced Curves Adjustments to learn the primary tool for implementing your color matching strategy.
