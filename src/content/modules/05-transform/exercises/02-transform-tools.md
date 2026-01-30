---
id: transform-tools
type: exercise
title: Advanced Transform Techniques
duration: 45
skills:
  - free-transform
  - perspective-transform
  - warp
difficulty: intermediate
---

# Exercise: Advanced Transform Techniques

## Learning Objective

Master all transform tools for precise geometric adjustments.

## Transform Modes

Access: Edit > Transform or Command/Ctrl + T

**Modes**:
- **Free Transform**: Scale, rotate, skew
- **Perspective**: Adjust perspective
- **Distort**: Move corners independently
- **Warp**: Mesh-based deformation
- **Rotate, Scale, Skew, Flip**: Specific operations

## Part 1: Free Transform Basics

Command/Ctrl + T activates Free Transform:

**Scale**: Drag corners (Shift = proportional)
**Rotate**: Drag outside corners
**Skew**: Command/Ctrl + drag side handles
**Distort**: Command/Ctrl + drag corners

**Pro tip**: Move anchor point (center target) to change rotation center.

## Part 2: Perspective Transform

For matching perspective:

1. Edit > Transform > Perspective
2. Drag corners—opposite corner mirrors movement
3. Perfect for matching buildings, architectural elements
4. Maintains some geometric constraints

**Use**: Subject needs perspective adjustment to fit scene.

## Part 3: Distort Transform

Maximum flexibility:

1. Edit > Transform > Distort
2. Each corner moves independently
3. No constraints
4. Ultimate control

**Use**: Matching complex angles where Perspective is too constrained.

## Part 4: Warp Transform

Mesh-based deformation:

1. Edit > Transform > Warp
2. Grid appears with control points
3. Drag points or curve segments
4. Organic deformations

**Settings**:
- Grid: More divisions = more control points
- Presets: Arc, Bulge, Flag, etc.
- Custom: Manual point manipulation

**Use cases**:
- Fitting head to curved surface
- Adjusting to match body curvature
- Organic shape adjustments

## Part 5: Combining Transforms

For complex matching:

1. Free Transform (scale/rotate roughly)
2. Perspective Transform (match perspective)
3. Warp (fine organic adjustments)
4. Apply each separately or chain them

**Tip**: Smart Objects preserve quality through multiple transforms.

## Part 6: Head Replacement Transform Workflow

Typical workflow:

1. **Position**: Move head over body
2. **Scale**: Match head size to body (use shoulders/neck as reference)
3. **Rotate**: Match head tilt/angle
4. **Perspective**: If figure viewed from angle, match perspective
5. **Warp**: Subtle adjustments for perfect fit

## Part 7: Transform Tips

**Numerical precision**: Options bar shows exact values
- W/H: Width/height (% or pixels)
- Rotation: Exact degrees
- X/Y: Position coordinates

**Maintain center**: Alt/Option + drag = scale from center

**Constrain rotation**: Shift + drag = 15° increments

**Undo within transform**: Command/Ctrl + Z works during transform

**Commit**: Enter/Return or ✓ button
**Cancel**: Esc

## Verification Checklist

- [ ] Can use Free Transform (scale, rotate, skew)
- [ ] Can use Perspective Transform
- [ ] Can use Distort Transform
- [ ] Can use Warp Transform
- [ ] Understand when to use each mode
- [ ] Can combine transforms for complex adjustments
- [ ] Transforms maintain quality (Smart Objects)

## Common Mistakes

- **Not using Smart Objects**: Quality degrades with transforms
- **Over-warping**: Looks distorted and unnatural
- **Ignoring proportions**: Stretched or squashed results
- **Wrong rotation center**: Move anchor point first

## Time: 45 minutes

## Next: Exercise 3: Puppet Warp for Organic Adjustments
