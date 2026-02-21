---
name: boxing_knowledge
description: A comprehensive knowledge base combining movement, combat, strategy, and physics skills for boxing.
---

# Boxing Game Knowledge Base

This document aggregates specialized skills into a single knowledge source for the boxing game agent. It covers movement mechanics, combat systems, AI strategy, and physics interactions.

## 1. Boxing Movement

**Focus:** Footwork, Stance Systems, Distance Management.

### Core Concepts

#### Stance System
Every boxer must have a defined stance (Orthodox or Southpaw). Movement depends on the stance.
- **Orthodox**: Left foot forward, right foot back.
- **Southpaw**: Right foot forward, left foot back.

Movement vectors should be relative to the stance:
- **Advance**: Front foot moves first, back foot follows.
- **Retreat**: Back foot moves first, front foot follows.
- **Lateral Left**: Left foot moves first, right foot follows.
- **Lateral Right**: Right foot moves first, left foot follows.

#### Movement States
Implement a state machine for movement to prevent conflicting actions:
- `IDLE`: Bouncing, ready to move.
- `STEPPING`: A committed step (cannot change direction mid-step).
- `DASHING`: Quick burst of movement (consumes stamina).
- `PIVOTING`: Rotating around the lead foot to change angle.

#### Distance Management
Maintain three zones of engagement:
- **Out of Range**: Safe distance, regenerates stamina.
- **Long Range**: Jab/Straight range.
- **Pocket/Infighting**: Hook/Uppercut range.

### Implementation Guidelines
- Use **Root Motion** for realistic foot planting if using an animation-driven controller.
- For physics-based controllers, apply force to a `Rigidbody` but clamp velocity to simulate weight transfer.
- **Do not** slide the character; ensure feet have "stickiness" during the planted phase of a step.

---

## 2. Boxing Combat

**Focus:** Punches, Combos, Defense.

### Core Concepts

#### Punch Types
Implement separate logic/data for each punch type:
- **Jab**: Fast, low damage, low stamina cost. Used to set up distance.
- **Cross (Straight)**: Power punch, moderate speed, high damage. Best at long range.
- **Hook**: Short range, high damage, potential to cause stagger.
- **Uppercut**: Short range, high damage, potential to launch or stun.

#### Hit Zones
Define specific hit zones on the character model:
- **Head**: Critical hit multiplier, potential for knockout.
- **Body**: High stamina damage, slows down opponent.
- **Arms**: Blocked hits, reduced damage.

#### Defensive Actions
- **Block**: Reduces damage by X%. Drains stamina on impact.
- **Parry**: Timed block that deflects the attack and opens a counter window.
- **Dodge/Slip**: Completely avoids damage if timed correctly.

### Implementation Guidelines

#### Combo System
Implement a buffer window for inputs. If a player presses inputs rapidly:
1. Input A (Jab) -> Buffered
2. Animation A Starts -> Window opens for next input
3. Input B (Cross) -> Queued
4. Animation A Ends -> Animation B Starts immediately

```python
class ComboNode:
    animation_name: str
    damage_multiplier: float
    next_moves: List[ComboNode]

def check_combo(current_node, input):
    if input in current_node.next_moves:
        return current_node.next_moves[input]
    return reset_combo()
```

#### Hit Stop (Screen Shake/Freeze)
To add impact to hits:
- **Freeze Frame**: Pause the animator for a few frames (e.g., 0.05s-0.1s) on impact.
- **Camera Shake**: Apply a small random offset to the camera position.
- **Audio**: Play a heavy "thud" sound for clean hits.

---

## 3. Boxing Strategy

**Focus:** AI Behavior, Ring Generalship.

### Core Concepts

#### Ring Generalship
The AI should understand its position relative to the center of the ring.
- **Center Control**: Dominant position, forces opponent to circle.
- **Ropes/Corners**: Vulnerable position, limits movement options.
- **Cutting Off The Ring**: AI should move laterally to intercept a circling opponent, not just chase directly.

#### Stamina & Pacing
AI should not attack constantly.
- **Burst Phase**: High activity, throwing combos.
- **Recovery Phase**: Low activity, circling, guarding, regenerating stamina.
- **Desperation Phase**: Low stamina/health, prioritizes survival (clinching, running).

#### Archetypes
Define different AI personalities:
- **Out-Boxer**: Stays at long range, uses jabs, high mobility.
- **Slugger**: Low mobility, high power, willing to trade blows.
- **Swarmer**: Constant pressure, stays in close range, high stamina.
- **Counter-Puncher**: Waits for player attacks, high defensive stats, reacts to openings.

### Implementation Guidelines

#### AI State Machine Example
```python
state = check_conditions()

if state == "AGGRESSIVE":
    if distance > long_range:
        move_forward()
    elif distance < short_range:
        throw_combo()
elif state == "DEFENSIVE":
    block_or_dodge()
    circle_away()
```

---

## 4. Boxing Physics

**Focus:** Collisions, Ragdolls, Impact.

### Core Concepts

#### Collision Layers
Set up distinct layers to prevent unwanted collisions (e.g., fists colliding with own body).
- **Player/Enemy**: Character capsule colliders.
- **Hitbox**: Trigger colliders attached to hands/gloves.
- **Hurtbox**: Trigger colliders attached to body parts (Head, Torso, Arms).
- **Ring Limits**: Static colliders for ropes and posts.

#### Impact Forces
Apply forces realistically on impact.
- **Knockback**: Apply force vector in the direction of the punch + slightly up.
- **Ragdoll**: On knockout, disable animator and enable physics on all body parts. Apply an initial impulse to the head to simulate the knockout blow.

### Implementation Guidelines

#### Hit Detection Logic
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

#### Common Pitfalls
- **Tunneling**: Fast punches passing through colliders. Use `Continuous` collision detection mode for fast-moving objects (gloves).
