# Computer Movement Database

This folder contains the AI fighting pattern database for the boxing game.

## File Structure

- `patterns.js` — 220+ AI behavior patterns organized by category

## Pattern Categories

| Category | ID Range | Count | Description |
|----------|----------|-------|-------------|
| JAB_PATTERNS | 1–25 | 25 | Jab-based openers and setups |
| CROSS_PATTERNS | 26–45 | 20 | Straight/cross attacks |
| HOOK_PATTERNS | 46–65 | 20 | Hook attacks and angles |
| UPPERCUT_PATTERNS | 66–85 | 20 | Uppercut launchers |
| COMBO_PATTERNS | 86–120 | 35 | Multi-punch combinations |
| DEFENSIVE_PATTERNS | 121–150 | 30 | Blocking, retreating, counters |
| FOOTWORK_PATTERNS | 151–175 | 25 | Movement and positioning |
| PRESSURE_PATTERNS | 176–200 | 25 | Corner pressure and trapping |
| ADVANCED_PATTERNS | 201–225 | 25 | Mix-ups, feints, jump attacks |

## Pattern Schema

Each pattern has:
- `id` — Unique numeric ID
- `name` — Descriptive name
- `category` — Category tag
- `difficulty` — 1 (easy) to 5 (master)
- `actions` — Array of sequential actions the AI executes
- `conditions` — When the AI should use this pattern (distance, stamina, hp)

## Action Types

| Action | Parameters |
|--------|------------|
| `move` | `dir`: 1 (toward) or -1 (away), `duration`: ms |
| `punch` | `type`: jab/cross/hook/uppercut |
| `block` | `duration`: ms |
| `wait` | `duration`: ms |
| `jump` | — |
