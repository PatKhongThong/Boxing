---
name: boxing_combat
description: Instructions for implementing combat mechanics including punches, combinations, blocking, and parrying.
---

# Boxing Combat Skill

This skill provides patterns and instructions for implementing the core combat mechanics of a boxing game. Use this for hit detection, damage calculation, and animation triggering.

## Core Concepts

### 1. Punch Types
Implement separate logic/data for each punch type:
- **Jab**: Fast, low damage, low stamina cost. Used to set up distance.
- **Cross (Straight)**: Power punch, moderate speed, high damage. Best at long range.
- **Hook**: Short range, high damage, potential to cause stagger.
- **Uppercut**: Short range, high damage, potential to launch or stun.

### 2. Hit Zones
Define specific hit zones on the character model:
- **Head**: Critical hit multiplier, potential for knockout.
- **Body**: High stamina damage, slows down opponent.
- **Arms**: Blocked hits, reduced damage.

### 3. Defensive Actions
- **Block**: Reduces damage by X%. Drains stamina on impact.
- **Parry**: Timed block that deflects the attack and opens a counter window.
- **Dodge/Slip**: Completely avoids damage if timed correctly.

## Implementation Guidelines

### Combo System
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

### Hit Stop (Screen Shake/Freeze)
To add impact to hits:
- **Freeze Frame**: Pause the animator for a few frames (e.g., 0.05s-0.1s) on impact.
- **Camera Shake**: Apply a small random offset to the camera position.
- **Audio**: Play a heavy "thud" sound for clean hits.

### Stamina Management
Combat actions consume stamina:
- Punches: varying cost based on power.
- Missed punches: Higher stamina penalty.
- Taking damage: Reduces max stamina temporarily.

## Common Pitfalls
- **Spamming**: Implement a cooldown or increasing stamina cost for repeated same-move spam.
- **Ghost Hits**: Ensure hitboxes perfectly align with the visual model (or slightly favor the attacker for better feel).
- **Unresponsive Defense**: Block inputs should override attack startup frames (feinting/canceling).
