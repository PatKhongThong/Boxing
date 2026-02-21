---
name: boxing_physics
description: Instructions for implementing realistic physics interactions, collision layers, and impact feedback.
---

# Boxing Physics Skill

This skill provides instructions for managing physics interactions in a boxing game environment.

## Core Concepts

### 1. Collision Layers
Set up distinct layers to prevent unwanted collisions (e.g., fists colliding with own body).
- **Player/Enemy**: Character capsule colliders.
- **Hitbox**: Trigger colliders attached to hands/gloves.
- **Hurtbox**: Trigger colliders attached to body parts (Head, Torso, Arms).
- **Ring Limits**: Static colliders for ropes and posts.

### 2. Impact Forces
Apply forces realistically on impact.
- **Knockback**: Apply force vector in the direction of the punch + slightly up.
- **Ragdoll**: On knockout, disable animator and enable physics on all body parts. Apply an initial impulse to the head to simulate the knockout blow.

### 3. Rope Physics
Interact with ring ropes.
- **Elasticity**: Ropes should bend when a character is pushed against them.
- **Rebound**: Application of force back towards the ring center if a character hits ropes hard.

## Implementation Guidelines

### Hit Detection Logic
Use `OnTriggerEnter` or Raycasts for precision.
```python
def on_hit(hit_info):
    # Calculate impact force based on punch velocity and mass
    force = hit_info.velocity * attacker.mass
    
    # Apply to victim rigidbody (if physics-based) or trigger animation reaction
    victim.apply_impact(force, hit_info.point)
    
    # Spawn particle effect (sweat/blood)
    spawn_effect("blood_splatter", hit_info.point, -hit_info.normal)
```

### Sweat/Blood Particles
- Spawn particles at the point of impact, oriented along the surface normal.
- Use object pooling for particles to maintain high performance.

## Common Pitfalls
- **Tunneling**: Fast punches passing through colliders. Use `Continuous` collision detection mode for fast-moving objects (gloves).
- **Jittery Ropes**: Complex spring joints can be unstable. Use simplified constraints or shader-based visual deformation if physics is too costly.
