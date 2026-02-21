---
name: boxing_movement
description: Instructions for implementing advanced boxing movement mechanics, footwork, and stance systems.
---

# Boxing Movement Skill

This skill provides patterns and instructions for implementing realistic boxing movement. Use this when working on player controllers, AI navigation, or animation blending related to footwork.

## Core Concepts

### 1. Stance System
Every boxer must have a defined stance (Orthodox or Southpaw). Movement depends on the stance.
- **Orthodox**: Left foot forward, right foot back.
- **Southpaw**: Right foot forward, left foot back.

Movement vectors should be relative to the stance:
- **Advance**: Front foot moves first, back foot follows.
- **Retreat**: Back foot moves first, front foot follows.
- **Lateral Left**: Left foot moves first, right foot follows.
- **Lateral Right**: Right foot moves first, left foot follows.

### 2. Movement States
Implement a state machine for movement to prevent conflicting actions:
- `IDLE`: Bouncing, ready to move.
- `STEPPING`: A committed step (cannot change direction mid-step).
- `DASHING`: Quick burst of movement (consumes stamina).
- `PIVOTING`: Rotating around the lead foot to change angle.

### 3. Distance Management
Maintain three zones of engagement:
- **Out of Range**: Safe distance, regenerates stamina.
- **Long Range**: Jab/Straight range.
- **Pocket/Infighting**: Hook/Uppercut range.

## Implementation Guidelines

### Smooth Movement Integration
- Use **Root Motion** for realistic foot planting if using an animation-driven controller.
- For physics-based controllers, apply force to a `Rigidbody` but clamp velocity to simulate weight transfer.
- **Do not** slide the character; ensure feet have "stickiness" during the planted phase of a step.

### Code Snippet: Stance-Based Vector Calculation (Python/Pseudocode)

```python
def get_movement_vector(input_dir, stance):
    # Adjust input based on camera or ring orientation
    world_dir = transform_input_to_world(input_dir)
    
    # Modify speed based on stance direction (e.g., typically slower moving backwards)
    speed_modifier = 1.0
    if dot_product(world_dir, character_forward) < -0.5:
        speed_modifier = 0.8 # Backpedal is slower
        
    return world_dir * speed_modifier
```

### Animation Considerations
- Blend trees are essential for 8-way movement (Forward, Back, Left, Right, and diagonals).
- Add a "lean" layer to the animator to tilt the upper body in the direction of movement (acceleration/deceleration).

## Common Pitfalls
- **Floating Feet**: Ensure animation speed matches movement speed (prevent "moonwalking").
- **Instant Turns**: Boxers don't rotate instantly; they pivot. Implement a turn rate limit.
- **Infinite Stamina**: Dashing and constant movement should drain a stamina resource.
